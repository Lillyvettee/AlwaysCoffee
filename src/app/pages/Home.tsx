import { Link } from "react-router";

const HERO_BG = `linear-gradient(to bottom, rgba(12,10,8,0.3) 0%, rgba(12,10,8,0.65) 55%, rgba(12,10,8,1) 100%), url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1800&q=80') center/cover no-repeat`;

const DISHES = [
  { name: "Dry-Aged Ribeye", desc: "45-day aged, coal-kissed, bone marrow butter, crispy shallots", price: "$68" },
  { name: "Ember Octopus", desc: "Charred tentacles, nduja, smoked paprika aioli, pickled celery", price: "$34" },
  { name: "Wood-Fired Truffle Pizza", desc: "Black truffle, fontina, crispy sage, farm egg, aged Parmesan", price: "$29" },
];

const FEATURES = [
  { icon: "🔥", title: "Live Fire Cooking", desc: "Coal pits, wood-burning ovens, and custom grills. Every dish is touched by open flame." },
  { icon: "🌿", title: "Hyper-Seasonal", desc: "Our menu shifts weekly with heritage meats, foraged finds, and produce from within 150 miles." },
  { icon: "🍷", title: "Natural Wine Program", desc: "200+ labels curated by our sommelier — small-production, biodynamic, and impossible to predict." },
];

export function Home() {
  return (
    <div>
      {/* Hero */}
      <section style={{ height: "100vh", background: HERO_BG, display: "flex", alignItems: "flex-end", padding: "0 2rem 8rem" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", width: "100%" }}>
          <p className="section-label fade-up">Brooklyn, New York — Est. 2019</p>
          <h1 className="fade-up delay-1" style={{ fontFamily: "var(--display)", fontSize: "clamp(3rem, 9vw, 7rem)", color: "var(--fg)", lineHeight: 1, marginBottom: "1.5rem" }}>
            Where Fire<br /><em style={{ color: "var(--gold)" }}>Meets</em> Flavour
          </h1>
          <p className="fade-up delay-2" style={{ color: "rgba(255,255,255,0.55)", fontSize: "1.05rem", maxWidth: 460, lineHeight: 1.75, marginBottom: "2.5rem" }}>
            An intimate wood-fire restaurant in Carroll Gardens. Open Wednesday through Sunday — reservations essential.
          </p>
          <div className="fade-up delay-3" style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link to="/order" className="btn-gold">Reserve a Table</Link>
            <Link to="/menu" className="btn-outline">View Menu</Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section style={{ background: "rgba(212,163,84,0.05)", borderTop: "1px solid rgba(212,163,84,0.15)", borderBottom: "1px solid rgba(212,163,84,0.15)", padding: "4rem 2rem" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "3rem" }}>
          {FEATURES.map((f) => (
            <div key={f.title} style={{ textAlign: "center" }}>
              <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>{f.icon}</div>
              <h3 style={{ fontFamily: "var(--display)", fontSize: "1.2rem", color: "var(--gold)", marginBottom: "0.7rem" }}>{f.title}</h3>
              <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.87rem", lineHeight: 1.75 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Signature Dishes */}
      <section style={{ padding: "6rem 2rem" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <p className="section-label">From the Fire</p>
            <h2 className="section-title">Tonight's Signatures</h2>
            <div className="divider" style={{ margin: "1.2rem auto" }} />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem", marginBottom: "3rem" }}>
            {DISHES.map((d) => (
              <div key={d.name} className="ea-card" style={{ position: "relative" }}>
                <div style={{ position: "absolute", top: "1.5rem", right: "1.5rem", fontFamily: "var(--display)", color: "var(--gold)", fontSize: "1.1rem" }}>{d.price}</div>
                <h3 style={{ fontFamily: "var(--display)", fontSize: "1.25rem", marginBottom: "0.6rem", paddingRight: "3.5rem" }}>{d.name}</h3>
                <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.83rem", lineHeight: 1.7 }}>{d.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center" }}>
            <Link to="/menu" className="btn-outline">Explore Full Menu</Link>
          </div>
        </div>
      </section>

      {/* Story strip */}
      <section style={{ padding: "6rem 2rem", background: "rgba(255,255,255,0.015)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}>
          <div>
            <p className="section-label">Our Story</p>
            <h2 className="section-title">Fire is Our Medium</h2>
            <div className="divider" />
            <p style={{ color: "rgba(255,255,255,0.5)", lineHeight: 1.9, marginBottom: "1.2rem", fontSize: "0.93rem" }}>
              Born from a decade in Michelin-starred kitchens and a stubborn love for ancient cooking, Ember & Ash opened with a single mission: let fire do the talking.
            </p>
            <p style={{ color: "rgba(255,255,255,0.5)", lineHeight: 1.9, marginBottom: "2rem", fontSize: "0.93rem" }}>
              Chef Mara Delacroix leads a team obsessed with craft — from the sourcing to the seasoning to the smoke rising from our coal pit each evening.
            </p>
            <Link to="/about" className="btn-outline">Our Story</Link>
          </div>
          <div style={{ position: "relative" }}>
            <div style={{ width: "100%", aspectRatio: "4/5", background: `url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80') center/cover` }} />
            <div style={{ position: "absolute", bottom: -20, left: -20, width: 160, height: 160, border: "1px solid rgba(212,163,84,0.25)", zIndex: -1 }} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "7rem 2rem", textAlign: "center", background: `linear-gradient(rgba(12,10,8,0.75), rgba(12,10,8,0.75)), url('https://images.unsplash.com/photo-1544025162-d76694265947?w=1400&q=80') center/cover` }}>
        <p className="section-label">Reservations</p>
        <h2 style={{ fontFamily: "var(--display)", fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "var(--fg)", marginBottom: "1.5rem", lineHeight: 1.2 }}>Join Us at the Table</h2>
        <p style={{ color: "rgba(255,255,255,0.45)", marginBottom: "2.5rem", fontSize: "0.93rem", maxWidth: 420, margin: "0 auto 2.5rem" }}>
          Tables are limited. Reserve in advance to secure your evening.
        </p>
        <Link to="/order" className="btn-gold">Make a Reservation</Link>
      </section>
    </div>
  );
}
