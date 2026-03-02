import React, { useState, useEffect } from 'react';
import { T } from '../constants/designTokens';
import NewsletterInline from './shared/NewsletterInline';
import { Instagram, Linkedin, Facebook } from 'lucide-react';
import xLogo from '../assets/x.png';
import threadsLogo from '../assets/threads.png';
import substackLogo from '../assets/substack.png';
import mediumLogo from '../assets/medium.png';

const Footer = ({ setPage }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isTablet, setIsTablet] = useState(window.innerWidth <= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      setIsTablet(window.innerWidth <= 1024);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <footer style={{
      background: T.surface, borderTop: `1px solid ${T.border}`,
      padding: isMobile ? "40px 20px 24px" : "60px 48px 32px",
    }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: isMobile 
            ? "1fr" 
            : isTablet 
            ? "1fr 1fr" 
            : "2fr 1fr 1fr 1fr",
          gap: isMobile ? "32px" : "48px", 
          marginBottom: "48px" 
        }}>

          {/* Brand */}
          <div>
            <div style={{
              fontFamily: "'Syne', sans-serif", fontWeight: 800,
              fontSize: isMobile ? "20px" : "24px", letterSpacing: "-0.5px", color: T.text,
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
            <p style={{ fontSize: "12px", color: T.muted, lineHeight: 1.7, marginBottom: "20px" }}>
              For collaboration, press, or research inquiries — reach out directly.
            </p>
            <div style={{ marginTop: "20px", paddingTop: "16px", borderTop: `1px solid ${T.border}` }}>
              <div style={{
                fontFamily: "'DM Mono', monospace", fontSize: "9px",
                letterSpacing: "0.2em", textTransform: "uppercase",
                color: T.muted, marginBottom: "12px",
              }}>Follow</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
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
                      width: "32px",
                      height: "32px",
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
                        style={{ width: "16px", height: "16px", objectFit: "contain" }}
                      />
                    ) : (
                      <social.Icon size={16} strokeWidth={1.5} />
                    )}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          paddingTop: "24px", borderTop: `1px solid ${T.border}`,
          display: "flex", justifyContent: isMobile ? "center" : "space-between", 
          alignItems: "center",
          fontSize: "9px", letterSpacing: "0.12em", textTransform: "uppercase",
          color: T.muted, flexWrap: "wrap", gap: "12px",
          textAlign: isMobile ? "center" : "left",
          flexDirection: isMobile ? "column" : "row"
        }}>
          <span>© 2026 Blackbourxe · All rights reserved</span>
          <span>Built for builders · <span style={{ color: T.accent }}>Research without the noise</span></span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
