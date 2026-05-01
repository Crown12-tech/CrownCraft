import { Link } from "react-router-dom";

export default function Footer() {
  const PHONE = import.meta.env.VITE_PHONE_NO;
  const PH = import.meta.env.VITE_PHONE;
  return (
    <footer style={{
      background: "var(--dark)",
      color: "#c8b8a8",
      marginTop: "5rem",
    }}>
      <div style={{
        maxWidth: 1200, margin: "0 auto",
        padding: "3.5rem 2rem 2rem",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
        gap: "2.5rem",
      }}>

        {/* Brand */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: ".5rem", marginBottom: "1rem" }}>
            <span style={{ fontSize: 26 }}>🎁</span>
            <span className="font-display grad-text" style={{ fontSize: "1.4rem", fontWeight: 700 }}>
              CrownCraft Hamper
            </span>
          </div>
          <p style={{ fontSize: ".88rem", lineHeight: 1.7, color: "#9a8a7a", maxWidth: 200 }}>
            Making every moment special with unique and thoughtful gifts. Curated with love 💝
          </p>
          <a
            href={`https://wa.me/${PHONE}?text=${encodeURIComponent("Hi I want help choosing a gift")}`}
            target="_blank" rel="noopener noreferrer"
            style={{
              display: "inline-flex", alignItems: "center", gap: ".4rem",
              marginTop: "1rem", padding: ".5rem 1.2rem",
              background: "#25d366", color: "#fff", borderRadius: 99,
              fontSize: ".88rem", fontWeight: 600, textDecoration: "none",
              transition: "opacity .2s",
            }}
            onMouseEnter={e => e.currentTarget.style.opacity = ".85"}
            onMouseLeave={e => e.currentTarget.style.opacity = "1"}
          >
            📱 WhatsApp Us
          </a>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-display" style={{ color: "#fff", fontSize: "1rem", marginBottom: "1rem" }}>
            Quick Links
          </h4>
          <div style={{ display: "flex", flexDirection: "column", gap: ".6rem" }}>
            {[["Home","/"],["Store","/store"],["About","/about"]].map(([label, to]) => (
              <Link key={to} to={to} style={{
                color: "#9a8a7a", textDecoration: "none", fontSize: ".9rem",
                transition: "color .2s",
              }}
                onMouseEnter={e => e.target.style.color = "var(--gold)"}
                onMouseLeave={e => e.target.style.color = "#9a8a7a"}
              >
                → {label}
              </Link>
            ))}
          </div>
        </div>

        {/* Customer Help */}
        <div>
          <h4 className="font-display" style={{ color: "#fff", fontSize: "1rem", marginBottom: "1rem" }}>
            Customer Help
          </h4>
          <div style={{ display: "flex", flexDirection: "column", gap: ".6rem", fontSize: ".88rem", color: "#9a8a7a" }}>
            <span>📦 Shipping Info</span>
            <span>🔄 Returns & Refunds</span>
            <span>💳 Payment Methods</span>
            <span>❓ FAQs</span>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-display" style={{ color: "#fff", fontSize: "1rem", marginBottom: "1rem" }}>
            Contact Us
          </h4>
          <div style={{ display: "flex", flexDirection: "column", gap: ".6rem", fontSize: ".88rem", color: "#9a8a7a" }}>
            <span>📍 India</span>
            <span>📞 {PH}</span>
            <span>📧 crowncrafthamper@gmail.com</span>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{
        borderTop: "1px solid #2e2420",
        textAlign: "center", padding: "1.2rem",
        fontSize: ".82rem", color: "#5a4a3a",
      }}>
        © 2026 CrownCraft Hamper. All rights reserved.
      </div>
    </footer>
  );
}