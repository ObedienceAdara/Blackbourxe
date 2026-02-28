import { CAT_COLORS } from '../../constants/designTokens';

const CatTag = ({ cat, small }) => {
  const c = CAT_COLORS[cat] || CAT_COLORS["Tech"];
  return (
    <span style={{
      display: "inline-flex", alignItems: "center",
      padding: small ? "2px 8px" : "3px 10px",
      fontSize: small ? "9px" : "9.5px",
      letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 600,
      background: c.bg, color: c.text, border: `1px solid ${c.border}`,
      fontFamily: "'DM Mono', monospace",
    }}>{cat}</span>
  );
};

export default CatTag;
