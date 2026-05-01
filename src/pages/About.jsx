import { Link } from "react-router-dom";

const stats = [
  { num: "30+",  label: "Gift Products",    color: "var(--rose)" },
  { num: "100+", label: "Happy Customers",  color: "var(--gold)" },
  { num: "4.8★", label: "Average Rating",   color: "#f59e0b"     },
  { num: "24/7", label: "WhatsApp Support", color: "#25d366"     },
];

const values = [
  { icon: "🎁", title: "Thoughtful Curation",   desc: "Every product is hand-selected for quality, uniqueness, and emotional value." },
  { icon: "💝", title: "Made with Love",         desc: "We pour heart into every order — from packaging to personal touches." },
  { icon: "🚚", title: "Reliable Delivery",      desc: "Fast, safe, and trackable delivery so your gift arrives on time." },
  { icon: "💬", title: "Personal Support",       desc: "Real human support via WhatsApp — no bots, just genuine care." },
  { icon: "✨", title: "Premium Quality",        desc: "We never compromise on quality. Only the best reaches your loved ones." },
  { icon: "🔒", title: "Secure Payments",        desc: "UPI-based payments that are fast, trusted, and completely secure." },
];

export default function About() {
  const PHONE = import.meta.env.VITE_PHONE_NO;

  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "3rem 1.5rem 5rem" }}>

      {/* ── HERO ── */}
      <div style={{
        textAlign: "center", maxWidth: 680, margin: "0 auto 5rem",
      }}>
        <div className="animate-float" style={{ fontSize: "4rem", marginBottom: "1.2rem" }}>🎁</div>
        <h1 className="font-display animate-fade-up" style={{
          fontSize: "clamp(2.2rem, 5vw, 3.2rem)",
          fontWeight: 900, lineHeight: 1.15,
        }}>
          About <span className="grad-text">CrownCraft Hamper</span>
        </h1>
        <p className="animate-fade-up-2" style={{
          marginTop: "1.2rem",
          color: "var(--muted)", fontSize: "1.05rem", lineHeight: 1.8,
        }}>
          At CrownCraft Hamper, we believe every gift tells a story. Our mission is to
          make your special moments truly unforgettable — with gifts that are
          beautiful, meaningful, and curated with love 💝
        </p>
      </div>

      {/* ── STATS ── */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
        gap: "1.2rem",
        marginBottom: "5rem",
      }}>
        {stats.map(s => (
          <div key={s.label} className="card" style={{ textAlign: "center", padding: "1.8rem 1rem" }}>
            <div className="font-display" style={{ fontSize: "2rem", fontWeight: 800, color: s.color }}>
              {s.num}
            </div>
            <div style={{ fontSize: ".85rem", color: "var(--muted)", marginTop: ".3rem", fontWeight: 500 }}>
              {s.label}
            </div>
          </div>
        ))}
      </div>

      {/* ── OUR STORY ── */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "3rem",
        alignItems: "center",
        marginBottom: "5rem",
      }}>
        <div>
          <p style={{
            color: "var(--rose)", fontWeight: 600, fontSize: ".85rem",
            letterSpacing: ".1em", textTransform: "uppercase", marginBottom: ".5rem",
          }}>
            Our Story
          </p>
          <h2 className="font-display" style={{ fontSize: "clamp(1.8rem, 3vw, 2.3rem)", fontWeight: 800, marginBottom: "1.2rem" }}>
            Started with a simple idea
          </h2>
          <p style={{ color: "var(--muted)", lineHeight: 1.9, marginBottom: "1rem" }}>
            CrownCraft Hamper was born from a passion for making people feel special.
            We noticed that finding the perfect gift was always stressful — so we
            decided to take that stress away.
          </p>
          <p style={{ color: "var(--muted)", lineHeight: 1.9, marginBottom: "1.5rem" }}>
            From heartfelt tokens to grand gestures, we handpick every product
            to ensure it carries quality, uniqueness, and genuine emotional value.
            Because the best gifts are the ones that say exactly what words cannot.
          </p>
          <Link to="/store" className="btn-primary" style={{ display: "inline-flex" }}>
            Explore Our Store →
          </Link>
        </div>

        {/* Visual card */}
        <div style={{
          background: "linear-gradient(135deg, #fdf0ea 0%, #fef3f8 100%)",
          borderRadius: 24, padding: "2.5rem 2rem",
          border: "1px solid var(--border)",
          boxShadow: "0 8px 32px rgba(201,98,95,.08)",
        }}>
          <h3 className="font-display" style={{ fontSize: "1.2rem", fontWeight: 700, color: "var(--dark)", marginBottom: "1.4rem" }}>
            Why customers love us ❤️
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {[
              "🎁 Unique & trendy gift collection",
              "💳 Easy QR-based UPI payment",
              "🚚 Fast & reliable delivery",
              "💬 Real-time WhatsApp support",
              "📦 Beautiful gift packaging",
              "✨ Occasion-specific curation",
            ].map(item => (
              <div key={item} style={{
                display: "flex", alignItems: "center", gap: ".8rem",
                background: "#fff", borderRadius: 12, padding: ".75rem 1rem",
                border: "1px solid var(--border)",
                fontSize: ".9rem", color: "var(--dark)", fontWeight: 500,
              }}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── VALUES ── */}
      <div style={{ marginBottom: "5rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <p style={{ color: "var(--rose)", fontWeight: 600, fontSize: ".85rem", letterSpacing: ".1em", textTransform: "uppercase" }}>
            What we stand for
          </p>
          <h2 className="font-display" style={{ fontSize: "clamp(1.8rem, 3vw, 2.2rem)", fontWeight: 800, marginTop: ".4rem" }}>
            Our Values 🌟
          </h2>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "1.5rem",
        }}>
          {values.map(v => (
            <div key={v.title} className="card" style={{ padding: "1.8rem" }}>
              <div style={{
                fontSize: "2rem", marginBottom: "1rem",
                display: "inline-flex", alignItems: "center", justifyContent: "center",
                width: 56, height: 56, borderRadius: "50%",
                background: "var(--warm)",
              }}>
                {v.icon}
              </div>
              <h3 className="font-display" style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: ".5rem" }}>
                {v.title}
              </h3>
              <p style={{ fontSize: ".88rem", color: "var(--muted)", lineHeight: 1.7 }}>
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ── CTA ── */}
      <div style={{
        background: "linear-gradient(135deg, var(--dark) 0%, #3d2a22 100%)",
        borderRadius: 24, padding: "3.5rem 2rem",
        textAlign: "center", position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", top: "-20%", left: "-5%",
          width: 260, height: 260,
          background: "radial-gradient(circle, rgba(212,168,67,.12) 0%, transparent 70%)",
          borderRadius: "50%",
        }} />
        <div style={{ position: "relative", zIndex: 1 }}>
          <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>✨</div>
          <h2 className="font-display" style={{
            color: "#fff", fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)",
            fontWeight: 800, marginBottom: "1rem",
          }}>
            Ready to find the perfect gift?
          </h2>
          <p style={{ color: "#9a8a7a", marginBottom: "2rem", maxWidth: 440, margin: "0 auto 2rem" }}>
            Browse our curated collection of thoughtful gifts for every special moment.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1rem" }}>
            <Link to="/store" className="btn-primary" style={{ fontSize: "1rem" }}>
              Explore Store →
            </Link>
            <a
              href={`https://wa.me/${PHONE}?text=${encodeURIComponent("Hi I want help choosing a gift" )}`}
              target="_blank" rel="noopener noreferrer"
              style={{
                display: "inline-flex", alignItems: "center", gap: ".5rem",
                padding: ".85rem 2rem", borderRadius: 99,
                background: "#25d366", color: "#fff",
                fontWeight: 700, fontSize: "1rem", textDecoration: "none",
                transition: "opacity .2s",
              }}
              onMouseEnter={e => e.currentTarget.style.opacity = ".85"}
              onMouseLeave={e => e.currentTarget.style.opacity = "1"}
            >
              💬 WhatsApp Us
            </a>

          </div>
        </div>
      </div>

    </div>
  );
}