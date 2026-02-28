import { useState, useEffect } from "react";
import { T } from '../../constants/designTokens';
import CatTag from './CatTag';
import DemandBar from './DemandBar';

const PostCard = ({ post, onView, featured }) => {
  const [hovered, setHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <div
      className="post-card"
      onClick={() => onView(post)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? T.surface2 : T.surface,
        border: `1px solid ${hovered ? "rgba(255,255,255,0.12)" : T.border}`,
        padding: isMobile ? (featured ? "28px" : "20px") : (featured ? "36px" : "28px"),
        cursor: "pointer",
        transition: "all 0.15s",
        display: "flex", flexDirection: "column", gap: isMobile ? "12px" : "16px",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "12px" }}>
        <CatTag cat={post.category} />
        <span style={{ fontSize: "10px", color: T.muted, letterSpacing: "0.08em", flexShrink: 0 }}>{post.date}</span>
      </div>

      <div>
        <h3 style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: isMobile ? (featured ? "18px" : "14px") : (featured ? "22px" : "16px"),
          fontWeight: 700,
          letterSpacing: "-0.4px",
          lineHeight: 1.2,
          color: T.text,
          marginBottom: "10px",
        }}>{post.title}</h3>
        <p style={{ 
          fontSize: isMobile ? "11.5px" : "12.5px", 
          lineHeight: 1.75, 
          color: T.muted 
        }}>{post.excerpt}</p>
      </div>

      <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
        {post.tags.slice(0, 3).map(t => (
          <span key={t} style={{
            fontSize: "9px", padding: "2px 8px",
            border: `1px solid ${T.border}`,
            color: "rgba(255,255,255,0.25)", letterSpacing: "0.05em",
            fontFamily: "'DM Mono', monospace",
          }}>{t}</span>
        ))}
      </div>

      <div style={{ 
        display: "flex", 
        justifyContent: "space-between", 
        alignItems: isMobile ? "flex-start" : "center", 
        paddingTop: "8px", 
        borderTop: `1px solid ${T.border}`,
        flexDirection: isMobile ? "column" : "row",
        gap: isMobile ? "8px" : "0"
      }}>
        <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
          <span style={{ fontSize: "10px", color: T.muted, letterSpacing: "0.08em" }}>⏱ {post.readTime}</span>
          <DemandBar score={post.demand} />
        </div>
        <span className="card-arrow" style={{ color: T.accent, fontSize: "18px", lineHeight: 1 }}>→</span>
      </div>
    </div>
  );
};

export default PostCard;
