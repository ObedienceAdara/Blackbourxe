import { T } from '../../constants/designTokens';

const DemandBar = ({ score }) => (
  <div style={{ width: "80px" }}>
    <div style={{ fontSize: "9px", letterSpacing: "0.12em", textTransform: "uppercase", color: T.muted, marginBottom: "4px" }}>Demand</div>
    <div style={{ height: "2px", background: "rgba(255,255,255,0.06)", width: "100%" }}>
      <div style={{ height: "100%", background: T.accent, width: `${score}%` }} />
    </div>
    <div style={{ fontSize: "9px", color: T.muted, marginTop: "3px" }}>{score}/100</div>
  </div>
);

export default DemandBar;
