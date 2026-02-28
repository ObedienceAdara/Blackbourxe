import { T } from '../../constants/designTokens';

const SectionLabel = ({ children, color }) => (
  <div style={{
    display: "flex", alignItems: "center", gap: "12px",
    fontFamily: "'Syne', sans-serif", fontSize: "10px", fontWeight: 700,
    letterSpacing: "0.25em", textTransform: "uppercase",
    color: color || T.accent, marginBottom: "16px",
  }}>
    <span style={{ width: "24px", height: "1px", background: color || T.accent }} />
    {children}
  </div>
);

export default SectionLabel;
