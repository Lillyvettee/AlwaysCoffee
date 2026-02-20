import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const INFO = [
    { icon: MapPin, label: "Address", lines: ["412 Coalfire Lane", "Brooklyn, NY 11201"] },
    { icon: Phone, label: "Reservations", lines: ["(718) 555-0192"] },
    { icon: Mail, label: "Email", lines: ["hello@emberandash.com"] },
    { icon: Clock, label: "Hours", lines: ["Wed – Thu: 5pm – 10pm", "Fri – Sat: 5pm – 11pm", "Sun: 4pm – 9pm", "Mon & Tue: Closed"] },
  ];

  return (
    <div style={{ paddingTop: 72, minHeight: "100vh" }}>
      {/* Header */}
      <div style={{ background: "rgba(255,255,255,0.02)", borderBottom: "1px solid rgba(212,163,84,0.12)", padding: "5rem 2rem 4rem" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <p className="section-label fade-up">Get in Touch</p>
          <h1 className="section-title fade-up delay-1">Contact</h1>
        </div>
      </div>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "5rem 2rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem" }}>
        {/* Info */}
        <div>
          <h2 style={{ fontFamily: "var(--display)", fontSize: "1.8rem", color: "var(--fg)", marginBottom: "2.5rem" }}>Come find us.</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem", marginBottom: "3rem" }}>
            {INFO.map(({ icon: Icon, label, lines }) => (
              <div key={label} style={{ display: "flex", gap: "1rem" }}>
                <div style={{ marginTop: 2, width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(192,57,43,0.12)", flexShrink: 0 }}>
                  <Icon size={15} style={{ color: "var(--gold)" }} />
                </div>
                <div>
                  <p style={{ fontSize: "0.68rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "0.4rem" }}>{label}</p>
                  {lines.map((line) => (
                    <p key={line} style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.87rem", lineHeight: 1.7 }}>{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Map placeholder */}
          <div style={{ height: 200, background: "rgba(255,255,255,0.025)", border: "1px solid rgba(212,163,84,0.12)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ textAlign: "center" }}>
              <MapPin size={28} style={{ color: "rgba(212,163,84,0.4)", margin: "0 auto 8px" }} />
              <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.8rem" }}>412 Coalfire Lane, Brooklyn NY</p>
            </div>
          </div>
        </div>

        {/* Form */}
        <div>
          {submitted ? (
            <div style={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "3rem", border: "1px solid rgba(212,163,84,0.15)" }}>
              <div>
                <div style={{ width: 64, height: 64, borderRadius: "50%", background: "rgba(212,163,84,0.1)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.8rem", margin: "0 auto 1.5rem" }}>
                  🔥
                </div>
                <h3 style={{ fontFamily: "var(--display)", fontSize: "1.6rem", color: "var(--fg)", marginBottom: "0.75rem" }}>Message sent.</h3>
                <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.87rem" }}>We'll be in touch within 24 hours.</p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <h2 style={{ fontFamily: "var(--display)", fontSize: "1.8rem", color: "var(--fg)", marginBottom: "2.5rem" }}>Send a message.</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                {[
                  { id: "name", label: "Your Name", type: "text", placeholder: "Jane Smith" },
                  { id: "email", label: "Email Address", type: "email", placeholder: "jane@example.com" },
                  { id: "subject", label: "Subject", type: "text", placeholder: "Private dining enquiry…" },
                ].map(({ id, label, type, placeholder }) => (
                  <div key={id}>
                    <label htmlFor={id} className="ea-label">{label}</label>
                    <input
                      id={id} type={type} placeholder={placeholder}
                      value={(form as any)[id]}
                      onChange={(e) => setForm({ ...form, [id]: e.target.value })}
                      className="ea-input" required
                    />
                  </div>
                ))}
                <div>
                  <label htmlFor="message" className="ea-label">Message</label>
                  <textarea
                    id="message" rows={5} placeholder="Tell us how we can help…"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="ea-input" required
                    style={{ resize: "none" }}
                  />
                </div>
                <button type="submit" className="btn-gold" style={{ width: "100%", padding: "1rem" }}>
                  Send Message
                </button>
              </div>
            </form>
          )}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </div>
  );
}
