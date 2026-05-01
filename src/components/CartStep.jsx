import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function CartStep({
  cart,
  removeFromCart,
  updateQty,
  totalItems,
  totalPrice,
  shipping,
  grandTotal,
  setStep,
}) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (cart.length === 0) {
    return (
      <div style={{ textAlign: "center", padding: "4rem 1rem" }}>
        <div style={{ fontSize: "4rem" }}>🛒</div>
        <h2 className="font-display">Your cart is empty</h2>
        <p style={{ color: "var(--muted)" }}>
          Add some beautiful gifts first!
        </p>
        <Link to="/store" className="btn-primary">
          Browse Gifts →
        </Link>
      </div>
    );
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "2fr 1fr",
        gap: "1.5rem",
      }}
    >
      {/* ITEMS */}
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {cart.map((item) => (
          <div
            key={item.id}
            style={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              gap: "1rem",
              background: "var(--card-bg)",
              border: "1px solid var(--border)",
              borderRadius: 16,
              padding: "1rem",
            }}
          >
            <img
              src={item.image}
              alt={item.name}
              style={{
                width: isMobile ? "100%" : 80,
                height: isMobile ? 180 : 80,
                objectFit: "cover",
                borderRadius: 12,
              }}
            />

            <div style={{ flex: 1 }}>
              <div className="font-display" style={{ fontWeight: 700 }}>
                {item.name}
              </div>
              <div style={{ color: "var(--muted)", fontSize: ".8rem" }}>
                {item.category}
              </div>

              <div
                style={{
                  color: "var(--rose)",
                  fontWeight: 700,
                  marginTop: ".3rem",
                }}
              >
                ₹{item.price}
              </div>

              {/* MOBILE CONTROLS */}
              {isMobile && (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: ".8rem",
                  }}
                >
                  <div style={qtyBox}>
                    <button onClick={() => updateQty(item.id, item.qty - 1)} style={qtyBtn}>−</button>
                    <span>{item.qty}</span>
                    <button onClick={() => updateQty(item.id, item.qty + 1)} style={qtyBtn}>+</button>
                  </div>

                  <div style={{ fontWeight: 700 }}>
                    ₹{item.price * item.qty}
                  </div>
                </div>
              )}
            </div>

            {/* DESKTOP CONTROLS */}
            {!isMobile && (
              <>
                <div style={qtyBox}>
                  <button onClick={() => updateQty(item.id, item.qty - 1)} style={qtyBtn}>−</button>
                  <span>{item.qty}</span>
                  <button onClick={() => updateQty(item.id, item.qty + 1)} style={qtyBtn}>+</button>
                </div>

                <div style={{ fontWeight: 700, minWidth: 70 }}>
                  ₹{item.price * item.qty}
                </div>
              </>
            )}

            <button
              onClick={() => removeFromCart(item.id)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: "1.2rem",
                color: "#e05050",
                alignSelf: isMobile ? "flex-end" : "center",
              }}
            >
              ✕
            </button>
          </div>
        ))}
      </div>

      {/* SUMMARY */}
      <div
        style={{
          background: "var(--card-bg)",
          border: "1px solid var(--border)",
          borderRadius: 18,
          padding: "1.4rem",
          position: isMobile ? "static" : "sticky",
          top: 100,
          height: "fit-content",
        }}
      >
        <h3 className="font-display" style={{ marginBottom: "1rem" }}>
          Order Summary
        </h3>

        <div style={{ display: "flex", flexDirection: "column", gap: ".7rem" }}>
          <Row label={`Subtotal (${totalItems})`} val={`₹${totalPrice}`} />

          <Row
            label="Shipping"
            val={
              shipping === 0 ? (
                <span style={{ color: "#22c55e" }}>FREE</span>
              ) : (
                `₹${shipping}`
              )
            }
          />

          {shipping > 0 && (
            <div
              style={{
                fontSize: ".8rem",
                color: "var(--muted)",
                background: "var(--warm)",
                padding: ".5rem",
                borderRadius: 8,
              }}
            >
              Add ₹{999 - totalPrice} more for free shipping
            </div>
          )}

          <div style={{ borderTop: "1px solid var(--border)", paddingTop: ".5rem" }}>
            <Row label="Total" val={`₹${grandTotal}`} bold />
          </div>
        </div>

        <button
          className="btn-primary"
          style={{
            width: "100%",
            marginTop: "1.2rem",
            fontSize: isMobile ? "1rem" : ".95rem",
            padding: isMobile ? "1rem" : ".75rem",
          }}
          onClick={() => setStep(2)}
        >
          Proceed to Checkout →
        </button>
      </div>
    </div>
  );
}

/* helpers */
const qtyBox = {
  display: "flex",
  alignItems: "center",
  gap: ".5rem",
  background: "var(--warm)",
  borderRadius: 999,
  padding: ".3rem .6rem",
};

const qtyBtn = {
  border: "none",
  background: "none",
  cursor: "pointer",
  fontWeight: 700,
};

function Row({ label, val, bold }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <span style={{ fontWeight: bold ? 700 : 400 }}>{label}</span>
      <span style={{ fontWeight: bold ? 800 : 600 }}>{val}</span>
    </div>
  );
}