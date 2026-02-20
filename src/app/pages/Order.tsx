import { useState } from "react";
import { Calendar, Users, Clock, ChevronDown } from "lucide-react";

const TIMES = ["5:00 PM","5:30 PM","6:00 PM","6:30 PM","7:00 PM","7:30 PM","8:00 PM","8:30 PM","9:00 PM","9:30 PM"];
const PARTY_SIZES = [1, 2, 3, 4, 5, 6, 7, 8];

export function Order() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [confirmed, setConfirmed] = useState(false);
  const [reservation, setReservation] = useState({ date: "", time: "", guests: 2, name: "", email: "", phone: "", notes: "" });

  const update = (k: string, v: string | number) => setReservation((r) => ({ ...r, [k]: v }));

  const STEPS = [{ n: 1, label: "Date & Time" }, { n: 2, label: "Guest Info" }, { n: 3, label: "Confirm" }];

  return (
    <div style={{ paddingTop: 72, minHeight: "100vh" }}>
      {/* Header */}
      <div style={{ background: "rgba(255,255,255,0.02)", borderBottom: "1px solid rgba(212,163,84,0.12)", padding: "5rem 2rem 4rem" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <p className="section-label fade-up">Secure Your Seat</p>
          <h1 className="section-title fade-up delay-1">Reserve a Table</h1>
        </div>
      </div>

      <div style={{ maxWidth: 640, margin: "0 auto", padding: "4rem 2rem 6rem" }}>
        {/* Step indicator */}
        {!confirmed && (
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "3.5rem" }}>
            {STEPS.map(({ n, label }, i) => (
              <div key={n} style={{ display: "flex", alignItems: "center", gap: "1rem", flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                  <div style={{
                    width: 32, height: 32, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "0.8rem", fontWeight: 600, transition: "all 0.3s",
                    background: step >= n ? "var(--gold)" : "rgba(255,255,255,0.07)",
                    color: step >= n ? "#0c0a08" : "rgba(255,255,255,0.35)",
                  }}>{n}</div>
                  <span style={{ fontSize: "0.68rem", letterSpacing: "0.12em", textTransform: "uppercase", color: step >= n ? "var(--gold)" : "rgba(255,255,255,0.3)" }} className="hidden-mobile">
                    {label}
                  </span>
                </div>
                {i < 2 && <div style={{ flex: 1, height: 1, background: step > n ? "var(--gold)" : "rgba(255,255,255,0.1)" }} />}
              </div>
            ))}
          </div>
        )}

        {/* Step 1 */}
        {step === 1 && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <h2 style={{ fontFamily: "var(--display)", fontSize: "1.8rem", color: "var(--fg)", marginBottom: "0.5rem" }}>When would you like to dine?</h2>
            <div>
              <label className="ea-label">Date</label>
              <div style={{ position: "relative" }}>
                <Calendar size={15} style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", color: "rgba(255,255,255,0.3)", pointerEvents: "none" }} />
                <input type="date" value={reservation.date} min={new Date().toISOString().split("T")[0]}
                  onChange={(e) => update("date", e.target.value)}
                  className="ea-input" style={{ paddingLeft: "2.5rem" }} />
              </div>
            </div>
            <div>
              <label className="ea-label">Time</label>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "0.4rem" }}>
                {TIMES.map((t) => (
                  <button key={t} onClick={() => update("time", t)} style={{
                    padding: "0.6rem 0", fontSize: "0.72rem", fontFamily: "var(--body)", letterSpacing: "0.04em",
                    cursor: "pointer", border: "1px solid", transition: "all 0.15s",
                    background: reservation.time === t ? "var(--gold)" : "rgba(255,255,255,0.04)",
                    color: reservation.time === t ? "#0c0a08" : "rgba(255,255,255,0.5)",
                    borderColor: reservation.time === t ? "var(--gold)" : "rgba(212,163,84,0.15)",
                  }}>{t}</button>
                ))}
              </div>
            </div>
            <div>
              <label className="ea-label">Party Size</label>
              <div style={{ position: "relative" }}>
                <Users size={15} style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", color: "rgba(255,255,255,0.3)", pointerEvents: "none" }} />
                <select value={reservation.guests} onChange={(e) => update("guests", Number(e.target.value))}
                  className="ea-input" style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem", appearance: "none", cursor: "pointer" }}>
                  {PARTY_SIZES.map((n) => <option key={n} value={n} style={{ background: "#1a1612" }}>{n} {n === 1 ? "Guest" : "Guests"}</option>)}
                </select>
                <ChevronDown size={14} style={{ position: "absolute", right: 14, top: "50%", transform: "translateY(-50%)", color: "rgba(255,255,255,0.3)", pointerEvents: "none" }} />
              </div>
            </div>
            <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.8rem" }}>For parties of 9 or more, please call (718) 555-0192.</p>
            <button onClick={() => setStep(2)} disabled={!reservation.date || !reservation.time}
              className="btn-gold" style={{ width: "100%", padding: "1rem", opacity: (!reservation.date || !reservation.time) ? 0.4 : 1, cursor: (!reservation.date || !reservation.time) ? "not-allowed" : "pointer" }}>
              Continue
            </button>
          </div>
        )}

        {/* Step 2 */}
        {step === 2 && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <h2 style={{ fontFamily: "var(--display)", fontSize: "1.8rem", color: "var(--fg)", marginBottom: "0.5rem" }}>Your details.</h2>
            {[
              { id: "name", label: "Full Name", type: "text", placeholder: "Jane Smith" },
              { id: "email", label: "Email Address", type: "email", placeholder: "jane@example.com" },
              { id: "phone", label: "Phone Number", type: "tel", placeholder: "(718) 555-0000" },
            ].map(({ id, label, type, placeholder }) => (
              <div key={id}>
                <label htmlFor={id} className="ea-label">{label}</label>
                <input id={id} type={type} placeholder={placeholder} value={(reservation as any)[id]}
                  onChange={(e) => update(id, e.target.value)} className="ea-input" required />
              </div>
            ))}
            <div>
              <label htmlFor="notes" className="ea-label">Special Requests (optional)</label>
              <textarea id="notes" rows={3} placeholder="Allergies, celebrations, seating preferences…"
                value={reservation.notes} onChange={(e) => update("notes", e.target.value)}
                className="ea-input" style={{ resize: "none" }} />
            </div>
            <div style={{ display: "flex", gap: "1rem" }}>
              <button onClick={() => setStep(1)} className="btn-outline" style={{ flex: 1, padding: "1rem", textAlign: "center" }}>Back</button>
              <button onClick={() => setStep(3)} disabled={!reservation.name || !reservation.email}
                className="btn-gold" style={{ flex: 1, padding: "1rem", opacity: (!reservation.name || !reservation.email) ? 0.4 : 1 }}>
                Review
              </button>
            </div>
          </div>
        )}

        {/* Step 3 */}
        {step === 3 && !confirmed && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <h2 style={{ fontFamily: "var(--display)", fontSize: "1.8rem", color: "var(--fg)", marginBottom: "0.5rem" }}>Confirm your reservation.</h2>
            <div style={{ border: "1px solid rgba(212,163,84,0.2)", padding: "2rem", display: "flex", flexDirection: "column", gap: "1rem", background: "rgba(255,255,255,0.025)" }}>
              {[
                { icon: Calendar, label: "Date", value: reservation.date },
                { icon: Clock, label: "Time", value: reservation.time },
                { icon: Users, label: "Guests", value: `${reservation.guests} ${reservation.guests === 1 ? "guest" : "guests"}` },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <Icon size={15} style={{ color: "var(--gold)" }} />
                  <span style={{ fontSize: "0.68rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", width: 60 }}>{label}</span>
                  <span style={{ color: "var(--fg)", fontSize: "0.9rem" }}>{value}</span>
                </div>
              ))}
              <div style={{ borderTop: "1px solid rgba(212,163,84,0.1)", paddingTop: "1rem", marginTop: "0.5rem" }}>
                <p style={{ color: "var(--fg)", fontSize: "0.88rem", marginBottom: "0.3rem" }}>{reservation.name} · {reservation.email}</p>
                {reservation.notes && <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.82rem" }}>Note: {reservation.notes}</p>}
              </div>
            </div>
            <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.8rem" }}>
              A confirmation email will be sent to <span style={{ color: "var(--fg)" }}>{reservation.email}</span>. We hold reservations for 15 minutes past the booked time.
            </p>
            <div style={{ display: "flex", gap: "1rem" }}>
              <button onClick={() => setStep(2)} className="btn-outline" style={{ flex: 1, padding: "1rem" }}>Back</button>
              <button className="btn-gold" style={{ flex: 1, padding: "1rem" }} onClick={() => setConfirmed(true)}>
                Confirm Reservation
              </button>
            </div>
          </div>
        )}

        {/* Confirmed */}
        {confirmed && (
          <div style={{ textAlign: "center", padding: "4rem 2rem", border: "1px solid rgba(212,163,84,0.2)" }}>
            <div style={{ fontSize: "3rem", marginBottom: "1.5rem" }}>🔥</div>
            <h2 style={{ fontFamily: "var(--display)", fontSize: "2rem", color: "var(--fg)", marginBottom: "1rem" }}>You're confirmed.</h2>
            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.9rem", lineHeight: 1.7 }}>
              We look forward to welcoming you, {reservation.name}.<br />A confirmation has been sent to {reservation.email}.
            </p>
            <div className="divider" style={{ margin: "2rem auto" }} />
            <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.8rem" }}>
              {reservation.date} at {reservation.time} · {reservation.guests} {reservation.guests === 1 ? "guest" : "guests"}
            </p>
          </div>
        )}
      </div>
      <style>{`@media (max-width: 600px) { .hidden-mobile { display: none !important; } }`}</style>
    </div>
  );
}
