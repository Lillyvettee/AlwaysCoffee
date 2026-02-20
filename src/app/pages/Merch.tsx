import { useState } from "react";
import { ShoppingBag, Plus, Minus, X } from "lucide-react";

const PRODUCTS = [
  { id: 1, name: "The Hearth Tee", desc: "Heavy 100% organic cotton, unisex fit. Charcoal base, ash-print logo.", price: 42, tag: "Apparel", emoji: "👕", sizes: ["S","M","L","XL","XXL"] },
  { id: 2, name: "Ember & Ash Enamel Mug", desc: "12oz camp-style mug. Oven-tested by our kitchen team. Dishwasher safe.", price: 28, tag: "Kitchen", emoji: "☕", sizes: null },
  { id: 3, name: "Oak & Cherry Smoke Kit", desc: "Four chunks each of white oak and Bing cherry. The same wood we cook with.", price: 36, tag: "Pantry", emoji: "🪵", sizes: null },
  { id: 4, name: "House Hot Sauce", desc: "Fermented fresno, charred tomato, apple cider vinegar. 5oz bottle.", price: 18, tag: "Pantry", emoji: "🔥", sizes: null },
  { id: 5, name: "Ember Trucker Hat", desc: "Structured 5-panel. Cream with burnt-orange embroidery. Adjustable snap.", price: 38, tag: "Apparel", emoji: "🧢", sizes: ["One Size"] },
  { id: 6, name: "The Cookbook", desc: "90 recipes built around live fire. Essays, sourcing notes, and full photography.", price: 55, tag: "Books", emoji: "📖", sizes: null },
];

type CartItem = { id: number; name: string; price: number; size?: string; qty: number };

export function Merch() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [selectedSizes, setSelectedSizes] = useState<Record<number, string>>({});

  const addToCart = (product: typeof PRODUCTS[0]) => {
    const size = selectedSizes[product.id];
    setCart((prev) => {
      const key = `${product.id}-${size}`;
      const existing = prev.find((c) => `${c.id}-${c.size}` === key);
      if (existing) return prev.map((c) => `${c.id}-${c.size}` === key ? { ...c, qty: c.qty + 1 } : c);
      return [...prev, { id: product.id, name: product.name, price: product.price, size, qty: 1 }];
    });
    setCartOpen(true);
  };

  const updateQty = (id: number, size: string | undefined, delta: number) => {
    setCart((prev) => prev.map((c) => c.id === id && c.size === size ? { ...c, qty: Math.max(0, c.qty + delta) } : c).filter((c) => c.qty > 0));
  };

  const total = cart.reduce((sum, c) => sum + c.price * c.qty, 0);
  const itemCount = cart.reduce((sum, c) => sum + c.qty, 0);

  return (
    <div style={{ paddingTop: 72, minHeight: "100vh" }}>
      {/* Header */}
      <div style={{ background: "rgba(255,255,255,0.02)", borderBottom: "1px solid rgba(212,163,84,0.12)", padding: "5rem 2rem 4rem" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div>
            <p className="section-label fade-up">Take a Piece Home</p>
            <h1 className="section-title fade-up delay-1">Merch & Pantry</h1>
          </div>
          <button onClick={() => setCartOpen(true)} style={{ background: "none", border: "1px solid rgba(212,163,84,0.3)", cursor: "pointer", padding: "0.7rem 1.2rem", display: "flex", alignItems: "center", gap: "0.6rem", color: "var(--fg)" }}>
            <ShoppingBag size={16} style={{ color: "var(--gold)" }} />
            <span style={{ fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", fontFamily: "var(--body)" }}>
              Cart {itemCount > 0 && `(${itemCount})`}
            </span>
          </button>
        </div>
      </div>

      {/* Grid */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "4rem 2rem 6rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1.5rem" }}>
          {PRODUCTS.map((p) => (
            <div key={p.id} className="ea-card">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.5rem" }}>
                <div style={{ fontSize: "2.5rem" }}>{p.emoji}</div>
                <span style={{ fontSize: "0.6rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--gold)", border: "1px solid rgba(212,163,84,0.3)", padding: "0.2rem 0.5rem" }}>{p.tag}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "0.5rem" }}>
                <h3 style={{ fontFamily: "var(--display)", fontSize: "1.15rem" }}>{p.name}</h3>
                <span style={{ fontFamily: "var(--display)", color: "var(--gold)", fontSize: "1rem", marginLeft: "0.5rem", flexShrink: 0 }}>${p.price}</span>
              </div>
              <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.83rem", lineHeight: 1.65, marginBottom: "1.25rem" }}>{p.desc}</p>
              {p.sizes && (
                <div style={{ display: "flex", gap: "0.4rem", marginBottom: "1rem", flexWrap: "wrap" }}>
                  {p.sizes.map((s) => (
                    <button key={s} onClick={() => setSelectedSizes((prev) => ({ ...prev, [p.id]: s }))} style={{
                      fontSize: "0.7rem", letterSpacing: "0.08em", padding: "0.3rem 0.65rem",
                      cursor: "pointer", border: "1px solid", fontFamily: "var(--body)", transition: "all 0.15s",
                      background: selectedSizes[p.id] === s ? "var(--gold)" : "transparent",
                      color: selectedSizes[p.id] === s ? "#0c0a08" : "rgba(255,255,255,0.45)",
                      borderColor: selectedSizes[p.id] === s ? "var(--gold)" : "rgba(212,163,84,0.2)",
                    }}>{s}</button>
                  ))}
                </div>
              )}
              <button
                onClick={() => addToCart(p)}
                disabled={!!p.sizes && !selectedSizes[p.id]}
                className="btn-gold" style={{ width: "100%", padding: "0.75rem", opacity: (!!p.sizes && !selectedSizes[p.id]) ? 0.4 : 1, cursor: (!!p.sizes && !selectedSizes[p.id]) ? "not-allowed" : "pointer" }}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Cart sidebar */}
      {cartOpen && (
        <>
          <div onClick={() => setCartOpen(false)} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.6)", zIndex: 199 }} />
          <div style={{ position: "fixed", top: 0, right: 0, bottom: 0, width: "min(100vw, 400px)", background: "#100d0a", borderLeft: "1px solid rgba(212,163,84,0.2)", zIndex: 200, display: "flex", flexDirection: "column", overflowY: "auto" }}>
            <div style={{ padding: "1.5rem 2rem", borderBottom: "1px solid rgba(212,163,84,0.15)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontFamily: "var(--display)", fontSize: "1.2rem" }}>Your Cart</span>
              <button onClick={() => setCartOpen(false)} style={{ background: "none", border: "none", cursor: "pointer", color: "rgba(255,255,255,0.5)" }}>
                <X size={20} />
              </button>
            </div>
            <div style={{ flex: 1, padding: "1.5rem 2rem", display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {cart.length === 0 ? (
                <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.9rem", textAlign: "center", marginTop: "3rem" }}>Your cart is empty.</p>
              ) : (
                cart.map((item) => (
                  <div key={`${item.id}-${item.size}`} style={{ display: "flex", gap: "1rem", alignItems: "center", paddingBottom: "1.25rem", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                    <div style={{ flex: 1 }}>
                      <p style={{ fontSize: "0.88rem", marginBottom: "0.2rem" }}>{item.name}</p>
                      {item.size && <p style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.35)" }}>Size: {item.size}</p>}
                      <p style={{ fontSize: "0.82rem", color: "var(--gold)", marginTop: "0.2rem" }}>${item.price * item.qty}</p>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                      <button onClick={() => updateQty(item.id, item.size, -1)} style={{ background: "rgba(255,255,255,0.06)", border: "none", cursor: "pointer", width: 28, height: 28, display: "flex", alignItems: "center", justifyContent: "center", color: "var(--fg)" }}><Minus size={12} /></button>
                      <span style={{ fontSize: "0.85rem", minWidth: 16, textAlign: "center" }}>{item.qty}</span>
                      <button onClick={() => updateQty(item.id, item.size, 1)} style={{ background: "rgba(255,255,255,0.06)", border: "none", cursor: "pointer", width: 28, height: 28, display: "flex", alignItems: "center", justifyContent: "center", color: "var(--fg)" }}><Plus size={12} /></button>
                    </div>
                  </div>
                ))
              )}
            </div>
            {cart.length > 0 && (
              <div style={{ padding: "1.5rem 2rem", borderTop: "1px solid rgba(212,163,84,0.15)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1.5rem" }}>
                  <span style={{ fontFamily: "var(--display)", fontSize: "1rem" }}>Total</span>
                  <span style={{ fontFamily: "var(--display)", color: "var(--gold)", fontSize: "1rem" }}>${total}</span>
                </div>
                <button className="btn-gold" style={{ width: "100%", padding: "1rem" }} onClick={() => alert("Checkout coming soon! (Demo)")}>
                  Checkout
                </button>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
