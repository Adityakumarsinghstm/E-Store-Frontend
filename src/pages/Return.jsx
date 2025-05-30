import React from "react";
import Base from "../components/Base";
import { FaUndo, FaMoneyCheckAlt, FaClock } from "react-icons/fa";

function Return() {
  return (
    <Base
      title="Return & Refund Policy"
      description="Our return and refund process is designed to be transparent, quick, and customer-friendly."
      buttonEnabled={true}
      buttonLink="/"
      buttonType="primary"
      buttonText="Go to Home"
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "3rem auto",
          padding: "2rem",
          backgroundColor: "#fefefe",
          borderRadius: "16px",
          boxShadow: "0 8px 30px rgba(0,0,0,0.08)",
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          color: "#2c3e50",
          lineHeight: "1.7",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "2rem", fontWeight: "bold" }}>
          Hassle-Free Returns & Prompt Refunds
        </h2>

        <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
          <FaUndo size={32} color="#3498db" />
          <div>
            <h4 style={{ margin: "0 0 0.3rem" }}>Easy 7-Day Return Window</h4>
            <p style={{ margin: 0 }}>
              You can initiate a return within 7 days of receiving your order. Items must be unused,
              in original packaging with all tags intact.
            </p>
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
          <FaMoneyCheckAlt size={32} color="#27ae60" />
          <div>
            <h4 style={{ margin: "0 0 0.3rem" }}>Full Refund Guaranteed</h4>
            <p style={{ margin: 0 }}>
              Once your returned item is received and inspected, a full refund will be processed
              to your original payment method within 5–7 business days.
            </p>
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
          <FaClock size={32} color="#f39c12" />
          <div>
            <h4 style={{ margin: "0 0 0.3rem" }}>Quick Pickup & Processing</h4>
            <p style={{ margin: 0 }}>
              We offer free doorstep pickup in most locations. Once the item is picked up, we start
              processing your return immediately.
            </p>
          </div>
        </div>

        <hr style={{ margin: "2rem 0" }} />

        <h4 style={{ fontWeight: "600", marginBottom: "0.8rem" }}>Non-Returnable Items</h4>
        <ul style={{ paddingLeft: "1.2rem", marginBottom: "1.5rem" }}>
          <li>Perishable goods (e.g. food, flowers)</li>
          <li>Health & personal care items (e.g. razors, opened cosmetics)</li>
          <li>Gift cards and downloadable software products</li>
        </ul>

        <h4 style={{ fontWeight: "600", marginBottom: "0.8rem" }}>Return Conditions</h4>
        <ul style={{ paddingLeft: "1.2rem", marginBottom: "1.5rem" }}>
          <li>Product must be unused, unwashed, and undamaged.</li>
          <li>All original tags, labels, and accessories must be intact.</li>
          <li>Returns initiated after 7 days will not be accepted.</li>
        </ul>

        <h4 style={{ fontWeight: "600", marginBottom: "0.8rem" }}>Refund Exceptions</h4>
        <ul style={{ paddingLeft: "1.2rem", marginBottom: "1.5rem" }}>
          <li>If a returned item fails quality checks, it will be sent back to you.</li>
          <li>Partial refunds may be issued for items not in original condition.</li>
        </ul>

        <p style={{ fontStyle: "italic", marginTop: "2rem", textAlign: "center", color: "#888" }}>
          Need help with a return? Contact our support team at <strong>adityasingh62065@gmail.com</strong>
        </p>
      </div>
    </Base>
  );
}

export default Return;
