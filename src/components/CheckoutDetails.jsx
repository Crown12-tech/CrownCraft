import { useState, useEffect } from "react";

export default function CheckoutDetails({
  user,
  setUser,
  errors,
  inputStyle,
  focusStyle,
  blurStyle,
  validateDetails,
  handlePlaceOrder,
  totalItems,
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

  return (
    <div
      style={{
        maxWidth: 650,
        margin: "0 auto",
      }}
    >
      <div
        style={{
          background: "var(--card-bg)",
          border: "1px solid var(--border)",
          borderRadius: 20,
          padding: isMobile ? "1.2rem" : "1.8rem",
        }}
      >
        {/* TITLE */}
        <h2
          className="font-display"
          style={{
            fontSize: "1.3rem",
            fontWeight: 800,
            marginBottom: "1.2rem",
          }}
        >
          Delivery Details
        </h2>

        {/* FORM */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
            gap: "1rem",
          }}
        >
          <div style={{ gridColumn: "1 / -1" }}>
            <Field label="Full Name *" error={errors.name}>
              <input
                placeholder="Riya Sharma"
                style={inputStyle("name")}
                value={user.name}
                onChange={(e) => setUser({ ...user, name: e.target.value })}
                onFocus={(e) => Object.assign(e.target.style, focusStyle)}
                onBlur={(e) =>
                  Object.assign(e.target.style, blurStyle("name"))
                }
              />
            </Field>
          </div>

          <Field label="Phone Number *" error={errors.phone}>
            <input
              placeholder="9876543210"
              style={inputStyle("phone")}
              value={user.phone}
              onChange={(e) => setUser({ ...user, phone: e.target.value })}
              onFocus={(e) => Object.assign(e.target.style, focusStyle)}
              onBlur={(e) =>
                Object.assign(e.target.style, blurStyle("phone"))
              }
            />
          </Field>

          <Field label="Email Address *" error={errors.email}>
            <input
              placeholder="riya@email.com"
              style={inputStyle("email")}
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              onFocus={(e) => Object.assign(e.target.style, focusStyle)}
              onBlur={(e) =>
                Object.assign(e.target.style, blurStyle("email"))
              }
            />
          </Field>

          <div style={{ gridColumn: "1 / -1" }}>
            <Field label="Full Address *" error={errors.address}>
              <textarea
                rows={2}
                placeholder="House/Flat no, Street, Area"
                style={{ ...inputStyle("address"), resize: "vertical" }}
                value={user.address}
                onChange={(e) =>
                  setUser({ ...user, address: e.target.value })
                }
                onFocus={(e) => Object.assign(e.target.style, focusStyle)}
                onBlur={(e) =>
                  Object.assign(e.target.style, blurStyle("address"))
                }
              />
            </Field>
          </div>

          <Field label="City *" error={errors.city}>
            <input
              placeholder="Delhi"
              style={inputStyle("city")}
              value={user.city}
              onChange={(e) => setUser({ ...user, city: e.target.value })}
              onFocus={(e) => Object.assign(e.target.style, focusStyle)}
              onBlur={(e) =>
                Object.assign(e.target.style, blurStyle("city"))
              }
            />
          </Field>

          <Field label="Pincode *" error={errors.pincode}>
            <input
              placeholder="110001"
              style={inputStyle("pincode")}
              value={user.pincode}
              onChange={(e) =>
                setUser({ ...user, pincode: e.target.value })
              }
              onFocus={(e) => Object.assign(e.target.style, focusStyle)}
              onBlur={(e) =>
                Object.assign(e.target.style, blurStyle("pincode"))
              }
            />
          </Field>
        </div>

        {/* MINI SUMMARY */}
        <div
          style={{
            background: "var(--warm)",
            borderRadius: 14,
            padding: "1rem",
            marginTop: "1.3rem",
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            justifyContent: "space-between",
            alignItems: isMobile ? "flex-start" : "center",
            gap: isMobile ? ".5rem" : "0",
          }}
        >
          <div style={{ fontSize: ".9rem", color: "var(--muted)" }}>
            {totalItems} item{totalItems > 1 ? "s" : ""} · Shipping ₹{shipping}
          </div>

          <div
            className="font-display"
            style={{
              fontWeight: 800,
              fontSize: "1.2rem",
              color: "var(--rose)",
            }}
          >
            ₹{grandTotal}
          </div>
        </div>

        {/* BUTTONS */}
        <div
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            gap: "1rem",
            marginTop: "1.3rem",
          }}
        >
          <button
            className="btn-ghost"
            onClick={() => setStep(1)}
            style={{ width: isMobile ? "100%" : "auto" }}
          >
            Back
          </button>

          <button
            className="btn-primary"
            style={{ width: "100%" }}
            onClick={() => {
              if (validateDetails()) {
                handlePlaceOrder();
              }
            }}
          >
            Place Order via WhatsApp →
          </button>
        </div>
      </div>
    </div>
  );
}

/* FIELD COMPONENT */
function Field({ label, error, children }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: ".3rem" }}>
      <label style={{ fontSize: ".82rem", fontWeight: 600 }}>
        {label}
      </label>

      {children}

      {error && (
        <p style={{ color: "#e05050", fontSize: ".75rem" }}>
          {error}
        </p>
      )}
    </div>
  );
}