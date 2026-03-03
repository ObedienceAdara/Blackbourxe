import React, { lazy, Suspense, useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { T } from '../constants/designTokens';
import { POSTS } from '../constants/data';
import SectionLabel from '../components/shared/SectionLabel';
import CatTag from '../components/shared/CatTag';
import DemandBar from '../components/shared/DemandBar';
import PostCard from '../components/shared/PostCard';
import NewsletterInline from '../components/shared/NewsletterInline';
import { trackBlogPostView } from '../utils/analytics';

// Eager imports for metadata
import * as aiPoweredBusiness from './blog-posts/ai-powered-business-2026';
import * as techJob200k from './blog-posts/200k-tech-job-2026';

// Metadata mapping
const metadataMap = {
  'ai-powered-business-2026': aiPoweredBusiness.metadata,
  '200k-tech-job-2026': techJob200k.metadata,
};

// Dynamically import blog post components
const blogPostComponents = {
  '200k-tech-job-2026': lazy(() => import('./blog-posts/200k-tech-job-2026')),
  'death-of-seo-geo-2026': lazy(() => import('./blog-posts/death-of-seo-geo-2026')),
  'agentic-ai-era': lazy(() => import('./blog-posts/agentic-ai-era')),
  'one-person-million-business': lazy(() => import('./blog-posts/one-person-million-business')),
  'rag-systems-guide': lazy(() => import('./blog-posts/rag-systems-guide')),
  'psychology-of-money': lazy(() => import('./blog-posts/psychology-of-money')),
  'product-market-fit-bible': lazy(() => import('./blog-posts/product-market-fit-bible')),
  'salary-negotiation-science': lazy(() => import('./blog-posts/salary-negotiation-science')),
  'micro-saas-guide-2026': lazy(() => import('./blog-posts/micro-saas-guide-2026')),
  'ai-healthcare-2026': lazy(() => import('./blog-posts/ai-healthcare-2026')),
  'founder-financial-handbook': lazy(() => import('./blog-posts/founder-financial-handbook')),
  'software-engineering-2026': lazy(() => import('./blog-posts/software-engineering-2026')),
  'mit-admissions-real-data': lazy(() => import('./blog-posts/mit-admissions-real-data')),
  'deepfakes-2026': lazy(() => import('./blog-posts/deepfakes-2026')),
  'vc-demystified': lazy(() => import('./blog-posts/vc-demystified')),
  'personal-brand-2026': lazy(() => import('./blog-posts/personal-brand-2026')),
  'africa-tech-ecosystem-2026': lazy(() => import('./blog-posts/africa-tech-ecosystem-2026')),
  'deep-work-science-2026': lazy(() => import('./blog-posts/deep-work-science-2026')),
  'self-taught-dev-roadmap': lazy(() => import('./blog-posts/self-taught-dev-roadmap')),
  'ai-powered-business-2026': lazy(() => import('./blog-posts/ai-powered-business-2026')),
};

const PostDetailPage = ({ post: propPost, setPage, setCurrentPost }) => {
  const { slug } = useParams();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [postMetadata, setPostMetadata] = useState(null);
  
  // Use post from props if available, otherwise find by slug from URL
  const post = propPost || POSTS.find(p => p.slug === slug);
  
  // Set page title when post changes
  useEffect(() => {
    if (post) {
      document.title = `${post.title} — Blackbourxe`;
      trackBlogPostView(post.title);
      
      // Load metadata if available
      if (metadataMap[post.slug]) {
        setPostMetadata(metadataMap[post.slug]);
      }
    }
    
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [post]);
  
  // If no post found, redirect to research page
  if (!post) {
    return <Navigate to="/research" replace />;
  }

  // Check if there's a JSX component for this blog post
  const BlogPostComponent = blogPostComponents[post.slug];
  
  if (BlogPostComponent) {
    return (
      <div style={{ paddingTop: "64px" }}>
        <Suspense fallback={
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            minHeight: '100vh',
            fontFamily: "'DM Mono', monospace",
            color: T.muted
          }}>
            Loading...
          </div>
        }>
          <BlogPostComponent />
        </Suspense>
      </div>
    );
  }

  // Special handling for HTML blog posts (fallback for posts that only have HTML versions)
  if (post.slug === 'personal-website-lethal-2026') {
    return (
      <div style={{ paddingTop: "64px" }}>
        <iframe 
          src={`/blog/${post.slug}.html`}
          style={{
            width: '100%',
            minHeight: '100vh',
            border: 'none',
            display: 'block'
          }}
          title={post.title}
        />
      </div>
    );
  }
  const related = POSTS.filter(p => p.category === post.category && p.id !== post.id && p.published).slice(0, 3);

  // Simulated content sections
  const sections = [
    { heading: "The Context", body: `In 2026, ${post.title.toLowerCase().split("—")[0].trim()} has moved from emerging concern to urgent operational reality. The data is unambiguous: organizations and individuals who don't understand this domain are making expensive decisions in the dark. This briefing synthesizes the most current research, strips away the hype, and leaves you with the specific intelligence that changes how you act.` },
    { heading: "What the Research Actually Says", body: `The most cited studies — from MIT Sloan, Stanford HAI, and McKinsey Global Institute — converge on a set of findings that contradict the mainstream narrative in important ways. The nuance matters. This section maps what's actually been established with high confidence versus what's still contested or speculative. Calibrated uncertainty is as valuable as clear answers.` },
    { heading: "The Tactical Breakdown", body: `Translating research into action requires understanding not just what is true, but what is true for your specific situation. The frameworks here are designed to be directly applicable — not theoretical constructs that require another consultant to operationalize. Work through each section with your specific context in mind.` },
    { heading: "What the Data Shows at Scale", body: `When we look across hundreds of cases and large-scale datasets, clear patterns emerge. The outliers are instructive — they reveal which assumptions are context-dependent and which findings are robust across environments, team sizes, and resource levels. Pay attention to the failure modes as carefully as the success patterns.` },
    { heading: "The Action Framework", body: `Based on the research synthesis above, here is a prioritized action sequence for implementers at different stages. Each recommendation is tied to a specific mechanism and includes the leading indicators that tell you whether it's working. Adapt the sequence to your constraints — but don't skip the diagnostic step.` },
    { heading: "Common Mistakes and How to Avoid Them", body: `The most expensive errors in this domain are predictable. They appear in the data with remarkable consistency across different types of organizations and individuals. Forewarned is forearmed: reviewing this section before acting could save you months and significant resource expenditure.` },
  ];

  return (
    <div style={{ paddingTop: "64px" }}>
      {/* Back nav */}
      <div style={{
        padding: isMobile ? "16px 24px" : "20px 48px",
        borderBottom: `1px solid ${T.border}`,
        display: "flex", alignItems: "center", gap: "16px",
      }}>
        <button onClick={() => setPage("research")} style={{
          background: "none", border: "none", cursor: "pointer",
          color: T.muted, fontFamily: "'DM Mono', monospace",
          fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase",
          display: "flex", alignItems: "center", gap: "8px",
        }}>← Research</button>
        <span style={{ color: T.border }}>|</span>
        <CatTag cat={post.category} small />
      </div>

      {/* Article Header */}
      <div style={{
        padding: isMobile ? "48px 24px 32px" : "64px 48px 48px",
        background: `radial-gradient(ellipse at 80% 0%, rgba(240,255,68,0.03) 0%, transparent 50%)`,
        borderBottom: `1px solid ${T.border}`,
      }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <div style={{ display: "flex", gap: "12px", alignItems: "center", marginBottom: "24px", flexWrap: "wrap" }}>
            <CatTag cat={post.category} />
            {post.tags.map(t => (
              <span key={t} style={{
                fontSize: "9px", padding: "2px 8px",
                border: `1px solid ${T.border}`,
                color: "rgba(255,255,255,0.25)", letterSpacing: "0.05em",
              }}>{t}</span>
            ))}
          </div>

          <h1 style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: isMobile ? "clamp(24px, 6vw, 36px)" : "clamp(28px, 4vw, 52px)",
            fontWeight: 800, letterSpacing: "-2px",
            lineHeight: 1.05, marginBottom: "24px",
          }}>{post.title}</h1>

          <p style={{
            fontFamily: "'Instrument Serif', serif", fontStyle: "italic",
            fontSize: isMobile ? "16px" : "20px", color: T.muted, lineHeight: 1.6, marginBottom: "32px",
          }}>{post.excerpt}</p>

          <div style={{
            display: "flex", 
            gap: isMobile ? "16px" : "32px", 
            paddingTop: "24px", borderTop: `1px solid ${T.border}`,
            flexDirection: isMobile ? "column" : "row",
            alignItems: isMobile ? "flex-start" : "center",
          }}>
            <div style={{ display: "flex", gap: "24px" }}>
              <span style={{ fontSize: "11px", color: T.muted, letterSpacing: "0.08em" }}>⏱ {post.readTime} read</span>
              <span style={{ fontSize: "11px", color: T.muted, letterSpacing: "0.08em" }}>📅 {postMetadata?.updatedAt || post.date}</span>
            </div>
            <DemandBar score={post.demand} />
          </div>
        </div>
      </div>

      {/* Article Body */}
      <div style={{ padding: isMobile ? "40px 24px" : "60px 48px", maxWidth: "860px", margin: "0 auto" }}>
        {/* Key Takeaway Box */}
        <div style={{
          background: T.surface, border: `1px solid ${T.border}`,
          borderLeft: `3px solid ${T.accent}`,
          padding: isMobile ? "20px 24px" : "24px 28px", marginBottom: "48px",
        }}>
          <div style={{
            fontFamily: "'Syne', sans-serif", fontSize: "9px", fontWeight: 700,
            letterSpacing: "0.25em", textTransform: "uppercase",
            color: T.accent, marginBottom: "10px",
          }}>Key Takeaway</div>
          <p style={{ fontSize: "14px", lineHeight: 1.75, color: T.text }}>
            {post.excerpt} Understanding this deeply — not just superficially — is what separates operators who move with confidence from those who react to events they didn't see coming.
          </p>
        </div>

        {/* Article Sections */}
        {sections.map((section, i) => (
          <div key={i} style={{ marginBottom: "48px" }}>
            <h2 style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: isMobile ? "18px" : "22px", fontWeight: 700,
              letterSpacing: "-0.5px", lineHeight: 1.2,
              marginBottom: "16px", color: T.text,
              paddingBottom: "12px", borderBottom: `1px solid ${T.border}`,
            }}>
              <span style={{ color: T.muted, fontSize: "12px", marginRight: "12px" }}>
                {String(i + 1).padStart(2, "0")} ─
              </span>
              {section.heading}
            </h2>
            <p style={{ fontSize: "14px", lineHeight: 1.85, color: T.muted }}>
              {section.body}
            </p>
          </div>
        ))}

        {/* Stats callout */}
        <div style={{
          background: T.bg, border: `1px solid ${T.border}`,
          padding: isMobile ? "24px" : "36px", marginBottom: "48px",
          display: "grid", 
          gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", 
          gap: "1px",
        }}>
          {[
            { n: `${post.demand}%`, l: "Demand Score" },
            { n: "2026", l: "Research Year" },
            { n: post.readTime, l: "Read Time" },
          ].map((s, i) => (
            <div key={i} style={{ 
              padding: isMobile ? "16px" : "20px", 
              textAlign: "center", 
              borderRight: (i < 2 && !isMobile) ? `1px solid ${T.border}` : "none",
              borderBottom: (i < 2 && isMobile) ? `1px solid ${T.border}` : "none"
            }}>
              <div style={{
                fontFamily: "'Syne', sans-serif", fontSize: "28px",
                fontWeight: 800, letterSpacing: "-1px", color: T.accent,
              }}>{s.n}</div>
              <div style={{ fontSize: "9px", letterSpacing: "0.15em", textTransform: "uppercase", color: T.muted, marginTop: "4px" }}>{s.l}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{
          background: T.surface, border: `1px solid ${T.border}`,
          padding: isMobile ? "28px 24px" : "36px", textAlign: "center",
        }}>
          <div style={{
            fontFamily: "'Syne', sans-serif", fontSize: "10px", fontWeight: 700,
            letterSpacing: "0.25em", textTransform: "uppercase",
            color: T.accent, marginBottom: "12px",
          }}>Want this depth weekly?</div>
          <p style={{ fontSize: "14px", color: T.muted, marginBottom: "24px", lineHeight: 1.7 }}>
            Subscribe to the Blackbourxe Weekly Brief — the intelligence briefing for builders who don't have time for noise.
          </p>
          <NewsletterInline />
        </div>
      </div>

      {/* Related Posts */}
      {related.length > 0 && (
        <div style={{
          padding: isMobile ? "40px 24px" : "60px 48px",
          borderTop: `1px solid ${T.border}`,
          background: T.surface,
        }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <SectionLabel>More in {post.category}</SectionLabel>
            <div style={{ 
              display: "grid", 
              gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", 
              gap: "1px", 
              background: T.border 
            }}>
              {related.map(p => (
                <div key={p.id} style={{ background: T.bg }}>
                  <PostCard post={p} onView={rp => { setCurrentPost(rp); setPage(`blog/${rp.slug}`); window.scrollTo(0, 0); }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostDetailPage;
