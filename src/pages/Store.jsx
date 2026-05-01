import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import { useState, useMemo } from "react";

const ALL_CATEGORIES = ["All", ...Array.from(new Set(products.map(p => p.category)))];

export default function Store() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("default");

  const filtered = useMemo(() => {
    let list = [...products];

    if (category !== "All") {
      list = list.filter(p => p.category === category);
    }

    if (search.trim()) {
      list = list.filter(p =>
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (sort === "price-asc") list.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") list.sort((a, b) => b.price - a.price);

    return list;
  }, [search, category, sort]);

  return (
    <div style={{
      maxWidth: 1200,
      margin: "0 auto",
      padding: "2rem 1rem 4rem",
    }}>

      {/* HEADER */}
      <div style={{ textAlign: "center", marginBottom: "1.8rem" }}>
        <p style={{
          color: "var(--rose)",
          fontWeight: 600,
          fontSize: ".75rem",
          letterSpacing: ".08em",
          textTransform: "uppercase",
        }}>
          Our Collection
        </p>

        <h1 className="font-display" style={{
          fontSize: "clamp(1.6rem, 5vw, 2.5rem)",
          fontWeight: 900,
        }}>
          Gift Store 🛍️
        </h1>

        <p style={{
          color: "var(--muted)",
          fontSize: ".85rem",
          marginTop: ".3rem"
        }}>
          {filtered.length} gifts found
        </p>
      </div>

      {/* SEARCH + SORT */}
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: ".7rem",
        marginBottom: "1rem",
      }}>
        {/* Search */}
        <div style={{ flex: 1, minWidth: 140, position: "relative" }}>
          <span style={{
            position: "absolute",
            left: ".8rem",
            top: "50%",
            transform: "translateY(-50%)",
            fontSize: ".85rem",
          }}>
            🔍
          </span>

          <input
            placeholder="Search gifts..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{
              width: "100%",
              padding: ".6rem .8rem .6rem 2rem",
              borderRadius: 10,
              border: "1px solid var(--border)",
              fontSize: ".85rem",
              outline: "none",
            }}
          />
        </div>

        {/* Sort */}
        <select
          value={sort}
          onChange={e => setSort(e.target.value)}
          style={{
            padding: ".6rem",
            borderRadius: 10,
            border: "1px solid var(--border)",
            fontSize: ".85rem",
            background: "#fff",
          }}
        >
          <option value="default">Sort</option>
          <option value="price-asc">Low → High</option>
          <option value="price-desc">High → Low</option>
        </select>
      </div>

      {/* CATEGORY PILLS */}
      <div style={{
        display: "flex",
        gap: ".5rem",
        overflowX: "auto",
        paddingBottom: ".5rem",
        marginBottom: "1.2rem",
      }}>
        {ALL_CATEGORIES.map(cat => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            style={{
              whiteSpace: "nowrap",
              padding: ".35rem .8rem",
              borderRadius: 99,
              fontSize: ".75rem",
              fontWeight: 600,
              cursor: "pointer",
              border: category === cat ? "none" : "1px solid var(--border)",
              background: category === cat
                ? "linear-gradient(135deg, var(--rose), var(--gold))"
                : "var(--card-bg)",
              color: category === cat ? "#fff" : "var(--muted)",
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* PRODUCTS GRID */}
      {filtered.length === 0 ? (
        <div style={{
          textAlign: "center",
          padding: "3rem 1rem",
          color: "var(--muted)",
        }}>
          <div style={{ fontSize: "2.5rem" }}>😔</div>
          <p>No gifts found</p>
        </div>
      ) : (
        <div className="store-grid">
          {filtered.map(item => (
            <div className="card-wrapper" key={item.id}>
              <ProductCard product={item} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}