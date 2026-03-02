import React, { useEffect, useState } from 'react';
import { T } from '../constants/designTokens';
import SectionLabel from '../components/shared/SectionLabel';
import { Instagram, Linkedin, Facebook } from 'lucide-react';
import xLogo from '../assets/x.png';
import threadsLogo from '../assets/threads.png';
import substackLogo from '../assets/substack.png';
import mediumLogo from '../assets/medium.png';

const AboutPage = ({ setPage }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    document.title = 'About — Blackbourxe';
    
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
  <div style={{ paddingTop: "64px" }}>
    <div style={{
      padding: isMobile ? "60px 24px" : "80px 48px",
      background: `radial-gradient(ellipse at 20% 100%, rgba(0,180,255,0.03) 0%, transparent 50%)`,
    }}>
      <div style={{ maxWidth: "960px", margin: "0 auto" }}>
        <SectionLabel>About Blackbourxe</SectionLabel>
        <h1 style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: isMobile ? "clamp(32px, 10vw, 56px)" : "clamp(40px, 6vw, 80px)",
          fontWeight: 800, letterSpacing: "-3px",
          lineHeight: 0.95, marginBottom: "40px",
        }}>
          Built for<br /><span style={{ color: T.accent }}>builders</span>,<br />
          <span style={{ color: "rgba(232,227,216,0.25)" }}>not readers.</span>
        </h1>

        <div style={{ 
          display: "grid", 
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", 
          gap: isMobile ? "40px" : "60px", 
          alignItems: "start", 
          marginBottom: isMobile ? "60px" : "80px" 
        }}>
          <div>
            <p style={{
              fontFamily: "'Instrument Serif', serif", fontStyle: "italic",
              fontSize: isMobile ? "18px" : "20px", lineHeight: 1.65, color: T.muted, marginBottom: "24px",
            }}>
              Blackbourxe is an intelligence publishing brand. Not a blog. Not a newsletter. A research operation — built on the belief that the people building things deserve better than recycled takes and watered-down summaries.
            </p>
            <p style={{ fontSize: isMobile ? "13px" : "14px", lineHeight: 1.85, color: T.muted, marginBottom: "20px" }}>
              Every brief published on Blackbourxe is original research — sourced from primary data, academic literature, and real-world operator experience. We cite everything. We update when the evidence changes. We say "we don't know" when we don't know.
            </p>
            <p style={{ fontSize: isMobile ? "13px" : "14px", lineHeight: 1.85, color: T.muted }}>
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
              <div key={item.label} style={{ background: T.surface, padding: isMobile ? "20px 24px" : "24px 28px" }}>
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
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", gap: "1px", background: T.border, border: `1px solid ${T.border}` }}>
            {[
              { cat: "AI & Machine Learning", desc: "Model architecture, deployment, agents, safety, and the business of AI.", color: T.green },
              { cat: "Startup & Business Strategy", desc: "PMF, fundraising, unit economics, GTM, and what actually builds durable companies.", color: T.orange },
              { cat: "Technology Infrastructure", desc: "Cloud, data systems, security, open source, and the tools that power modern products.", color: T.blue },
              { cat: "Money & Finance", desc: "Investing, startup finance, equity, wealth-building, and behavioral economics.", color: T.red },
              { cat: "Career & Professional", desc: "Tech careers, negotiation, personal brand, and skill development in the AI era.", color: T.accent },
              { cat: "Society & Future", desc: "The cultural, economic, and ethical implications of the technology being built.", color: T.purple },
            ].map(item => (
              <div key={item.cat} style={{ background: T.surface, padding: isMobile ? "24px" : "28px" }}>
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

        {/* Stay Connected section */}
        <div style={{ marginBottom: "48px", paddingTop: "48px", borderTop: `1px solid ${T.border}` }}>
          <div style={{
            fontFamily: "'DM Mono', monospace", fontSize: "10px",
            letterSpacing: "0.2em", textTransform: "uppercase",
            color: T.muted, marginBottom: "16px",
          }}>Stay Connected</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
            {[
              { type: "image", src: xLogo, url: "https://x.com/blackbourxe", label: "X" },
              { type: "icon", Icon: Instagram, url: "https://instagram.com/blackbourxe", label: "Instagram" },
              { type: "icon", Icon: Linkedin, url: "https://linkedin.com/company/blackbourxe", label: "LinkedIn" },
              { type: "image", src: threadsLogo, url: "https://threads.net/@blackbourxe", label: "Threads" },
              { type: "image", src: substackLogo, url: "https://blackbourxe.substack.com", label: "Substack" },
              { type: "image", src: mediumLogo, url: "https://medium.com/@blackbourxe", label: "Medium" },
              { type: "icon", Icon: Facebook, url: "https://facebook.com/blackbourxe", label: "Facebook" },
            ].map(social => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                title={social.label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: isMobile ? "36px" : "40px",
                  height: isMobile ? "36px" : "40px",
                  color: T.muted,
                  textDecoration: "none",
                  border: `1px solid ${T.border}`,
                  borderRadius: "4px",
                  transition: "all 0.15s",
                  padding: "4px",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = T.accent;
                  e.currentTarget.style.borderColor = T.accent;
                  e.currentTarget.style.background = "rgba(240,255,68,0.05)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = T.muted;
                  e.currentTarget.style.borderColor = T.border;
                  e.currentTarget.style.background = "transparent";
                }}
              >
                {social.type === "image" ? (
                  <img 
                    src={social.src} 
                    alt={social.label}
                    style={{ width: isMobile ? "18px" : "20px", height: isMobile ? "18px" : "20px", objectFit: "contain" }}
                  />
                ) : (
                  <social.Icon size={isMobile ? 18 : 20} strokeWidth={1.5} />
                )}
              </a>
            ))}
          </div>
        </div>

        {/* CTA row */}
        <div style={{ 
          display: "flex", 
          gap: "12px", 
          flexDirection: isMobile ? "column" : "row",
          flexWrap: "wrap" 
        }}>
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
