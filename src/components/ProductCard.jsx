import { useNavigate } from "react-router-dom";
import { useState } from "react";
import useCart from "../context/useCart";

export default function ProductCard({ product }) {
  const navigate = useNavigate();
  const { addToCart, cart } = useCart();
  const [hovered, setHovered] = useState(false);
  const [added, setAdded] = useState(false);

  const inCart = cart.some(i => i.id === product.id);

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div
      onClick={() => navigate(`/product/${product.id}`)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "var(--card-bg)",
        border: "1px solid var(--border)",
        borderRadius: 20,
        overflow: "hidden",
        cursor: "pointer",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        boxShadow: hovered ? "0 20px 48px rgba(26,20,16,.14)" : "0 2px 16px rgba(26,20,16,.06)",
        transition: "transform .3s ease, box-shadow .3s ease",
        display: "flex", flexDirection: "column",
      }}
    >
      {/* Image */}
      <div style={{ overflow: "hidden", height: 210, position: "relative" }}>
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          style={{
            width: "100%", height: "100%", objectFit: "cover",
            transform: hovered ? "scale(1.08)" : "scale(1)",
            transition: "transform .5s ease",
          }}
        />
        <span style={{
          position: "absolute", top: 12, left: 12,
          background: "rgba(253,248,242,.92)", color: "var(--rose)",
          fontSize: ".72rem", fontWeight: 600,
          padding: ".25rem .65rem", borderRadius: 99,
          border: "1px solid var(--border)", backdropFilter: "blur(8px)",
        }}>
          {product.category}
        </span>
        {inCart && (
          <span style={{
            position: "absolute", top: 12, right: 12,
            background: "#22c55e", color: "#fff",
            fontSize: ".7rem", fontWeight: 700,
            padding: ".25rem .6rem", borderRadius: 99,
          }}>
            ✓ In Cart
          </span>
        )}
      </div>

      {/* Content */}
      <div style={{ padding: "1.1rem 1.2rem 1.3rem", flex: 1, display: "flex", flexDirection: "column" }}>
        <h2 style={{
          fontFamily: "'Playfair Display', serif",
          fontWeight: 600, fontSize: "1.05rem",
          color: "var(--dark)", marginBottom: ".3rem",
        }} className="line-clamp-1">
          {product.name}
        </h2>

        <p style={{ fontSize: ".82rem", color: "var(--muted)", lineHeight: 1.5, flex: 1 }} className="line-clamp-2">
          {product.description}
        </p>

        <div style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          marginTop: ".9rem", gap: ".6rem",
        }}>
          <span style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "1.2rem", fontWeight: 700, color: "var(--rose)",
          }}>
            ₹{product.price}
          </span>

          <button
            onClick={handleAddToCart}
            style={{
              background: added ? "#22c55e" : hovered
                ? "linear-gradient(135deg, var(--rose), var(--gold))"
                : "var(--warm)",
              color: (added || hovered) ? "#fff" : "var(--muted)",
              fontSize: ".78rem", fontWeight: 700,
              padding: ".42rem .9rem", borderRadius: 99,
              border: "none", cursor: "pointer",
              transition: "all .3s ease", whiteSpace: "nowrap", flexShrink: 0,
            }}
          >
            {added ? "✓ Added!" : inCart ? "+ Add More" : "🛒 Add"}
          </button>
        </div>
      </div>
    </div>
  );
}