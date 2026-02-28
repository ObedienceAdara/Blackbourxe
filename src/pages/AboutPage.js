import React, { useEffect } from 'react';
import { T } from '../constants/designTokens';
import SectionLabel from '../components/shared/SectionLabel';

const AboutPage = ({ setPage }) => {
  useEffect(() => {
    document.title = 'About — Blackbourxe';
  }, []);

  return (
  <div style={{ paddingTop: "64px" }}>
    <div style={{
      padding: "80px 48px",
      background: `radial-gradient(ellipse at 20% 100%, rgba(0,180,255,0.03) 0%, transparent 50%)`,
    }}>
      <div style={{ maxWidth: "960px", margin: "0 auto" }}>
        <SectionLabel>About Blackbourxe</SectionLabel>
        <h1 style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: "clamp(40px, 6vw, 80px)",
          fontWeight: 800, letterSpacing: "-3px",
          lineHeight: 0.95, marginBottom: "40px",
        }}>
          Built for<br /><span style={{ color: T.accent }}>builders</span>,<br />
          <span style={{ color: "rgba(232,227,216,0.25)" }}>not readers.</span>
        </h1>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "start", marginBottom: "80px" }}>
          <div>
            <p style={{
              fontFamily: "'Instrument Serif', serif", fontStyle: "italic",
              fontSize: "20px", lineHeight: 1.65, color: T.muted, marginBottom: "24px",
            }}>
              Blackbourxe is an intelligence publishing brand. Not a blog. Not a newsletter. A research operation — built on the belief that the people building things deserve better than recycled takes and watered-down summaries.
            </p>
            <p style={{ fontSize: "14px", lineHeight: 1.85, color: T.muted, marginBottom: "20px" }}>
              Every brief published on Blackbourxe is original research — sourced from primary data, academic literature, and real-world operator experience. We cite everything. We update when the evidence changes. We say "we don't know" when we don't know.
            </p>
            <p style={{ fontSize: "14px", lineHeight: 1.85, color: T.muted }}>
              The name is a signal: this is not a soft space. It's a place for rigorous thinking, honest analysis, and intelligence that changes how you act — not just how you feel.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: T.border }}>
            {[
              { label: "Mission", value: "Make deep research accessible to everyone building something real — for free." },
              { label: "Standard", value: "Every claim is sourced. Every framework is testable. No filler, ever." },
              { label: "Audience", value: "Founders, engineers, operators, students, and anyone who acts on intelligence." },
              { label: "Frequency", value: "New research weekly. Newsletter every Tuesday." },
            ].map(item => (
              <div key={item.label} style={{ background: T.surface, padding: "24px 28px" }}>
                <div style={{
                  fontFamily: "'Syne', sans-serif", fontWeight: 700,
                  fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase",
                  color: T.accent, marginBottom: "8px",
                }}>{item.label}</div>
                <div style={{ fontSize: "13px", lineHeight: 1.7, color: T.muted }}>{item.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Expertise areas */}
        <div style={{ marginBottom: "60px" }}>
          <SectionLabel>Areas of Expertise</SectionLabel>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1px", background: T.border, border: `1px solid ${T.border}` }}>
            {[
              { cat: "AI & Machine Learning", desc: "Model architecture, deployment, agents, safety, and the business of AI.", color: T.green },
              { cat: "Startup & Business Strategy", desc: "PMF, fundraising, unit economics, GTM, and what actually builds durable companies.", color: T.orange },
              { cat: "Technology Infrastructure", desc: "Cloud, data systems, security, open source, and the tools that power modern products.", color: T.blue },
              { cat: "Money & Finance", desc: "Investing, startup finance, equity, wealth-building, and behavioral economics.", color: T.red },
              { cat: "Career & Professional", desc: "Tech careers, negotiation, personal brand, and skill development in the AI era.", color: T.accent },
              { cat: "Society & Future", desc: "The cultural, economic, and ethical implications of the technology being built.", color: T.purple },
            ].map(item => (
              <div key={item.cat} style={{ background: T.surface, padding: "28px" }}>
                <div style={{ width: "24px", height: "2px", background: item.color, marginBottom: "16px" }} />
                <div style={{
                  fontFamily: "'Syne', sans-serif", fontWeight: 700,
                  fontSize: "14px", color: T.text, marginBottom: "10px",
                }}>{item.cat}</div>
                <div style={{ fontSize: "12px", lineHeight: 1.7, color: T.muted }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA row */}
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          <button onClick={() => setPage("research")} style={{
            background: T.accent, color: T.bg, border: "none",
            padding: "14px 28px", cursor: "pointer",
            fontFamily: "'Syne', sans-serif", fontWeight: 700,
            fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase",
          }}>Browse Research →</button>
          <button onClick={() => setPage("consultation")} style={{
            background: "transparent", color: T.text,
            border: `1px solid ${T.border}`,
            padding: "14px 28px", cursor: "pointer",
            fontFamily: "'DM Mono', monospace",
            fontSize: "11px", letterSpacing: "0.08em",
          }}>Book a Consultation</button>
        </div>
      </div>
    </div>
  </div>
  );
};

export default AboutPage;
