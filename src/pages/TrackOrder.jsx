import React from "react";
import Base from "../components/Base";
import { FaBoxOpen, FaTruck, FaCheckCircle, FaClipboardList } from "react-icons/fa";

function OrderTrack() {
  const orderStatus = [
    {
      title: "Order Placed",
      description: "We have received your order.",
      icon: <FaClipboardList size={28} color="#2c3e50" />,
      completed: true,
    },
    {
      title: "Packed",
      description: "Your items have been packed and are ready to ship.",
      icon: <FaBoxOpen size={28} color="#8e44ad" />,
      completed: true,
    },
    {
      title: "Shipped",
      description: "Your order is on the way.",
      icon: <FaTruck size={28} color="#2980b9" />,
      completed: true,
    },
    {
      title: "Delivered",
      description: "Your order has been delivered.",
      icon: <FaCheckCircle size={28} color="#27ae60" />,
      completed: false,
    },
  ];

  return (
    <Base
      title="Track Your Order"
      description="Stay updated with your order status in real-time."
      buttonEnabled={true}
      buttonLink="/"
      buttonType="primary"
      buttonText="Home"
    >
      <div
        style={{
          maxWidth: "800px",
          margin: "3rem auto",
          padding: "2rem",
          backgroundColor: "#fefefe",
          borderRadius: "16px",
          boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          color: "#2c3e50",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "2.5rem" }}>Order #123456789</h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          {orderStatus.map((step, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1.5rem",
                backgroundColor: step.completed ? "#e8f8f5" : "#f4f6f6",
                padding: "1.2rem",
                borderRadius: "12px",
                borderLeft: step.completed ? "5px solid #27ae60" : "5px solid #bdc3c7",
                boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
              }}
            >
              <div>{step.icon}</div>
              <div>
                <h4 style={{ margin: "0 0 0.3rem" }}>{step.title}</h4>
                <p style={{ margin: 0, color: "#555" }}>{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "3rem", fontSize: "0.95rem", color: "#999" }}>
          For help with your order, contact us at <strong>adityasingh62065@gmail.com</strong>
        </div>
      </div>
    </Base>
  );
}

export default OrderTrack;
