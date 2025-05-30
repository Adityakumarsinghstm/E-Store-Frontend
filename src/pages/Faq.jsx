import React, { useState } from "react";
import Base from "../components/Base";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept credit/debit cards, net banking, UPI, and major wallets. All transactions are encrypted and secure.",
  },
  {
    question: "How long does delivery take?",
    answer:
      "Most products are delivered within 3–7 working days. Remote areas may take slightly longer.",
  },
  {
    question: "Can I return or exchange a product?",
    answer:
      "Yes, returns are accepted within 15 days. Ensure the item is unused and in original packaging.",
  },
  {
    question: "Do you offer international shipping?",
    answer:
      "Currently, we ship only within India. International shipping is under planning.",
  },
  {
    question: "How can I track my order?",
    answer:
      "After shipping, we email and text you a tracking link to monitor the shipment in real-time.",
  },
  {
    question: "Are there any delivery charges?",
    answer:
      "Delivery is free for orders above ₹499. For smaller orders, a nominal fee of ₹49 applies.",
  },
  {
    question: "Is there a warranty on products?",
    answer:
      "Yes, most products come with a standard manufacturer warranty of 6–12 months.",
  },
  {
    question: "Do you have Cash on Delivery (COD)?",
    answer:
      "Yes, COD is available for orders under ₹2000. A small COD fee may apply.",
  },
  {
    question: "How do I cancel an order?",
    answer:
      "Log into your account, go to 'My Orders', and click on 'Cancel' for the relevant product.",
  },
  {
    question: "Can I update my shipping address after placing an order?",
    answer:
      "Yes, but only before the item is shipped. Contact our support immediately for address changes.",
  },
];

function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Base
      title="Frequently Asked Questions"
      description="Find clear answers to your common queries before you shop."
      buttonEnabled={true}
      buttonLink="/"
      buttonType="primary"
      buttonText="Home"
    >
      <div
        style={{
          maxWidth: "850px",
          margin: "3rem auto",
          padding: "2rem",
          backgroundColor: "#fff",
          borderRadius: "14px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
          fontFamily:
            "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          color: "#2c3e50",
        }}
      >
        {faqs.map(({ question, answer }, idx) => (
          <div
            key={idx}
            style={{
              borderBottom: "1px solid #eaeaea",
              padding: "1rem 0",
              cursor: "pointer",
            }}
            onClick={() => toggleFaq(idx)}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                fontWeight: "600",
                fontSize: "1.1rem",
                color: "#2c3e50",
              }}
            >
              <span>{question}</span>
              {openIndex === idx ? (
                <FaChevronUp color="#3498db" />
              ) : (
                <FaChevronDown color="#3498db" />
              )}
            </div>
            <div
              style={{
                maxHeight: openIndex === idx ? "300px" : "0",
                overflow: "hidden",
                transition: "max-height 0.4s ease",
                marginTop: openIndex === idx ? "0.7rem" : "0",
                color: "#555",
                fontSize: "1rem",
                lineHeight: "1.6",
              }}
            >
              <p>{answer}</p>
            </div>
          </div>
        ))}
      </div>
    </Base>
  );
}

export default Faq;
