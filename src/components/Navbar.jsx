import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import useCart from "../context/useCart";

export default function Navbar() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const { totalItems } = useCart();

  const links = [
    { to: "/",       label: "Home"  },
    { to: "/store",  label: "Store" },
    { to: "/about",  label: "About" },
  ];
  const PHONE = import.meta.env.VITE_PHONE_NO;
  return (
    <nav style={{
      background: "rgba(253,248,242,.88)",
      backdropFilter: "blur(18px)",
      borderBottom: "1px solid var(--border)",
      position: "sticky", top: 0, zIndex: 100,
    }}>
      <div style={{
        maxWidth: 1200, margin: "0 auto",
        padding: "0 1.5rem",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        height: 68,
      }}>

        {/* Logo */}
        <Link to="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: ".5rem" }}>
          <span style={{ fontSize: 26 }}>🎁</span>
          <span className="font-display grad-text" style={{ fontSize: "1.4rem", fontWeight: 700 }}>
            CrownCraft Hamper
          </span>
        </Link>

        {/* Desktop links */}
        <div className="desktop-nav" style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
          {links.map(l => (
            <Link key={l.to} to={l.to} style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 500, fontSize: ".95rem",
              color: pathname === l.to ? "var(--rose)" : "var(--muted)",
              textDecoration: "none",
              paddingBottom: 2,
              borderBottom: pathname === l.to ? "2px solid var(--rose)" : "2px solid transparent",
              transition: "color .2s, border-color .2s",
            }}
              onMouseEnter={e => { e.target.style.color = "var(--rose)"; }}
              onMouseLeave={e => { if (pathname !== l.to) e.target.style.color = "var(--muted)"; }}
            >
              {l.label}
            </Link>
          ))}

          {/* Cart icon */}
          <Link to="/cart" style={{
            position: "relative", textDecoration: "none",
            display: "flex", alignItems: "center", gap: ".4rem",
            background: pathname === "/cart" ? "var(--warm)" : "transparent",
            border: "1.5px solid var(--border)",
            borderRadius: 99, padding: ".45rem .9rem",
            color: "var(--dark)", fontWeight: 600, fontSize: ".9rem",
            transition: "all .2s",
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--rose)"; e.currentTarget.style.color = "var(--rose)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--dark)"; }}
          >
            🛒 Cart
            {totalItems > 0 && (
              <span style={{
                background: "linear-gradient(135deg,var(--rose),var(--gold))",
                color: "#fff", borderRadius: "50%",
                width: 20, height: 20,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: ".68rem", fontWeight: 800,
                marginLeft: ".1rem",
              }}>
                {totalItems > 9 ? "9+" : totalItems}
              </span>
            )}
          </Link>

          <a
            href={`https://wa.me/${PHONE}?text=${encodeURIComponent("Hi I want to know about your products")}`}
            target="_blank" rel="noopener noreferrer"
            className="btn-primary"
            style={{ padding: ".52rem 1.3rem", fontSize: ".88rem" }}
          >
            💬 WhatsApp
          </a>
        </div>

        {/* Mobile right: cart + hamburger */}
        <div className="mobile-right" style={{ display: "none", alignItems: "center", gap: ".8rem" }}>
          <Link to="/cart" style={{
            position: "relative", textDecoration: "none",
            fontSize: "1.4rem", lineHeight: 1,
          }}>
            🛒
            {totalItems > 0 && (
              <span style={{
                position: "absolute", top: -6, right: -8,
                background: "var(--rose)", color: "#fff",
                borderRadius: "50%", width: 18, height: 18,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: ".6rem", fontWeight: 800,
              }}>
                {totalItems > 9 ? "9+" : totalItems}
              </span>
            )}
          </Link>

          <button
            onClick={() => setOpen(o => !o)}
            style={{ background: "none", border: "none", cursor: "pointer", padding: ".4rem" }}
            aria-label="Menu"
          >
            <div style={{ width: 24, height: 2, background: "var(--dark)", margin: "5px 0", transition: ".3s",
              transform: open ? "rotate(45deg) translate(5px,5px)" : "none" }} />
            <div style={{ width: 24, height: 2, background: "var(--dark)", margin: "5px 0", transition: ".3s",
              opacity: open ? 0 : 1 }} />
            <div style={{ width: 24, height: 2, background: "var(--dark)", margin: "5px 0", transition: ".3s",
              transform: open ? "rotate(-45deg) translate(5px,-5px)" : "none" }} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{
          background: "var(--card-bg)", borderTop: "1px solid var(--border)",
          padding: "1rem 1.5rem 1.5rem",
          display: "flex", flexDirection: "column", gap: "1rem",
        }}>
          {links.map(l => (
            <Link key={l.to} to={l.to}
              onClick={() => setOpen(false)}
              style={{
                fontWeight: 500, fontSize: "1.05rem",
                color: pathname === l.to ? "var(--rose)" : "var(--dark)",
                textDecoration: "none",
              }}>
              {l.label}
            </Link>
          ))}
          <a
            href="https://wa.me/91XXXXXXXXXX?text=Hi%20I%20want%20to%20know%20about%20your%20products"
            target="_blank" rel="noopener noreferrer"
            className="btn-primary"
            style={{ textAlign: "center", marginTop: ".5rem" }}
          >
            💬 WhatsApp Us
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav  { display: none !important; }
          .mobile-right { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}