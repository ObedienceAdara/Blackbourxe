import React, { useEffect } from 'react';
import { T } from '../constants/designTokens';
import { POSTS } from '../constants/data';
import SectionLabel from '../components/shared/SectionLabel';
import PostCard from '../components/shared/PostCard';
import NewsletterInline from '../components/shared/NewsletterInline';

const HomePage = ({ setPage, setCurrentPost }) => {
  useEffect(() => {
    document.title = 'Blackbourxe — Research Without the Noise';
  }, []);
  const featuredPosts = POSTS.filter(p => p.featured);
  const recentPosts = POSTS.filter(p => !p.featured).slice(0, 6);

  return (
    <div>
      {/* HERO */}
      <section style={{
        minHeight: "100vh", display: "flex", flexDirection: "column",
        justifyContent: "flex-end", padding: "120px 48px 80px",
        position: "relative", overflow: "hidden",
        background: `radial-gradient(ellipse at 80% 0%, rgba(240,255,68,0.04) 0%, transparent 60%), 
                     radial-gradient(ellipse at 0% 100%, rgba(0,180,255,0.03) 0%, transparent 50%)`,
      }}>
        {/* Decorative grid lines */}
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage: `linear-gradient(${T.border} 1px, transparent 1px), linear-gradient(90deg, ${T.border} 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 80%)",
        }} />

        <div style={{ position: "relative", zIndex: 1, maxWidth: "900px" }} className="fade-up">
          <div style={{
            fontSize: "10px", letterSpacing: "0.3em", textTransform: "uppercase",
            color: T.accent, marginBottom: "32px",
            display: "flex", alignItems: "center", gap: "12px",
            fontFamily: "'DM Mono', monospace",
          }}>
            <span style={{ width: "32px", height: "1px", background: T.accent }} />
            Intelligence Briefings for Builders
          </div>

          <h1 className="fade-up-1" style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "clamp(52px, 9vw, 108px)",
            fontWeight: 800, lineHeight: 0.9,
            letterSpacing: "-4px", marginBottom: "40px",
          }}>
            Research<br />
            <span style={{ color: T.accent }}>Without</span><br />
            <span style={{ color: "rgba(232,227,216,0.2)" }}>the Noise.</span>
          </h1>

          <p className="fade-up-2" style={{
            fontFamily: "'Instrument Serif', serif",
            fontStyle: "italic", fontSize: "20px",
            lineHeight: 1.6, color: T.muted,
            maxWidth: "560px", marginBottom: "48px",
          }}>
            Deep, cited, no-fluff intelligence on AI, business, tech, and money — built for people who are building something real.
          </p>

          <div className="fade-up-3" style={{ display: "flex", gap: "12px", alignItems: "center", flexWrap: "wrap" }}>
            <button onClick={() => setPage("research")} style={{
              background: T.accent, color: T.bg, border: "none",
              padding: "14px 28px", cursor: "pointer",
              fontFamily: "'Syne', sans-serif", fontWeight: 700,
              fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase",
            }}>Browse All Research →</button>
            <button onClick={() => setPage("newsletter")} style={{
              background: "transparent", color: T.text,
              border: `1px solid ${T.border}`,
              padding: "14px 28px", cursor: "pointer",
              fontFamily: "'DM Mono', monospace",
              fontSize: "11px", letterSpacing: "0.08em",
            }}>Get Weekly Briefs</button>
          </div>
        </div>

        {/* Stats row */}
        <div style={{
          position: "relative", zIndex: 1,
          display: "flex", gap: "0",
          marginTop: "80px", background: T.surface,
          border: `1px solid ${T.border}`,
        }}>
          {[
            { n: "70+", l: "Research Briefs" },
            { n: "7", l: "Topic Domains" },
            { n: "2026", l: "Always Current" },
            { n: "Free", l: "Forever Accessible" },
          ].map((s, i) => (
            <div key={i} style={{
              flex: 1, padding: "24px 28px",
              borderRight: i < 3 ? `1px solid ${T.border}` : "none",
            }}>
              <div style={{
                fontFamily: "'Syne', sans-serif", fontSize: "28px",
                fontWeight: 800, letterSpacing: "-1px", color: T.text,
                lineHeight: 1,
              }}>{s.n}</div>
              <div style={{
                fontSize: "10px", letterSpacing: "0.15em",
                textTransform: "uppercase", color: T.muted, marginTop: "4px",
              }}>{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* MARQUEE TICKER */}
      <div style={{
        background: T.accent, padding: "12px 0",
        overflow: "hidden", borderTop: `1px solid ${T.bg}`,
      }}>
        <div className="marquee-inner" style={{ display: "flex", gap: "64px" }}>
          {[...Array(2)].map((_, i) => (
            <div key={i} style={{ display: "flex", gap: "64px" }}>
              {["AI Strategy","Business Intelligence","Tech Deep-Dives","Money & Finance","Career Playbooks","Startup Research","2026 Trends"].map(t => (
                <span key={t} style={{
                  fontFamily: "'Syne', sans-serif", fontWeight: 700,
                  fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase",
                  color: T.bg, whiteSpace: "nowrap",
                }}>
                  {t} <span style={{ opacity: 0.4 }}>◆</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* FEATURED POSTS */}
      <section style={{ padding: "80px 48px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <SectionLabel>Featured Research</SectionLabel>
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: "1px", background: T.border }}>
            {featuredPosts.map((post, i) => (
              <div key={post.id} style={{ background: T.bg }}>
                <PostCard
                  post={post}
                  featured={i === 0}
                  onView={p => { setCurrentPost(p); setPage(`blog/${p.slug}`); }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section style={{ padding: "0 48px 80px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <SectionLabel>Research Domains</SectionLabel>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: "1px", background: T.border, border: `1px solid ${T.border}` }}>
            {Object.entries({
              AI: { text: T.green },
              Business: { text: T.orange },
              Tech: { text: T.blue },
              Money: { text: T.red },
              Career: { text: T.accent },
              Health: { text: T.purple },
              Society: { text: T.pink },
            }).map(([cat, c]) => (
              <div
                key={cat}
                onClick={() => setPage("research")}
                style={{
                  background: T.surface, padding: "28px 20px",
                  cursor: "pointer", transition: "background 0.15s",
                  textAlign: "center",
                }}
                onMouseEnter={e => e.currentTarget.style.background = T.surface2}
                onMouseLeave={e => e.currentTarget.style.background = T.surface}
              >
                <div style={{
                  width: "32px", height: "3px",
                  background: c.text, margin: "0 auto 14px",
                }} />
                <div style={{
                  fontFamily: "'Syne', sans-serif", fontWeight: 700,
                  fontSize: "13px", color: c.text, marginBottom: "6px",
                }}>{cat}</div>
                <div style={{
                  fontSize: "10px", color: T.muted, letterSpacing: "0.08em",
                }}>
                  {POSTS.filter(p => p.category === cat).length} briefs
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RECENT POSTS GRID */}
      <section style={{ padding: "0 48px 80px", background: T.surface }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", paddingTop: "60px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "32px" }}>
            <div>
              <SectionLabel>Latest Briefs</SectionLabel>
            </div>
            <button onClick={() => setPage("research")} style={{
              background: "none", border: "none", cursor: "pointer",
              color: T.accent, fontFamily: "'DM Mono', monospace",
              fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase",
            }}>View All 70+ →</button>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1px", background: T.border }}>
            {recentPosts.map(post => (
              <div key={post.id} style={{ background: T.bg }}>
                <PostCard
                  post={post}
                  onView={p => { setCurrentPost(p); setPage(`blog/${p.slug}`); }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER CTA */}
      <section style={{
        padding: "100px 48px",
        background: T.bg,
        position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", top: "-100px", right: "-100px",
          width: "500px", height: "500px",
          background: "radial-gradient(circle, rgba(240,255,68,0.04) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />
        <div style={{ maxWidth: "640px", margin: "0 auto", textAlign: "center" }}>
          <SectionLabel color={T.accent}>Weekly Intelligence Brief</SectionLabel>
          <h2 style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "clamp(32px, 5vw, 56px)",
            fontWeight: 800, letterSpacing: "-2px",
            lineHeight: 1, marginBottom: "20px",
          }}>
            Your weekly brief.<br /><span style={{ color: T.accent }}>No filler. No fluff.</span>
          </h2>
          <p style={{
            fontFamily: "'Instrument Serif', serif", fontStyle: "italic",
            fontSize: "18px", color: T.muted, lineHeight: 1.6, marginBottom: "36px",
          }}>
            One deep research brief per week — the signal your competitors are missing.
            Read by founders, builders, and operators who don't have time for noise.
          </p>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <NewsletterInline />
          </div>
          <div style={{ marginTop: "20px", fontSize: "10px", color: T.muted, letterSpacing: "0.1em", textTransform: "uppercase" }}>
            No spam. Unsubscribe anytime. Delivered every Tuesday.
          </div>
        </div>
      </section>

      {/* CONSULTATION TEASER */}
      <section style={{
        background: T.accent, padding: "80px 48px",
        display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center",
      }}>
        <div>
          <div style={{
            fontFamily: "'DM Mono', monospace", fontSize: "10px",
            letterSpacing: "0.25em", textTransform: "uppercase",
            color: "rgba(13,13,13,0.5)", marginBottom: "16px",
          }}>Expert Consultation</div>
          <h2 style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "clamp(28px, 4vw, 48px)",
            fontWeight: 800, letterSpacing: "-2px",
            lineHeight: 1, color: T.bg, marginBottom: "20px",
          }}>
            Need answers<br />specific to you?
          </h2>
          <p style={{
            fontSize: "14px", lineHeight: 1.8,
            color: "rgba(13,13,13,0.65)", maxWidth: "420px",
          }}>
            Book a 1-on-1 session for AI strategy, startup advice, career direction, or a deep-dive on any topic we cover. Strategic guidance from someone who's done the research.
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {[
            { label: "AI & Tech Strategy", desc: "Model selection, AI product decisions, infrastructure." },
            { label: "Startup & Business", desc: "PMF, fundraising, pricing, GTM strategy." },
            { label: "Career Positioning", desc: "Tech job search, salary negotiation, personal brand." },
          ].map(item => (
            <div key={item.label} style={{
              background: "rgba(13,13,13,0.06)", padding: "20px 24px",
              border: "1px solid rgba(13,13,13,0.1)",
            }}>
              <div style={{
                fontFamily: "'Syne', sans-serif", fontWeight: 700,
                fontSize: "14px", color: T.bg, marginBottom: "4px",
              }}>{item.label}</div>
              <div style={{ fontSize: "12px", color: "rgba(13,13,13,0.55)" }}>{item.desc}</div>
            </div>
          ))}
          <button onClick={() => setPage("consultation")} style={{
            background: T.bg, color: T.accent, border: "none",
            padding: "16px", cursor: "pointer",
            fontFamily: "'Syne', sans-serif", fontWeight: 700,
            fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase",
            marginTop: "8px",
          }}>Book a Session →</button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
