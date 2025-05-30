import React from "react";
import Base from "../components/Base";

function TermCon() {
  return (
    <Base
      title="Terms and Conditions"
      description="Please read our terms and conditions carefully before using our services."
      buttonEnabled={true}
      buttonLink="/"
      buttonType="primary"
      buttonText="Home"
    >
      <div
        style={{
          maxWidth: "850px",
          margin: "4rem auto",
          padding: "3rem 2.5rem",
          backgroundColor: "#fff",
          borderRadius: "14px",
          boxShadow: "0 15px 40px rgba(0, 0, 0, 0.1)",
          fontFamily:
            "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          color: "#2c3e50",
          lineHeight: "1.75",
          position: "relative",
          borderLeft: "6px solid #3498db",
          transition: "all 0.3s ease",
        }}
      >
        <h2
          style={{
            fontWeight: "800",
            fontSize: "2.3rem",
            marginBottom: "1.6rem",
            letterSpacing: "1.5px",
            color: "#34495e",
            textTransform: "uppercase",
          }}
        >
          Terms and Conditions
        </h2>

        <p style={{ fontSize: "1.1rem", marginBottom: "2rem", color: "#555" }}>
          Welcome to our shopping platform. By accessing or using our website, you agree to comply with and be bound by the following terms and conditions.
        </p>

        {[
          {
            title: "Use of Site",
            content:
              "You agree to use the site only for lawful purposes and in a way that does not infringe the rights of others or restrict their use and enjoyment of the site.",
          },
          {
            title: "Products and Pricing",
            content:
              "We strive to ensure that all product information and prices are accurate. However, we reserve the right to correct any errors, inaccuracies, or omissions.",
          },
          {
            title: "Orders and Payments",
            content:
              "All orders are subject to acceptance and availability. Payment must be made in full before order processing.",
          },
          {
            title: "Shipping and Delivery",
            content:
              "Shipping times may vary depending on the location and availability of products. We are not responsible for delays caused by courier services.",
          },
          {
            title: "Returns and Refunds",
            content:
              "Please review our Return Policy for information on returns and refunds. Products must be returned in original condition and packaging.",
          },
          {
            title: "Privacy",
            content:
              "We respect your privacy and handle your personal information in accordance with our Privacy Policy.",
          },
          {
            title: "Limitation of Liability",
            content:
              "We shall not be liable for any indirect, incidental, or consequential damages arising from the use of our site or products.",
          },
          {
            title: "Changes to Terms",
            content:
              "We reserve the right to modify these terms at any time. Your continued use of the site constitutes acceptance of any changes.",
          },
        ].map(({ title, content }, idx) => (
          <section
            key={idx}
            style={{
              marginBottom: "1.8rem",
              paddingLeft: "1.2rem",
              borderLeft: "3px solid #3498db",
            }}
          >
            <h3
              style={{
                fontWeight: "700",
                fontSize: "1.3rem",
                color: "#2980b9",
                marginBottom: "0.4rem",
                textTransform: "capitalize",
              }}
            >
              {`${idx + 1}. ${title}`}
            </h3>
            <p style={{ fontSize: "1.05rem", color: "#555" }}>{content}</p>
          </section>
        ))}

        <p
          style={{
            marginTop: "3rem",
            fontStyle: "italic",
            fontSize: "0.95rem",
            color: "#95a5a6",
            textAlign: "right",
            letterSpacing: "0.05em",
          }}
        >
          Last updated: May 2025
        </p>
      </div>
    </Base>
  );
}

export default TermCon;
