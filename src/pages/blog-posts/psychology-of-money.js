import React from 'react';

const PsychologyOfMoney = () => {
  return (
    <div style={{ fontFamily: "'DM Mono', monospace", background: '#f5f0e8', color: '#0a0a0a', lineHeight: 1.7, fontSize: '14px' }}>
      <header style={{ background: '#0a0a0a', color: '#f5f0e8', padding: '80px 60px 60px' }}>
        <h1 style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(42px, 7vw, 88px)', fontWeight: 800, lineHeight: 0.95, letterSpacing: '-3px', marginBottom: '30px' }}>
          The <em style={{ fontStyle: 'normal', color: '#c8ff00' }}>Psychology</em><br />of Money
        </h1>
        <p style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontSize: '20px', color: 'rgba(245,240,232,0.65)', maxWidth: '560px' }}>
          Loss aversion, present bias, anchoring, and the endowment effect — the specific mental traps that cost people money.
        </p>
      </header>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '80px 60px' }}>
        <p style={{ fontSize: '14px', color: '#6b6b6b' }}>Content to be added...</p>
      </div>
    </div>
  );
};

export default PsychologyOfMoney;
