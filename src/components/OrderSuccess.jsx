import { Link } from "react-router-dom";

export default function OrderSuccess() {
  const steps = [
    {
      title: "Order Received",
      desc: "Your order details sent to seller",
      done: true,
    },
    {
      title: "Payment Completion",
      desc: "Complete payment via WhatsApp",
      done: false,
    },
    {
      title: "Order Approved",
      desc: "Confirmation sent to your WhatsApp",
      done: false,
    },
    {
      title: "Shipped",
      desc: "Tracking details shared",
      done: false,
    },
  ];

  return (
    <div style={{ textAlign: "center", padding: "2rem 1rem", marginTop: "-2rem" }}>

      {/* TITLE */}
      <h2
        className="font-display"
        style={{
          fontSize: "clamp(1.8rem,4vw,2.4rem)",
          fontWeight: 900,
          marginBottom: ".3rem",
        }}
      >
        Order Sent Successfully!
      </h2>

      {/* SUBTEXT */}
      <p
        style={{
          maxWidth: 480,
          margin: "0 auto 1.5rem",
          color: "var(--muted)",
          lineHeight: 1.6,
          fontSize: ".95rem",
        }}
      >
        Your order has been sent on WhatsApp.  
        We will verify and confirm it within 1–2 hours.
      </p>

      {/* TIMELINE */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: ".8rem",
          maxWidth: 420,
          margin: "2rem auto",
          textAlign: "left",
        }}
      >
        {steps.map((s, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: ".8rem",
              padding: ".9rem 1rem",
              borderRadius: 14,
              background: s.done ? "#f0fdf4" : "var(--card-bg)",
              border: `1px solid ${
                s.done ? "#86efac" : "var(--border)"
              }`,
              transition: "all .25s ease",
            }}
          >
            {/* DOT */}
            <div
              style={{
                width: 28,
                height: 28,
                borderRadius: "50%",
                background: s.done ? "#22c55e" : "var(--border)",
                color: s.done ? "#fff" : "var(--dark)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 700,
                fontSize: ".8rem",
                flexShrink: 0,
              }}
            >
              {s.done ? "✓" : i + 1}
            </div>

            {/* TEXT */}
            <div style={{ flex: 1 }}>
              <div
                style={{
                  fontWeight: 700,
                  fontSize: ".9rem",
                  color: "var(--dark)",
                }}
              >
                {s.title}
              </div>
              <div
                style={{
                  fontSize: ".78rem",
                  color: "var(--muted)",
                  marginTop: ".2rem",
                }}
              >
                {s.desc}
              </div>
            </div>

            {/* STATUS */}
            {s.done && (
              <span
                style={{
                  fontSize: ".75rem",
                  color: "#22c55e",
                  fontWeight: 700,
                }}
              >
                Done
              </span>
            )}
          </div>
        ))}
      </div>

      {/* BUTTONS */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "1rem",
          flexWrap: "wrap",
          marginTop: "1.5rem",
        }}
      >
        <Link to="/" className="btn-primary">
          Back to Home
        </Link>
        <Link to="/store" className="btn-ghost">
          Shop More
        </Link>
      </div>
    </div>
  );
}