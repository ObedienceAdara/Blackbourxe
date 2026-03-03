import React, { useState, useEffect } from 'react';
import { T } from '../constants/designTokens';
import SectionLabel from '../components/shared/SectionLabel';
import { trackConsultationSubmit } from '../utils/analytics';

const ConsultationPage = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isTablet, setIsTablet] = useState(window.innerWidth <= 1024);

  useEffect(() => {
    document.title = 'Consultation — Blackbourxe';

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      setIsTablet(window.innerWidth <= 1024);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const [form, setForm] = useState({ name: "", email: "", topic: "", detail: "" });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    } else if (form.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(form.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!form.topic) {
      newErrors.topic = "Please select a service";
    }

    if (!form.detail.trim()) {
      newErrors.detail = "Please describe what you need";
    } else if (form.detail.trim().length < 20) {
      newErrors.detail = "Please provide more details (at least 20 characters)";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      // Send data to Make.com webhook
      const webhookUrl = process.env.REACT_APP_WEBHOOK_CONSULTATION;
      if (!webhookUrl) {
        setErrors({ general: "Configuration error. Please try again later." });
        return;
      }

      fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          service: form.topic,
          details: form.detail.trim(),
          timestamp: new Date().toISOString(),
        }),
      })
      .then(response => {
        if (response.ok) {
          setSubmitted(true);
          trackConsultationSubmit(form.topic);
        } else {
          setErrors({ ...errors, submit: "Something went wrong. Please try again." });
        }
      })
      .catch(error => {
        console.error('Error:', error);
        setErrors({ ...errors, submit: "Network error. Please check your connection and try again." });
      });
    }
  };

  const handleFieldChange = (field, value) => {
    setForm({ ...form, [field]: value });
    // Clear error for this field when user starts typing
    if (errors[field]) {
      setErrors({ ...errors, [field]: "" });
    }
  };

  const services = [
    { title: "AI Strategy Session", price: "$200", duration: "60 min", desc: "Model selection, AI product decisions, infrastructure choices, and deployment strategy for your specific use case.", color: T.green },
    { title: "Startup Advisory", price: "$200", duration: "60 min", desc: "PMF analysis, fundraising strategy, pricing, GTM, unit economics review, and specific roadmap feedback.", color: T.orange },
    { title: "Career Direction", price: "$150", duration: "45 min", desc: "Tech job search strategy, salary negotiation for your specific offer, personal brand positioning, or skill roadmap.", color: T.accent },
    { title: "Deep Research Session", price: "$250", duration: "90 min", desc: "Custom deep-dive research on any topic — competitive landscape, market sizing, technical architecture, or strategic decision.", color: T.blue },
  ];

  return (
    <div style={{ paddingTop: "64px" }}>
      <div style={{ padding: isMobile ? "40px 20px" : isTablet ? "60px 40px" : "80px 48px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ 
            display: "grid", 
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", 
            gap: isMobile ? "40px" : isTablet ? "60px" : "80px", 
            alignItems: isMobile ? "stretch" : "start" 
          }}>

            {/* Left: Services */}
            <div>
              <SectionLabel>Expert Consultation</SectionLabel>
              <h1 style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: isMobile ? "clamp(28px, 6vw, 48px)" : "clamp(32px, 4.5vw, 56px)",
                fontWeight: 800, letterSpacing: "-2px",
                lineHeight: 1, marginBottom: "24px",
              }}>
                Strategic guidance.<br /><span style={{ color: T.accent }}>Research-backed.</span>
              </h1>
              <p style={{
                fontFamily: "'Instrument Serif', serif", fontStyle: "italic",
                fontSize: isMobile ? "15px" : "17px", lineHeight: 1.65, color: T.muted, marginBottom: "40px",
              }}>
                Every consultation is grounded in the same research standard as the briefs — no generic advice, no recycled frameworks. Your specific situation gets specific intelligence.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: T.border, marginBottom: "32px" }}>
                {services.map(s => (
                  <div key={s.title} style={{
                    background: T.surface, padding: isMobile ? "20px" : "28px",
                    borderLeft: `3px solid ${s.color}`,
                    transition: "background 0.15s",
                  }}
                    onMouseEnter={e => e.currentTarget.style.background = T.surface2}
                    onMouseLeave={e => e.currentTarget.style.background = T.surface}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "10px", flexDirection: isMobile ? "column" : "row", gap: isMobile ? "8px" : "0" }}>
                      <div style={{
                        fontFamily: "'Syne', sans-serif", fontWeight: 700,
                        fontSize: isMobile ? "14px" : "16px", color: T.text,
                      }}>{s.title}</div>
                      <div style={{ textAlign: isMobile ? "left" : "right" }}>
                        <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, color: s.color, fontSize: isMobile ? "16px" : "18px" }}>{s.price}</div>
                        <div style={{ fontSize: "9px", color: T.muted, letterSpacing: "0.1em", textTransform: "uppercase" }}>{s.duration}</div>
                      </div>
                    </div>
                    <p style={{ fontSize: isMobile ? "12px" : "12.5px", lineHeight: 1.7, color: T.muted }}>{s.desc}</p>
                  </div>
                ))}
              </div>

              <div style={{
                padding: isMobile ? "16px 20px" : "20px 24px", background: T.surface,
                border: `1px solid ${T.border}`, borderLeft: `3px solid ${T.muted}`,
                fontSize: isMobile ? "11px" : "12px", color: T.muted, lineHeight: 1.7,
              }}>
                <strong style={{ color: T.text }}>How it works:</strong> Submit your request → receive a calendar link within 24h → call happens via Google Meet or Zoom → you receive a written summary of recommendations within 48h.
              </div>
            </div>

            {/* Right: Form */}
            <div>
              <div style={{ background: T.surface, border: `1px solid ${T.border}`, padding: isMobile ? "32px 20px" : isTablet ? "36px 28px" : "40px" }}>
                <div style={{
                  fontFamily: "'Syne', sans-serif", fontWeight: 700,
                  fontSize: isMobile ? "16px" : "18px", letterSpacing: "-0.3px",
                  marginBottom: "28px", color: T.text,
                }}>Book a Session</div>

                {[
                  { key: "name", label: "Your Name", placeholder: "Full name", type: "text" },
                  { key: "email", label: "Email", placeholder: "your@email.com", type: "email" },
                ].map(field => (
                  <div key={field.key} style={{ marginBottom: "20px" }}>
                    <label style={{
                      display: "block", fontSize: "10px",
                      letterSpacing: "0.15em", textTransform: "uppercase",
                      color: T.muted, marginBottom: "8px",
                      fontFamily: "'DM Mono', monospace",
                    }}>{field.label}</label>
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      value={form[field.key]}
                      onChange={e => handleFieldChange(field.key, e.target.value)}
                      style={{
                        width: "100%", boxSizing: "border-box", background: T.surface2,
                        border: `1px solid ${errors[field.key] ? T.red : T.border}`,
                        padding: "12px 16px", color: T.text,
                        fontFamily: "'DM Mono', monospace", fontSize: "13px",
                        outline: "none",
                      }}
                    />
                    {errors[field.key] && (
                      <div style={{ 
                        fontSize: "11px", 
                        color: T.red, 
                        marginTop: "6px",
                        fontFamily: "'DM Mono', monospace"
                      }}>
                        {errors[field.key]}
                      </div>
                    )}
                  </div>
                ))}

                <div style={{ marginBottom: "20px" }}>
                  <label style={{
                    display: "block", fontSize: "10px",
                    letterSpacing: "0.15em", textTransform: "uppercase",
                    color: T.muted, marginBottom: "8px",
                    fontFamily: "'DM Mono', monospace",
                  }}>Service</label>
                  <select
                    value={form.topic}
                    onChange={e => handleFieldChange("topic", e.target.value)}
                    style={{
                      width: "100%", boxSizing: "border-box", background: T.surface2,
                      border: `1px solid ${errors.topic ? T.red : T.border}`,
                      padding: "12px 16px", color: form.topic ? T.text : T.muted,
                      fontFamily: "'DM Mono', monospace", fontSize: "13px",
                      outline: "none", cursor: "pointer",
                    }}
                  >
                    <option value="">Select a service...</option>
                    {services.map(s => <option key={s.title} value={s.title}>{s.title} — {s.price}</option>)}
                  </select>
                  {errors.topic && (
                    <div style={{ 
                      fontSize: "11px", 
                      color: T.red, 
                      marginTop: "6px",
                      fontFamily: "'DM Mono', monospace"
                    }}>
                      {errors.topic}
                    </div>
                  )}
                </div>

                <div style={{ marginBottom: "28px" }}>
                  <label style={{
                    display: "block", fontSize: "10px",
                    letterSpacing: "0.15em", textTransform: "uppercase",
                    color: T.muted, marginBottom: "8px",
                    fontFamily: "'DM Mono', monospace",
                  }}>What do you need?</label>
                  <textarea
                    rows={isMobile ? 4 : 5}
                    placeholder="Describe your situation, the decision you're facing, or the question you need answered..."
                    value={form.detail}
                    onChange={e => handleFieldChange("detail", e.target.value)}
                    style={{
                      width: "100%", boxSizing: "border-box", background: T.surface2,
                      border: `1px solid ${errors.detail ? T.red : T.border}`,
                      padding: "12px 16px", color: T.text,
                      fontFamily: "'DM Mono', monospace", fontSize: "13px",
                      outline: "none", resize: "vertical", lineHeight: 1.7,
                    }}
                  />
                  {errors.detail && (
                    <div style={{ 
                      fontSize: "11px", 
                      color: T.red, 
                      marginTop: "6px",
                      fontFamily: "'DM Mono', monospace"
                    }}>
                      {errors.detail}
                    </div>
                  )}
                </div>

                {errors.submit && (
                  <div style={{ 
                    fontSize: "12px", 
                    color: T.red, 
                    marginBottom: "16px",
                    padding: "12px 16px",
                    background: `${T.red}10`,
                    border: `1px solid ${T.red}30`,
                    fontFamily: "'DM Mono', monospace"
                  }}>
                    {errors.submit}
                  </div>
                )}

                <button
                  onClick={handleSubmit}
                  style={{
                    width: "100%", background: T.accent, color: T.bg,
                    border: "none", padding: "16px",
                    cursor: "pointer", fontFamily: "'Syne', sans-serif",
                    fontWeight: 700, fontSize: "12px",
                    letterSpacing: "0.1em", textTransform: "uppercase",
                  }}
                >Submit Request →</button>
              </div>
            </div>
          </div>
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
            padding: isMobile ? "40px 24px" : "60px 40px",
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
              fontFamily: "'Syne', sans-serif", fontSize: isMobile ? "48px" : "56px",
              fontWeight: 800, color: T.accent, lineHeight: 1, marginBottom: "20px",
            }}>✓</div>
            <h3 style={{
              fontFamily: "'Syne', sans-serif", fontSize: isMobile ? "20px" : "24px",
              fontWeight: 700, letterSpacing: "-0.5px", marginBottom: "12px",
            }}>Request Received</h3>
            <p style={{ fontSize: isMobile ? "13px" : "14px", lineHeight: 1.75, color: T.muted }}>
              You'll receive a calendar link at <strong style={{ color: T.text }}>{form.email}</strong> within 24 hours. Come prepared with specifics — that's how we make the session worth your time.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ConsultationPage;
