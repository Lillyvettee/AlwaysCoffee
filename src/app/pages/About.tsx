const TEAM = [
  { name: "Mara Voss", role: "Executive Chef & Owner", bio: "Trained under fire-focused kitchens in Lyon and Copenhagen, Mara returned to Brooklyn to build the restaurant she always wanted to eat in. Her philosophy: patience over technique.", initial: "M" },
  { name: "Theo Nakamura", role: "Head of Hearth", bio: "Theo manages every log, coal bed, and smoke profile. His background in traditional Japanese charcoal cooking shapes how Ember & Ash approaches heat as an ingredient.", initial: "T" },
  { name: "Solène Decourt", role: "Sommelier & Beverage Director", bio: "A natural wine evangelist who spent years with small producers in Burgundy and Basque Country. Every bottle on our list tells a story of land and season.", initial: "S" },
];

const VALUES = [
  { num: "01", title: "The Fire", body: "We cook with live oak, cherry wood, and coal. No gas. No shortcuts. Fire is the ingredient that makes everything else possible." },
  { num: "02", title: "The Source", body: "Every supplier is visited before they appear on our menu. We know our farmers, our fishers, our ranchers. Their story is part of ours." },
  { num: "03", title: "The Ritual", body: "Dining should feel like ceremony. From the moment you sit to the final coffee, every detail is deliberate. We want you to leave changed." },
];

export function About() {
  return (
    <div style={{ paddingTop: 72, minHeight: "100vh" }}>
      {/* Hero */}
      <div style={{
        height: "55vh", minHeight: 360,
        background: `linear-gradient(rgba(12,10,8,0.55), rgba(12,10,8,0.85)), url('https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=1400&q=80') center/cover`,
        display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "0 2rem",
      }}>
        <div>
          <p className="section-label fade-up">Est. 2019 · Carroll Gardens, Brooklyn</p>
          <h1 className="section-title fade-up delay-1" style={{ maxWidth: 560, margin: "0 auto" }}>Our Story</h1>
        </div>
      </div>

      {/* Narrative */}
      <section style={{ padding: "6rem 2rem" }}>
        <div style={{ maxWidth: 740, margin: "0 auto" }}>
          <p className="section-label">The Beginning</p>
          <h2 style={{ fontFamily: "var(--display)", fontSize: "clamp(1.8rem, 4vw, 2.6rem)", color: "var(--fg)", lineHeight: 1.2, marginBottom: "1.5rem" }}>Fire is Our Medium</h2>
          <div className="divider" />
          {[
            "Ember & Ash was born from a decade of frustration with modern kitchens — the obsession with precision over feeling, technology over instinct, novelty over nourishment. Chef Mara Voss wanted to go backwards to go forward.",
            "She opened the restaurant in a converted coalyard in Carroll Gardens in 2019, just six months before the world changed. Through lockdown, she kept the fires burning — literally — preparing community meals and finding in that act of service a renewed sense of purpose.",
            "When the doors reopened, something had shifted. The food was more honest. The team was closer. The mission was clearer. Ember & Ash became what it is today: a restaurant that believes the most radical thing you can do is cook with fire, welcome strangers, and make them feel at home.",
          ].map((para, i) => (
            <p key={i} style={{ color: "rgba(255,255,255,0.5)", lineHeight: 1.9, marginBottom: "1.2rem", fontSize: "0.93rem" }}>{para}</p>
          ))}
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: "5rem 2rem", background: "rgba(255,255,255,0.02)", borderTop: "1px solid rgba(212,163,84,0.1)", borderBottom: "1px solid rgba(212,163,84,0.1)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <p className="section-label">What We Stand For</p>
            <h2 className="section-title">Our Philosophy</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem" }}>
            {VALUES.map((v) => (
              <div key={v.num} className="ea-card">
                <div style={{ fontFamily: "var(--display)", fontSize: "3rem", color: "rgba(212,163,84,0.18)", lineHeight: 1, marginBottom: "1rem" }}>{v.num}</div>
                <h3 style={{ fontFamily: "var(--display)", fontSize: "1.25rem", color: "var(--gold)", marginBottom: "0.7rem" }}>{v.title}</h3>
                <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.87rem", lineHeight: 1.8 }}>{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section style={{ padding: "6rem 2rem" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <p className="section-label">The People</p>
            <h2 className="section-title">Meet the Team</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem" }}>
            {TEAM.map((t) => (
              <div key={t.name} style={{ textAlign: "center" }}>
                <div style={{
                  width: 100, height: 100, borderRadius: "50%", margin: "0 auto 1.5rem",
                  background: "rgba(212,163,84,0.08)", border: "2px solid rgba(212,163,84,0.25)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontFamily: "var(--display)", fontSize: "2rem", color: "var(--gold)",
                }}>
                  {t.initial}
                </div>
                <h3 style={{ fontFamily: "var(--display)", fontSize: "1.2rem", marginBottom: "0.3rem" }}>{t.name}</h3>
                <div style={{ fontSize: "0.68rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "0.9rem" }}>{t.role}</div>
                <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.84rem", lineHeight: 1.8 }}>{t.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Press */}
      <section style={{ padding: "3.5rem 2rem", borderTop: "1px solid rgba(212,163,84,0.1)", background: "rgba(212,163,84,0.025)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", textAlign: "center" }}>
          <p className="section-label" style={{ marginBottom: "1.5rem" }}>As Seen In</p>
          <div style={{ display: "flex", gap: "3rem", justifyContent: "center", flexWrap: "wrap", color: "rgba(255,255,255,0.22)", fontFamily: "var(--display)", fontSize: "1rem" }}>
            {["The New York Times", "Eater NY", "New York Magazine", "Bon Appétit", "Food & Wine"].map((p) => (
              <span key={p}>{p}</span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
