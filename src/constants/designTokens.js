/* ─────────────────────────────────────────────
   DESIGN TOKENS
───────────────────────────────────────────── */
export const T = {
  bg: "#0d0d0d",
  surface: "#141414",
  surface2: "#1c1c1c",
  border: "rgba(255,255,255,0.07)",
  text: "#e8e3d8",
  muted: "#5e5b55",
  accent: "#f0ff44",
  red: "#ff4136",
  blue: "#00b4ff",
  green: "#00e5a0",
  orange: "#ff8c42",
  purple: "#b06dff",
  pink: "#ff5fa0",
};

export const CAT_COLORS = {
  AI:       { bg: "rgba(0,229,160,0.08)",  text: T.green,  border: "rgba(0,229,160,0.2)"  },
  Business: { bg: "rgba(255,140,66,0.08)", text: T.orange, border: "rgba(255,140,66,0.2)" },
  Tech:     { bg: "rgba(0,180,255,0.08)",  text: T.blue,   border: "rgba(0,180,255,0.2)"  },
  Money:    { bg: "rgba(255,65,54,0.08)",  text: T.red,    border: "rgba(255,65,54,0.2)"  },
  Career:   { bg: "rgba(240,255,68,0.08)", text: T.accent, border: "rgba(240,255,68,0.2)" },
  Health:   { bg: "rgba(176,109,255,0.08)",text: T.purple, border: "rgba(176,109,255,0.2)"},
  Society:  { bg: "rgba(255,95,160,0.08)", text: T.pink,   border: "rgba(255,95,160,0.2)" },
};
