import React from 'react';
import { T } from '../constants/designTokens';
import NewsletterInline from './shared/NewsletterInline';

const Footer = ({ setPage }) => (
  <footer style={{
    background: T.surface, borderTop: `1px solid ${T.border}`,
    padding: "60px 48px 32px",
  }}>
    <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: "48px", marginBottom: "48px" }}>

        {/* Brand */}
        <div>
          <div style={{
            fontFamily: "'Syne', sans-serif", fontWeight: 800,
            fontSize: "24px", letterSpacing: "-0.5px", color: T.text,
            marginBottom: "16px",
          }}>
            Black<span style={{ color: T.accent }}>bourxe</span>
          </div>
          <p style={{ fontSize: "13px", lineHeight: 1.75, color: T.muted, maxWidth: "280px", marginBottom: "20px" }}>
            Intelligence briefings for builders. Deep, cited, no-fluff research on AI, business, tech, and money.
          </p>
          <NewsletterInline />
        </div>

        {/* Research */}
        <div>
          <div style={{
            fontFamily: "'DM Mono', monospace", fontSize: "10px",
            letterSpacing: "0.2em", textTransform: "uppercase",
            color: T.muted, marginBottom: "16px",
          }}>Research</div>
          {["AI", "Business", "Tech", "Money", "Career", "Health"].map(cat => (
            <div key={cat} style={{ marginBottom: "10px" }}>
              <button onClick={() => setPage("research")} style={{
                background: "none", border: "none", cursor: "pointer",
                color: T.muted, fontFamily: "'DM Mono', monospace",
                fontSize: "12px", padding: 0, transition: "color 0.15s",
              }}
                onMouseEnter={e => e.target.style.color = T.text}
                onMouseLeave={e => e.target.style.color = T.muted}
              >{cat}</button>
            </div>
          ))}
        </div>

        {/* Pages */}
        <div>
          <div style={{
            fontFamily: "'DM Mono', monospace", fontSize: "10px",
            letterSpacing: "0.2em", textTransform: "uppercase",
            color: T.muted, marginBottom: "16px",
          }}>Pages</div>
          {[
            { id: "home", label: "Home" },
            { id: "research", label: "Research" },
            { id: "about", label: "About" },
            { id: "newsletter", label: "Newsletter" },
            { id: "consultation", label: "Consultation" },
          ].map(link => (
            <div key={link.id} style={{ marginBottom: "10px" }}>
              <button onClick={() => setPage(link.id)} style={{
                background: "none", border: "none", cursor: "pointer",
                color: T.muted, fontFamily: "'DM Mono', monospace",
                fontSize: "12px", padding: 0, transition: "color 0.15s",
              }}
                onMouseEnter={e => e.target.style.color = T.text}
                onMouseLeave={e => e.target.style.color = T.muted}
              >{link.label}</button>
            </div>
          ))}
        </div>

        {/* Contact */}
        <div>
          <div style={{
            fontFamily: "'DM Mono', monospace", fontSize: "10px",
            letterSpacing: "0.2em", textTransform: "uppercase",
            color: T.muted, marginBottom: "16px",
          }}>Contact</div>
          <p style={{ fontSize: "12px", color: T.muted, lineHeight: 1.7, marginBottom: "16px" }}>
            briefs@blackbourxe.com
          </p>
          <p style={{ fontSize: "12px", color: T.muted, lineHeight: 1.7 }}>
            For collaboration, press, or research inquiries — reach out directly.
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{
        paddingTop: "24px", borderTop: `1px solid ${T.border}`,
        display: "flex", justifyContent: "space-between", alignItems: "center",
        fontSize: "10px", letterSpacing: "0.12em", textTransform: "uppercase",
        color: T.muted, flexWrap: "wrap", gap: "12px",
      }}>
        <span>© 2026 Blackbourxe · All rights reserved</span>
        <span>Built for builders · <span style={{ color: T.accent }}>Research without the noise</span></span>
      </div>
    </div>
  </footer>
);

export default Footer;
