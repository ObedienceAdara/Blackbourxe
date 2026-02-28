import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { T } from '../constants/designTokens';

const Nav = ({ setPage }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (mobile === false) setMobileMenuOpen(false); // Close menu on resize to desktop
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Close mobile menu when navigating
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const getCurrentPage = () => {
    const path = location.pathname;
    if (path === '/') return 'home';
    return path.substring(1);
  };

  const page = getCurrentPage();

  const links = [
    { id: "home", label: "Home" },
    { id: "research", label: "Research" },
    { id: "about", label: "About" },
    { id: "newsletter", label: "Newsletter" },
  ];

  const handleLinkClick = (id) => {
    setPage(id);
    setMobileMenuOpen(false);
  };

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 200,
      background: scrolled ? "rgba(13,13,13,0.97)" : "transparent",
      backdropFilter: scrolled ? "blur(16px)" : "none",
      borderBottom: scrolled ? `1px solid ${T.border}` : "1px solid transparent",
      transition: "all 0.3s",
    }}>
      {/* Main Nav Bar */}
      <div style={{
        padding: isMobile ? "0 20px" : "0 48px",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        height: "64px",
      }}>
        {/* Logo */}
        <button onClick={() => handleLinkClick("home")} style={{ background: "none", border: "none", cursor: "pointer" }}>
          <span style={{
            fontFamily: "'Syne', sans-serif", fontWeight: 800,
            fontSize: isMobile ? "16px" : "20px", letterSpacing: "-0.5px", color: T.text,
          }}>
            Black<span style={{ color: T.accent }}>bourxe</span>
          </span>
        </button>

        {/* Desktop Links */}
        {!isMobile && (
          <div style={{ display: "flex", gap: "2px", alignItems: "center" }}>
            {links.map(l => (
              <button
                key={l.id}
                onClick={() => handleLinkClick(l.id)}
                style={{
                  background: "none", border: "none", cursor: "pointer",
                  padding: "8px 14px", fontSize: "11px",
                  letterSpacing: "0.1em", textTransform: "uppercase",
                  fontFamily: "'DM Mono', monospace",
                  color: page === l.id ? T.accent : T.muted,
                  borderBottom: page === l.id ? `1px solid ${T.accent}` : "1px solid transparent",
                  transition: "all 0.15s",
                }}
              >{l.label}</button>
            ))}
            <button
              onClick={() => handleLinkClick("consultation")}
              style={{
                marginLeft: "12px",
                background: T.accent, color: T.bg, border: "none",
                padding: "8px 18px", cursor: "pointer",
                fontFamily: "'Syne', sans-serif", fontWeight: 700,
                fontSize: "10px", letterSpacing: "0.1em", textTransform: "uppercase",
              }}
            >Book a Call →</button>
          </div>
        )}

        {/* Mobile Hamburger Menu */}
        {isMobile && (
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: "none", border: "none", cursor: "pointer",
              display: "flex", flexDirection: "column", gap: "4px",
              padding: "8px",
            }}
          >
            <div style={{
              width: "24px", height: "2px", background: T.text,
              transition: "all 0.3s",
              transform: mobileMenuOpen ? "rotate(45deg) translateY(9px)" : "rotate(0)",
            }} />
            <div style={{
              width: "24px", height: "2px", background: T.text,
              opacity: mobileMenuOpen ? 0 : 1,
              transition: "all 0.3s",
            }} />
            <div style={{
              width: "24px", height: "2px", background: T.text,
              transition: "all 0.3s",
              transform: mobileMenuOpen ? "rotate(-45deg) translateY(-9px)" : "rotate(0)",
            }} />
          </button>
        )}
      </div>

      {/* Mobile Menu */}
      {isMobile && mobileMenuOpen && (
        <div style={{
          background: "rgba(13,13,13,0.98)", backdropFilter: "blur(16px)",
          borderBottom: `1px solid ${T.border}`,
          padding: "0",
          animation: "slideDown 0.2s ease-out",
        }}>
          <style>{`
            @keyframes slideDown {
              from { opacity: 0; transform: translateY(-10px); }
              to { opacity: 1; transform: translateY(0); }
            }
          `}</style>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {links.map(l => (
              <button
                key={l.id}
                onClick={() => handleLinkClick(l.id)}
                style={{
                  background: "none", border: "none", cursor: "pointer",
                  padding: "16px 20px", fontSize: "12px",
                  letterSpacing: "0.1em", textTransform: "uppercase",
                  fontFamily: "'DM Mono', monospace",
                  color: page === l.id ? T.accent : T.muted,
                  borderBottom: `1px solid ${T.border}`,
                  textAlign: "left",
                  transition: "background 0.15s",
                }}
                onMouseEnter={e => e.target.style.background = T.surface}
                onMouseLeave={e => e.target.style.background = "transparent"}
              >{l.label}</button>
            ))}
            <button
              onClick={() => handleLinkClick("consultation")}
              style={{
                background: T.accent, color: T.bg, border: "none",
                padding: "16px 20px", cursor: "pointer",
                fontFamily: "'Syne', sans-serif", fontWeight: 700,
                fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase",
                margin: "8px",
              }}
            >Book a Call →</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
