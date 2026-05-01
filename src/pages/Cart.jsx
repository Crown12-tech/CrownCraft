import { useState } from "react";
import { Link } from "react-router-dom";
import useCart from "../context/useCart";
import OrderSuccess from "../components/OrderSuccess";
import CartStep from "../components/CartStep";
import CheckoutDetails from "../components/CheckoutDetails";

const SHIPPING = 49;
const FREE_SHIPPING_ABOVE = 999;

function StepDot({ n, current, label }) {
  const done = current > n;
  const active = current === n;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: ".3rem",
      }}
    >
      <div
        style={{
          width: 36,
          height: 36,
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: 700,
          fontSize: ".85rem",
          background: done
            ? "#22c55e"
            : active
              ? "linear-gradient(135deg,var(--rose),var(--gold))"
              : "var(--border)",
          color: done || active ? "#fff" : "var(--muted)",
          boxShadow: active ? "0 4px 16px rgba(201,98,95,.35)" : "none",
          transition: "all .35s",
        }}
      >
        {done ? "✓" : n}
      </div>
      <span
        style={{
          fontSize: ".72rem",
          fontWeight: 600,
          textAlign: "center",
          color: active ? "var(--dark)" : "var(--muted)",
          whiteSpace: "nowrap",
        }}
      >
        {label}
      </span>
    </div>
  );
}

function StepLine({ done }) {
  return (
    <div
      style={{
        flex: 1,
        height: 3,
        borderRadius: 99,
        background: done
          ? "linear-gradient(90deg,var(--rose),var(--gold))"
          : "var(--border)",
        marginBottom: "1.3rem",
        transition: "background .5s",
      }}
    />
  );
}

export default function Cart() {

  const { cart, removeFromCart, updateQty, clearCart, totalItems, totalPrice } =
    useCart();

  const shipping = totalPrice >= FREE_SHIPPING_ABOVE ? 0 : SHIPPING;
  const grandTotal = totalPrice + shipping;

  const PHONE = import.meta.env.VITE_PHONE_NO;

/* ── Steps: 1=Cart  2=Details  3=Success ── */
  const [step, setStep] = useState(1);

  const [user, setUser] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    pincode: "",
  });
  const [errors, setErrors] = useState({});

  /* Validate details form */
  const validateDetails = () => {
    const err = {};
    if (!user.name.trim()) err.name = "Full name required";
    if (!/^[0-9]{10}$/.test(user.phone))
      err.phone = "Enter valid 10-digit number";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user.email))
      err.email = "Enter valid email";
    if (!user.address.trim()) err.address = "Address required";
    if (!user.city.trim()) err.city = "City required";
    if (!/^[0-9]{6}$/.test(user.pincode))
      err.pincode = "Enter valid 6-digit pincode";
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handlePlaceOrder = () => {
    const items = cart
        .map((i) => `${i.name} x ${i.qty} = ₹${i.price * i.qty}`)
        .join("\n");

    const msg = `*New Order*

*Name:* ${user.name}

*Phone:* ${user.phone}

*Email:* ${user.email}

*Address:* ${user.address}, ${user.city} - ${user.pincode}

*Items:* ${items}

*Total:* ₹${grandTotal}

Please confirm my order.`;

    window.open(
        `https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`,
        "_blank"
    );

    clearCart();
    setStep(3);
  };

  const inputStyle = (field) => ({
    width: "100%",
    padding: ".72rem 1rem",
    border: `1.5px solid ${errors[field] ? "#e05050" : "var(--border)"}`,
    borderRadius: 12,
    background: "#fff",
    fontFamily: "'DM Sans', sans-serif",
    fontSize: ".93rem",
    color: "var(--dark)",
    outline: "none",
    transition: "border-color .2s, box-shadow .2s",
    boxSizing: "border-box",
  });

  const focusStyle = {
    borderColor: "var(--rose)",
    boxShadow: "0 0 0 3px rgba(201,98,95,.1)",
  };
  const blurStyle = (field) => ({
    borderColor: errors[field] ? "#e05050" : "var(--border)",
    boxShadow: "none",
  });

  return (
    <div
      style={{ maxWidth: 1100, margin: "0 auto", padding: "2rem 1.2rem 5rem" }}
    >
      {/* ── Page title ── */}
      <div style={{ marginBottom: "2rem" }}>
        <Link
          to="/store"
          style={{
            color: "var(--muted)",
            textDecoration: "none",
            fontSize: ".85rem",
          }}
        >
          ← Continue Shopping
        </Link>
        <h1
          className="font-display"
          style={{
            fontSize: "clamp(1.8rem,4vw,2.4rem)",
            fontWeight: 900,
            marginTop: ".4rem",
          }}
        >
          { step === 2 ? "Checkout Details" : step === 1 ? "Your Cart 🛒" : "" }
        </h1>
      </div>

      {/* ── Step indicator ── */}
      {step !== 3 && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            maxWidth: 540,
            margin: "0 auto 2.5rem",
          }}
        >
          <StepDot n={1} current={step} label="Cart" />
          <StepLine done={step > 1} />
          <StepDot n={2} current={step} label="Details" />
          <StepLine done={step > 2} />
          <StepDot n={3} current={step} label="Order" />
        </div>
      )}

      {/* ════════════════════════════════ STEP 1: CART ══ */}
      {step === 1 && (
        <CartStep
            cart={cart}
            removeFromCart={removeFromCart}
            updateQty={updateQty}
            totalItems={totalItems}
            totalPrice={totalPrice}
            shipping={shipping}
            grandTotal={grandTotal}
            setStep={setStep}
        />
        )}

     {step === 2 && (
        <CheckoutDetails
            user={user}
            setUser={setUser}
            errors={errors}
            inputStyle={inputStyle}
            focusStyle={focusStyle}
            blurStyle={blurStyle}
            validateDetails={validateDetails}
            handlePlaceOrder={handlePlaceOrder}
            totalItems={totalItems}
            shipping={shipping}
            grandTotal={grandTotal}
            setStep={setStep}
        />
     )}

      {/* ════════════════════════════════ STEP 5: SUCCESS ══ */}
      {step === 3 && <OrderSuccess />}
    </div>
  );
}
