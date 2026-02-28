import React, { useState, useEffect } from 'react';
import { T, CAT_COLORS } from '../constants/designTokens';
import SectionLabel from '../components/shared/SectionLabel';
import { trackNewsletterSignup } from '../utils/analytics';

const NewsletterPage = () => {
  useEffect(() => {
    document.title = 'Newsletter — Blackbourxe';
  }, []);

  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [interests, setInterests] = useState([]);
  const [error, setError] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = () => {
    setError("");
    
    if (!email.trim()) {
      setError("Email is required");
      return;
    }
    
    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }
    
    // Send data to Make.com webhook
    fetch('https://hook.eu2.make.com/exwtidtmqhvpffne6izk9ivix5n9iayw', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email.trim(),
        interests: interests.length > 0 ? interests : null,
        source: 'newsletter_page',
        timestamp: new Date().toISOString(),
      }),
    })
    .then(response => {
      if (response.ok) {
        setSubmitted(true);
      } else {
        setError("Something went wrong. Please try again.");
      }
    })
    .catch(error => {
      console.error('Error:', error);
      setError("Network error. Please check your connection.");
    });
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  const toggleInterest = cat => {
    setInterests(prev => prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]);
  };

  return (
    <div style={{ paddingTop: "64px" }}>
      <div style={{
        minHeight: "100vh", padding: "80px 48px",
        background: `radial-gradient(ellipse at 50% 0%, rgba(240,255,68,0.04) 0%, transparent 60%)`,
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        <div style={{ maxWidth: "640px", width: "100%" }}>
          <>
            <SectionLabel>Weekly Intelligence Brief</SectionLabel>
            <h1 style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(36px, 5vw, 64px)",
              fontWeight: 800, letterSpacing: "-2.5px",
              lineHeight: 0.95, marginBottom: "24px",
            }}>
              One brief.<br /><span style={{ color: T.accent }}>No noise.</span><br />Every Tuesday.
            </h1>
            <p style={{
              fontFamily: "'Instrument Serif', serif", fontStyle: "italic",
              fontSize: "18px", lineHeight: 1.65, color: T.muted, marginBottom: "40px",
            }}>
              The Blackbourxe Weekly Brief compresses the most important intelligence across AI, business, tech, and money into one focused reading. Cited. Actionable. Free.
            </p>

            {/* Interest selector */}
            <div style={{ marginBottom: "28px" }}>
              <div style={{
                fontSize: "10px", letterSpacing: "0.15em", textTransform: "uppercase",
                color: T.muted, marginBottom: "12px", fontFamily: "'DM Mono', monospace",
              }}>Personalize your brief (optional)</div>
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                {Object.keys(CAT_COLORS).map(cat => (
                  <button
                    key={cat}
                    onClick={() => toggleInterest(cat)}
                    style={{
                      padding: "6px 14px", border: `1px solid`,
                      borderColor: interests.includes(cat) ? CAT_COLORS[cat].border : T.border,
                      background: interests.includes(cat) ? CAT_COLORS[cat].bg : "transparent",
                      color: interests.includes(cat) ? CAT_COLORS[cat].text : T.muted,
                      cursor: "pointer",
                      fontFamily: "'DM Mono', monospace",
                      fontSize: "10px", letterSpacing: "0.1em", textTransform: "uppercase",
                      transition: "all 0.15s",
                    }}
                  >{cat}</button>
                ))}
              </div>
            </div>

            {/* Email input */}
            <div style={{ marginBottom: "16px" }}>
              <div style={{ display: "flex", gap: "0" }}>
                <input
                  value={email}
                  onChange={e => {
                    setEmail(e.target.value);
                    setError("");
                  }}
                  onKeyPress={handleKeyPress}
                  placeholder="your@email.com"
                  type="email"
                  style={{
                    flex: 1, background: T.surface, 
                    border: `1px solid ${error ? T.red : T.border}`,
                    borderRight: "none", padding: "14px 20px", color: T.text,
                    fontFamily: "'DM Mono', monospace", fontSize: "14px", outline: "none",
                  }}
                />
                <button
                  onClick={handleSubmit}
                  style={{
                    background: T.accent, color: T.bg, border: "none",
                    padding: "14px 24px", cursor: "pointer",
                    fontFamily: "'Syne', sans-serif", fontWeight: 700,
                    fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase",
                  }}
                >Subscribe →</button>
              </div>
              {error && (
                <div style={{ 
                  fontSize: "11px", 
                  color: T.red, 
                  marginTop: "8px",
                  fontFamily: "'DM Mono', monospace"
                }}>
                  {error}
                </div>
              )}
            </div>

            <div style={{ fontSize: "10px", color: T.muted, letterSpacing: "0.1em", textTransform: "uppercase" }}>
              No spam. No ads. Unsubscribe any time. 
            </div>

            {/* Social proof */}
            <div style={{
              marginTop: "48px", padding: "24px 28px",
              background: T.surface, border: `1px solid ${T.border}`,
            }}>
              <div style={{
                fontFamily: "'Instrument Serif', serif", fontStyle: "italic",
                fontSize: "16px", color: T.text, lineHeight: 1.6, marginBottom: "12px",
              }}>
                "The Blackbourxe brief is the only newsletter I open the same day it arrives. Dense, honest, and always actionable."
              </div>
              <div style={{ fontSize: "10px", color: T.muted, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                — Subscriber, Lagos
              </div>
            </div>
          </>
        </div>
      </div>

      {/* Success Modal/Popup */}
      {submitted && (
        <div style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "rgba(0, 0, 0, 0.85)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 9999,
          padding: "20px",
        }}>
          <div style={{
            background: T.bg,
            border: `1px solid ${T.border}`,
            maxWidth: "500px",
            width: "100%",
            padding: "60px 40px",
            position: "relative",
            textAlign: "center",
          }}>
            {/* Close button */}
            <button
              onClick={() => setSubmitted(false)}
              style={{
                position: "absolute",
                top: "20px",
                right: "20px",
                background: "transparent",
                border: "none",
                color: T.muted,
                fontSize: "24px",
                cursor: "pointer",
                padding: "0",
                width: "32px",
                height: "32px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "color 0.15s",
              }}
              onMouseEnter={e => e.currentTarget.style.color = T.text}
              onMouseLeave={e => e.currentTarget.style.color = T.muted}
            >
              ×
            </button>

            <div style={{
              fontFamily: "'Syne', sans-serif", fontSize: "80px",
              fontWeight: 800, color: T.accent, letterSpacing: "-4px", lineHeight: 1,
              marginBottom: "24px",
            }}>✓</div>
            <h2 style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "36px", fontWeight: 800,
              letterSpacing: "-1.5px", marginBottom: "16px",
            }}>You're in.</h2>
            <p style={{
              fontFamily: "'Instrument Serif', serif", fontStyle: "italic",
              fontSize: "18px", color: T.muted, lineHeight: 1.6,
            }}>
              First brief lands in your inbox this Tuesday. Welcome to the intelligence operation.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewsletterPage;
