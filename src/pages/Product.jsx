import { useParams, Link } from "react-router-dom";
import { products } from "../data/products";
import useCart from "../context/useCart";
import ProductCard from "../components/ProductCard";
import { useState } from "react";

export default function Product() {
  const { id } = useParams();
  const product = products.find((p) => p.id == id);

  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const related = products
    .filter(p => p.category === product?.category && p.id !== product?.id)
    .slice(0, 4);

  const handleAdd = () => {
    addToCart({ ...product, qty: 1 });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  if (!product) return (
    <div style={{ textAlign: "center", padding: "5rem 1rem" }}>
      <div style={{ fontSize: "3rem" }}>😕</div>
      <h2>Product not found</h2>
      <Link to="/store" className="btn-primary">← Back</Link>
    </div>
  );

  return (
    <div style={{
      maxWidth: 1100,
      margin: "0 auto",
      padding: "1.5rem 1rem 4rem"
    }}>

      {/* Breadcrumb */}
      <div style={{
        fontSize: ".8rem",
        color: "var(--muted)",
        marginBottom: "1rem",
        display: "flex",
        flexWrap: "wrap",
        gap: ".3rem"
      }}>
        <Link to="/" style={{ color: "var(--muted)" }}>Home</Link> ›
        <Link to="/store" style={{ color: "var(--muted)" }}>Store</Link> ›
        <span style={{ color: "var(--dark)" }}>{product.name}</span>
      </div>

      {/* MAIN GRID */}
      <div className="product-grid">

        {/* LEFT IMAGE */}
        <div>
          <div style={{
            borderRadius: 16,
            overflow: "hidden",
            boxShadow: "0 10px 30px rgba(0,0,0,.08)"
          }}>
            <img
              src={product.image}
              alt={product.name}
              style={{
                width: "100%",
                height: "clamp(260px, 45vw, 420px)",
                objectFit: "cover"
              }}
            />
          </div>

          {/* TAGS */}
          <div style={{
            display: "flex",
            gap: ".5rem",
            flexWrap: "wrap",
            marginTop: ".6rem"
          }}>
            {[product.category, "Free Wrap 🎀", "Fast Ship 🚚"].map(tag => (
              <span key={tag} style={{
                fontSize: ".75rem",
                background: "var(--warm)",
                padding: ".25rem .7rem",
                borderRadius: 99,
                border: "1px solid var(--border)"
              }}>
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* RIGHT DETAILS */}
        <div>
          <h1 style={{
            fontSize: "clamp(1.4rem, 4vw, 2rem)",
            fontWeight: 800
          }}>
            {product.name}
          </h1>

          <div style={{
            display: "flex",
            gap: ".6rem",
            alignItems: "center",
            margin: ".5rem 0"
          }}>
            <span style={{
              fontSize: "1.5rem",
              color: "var(--rose)",
              fontWeight: 700
            }}>
              ₹{product.price}
            </span>

            <span style={{
              color: "#22c55e",
              fontSize: ".8rem"
            }}>
              ✓ In Stock
            </span>
          </div>

          <p style={{
            fontSize: ".9rem",
            color: "var(--muted)",
            lineHeight: 1.6
          }}>
            {product.description}
          </p>

          {/* ACTION BUTTONS */}
          <div style={{
            display: "flex",
            gap: ".7rem",
            flexWrap: "wrap",
            marginTop: "1rem"
          }}>
            <button
              onClick={handleAdd}
              className="btn-primary"
              style={{ flex: 2 }}
            >
              {added ? "✅ Added" : "🛒 Add to Cart"}
            </button>

            <Link
              to="/cart"
              className="btn-ghost"
              style={{ flex: 1, textAlign: "center" }}
            >
              Go to Cart →
            </Link>
          </div>

          {added && (
            <p style={{
              color: "#22c55e",
              marginTop: ".5rem",
              fontSize: ".85rem"
            }}>
              ✅ Added to cart
            </p>
          )}
        </div>
      </div>

      {/* RELATED PRODUCTS */}
      {related.length > 0 && (
        <div style={{ marginTop: "3rem" }}>
          <h2 style={{
            fontSize: "1.5rem",
            fontWeight: 800,
            marginBottom: "1rem"
          }}>
            You might also love ✨
          </h2>

          <div className="related-grid">
            {related.map(p => (
              <div className="card-wrapper" key={p.id}>
                <ProductCard product={p} />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* MOBILE STICKY BAR */}
      <div className="mobile-bar">
        <div>₹{product.price}</div>
        <button onClick={handleAdd}>
          {added ? "✓ Added" : "Add"}
        </button>
      </div>

    </div>
  );
}