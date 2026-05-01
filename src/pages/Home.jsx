import { Link } from "react-router-dom";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

const features = [
  { icon: "🎁", title: "Unique Gifts", desc: "Handpicked items curated for every occasion and personality" },
  { icon: "💳", title: "Easy Payment", desc: "Seamless QR-based UPI payments — fast, safe, simple" },
  { icon: "🚚", title: "Fast Delivery", desc: "Quick and reliable delivery right to your doorstep" },
  { icon: "💬", title: "WhatsApp Support", desc: "Instant assistance via WhatsApp, anytime you need us" },
];

export default function Home() {
  const featured = products.slice(0, 4);
  const PHONE = import.meta.env.VITE_PHONE_NO;
  
  return (
    <div>
      {/* ── HERO ── */}
      <section style={{
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "3rem 1.2rem",
        position: "relative",
        overflow: "hidden",
        textAlign: "center",
      }}>
        {/* Background */}
        <div style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background: "radial-gradient(ellipse 70% 60% at 50% 40%, rgba(212,168,67,.08) 0%, transparent 70%)",
        }} />

        <div style={{ maxWidth: 640, position: "relative", zIndex: 1 }}>
          <div className="animate-float" style={{
            fontSize: "clamp(3rem, 10vw, 4.5rem)",
            marginBottom: "1rem"
          }}>
            🎁
          </div>

          <h1 className="font-display animate-fade-up" style={{
            fontSize: "clamp(2rem, 6vw, 3.5rem)",
            fontWeight: 900,
            lineHeight: 1.2,
            color: "var(--dark)",
            marginBottom: "1rem",
          }}>
            Gifts that make
            <br />
            <span className="grad-text">moments magical</span>
          </h1>

          <p className="animate-fade-up-2" style={{
            fontSize: "clamp(.95rem, 2vw, 1.1rem)",
            color: "var(--muted)",
            lineHeight: 1.6,
            marginBottom: "2rem",
          }}>
            Discover thoughtfully curated gifts for every occasion — birthdays,
            anniversaries, festivals, and all the little moments worth celebrating 💝
          </p>

          {/* Buttons */}
          <div className="animate-fade-up-3" style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: ".8rem",
          }}>
            <Link to="/store" className="btn-primary">
              Explore Store →
            </Link>

            <a
             href={`https://wa.me/${PHONE}?text=${encodeURIComponent( "Hi I want help choosing a gift" )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              💬 WhatsApp
            </a>
          </div>

          {/* Stats */}
          <div style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "1.2rem",
            marginTop: "2.5rem",
          }}>
            {[["30+","Products"],["100+","Happy"],["4.8★","Rating"],["24/7","Support"]]
              .map(([num, label]) => (
                <div key={label} style={{ textAlign: "center" }}>
                  <div className="font-display" style={{
                    fontSize: "1.2rem",
                    fontWeight: 700,
                    color: "var(--rose)"
                  }}>
                    {num}
                  </div>
                  <div style={{
                    fontSize: ".75rem",
                    color: "var(--muted)"
                  }}>
                    {label}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section style={{
        padding: "3rem 1.2rem",
        maxWidth: 1200,
        margin: "0 auto"
      }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: "1rem",
        }}>
          {features.map((f) => (
            <div key={f.title} className="card" style={{
              textAlign: "center",
              padding: "1.5rem"
            }}>
              <div style={{
                fontSize: "2rem",
                marginBottom: ".6rem",
              }}>
                {f.icon}
              </div>

              <h3 className="font-display" style={{
                fontSize: "1rem",
                fontWeight: 600,
                marginBottom: ".3rem",
              }}>
                {f.title}
              </h3>

              <p style={{
                fontSize: ".8rem",
                color: "var(--muted)",
                lineHeight: 1.5,
              }}>
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── PRODUCTS ── */}
      <section style={{
        padding: "2rem 1.2rem 4rem",
        maxWidth: 1200,
        margin: "0 auto"
      }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <p style={{
            color: "var(--rose)",
            fontWeight: 600,
            fontSize: ".8rem"
          }}>
            Handpicked for you
          </p>

          <h2 className="font-display" style={{
            fontSize: "clamp(1.6rem, 4vw, 2.2rem)",
            fontWeight: 800,
          }}>
            Featured Gifts ✨
          </h2>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
          gap: "1rem",
        }}>
          {featured.map(p => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "2rem" }}>
          <Link to="/store" className="btn-primary">
            View All →
          </Link>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{
        margin: "0 1rem 4rem",
        borderRadius: 20,
        background: "linear-gradient(135deg, var(--dark), #3d2a22)",
        padding: "2.2rem 1.2rem",
        textAlign: "center",
      }}>
        <h2 className="font-display" style={{
          color: "#fff",
          fontSize: "clamp(1.4rem, 4vw, 2rem)",
          fontWeight: 800,
          marginBottom: ".6rem",
        }}>
          Need help choosing? 🤔
        </h2>

        <p style={{
          color: "#9a8a7a",
          fontSize: ".9rem",
          marginBottom: "1.2rem",
        }}>
          Chat with us and we’ll help you find the perfect gift.
        </p>

        <a
          href={`https://wa.me/${PHONE}?text=${encodeURIComponent( "Hi I want help choosing a gift" )}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            padding: ".7rem 1.5rem",
            borderRadius: 99,
            background: "#25d366",
            color: "#fff",
            fontWeight: 600,
            textDecoration: "none",
          }}
        >
          💬 Chat Now
        </a>
      </section>
    </div>
  );
}