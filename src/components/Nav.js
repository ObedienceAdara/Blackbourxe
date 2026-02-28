import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { T } from '../constants/designTokens';

const Nav = ({ setPage }) => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

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
    { id: "consultation", label: "Consult" },
  ];

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 200,
      background: scrolled ? "rgba(13,13,13,0.97)" : "transparent",
      backdropFilter: scrolled ? "blur(16px)" : "none",
      borderBottom: scrolled ? `1px solid ${T.border}` : "1px solid transparent",
      transition: "all 0.3s",
      padding: "0 48px",
      display: "flex", justifyContent: "space-between", alignItems: "center",
      height: "64px",
    }}>
      {/* Logo */}
      <button onClick={() => setPage("home")} style={{ background: "none", border: "none", cursor: "pointer" }}>
        <span style={{
          fontFamily: "'Syne', sans-serif", fontWeight: 800,
          fontSize: "20px", letterSpacing: "-0.5px", color: T.text,
        }}>
          Black<span style={{ color: T.accent }}>bourxe</span>
        </span>
      </button>

      {/* Desktop Links */}
      <div style={{ display: "flex", gap: "2px", alignItems: "center" }}>
        {links.map(l => (
          <button
            key={l.id}
            onClick={() => setPage(l.id)}
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
          onClick={() => setPage("consultation")}
          style={{
            marginLeft: "12px",
            background: T.accent, color: T.bg, border: "none",
            padding: "8px 18px", cursor: "pointer",
            fontFamily: "'Syne', sans-serif", fontWeight: 700,
            fontSize: "10px", letterSpacing: "0.1em", textTransform: "uppercase",
          }}
        >Book a Call →</button>
      </div>
    </nav>
  );
};

export default Nav;
