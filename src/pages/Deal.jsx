import React from "react";
import Base from "../components/Base";
import {
  FaMobileAlt,
  FaLaptop,
  FaTv,
  FaHeadphones,
  FaGamepad,
  FaCameraRetro,
} from "react-icons/fa";

function Deal() {
  const deals = [
    {
      title: "Mega Gadget Sale",
      description: "Up to 50% off on smartphones, smartwatches & more!",
      icon: <FaMobileAlt size={48} color="#FF6F61" />,
      bg: "#FFF4E6",
    },
    {
      title: "Laptop Clearance",
      description: "Best prices on top brands – limited stock available!",
      icon: <FaLaptop size={48} color="#4A90E2" />,
      bg: "#E6F7FF",
    },
    {
      title: "Home Essentials Offer",
      description: "Exclusive deals on Smart TVs, kitchen gadgets, and more.",
      icon: <FaTv size={48} color="#9B59B6" />,
      bg: "#F0E6FF",
    },
    {
      title: "Audio Equipment Sale",
      description: "High-quality headphones and speakers up to 40% off.",
      icon: <FaHeadphones size={48} color="#F39C12" />,
      bg: "#FFF8E1",
    },
    {
      title: "Gaming Gear Discount",
      description: "Gaming controllers, consoles & accessories at great prices.",
      icon: <FaGamepad size={48} color="#27AE60" />,
      bg: "#E8F8F5",
    },
    {
      title: "Photography Deals",
      description: "Top cameras and lenses for all photography lovers.",
      icon: <FaCameraRetro size={48} color="#8E44AD" />,
      bg: "#F5E6FF",
    },
  ];

  return (
    <Base
      title="Today's Top Deals"
      description="Grab the hottest deals before they're gone!"
      buttonEnabled={true}
      buttonLink="/store"
      buttonType="danger"
      buttonText="Visit Store"
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "3rem 3.5rem", // 3rem vertical gap, 3.5rem horizontal gap
          padding: "4rem 2rem", // more padding top and bottom
          maxWidth: "1200px",
          margin: "0 auto", // center horizontally
        }}
      >
        {deals.map((deal, index) => (
          <div
            key={index}
            style={{
              backgroundColor: deal.bg,
              borderRadius: "22px",
              padding: "2.5rem 3rem",
              boxShadow:
                "0 12px 24px rgba(0,0,0,0.12), 0 6px 12px rgba(0,0,0,0.08)",
              textAlign: "center",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              cursor: "pointer",
              border: "1px solid rgba(0,0,0,0.08)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.07)";
              e.currentTarget.style.boxShadow =
                "0 20px 36px rgba(0,0,0,0.18), 0 10px 20px rgba(0,0,0,0.12)";
              e.currentTarget.style.borderColor = "rgba(0,0,0,0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow =
                "0 12px 24px rgba(0,0,0,0.12), 0 6px 12px rgba(0,0,0,0.08)";
              e.currentTarget.style.borderColor = "rgba(0,0,0,0.08)";
            }}
          >
            <div style={{ marginBottom: "1.2rem" }}>{deal.icon}</div>
            <h3
              style={{
                fontWeight: "700",
                marginBottom: "0.75rem",
                fontSize: "1.4rem",
                color: "#222",
              }}
            >
              {deal.title}
            </h3>
            <p style={{ color: "#444", lineHeight: "1.7", fontSize: "1rem" }}>
              {deal.description}
            </p>
          </div>
        ))}
      </div>
    </Base>
  );
}

export default Deal;
