import React from "react";

const AboutPage = () => {
  return (
    <div style={{ fontFamily: "'Lato', sans-serif", backgroundColor: "#f8f8f6" }}>

      {/* Hero Section */}
      <div style={{
        height: "70vh",
        backgroundImage: `url("https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1600&auto=format&fit=crop&q=80")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}>
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 100%)"
        }} />
        <div style={{ position: "relative", zIndex: 1, textAlign: "center", color: "white", padding: "0 20px" }}>
          <p style={{ letterSpacing: "4px", fontSize: "12px", textTransform: "uppercase", color: "#e8c97e", marginBottom: "16px" }}>
            Our Story
          </p>
          <h1 style={{ fontSize: "clamp(36px, 5vw, 60px)", fontWeight: "700", marginBottom: "16px", lineHeight: 1.2 }}>
            About Furnify
          </h1>
          <p style={{ fontSize: "18px", color: "rgba(255,255,255,0.85)", maxWidth: "500px", margin: "0 auto", lineHeight: 1.7 }}>
            Making beautiful homes accessible for everyone
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "80px 40px", textAlign: "center" }}>
        <p style={{ color: "#e07b2a", letterSpacing: "3px", fontSize: "12px", textTransform: "uppercase", marginBottom: "16px" }}>
          Who We Are
        </p>
        <h2 style={{ fontSize: "36px", fontWeight: "700", color: "#1a1a1a", marginBottom: "24px", lineHeight: 1.3 }}>
          New & Thrift Furniture for Every Home
        </h2>
        <p style={{ fontSize: "17px", color: "#555", lineHeight: 1.9, maxWidth: "700px", margin: "0 auto" }}>
          Furnify is an online furniture store dedicated to helping you find the perfect pieces
          for your home — whether you're looking for brand new arrivals or beautifully curated
          thrift finds. We believe great furniture shouldn't break the bank.
        </p>
      </div>

      {/* 3 Value Cards */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
        gap: "24px",
        maxWidth: "1000px",
        margin: "0 auto",
        padding: "0 40px 80px",
      }}>
        {[
          { icon: "🛋️", title: "Quality First", text: "Every piece we sell is carefully selected for quality, durability and style." },
          { icon: "♻️", title: "Sustainable Living", text: "Our thrift collection gives furniture a second life, reducing waste one home at a time." },
          { icon: "💰", title: "Best Prices", text: "We offer competitive prices so you can furnish your dream home without compromise." },
        ].map((card, i) => (
          <div key={i} style={{
            background: "white",
            borderRadius: "16px",
            padding: "36px 28px",
            textAlign: "center",
            boxShadow: "0 4px 20px rgba(0,0,0,0.07)",
            transition: "transform 0.2s ease",
          }}
            onMouseEnter={e => e.currentTarget.style.transform = "translateY(-6px)"}
            onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
          >
            <div style={{ fontSize: "40px", marginBottom: "16px" }}>{card.icon}</div>
            <h3 style={{ fontSize: "18px", fontWeight: "700", color: "#1a1a1a", marginBottom: "12px" }}>{card.title}</h3>
            <p style={{ fontSize: "14px", color: "#666", lineHeight: 1.7 }}>{card.text}</p>
          </div>
        ))}
      </div>

      {/* Bottom Banner */}
      <div style={{
        background: "#1a1a1a",
        color: "white",
        textAlign: "center",
        padding: "60px 40px",
      }}>
        <h2 style={{ fontSize: "28px", fontWeight: "700", marginBottom: "12px" }}>
          Ready to find your perfect furniture?
        </h2>
        <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "16px", marginBottom: "28px" }}>
          Browse our New and Thrift collections today
        </p>
        <button style={{
          background: "#e8c97e",
          color: "#1a1a1a",
          border: "none",
          padding: "14px 36px",
          borderRadius: "6px",
          fontSize: "13px",
          fontWeight: "700",
          letterSpacing: "1.5px",
          textTransform: "uppercase",
          cursor: "pointer",
        }}>
          Shop Now
        </button>
      </div>

    </div>
  );
};

export default AboutPage;