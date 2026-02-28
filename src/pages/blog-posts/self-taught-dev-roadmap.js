import React from 'react';

const SelfTaughtDevRoadmap = () => {
  return (
    <div style={{ 
      fontFamily: "'DM Mono', monospace",
      background: '#f5f0e8',
      color: '#0a0a0a',
      lineHeight: 1.7,
      fontSize: '14px'
    }}>
      {/* HEADER */}
      <header style={{
        background: '#0a0a0a',
        color: '#f5f0e8',
        padding: '80px 60px 60px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          display: 'flex',
          gap: '24px',
          marginBottom: '40px',
          fontSize: '11px',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: 'rgba(245,240,232,0.5)'
        }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ color: '#c8ff00' }}>▸</span>Deep Research Report
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ color: '#c8ff00' }}>▸</span>Dec 2025
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ color: '#c8ff00' }}>▸</span>Career
          </span>
        </div>
        
        <h1 style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: 'clamp(42px, 7vw, 88px)',
          fontWeight: 800,
          lineHeight: 0.95,
          letterSpacing: '-3px',
          marginBottom: '30px'
        }}>
          The <em style={{ fontStyle: 'normal', color: '#c8ff00' }}>Self-Taught Developer</em> Roadmap in 2026 — From Zero to Employed
        </h1>
        
        <p style={{
          fontFamily: "'Instrument Serif', serif",
          fontStyle: 'italic',
          fontSize: '20px',
          color: 'rgba(245,240,232,0.65)',
          maxWidth: '560px',
          lineHeight: 1.5
        }}>
          The honest, current, fastest path from zero to employed — which language to start, the portfolio projects that pass the thinking test, and the job search strategy.
        </p>
      </header>

      {/* CONTENT */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '80px 60px' }}>
        <div style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: '10px',
          fontWeight: 700,
          letterSpacing: '0.25em',
          textTransform: 'uppercase',
          color: '#d4380d',
          marginBottom: '16px'
        }}>
          01 — Introduction
        </div>
        
        <h2 style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: 'clamp(28px, 4vw, 48px)',
          fontWeight: 800,
          lineHeight: 1.05,
          letterSpacing: '-1.5px',
          marginBottom: '40px'
        }}>
          Content to be added...
        </h2>
        
        <p style={{
          fontFamily: "'Instrument Serif', serif",
          fontSize: '20px',
          lineHeight: 1.6,
          color: '#2a2f3a',
          maxWidth: '680px',
          marginBottom: '40px'
        }}>
          This blog post template is ready for content. Edit this file to add your research, analysis, and insights.
        </p>
      </div>
    </div>
  );
};

export default SelfTaughtDevRoadmap;
