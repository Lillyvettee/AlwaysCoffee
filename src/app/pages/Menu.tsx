import { useState } from "react";

const CATEGORIES = ["All", "Small Plates", "Mains", "Sides", "Desserts", "Drinks"];

const MENU = [
  { cat: "Small Plates", name: "Ember Octopus", desc: "Charred tentacles, nduja, smoked paprika aioli, pickled celery", price: "$34", tag: "Chef's Pick" },
  { cat: "Small Plates", name: "Coal-Roasted Bone Marrow", desc: "Sourdough toast, chimichurri, crispy capers, shallot vinegar", price: "$22" },
  { cat: "Small Plates", name: "Burrata Bruschetta", desc: "Heritage tomatoes, 10yr aged balsamic, torn basil, grilled sourdough", price: "$19" },
  { cat: "Small Plates", name: "Oysters Rockefeller", desc: "Wood-roasted, spinach, pancetta, pernod cream, breadcrumb", price: "$28" },
  { cat: "Small Plates", name: "Smoked Duck Rillettes", desc: "Preserved lemon, cornichon, grain mustard, rye crisp", price: "$21" },
  { cat: "Mains", name: "45-Day Dry-Aged Ribeye", desc: "Coal-kissed, bone marrow butter, crispy shallots, watercress", price: "$68", tag: "Signature" },
  { cat: "Mains", name: "Wood-Fire Lamb Saddle", desc: "Herb-crusted, charred eggplant purée, pomegranate jus", price: "$54" },
  { cat: "Mains", name: "Whole Roasted Chicken", desc: "Spatchcocked, wood-fired, lemon-herb butter, pan jus — serves 2", price: "$58" },
  { cat: "Mains", name: "Truffle Agnolotti", desc: "Black truffle, ricotta, brown butter, aged Parmesan, chives", price: "$36", tag: "Vegetarian" },
  { cat: "Mains", name: "Grilled Bluefin Tuna", desc: "Rare center, sesame crust, miso glaze, pickled daikon, bok choy", price: "$46" },
  { cat: "Sides", name: "Roasted Fingerling Potatoes", desc: "Duck fat, rosemary, fleur de sel", price: "$12" },
  { cat: "Sides", name: "Charred Broccolini", desc: "Garlic, chili flakes, toasted almonds, lemon", price: "$11" },
  { cat: "Sides", name: "Grilled Asparagus", desc: "Hollandaise, crispy prosciutto, egg yolk", price: "$14" },
  { cat: "Desserts", name: "Burnt Honey Panna Cotta", desc: "Honeycomb, lavender shortbread, salted caramel", price: "$16", tag: "Chef's Pick" },
  { cat: "Desserts", name: "Chocolate Lava Cake", desc: "Dark 72%, vanilla bean ice cream, raspberry coulis", price: "$15" },
  { cat: "Desserts", name: "Affogato", desc: "Double espresso, house-made vanilla gelato, optional amaretto", price: "$12" },
  { cat: "Drinks", name: "Smoky Negroni", desc: "Mezcal, Campari, sweet vermouth, smoked orange peel", price: "$18" },
  { cat: "Drinks", name: "Ember Collins", desc: "Charcoal gin, lemon, honey syrup, soda, activated charcoal ice", price: "$17" },
  { cat: "Drinks", name: "Natural Wine Selection", desc: "Ask your server — rotating biodynamic and orange wine list", price: "Market" },
  { cat: "Drinks", name: "Non-Alcoholic Elixirs", desc: "House-crafted shrubs and botanicals — rotating daily", price: "$12" },
];

export function Menu() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? MENU : MENU.filter((m) => m.cat === active);

  return (
    <div style={{ paddingTop: 100, minHeight: "100vh" }}>
      <div style={{ textAlign: "center", padding: "3rem 2rem 2rem" }}>
        <p className="section-label fade-up">The Kitchen</p>
        <h1 className="section-title fade-up delay-1">Our Menu</h1>
        <p className="fade-up delay-2" style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.88rem", maxWidth: 460, margin: "0 auto" }}>
          Everything is cooked over fire. The menu shifts with the season — these are tonight's offerings.
        </p>
      </div>

      {/* Filter tabs */}
      <div style={{ maxWidth: 1200, margin: "2rem auto", padding: "0 2rem", display: "flex", gap: "0.5rem", flexWrap: "wrap", justifyContent: "center" }}>
        {CATEGORIES.map((c) => (
          <button key={c} onClick={() => setActive(c)} style={{
            background: active === c ? "var(--gold)" : "transparent",
            color: active === c ? "#0c0a08" : "rgba(255,255,255,0.45)",
            border: `1px solid ${active === c ? "var(--gold)" : "rgba(212,163,84,0.2)"}`,
            fontFamily: "var(--body)", fontSize: "0.7rem", letterSpacing: "0.14em",
            textTransform: "uppercase", padding: "0.55rem 1.3rem", cursor: "pointer", transition: "all 0.2s",
          }}>
            {c}
          </button>
        ))}
      </div>

      {/* Items */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "2rem 2rem 6rem" }}>
        {CATEGORIES.filter((c) => c !== "All" && (active === "All" || active === c)).map((cat) => {
          const items = filtered.filter((m) => m.cat === cat);
          if (!items.length) return null;
          return (
            <div key={cat} style={{ marginBottom: "3.5rem" }}>
              {active === "All" && (
                <div style={{ marginBottom: "1.5rem", paddingBottom: "0.75rem", borderBottom: "1px solid rgba(212,163,84,0.15)" }}>
                  <span style={{ fontFamily: "var(--display)", fontSize: "1.4rem", color: "var(--gold)" }}>{cat}</span>
                </div>
              )}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "1rem" }}>
                {items.map((item) => (
                  <div key={item.name} className="ea-card" style={{ display: "flex", justifyContent: "space-between", gap: "1rem", alignItems: "flex-start" }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.4rem", flexWrap: "wrap" }}>
                        <span style={{ fontFamily: "var(--display)", fontSize: "1.05rem" }}>{item.name}</span>
                        {item.tag && (
                          <span style={{ fontSize: "0.58rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#0c0a08", background: "var(--gold)", padding: "0.15rem 0.45rem" }}>
                            {item.tag}
                          </span>
                        )}
                      </div>
                      <p style={{ color: "rgba(255,255,255,0.38)", fontSize: "0.82rem", lineHeight: 1.65 }}>{item.desc}</p>
                    </div>
                    <div style={{ fontFamily: "var(--display)", color: "var(--gold)", fontSize: "1rem", flexShrink: 0, paddingTop: 2 }}>{item.price}</div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <div style={{ textAlign: "center", padding: "0 2rem 5rem", color: "rgba(255,255,255,0.25)", fontSize: "0.76rem", lineHeight: 1.9 }}>
        Please inform your server of any dietary restrictions or allergies.<br />
        A 20% service charge is added to parties of 6 or more. Prices exclude tax.
      </div>
    </div>
  );
}
