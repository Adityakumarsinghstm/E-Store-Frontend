import React, { useState, useEffect, useRef } from 'react';
import DOMPurify from 'dompurify';

const styles = {
  container: {
    maxWidth: '600px',
    margin: '40px auto',
    padding: '20px',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'column',
    height: '80vh',
  },
  header: {
    marginBottom: '15px',
    fontSize: '24px',
    fontWeight: '700',
    color: '#333',
    textAlign: 'center',
  },
  messagesContainer: {
    flex: 1,
    overflowY: 'auto',
    padding: '10px',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: '#ddd',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
    marginBottom: '15px',
  },
  messageUser: {
    backgroundColor: '#d1e7ff',
    color: '#003366',
    padding: '10px',
    borderRadius: '15px 15px 0 15px',
    maxWidth: '75%',
    marginBottom: '10px',
    alignSelf: 'flex-end',
  },
  messageBot: {
    backgroundColor: '#e2f0d9',
    color: '#2a5d0b',
    padding: '10px',
    borderRadius: '15px 15px 15px 0',
    maxWidth: '75%',
    marginBottom: '10px',
    alignSelf: 'flex-start',
  },
  inputArea: {
    display: 'flex',
    gap: '10px',
  },
  input: {
    flex: 1,
    padding: '12px 15px',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: '#ccc',
    borderRadius: '25px',
    fontSize: '16px',
    outline: 'none',
    transition: 'border-color 0.3s',
  },
  button: {
    backgroundColor: '#007bff',
    border: 'none',
    color: 'white',
    fontWeight: '600',
    padding: '12px 25px',
    borderRadius: '25px',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'background-color 0.3s',
  },
};

const formatBotResponse = (text) => {
  // Convert **bold** text to <strong>bold</strong>
  let formattedText = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  
  // Convert lines starting with * to bullet points
  const lines = formattedText.split('\n');
  let inList = false;
  let result = '';

  lines.forEach(line => {
    if (line.trim().startsWith('* ')) {
      if (!inList) {
        result += '<ul>';
        inList = true;
      }
      result += `<li>${line.replace('* ', '').trim()}</li>`;
    } else {
      if (inList) {
        result += '</ul>';
        inList = false;
      }
      result += line + '\n';
    }
  });

  if (inList) {
    result += '</ul>';
  }

  return result;
};

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    if (!userInput.trim()) return;

    const newMessages = [...messages, { 
      sender: 'user', 
      text: userInput,
      isHtml: false 
    }];
    setMessages(newMessages);
    setUserInput('');

    try {
      const response = await fetch('https://chat-bot-wheat-beta.vercel.app/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          prompt: userInput 
        }),
      });

      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      
      const data = await response.json();
      let botResponse = data.response || data.message || 'Sorry, I didn\'t understand that.';
      
      // Format the response before displaying
      botResponse = formatBotResponse(botResponse);
      
      setMessages(prev => [...prev, { 
        sender: 'Assistant', 
        text: botResponse,
        isHtml: true 
      }]);
    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => [
        ...prev,
        { 
          sender: 'Assistant', 
          text: 'Sorry, there was an error processing your request.',
          isHtml: false
        },
      ]);
    }
  };

  const Message = ({ sender, text, isHtml }) => {
    const messageStyle = sender === 'user' ? styles.messageUser : styles.messageBot;
    
    return (
      <div style={{ ...messageStyle, textAlign: 'left' }}>
        <div><strong>{sender}:</strong></div>
        <div 
          style={{ marginTop: '5px' }}
          dangerouslySetInnerHTML={{ __html: isHtml ? DOMPurify.sanitize(text) : text }}
        />
      </div>
    );
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>🧠 Product ChatBot</h2>
      <div style={styles.messagesContainer}>
        {messages.length === 0 && (
          <p style={{ color: '#666', textAlign: 'center' }}>
            Ask me anything about our products!
          </p>
        )}
        {messages.map((msg, idx) => (
          <Message
            key={idx}
            sender={msg.sender}
            text={msg.text}
            isHtml={msg.isHtml}
          />
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div style={styles.inputArea}>
        <input
          style={styles.input}
          type="text"
          placeholder="Ask something about products..."
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
        />
        <button
          style={styles.button}
          onClick={sendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBot;