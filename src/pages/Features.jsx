import React from "react";

const features = [
  {
    title: "Wide Product Range",
    description: "Explore thousands of products across electronics, gadgets, accessories, and more.",
    icon: "🛍️",
  },
  {
    title: "Secure Payment",
    description: "Multiple secure payment options including UPI, Credit/Debit Cards, and Net Banking.",
    icon: "🔒",
  },
  {
    title: "Fast Delivery",
    description: "Get your orders delivered quickly with our optimized logistics network.",
    icon: "🚚",
  },
  {
    title: "Easy Returns",
    description: "No-hassle 7-day return policy for damaged or unsatisfactory products.",
    icon: "🔄",
  },
  {
    title: "24/7 Support",
    description: "Dedicated customer service available anytime to assist you.",
    icon: "📞",
  },
  {
    title: "Exclusive Offers",
    description: "Get access to member-only discounts, lightning deals and festive offers.",
    icon: "💸",
  },
  {
    title: "Product Ratings & Reviews",
    description: "Read honest reviews and ratings before making a purchase decision.",
    icon: "⭐",
  },
  {
    title: "Order Tracking",
    description: "Track your orders in real-time and stay updated about delivery.",
    icon: "📦",
  },
];

const Feature = () => {
  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "3rem 1rem",
        backgroundColor: "#f9f9f9",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "2.5rem",
          fontWeight: "700",
          marginBottom: "2rem",
          color: "#333",
        }}
      >
        Why Shop With Us?
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "2rem",
        }}
      >
        {features.map((feature, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#fff",
              borderRadius: "12px",
              padding: "2rem",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
              textAlign: "center",
              transition: "transform 0.3s",
              cursor: "default",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-5px)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
          >
            <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
              {feature.icon}
            </div>
            <h3 style={{ fontSize: "1.25rem", fontWeight: "600", marginBottom: "0.75rem", color: "#222" }}>
              {feature.title}
            </h3>
            <p style={{ fontSize: "1rem", color: "#555", lineHeight: "1.6" }}>
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feature;
