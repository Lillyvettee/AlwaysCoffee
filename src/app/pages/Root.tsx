import { Outlet, NavLink, useLocation } from "react-router";
import { useState, useEffect } from "react";

export function Root() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location]);

  const links = [
    { to: "/", label: "Home" },
    { to: "/menu", label: "Menu" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
    { to: "/order", label: "Reserve" },
    { to: "/merch", label: "Merch" },
  ];

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)", color: "var(--fg)", fontFamily: "var(--body)" }}>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        transition: "all 0.3s",
        background: scrolled ? "rgba(12,10,8,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(212,163,84,0.2)" : "none",
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2rem", display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}>
          <NavLink to="/" style={{ textDecoration: "none" }}>
            <span style={{ fontFamily: "var(--display)", fontSize: "1.6rem", color: "var(--gold)", letterSpacing: "0.04em" }}>
              EMBER & ASH
            </span>
          </NavLink>
          <div id="desktop-nav" style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
            {links.map((l) => (
              <NavLink key={l.to} to={l.to} end={l.to === "/"} style={({ isActive }) => ({
                textDecoration: "none", fontFamily: "var(--body)", fontSize: "0.78rem",
                letterSpacing: "0.14em", textTransform: "uppercase" as const,
                color: isActive ? "var(--gold)" : "rgba(255,255,255,0.75)",
                borderBottom: isActive ? "1px solid var(--gold)" : "1px solid transparent",
                paddingBottom: 2, transition: "all 0.2s",
              })}>
                {l.label}
              </NavLink>
            ))}
          </div>
          <button id="mobile-btn" onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: "none", border: "none", cursor: "pointer", padding: 8, display: "none" }}>
            <div style={{ width: 24, display: "flex", flexDirection: "column", gap: 5 }}>
              <span style={{ display: "block", height: 2, background: "var(--gold)", transition: "all 0.3s", transform: menuOpen ? "rotate(45deg) translate(5px,5px)" : "none" }} />
              <span style={{ display: "block", height: 2, background: "var(--gold)", transition: "all 0.3s", opacity: menuOpen ? 0 : 1 }} />
              <span style={{ display: "block", height: 2, background: "var(--gold)", transition: "all 0.3s", transform: menuOpen ? "rotate(-45deg) translate(5px,-5px)" : "none" }} />
            </div>
          </button>
        </div>
        {menuOpen && (
          <div style={{ background: "rgba(12,10,8,0.98)", padding: "1.5rem 2rem 2rem", display: "flex", flexDirection: "column", gap: "1.2rem" }}>
            {links.map((l) => (
              <NavLink key={l.to} to={l.to} end={l.to === "/"} style={({ isActive }) => ({
                textDecoration: "none", fontFamily: "var(--body)", fontSize: "0.9rem",
                letterSpacing: "0.12em", textTransform: "uppercase" as const,
                color: isActive ? "var(--gold)" : "rgba(255,255,255,0.8)",
              })}>
                {l.label}
              </NavLink>
            ))}
          </div>
        )}
      </nav>

      <main><Outlet /></main>

      <footer style={{ background: "#080604", borderTop: "1px solid rgba(212,163,84,0.15)", padding: "3rem 2rem" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "2rem" }}>
          <div>
            <div style={{ fontFamily: "var(--display)", fontSize: "1.4rem", color: "var(--gold)", marginBottom: "0.75rem" }}>EMBER & ASH</div>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.82rem", lineHeight: 1.7 }}>Where fire meets flavour.<br />Open Wed–Sun, from 5pm.</p>
          </div>
          <div>
            <div style={{ fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "0.75rem" }}>Hours</div>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.82rem", lineHeight: 1.9 }}>Wed – Thu: 5pm – 10pm<br />Fri – Sat: 5pm – 11pm<br />Sun: 4pm – 9pm</p>
          </div>
          <div>
            <div style={{ fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "0.75rem" }}>Find Us</div>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.82rem", lineHeight: 1.9 }}>412 Coalfire Lane<br />Brooklyn, NY 11201<br />(718) 555-0192</p>
          </div>
          <div>
            <div style={{ fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "0.75rem" }}>Links</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {links.map((l) => (
                <NavLink key={l.to} to={l.to} style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.82rem", textDecoration: "none" }}>{l.label}</NavLink>
              ))}
            </div>
          </div>
        </div>
        <div style={{ maxWidth: 1200, margin: "2rem auto 0", paddingTop: "1.5rem", borderTop: "1px solid rgba(255,255,255,0.06)", textAlign: "center", color: "rgba(255,255,255,0.2)", fontSize: "0.75rem" }}>
          © 2025 Ember & Ash. All rights reserved.
        </div>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Raleway:wght@300;400;500;600&display=swap');
        :root {
          --bg: #0c0a08;
          --fg: #f0ebe0;
          --gold: #d4a354;
          --gold-light: #e8c07a;
          --ember: #c0392b;
          --charcoal: #1a1612;
          --cream: #f5f0e8;
          --smoke: rgba(255,255,255,0.04);
          --ash: rgba(255,255,255,0.35);
          --display: 'Playfair Display', Georgia, serif;
          --body: 'Raleway', 'Helvetica Neue', sans-serif;
        }
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html, body { background: #0c0a08; color: #f0ebe0; }

        @media (max-width: 768px) {
          #desktop-nav { display: none !important; }
          #mobile-btn { display: flex !important; }
        }

        @keyframes fadeUp { from { opacity: 0; transform: translateY(28px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        .fade-up { animation: fadeUp 0.75s ease forwards; }
        .fade-in { animation: fadeIn 1s ease forwards; }
        .delay-1 { animation-delay: 0.15s; opacity: 0; }
        .delay-2 { animation-delay: 0.3s; opacity: 0; }
        .delay-3 { animation-delay: 0.45s; opacity: 0; }
        .delay-4 { animation-delay: 0.6s; opacity: 0; }

        .btn-gold {
          display: inline-block; padding: 0.85rem 2.2rem; background: var(--gold); color: #0c0a08;
          font-family: var(--body); font-size: 0.75rem; font-weight: 600; letter-spacing: 0.18em;
          text-transform: uppercase; text-decoration: none; border: none; cursor: pointer; transition: all 0.2s;
        }
        .btn-gold:hover { background: var(--gold-light); transform: translateY(-1px); }
        .btn-outline {
          display: inline-block; padding: 0.85rem 2.2rem; background: transparent; color: var(--gold);
          font-family: var(--body); font-size: 0.75rem; font-weight: 600; letter-spacing: 0.18em;
          text-transform: uppercase; text-decoration: none; border: 1px solid var(--gold); cursor: pointer; transition: all 0.2s;
        }
        .btn-outline:hover { background: var(--gold); color: #0c0a08; }

        .section-label { font-family: var(--body); font-size: 0.7rem; letter-spacing: 0.22em; text-transform: uppercase; color: var(--gold); margin-bottom: 1rem; }
        .section-title { font-family: var(--display); font-size: clamp(2rem, 5vw, 3.5rem); color: var(--fg); line-height: 1.15; margin-bottom: 1.2rem; }
        .divider { width: 60px; height: 1px; background: var(--gold); margin: 1.2rem 0; }
        .ea-card {
          background: rgba(255,255,255,0.025); border: 1px solid rgba(212,163,84,0.12);
          padding: 2rem; transition: border-color 0.2s, background 0.2s;
        }
        .ea-card:hover { border-color: rgba(212,163,84,0.3); background: rgba(212,163,84,0.03); }

        .ea-input {
          background: rgba(255,255,255,0.04); border: 1px solid rgba(212,163,84,0.18);
          color: var(--fg); font-family: var(--body); font-size: 0.9rem; padding: 0.85rem 1rem;
          width: 100%; outline: none; transition: border-color 0.2s;
        }
        .ea-input:focus { border-color: var(--gold); }
        .ea-input::placeholder { color: rgba(255,255,255,0.25); }
        .ea-label { font-size: 0.72rem; letter-spacing: 0.14em; text-transform: uppercase; color: rgba(255,255,255,0.45); display: block; margin-bottom: 0.5rem; }

        .page-enter { animation: fadeIn 0.5s ease; }
        .texture { background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4'%3E%3Crect width='1' height='1' fill='rgba(255,255,255,0.03)'/%3E%3C/svg%3E"); }
        
        /* Override old color-scheme classes to use dark theme */
        [style*="var(--charcoal)"][style*="color"] { color: var(--fg) !important; }
      `}</style>
    </div>
  );
}
