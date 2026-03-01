import React, { useState, useEffect } from 'react';
import { T } from '../constants/designTokens';
import { POSTS, CATEGORIES } from '../constants/data';
import SectionLabel from '../components/shared/SectionLabel';
import PostCard from '../components/shared/PostCard';

const ResearchPage = ({ setPage, setCurrentPost }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    document.title = 'Research — Blackbourxe';

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("demand");

  const filtered = POSTS
    .filter(p => activeCategory === "All" || p.category === activeCategory)
    .filter(p => search === "" ||
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(search.toLowerCase()) ||
      p.tags.some(t => t.toLowerCase().includes(search.toLowerCase()))
    )
    .sort((a, b) => sort === "demand" ? b.demand - a.demand : new Date(b.date) - new Date(a.date));

  return (
    <div style={{ paddingTop: "64px" }}>
      {/* Header */}
      <div style={{
        padding: isMobile ? "60px 24px 40px" : "80px 48px 60px",
        borderBottom: `1px solid ${T.border}`,
        background: `radial-gradient(ellipse at 70% 0%, rgba(240,255,68,0.03) 0%, transparent 60%)`,
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <SectionLabel>Research Library</SectionLabel>
          <h1 style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: isMobile ? "clamp(32px, 8vw, 48px)" : "clamp(40px, 6vw, 72px)",
            fontWeight: 800, letterSpacing: "-3px",
            lineHeight: 0.95, marginBottom: "24px",
          }}>
            70+ Intelligence<br /><span style={{ color: T.accent }}>Briefings</span>
          </h1>
          <p style={{
            fontFamily: "'Instrument Serif', serif", fontStyle: "italic",
            fontSize: isMobile ? "16px" : "18px",
            color: T.muted, lineHeight: 1.6, maxWidth: "540px",
          }}>
            Every page answers a question millions of people are already searching for — and paying consultants to answer badly.
          </p>
        </div>
      </div>

      {/* Filters */}
      <div style={{
        position: "sticky", top: "64px", zIndex: 90,
        background: "rgba(13,13,13,0.97)", backdropFilter: "blur(12px)",
        borderBottom: `1px solid ${T.border}`,
        padding: isMobile ? "0 24px" : "0 48px",
      }}>
        <div style={{
          maxWidth: "1200px", margin: "0 auto",
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          gap: isMobile ? "0" : "0",
          alignItems: "stretch"
        }}>
          {/* Category Tabs */}
          <div style={{
            display: "flex",
            flex: isMobile ? "none" : 1,
            overflowX: "auto",
            borderBottom: isMobile ? `1px solid ${T.border}` : "none"
          }}>
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  background: "none", border: "none", cursor: "pointer",
                  padding: isMobile ? "12px 12px" : "16px 16px",
                  fontSize: "10px", letterSpacing: "0.12em", textTransform: "uppercase",
                  fontFamily: "'DM Mono', monospace", whiteSpace: "nowrap",
                  color: activeCategory === cat ? T.accent : T.muted,
                  borderBottom: activeCategory === cat ? `2px solid ${T.accent}` : "2px solid transparent",
                  transition: "all 0.15s",
                }}
              >{cat}</button>
            ))}
          </div>

          {/* Search and Sort Row */}
          <div style={{
            display: "flex",
            borderLeft: isMobile ? "none" : `1px solid ${T.border}`
          }}>
            {/* Search */}
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder={isMobile ? "Search..." : "Search briefs..."}
              style={{
                background: "transparent", border: "none",
                borderRight: `1px solid ${T.border}`,
                padding: isMobile ? "12px 16px" : "14px 24px",
                fontFamily: "'DM Mono', monospace", fontSize: isMobile ? "13px" : "14px",
                outline: "none",
                width: isMobile ? "auto" : "300px",
                flex: isMobile ? 1 : "none",
                color: T.muted,
              }}
            />

            {/* Sort */}
            <select
              value={sort}
              onChange={e => setSort(e.target.value)}
              style={{
                background: T.surface, border: "none",
                padding: isMobile ? "0 12px" : "0 16px",
                color: T.muted,
                fontFamily: "'DM Mono', monospace", fontSize: "10px",
                letterSpacing: "0.08em", cursor: "pointer", outline: "none",
              }}
            >
              <option value="demand">Sort: Demand</option>
              <option value="date">Sort: Newest</option>
            </select>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div style={{
        padding: isMobile ? "32px 24px" : "48px 48px",
        maxWidth: "1200px", margin: "0 auto"
      }}>
        {/* Result count */}
        <div style={{
          fontSize: "10px", letterSpacing: "0.15em", textTransform: "uppercase",
          color: T.muted, marginBottom: "24px",
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: "space-between",
          gap: isMobile ? "8px" : "0",
        }}>
          <span>Showing {filtered.length} brief{filtered.length !== 1 ? "s" : ""}</span>
          {search && <span onClick={() => setSearch("")} style={{ cursor: "pointer", color: T.accent }}>Clear search ✕</span>}
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
          gap: "1px",
          background: T.border
        }}>
          {filtered.map(post => (
            <div key={post.id} style={{ background: T.bg }}>
              <PostCard
                post={post}
                onView={p => { setCurrentPost(p); setPage(`blog/${p.slug}`); }}
              />
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div style={{ textAlign: "center", padding: isMobile ? "60px 0" : "80px 0", color: T.muted }}>
            <div style={{ fontSize: "32px", marginBottom: "16px" }}>○</div>
            <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700 }}>No results found</div>
            <div style={{ fontSize: "12px", marginTop: "8px" }}>Try a different search or category</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ResearchPage;
