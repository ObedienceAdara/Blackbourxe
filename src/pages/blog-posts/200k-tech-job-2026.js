import { useState } from "react";

/* ── FONTS ── */
const Fonts = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Mono:ital,wght@0,400;0,500;1,400&family=Instrument+Serif:ital@0;1&display=swap');
    *,*::before,*::after{box-sizing:border-box}
    ::selection{background:#c8ff00;color:#0a0a0a}
    ::-webkit-scrollbar{width:3px}
    ::-webkit-scrollbar-thumb{background:#c8ff00}
    @keyframes fadeUp{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:translateY(0)}}
    .fu{animation:fadeUp .55s ease both}
    .fu1{animation:fadeUp .55s .1s ease both}
    .fu2{animation:fadeUp .55s .2s ease both}
    .fu3{animation:fadeUp .55s .32s ease both}
  `}</style>
);

/* ── DESIGN TOKENS ── */
const C = {
  bg:     "#f5f0e8",
  paper:  "#ede8e0",
  dark:   "#0a0a0a",
  dark2:  "#141414",
  dark3:  "#1e1e1e",
  bd:     "rgba(10,10,10,0.1)",
  bdDark: "rgba(255,255,255,0.07)",
  text:   "#0a0a0a",
  muted:  "#6b6560",
  acc:    "#c8ff00",
  red:    "#e63329",
  blue:   "#0057ff",
  green:  "#00b87a",
  orange: "#e87820",
};

/* ── MICRO COMPONENTS ── */
const Tag = ({ children, color }) => (
  <span style={{
    display:"inline-flex", alignItems:"center",
    padding:"3px 10px", fontSize:"9.5px",
    letterSpacing:"0.13em", textTransform:"uppercase", fontWeight:600,
    background: color ? `${color}18` : `${C.dark}08`,
    color: color || C.muted,
    border:`1px solid ${color ? `${color}30` : C.bd}`,
    fontFamily:"'DM Mono',monospace", whiteSpace:"nowrap",
  }}>{children}</span>
);

const Divider = ({ label, color }) => (
  <div style={{
    display:"flex", alignItems:"center", gap:"16px",
    margin:"64px 0 32px", fontFamily:"'Syne',sans-serif",
    fontSize:"10px", fontWeight:700, letterSpacing:"0.28em",
    textTransform:"uppercase", color: color || C.acc,
  }}>
    <span style={{ flex:1, height:"1px", background: color ? `${color}40` : `${C.dark}15` }}/>
    <span>{label}</span>
    <span style={{ flex:1, height:"1px", background: color ? `${color}40` : `${C.dark}15` }}/>
  </div>
);

const Callout = ({ label, children, accent, dark }) => (
  <div style={{
    background: dark ? C.dark : accent ? `${accent}0c` : C.paper,
    border:`1px solid ${dark ? C.bdDark : accent ? `${accent}25` : C.bd}`,
    borderLeft:`3px solid ${accent || C.acc}`,
    padding:"24px 28px", margin:"28px 0",
  }}>
    {label && <div style={{
      fontFamily:"'Syne',sans-serif", fontSize:"9px", fontWeight:700,
      letterSpacing:"0.25em", textTransform:"uppercase",
      color: dark ? C.acc : accent || C.acc, marginBottom:"10px",
    }}>{label}</div>}
    <div style={{
      fontSize:"13.5px", lineHeight:1.8,
      color: dark ? "rgba(245,240,232,0.85)" : C.text,
    }}>{children}</div>
  </div>
);

const StatCard = ({ number, label, sub, color }) => (
  <div style={{
    background:C.dark, padding:"28px 24px",
    borderBottom:`3px solid ${color || C.acc}`,
  }}>
    <div style={{
      fontFamily:"'Syne',sans-serif",
      fontSize:"clamp(28px,3.5vw,40px)",
      fontWeight:800, letterSpacing:"-1.5px",
      lineHeight:1, color: color || C.acc, marginBottom:"6px",
    }}>{number}</div>
    <div style={{
      fontSize:"11px", fontWeight:600, letterSpacing:"0.08em",
      textTransform:"uppercase", color:"rgba(245,240,232,0.9)", marginBottom:"4px",
    }}>{label}</div>
    {sub && <div style={{ fontSize:"11px", color:"rgba(245,240,232,0.4)", lineHeight:1.5 }}>{sub}</div>}
  </div>
);

const SectionHead = ({ n, title, color }) => (
  <div style={{ margin:"72px 0 32px" }}>
    <div style={{
      fontFamily:"'DM Mono',monospace", fontSize:"10px",
      letterSpacing:"0.2em", textTransform:"uppercase",
      color: color || C.acc, marginBottom:"10px",
      display:"flex", alignItems:"center", gap:"10px",
    }}>
      <span style={{ width:"20px", height:"1px", background:color||C.acc }}/>
      Section {n}
    </div>
    <h2 style={{
      fontFamily:"'Syne',sans-serif",
      fontSize:"clamp(24px,3.5vw,38px)",
      fontWeight:800, letterSpacing:"-1px",
      lineHeight:1.1, color:C.dark,
      borderBottom:`1px solid ${C.bd}`,
      paddingBottom:"16px",
    }}>{title}</h2>
  </div>
);

/* ── EXPANDABLE SECTION ── */
const Expand = ({ title, children, accent }) => {
  const [open, setOpen] = useState(false);
  return (
    <div style={{
      border:`1px solid ${C.bd}`,
      borderLeft:`3px solid ${accent||C.acc}`,
      marginBottom:"8px",
    }}>
      <button onClick={()=>setOpen(o=>!o)} style={{
        width:"100%", background: open ? C.dark : C.paper,
        border:"none", cursor:"pointer",
        padding:"16px 20px",
        display:"flex", justifyContent:"space-between", alignItems:"center",
        transition:"background .15s",
      }}>
        <span style={{
          fontFamily:"'Syne',sans-serif", fontWeight:700,
          fontSize:"14px", color: open ? C.acc : C.dark,
          textAlign:"left",
        }}>{title}</span>
        <span style={{
          color: open ? C.acc : C.muted,
          fontSize:"18px", lineHeight:1,
          transform: open ? "rotate(45deg)" : "none",
          transition:"transform .2s",
        }}>+</span>
      </button>
      {open && <div style={{ padding:"20px 24px", background:"white", borderTop:`1px solid ${C.bd}` }}>{children}</div>}
    </div>
  );
};

/* ── SCRIPT BOX ── */
const Script = ({ label, children }) => (
  <div style={{
    background:C.dark, border:`1px solid ${C.bdDark}`,
    borderLeft:`3px solid ${C.acc}`,
    padding:"20px 24px", margin:"16px 0",
  }}>
    <div style={{
      fontFamily:"'Syne',sans-serif", fontSize:"9px", fontWeight:700,
      letterSpacing:"0.25em", textTransform:"uppercase",
      color:C.acc, marginBottom:"12px",
    }}>{label}</div>
    <div style={{
      fontFamily:"'Instrument Serif',serif", fontStyle:"italic",
      fontSize:"14.5px", lineHeight:1.8,
      color:"rgba(245,240,232,0.9)",
    }}>{children}</div>
  </div>
);

/* ── ROLE TABLE ── */
const RoleTable = () => {
  const roles = [
    { role:"Staff Software Engineer",          comp:"$280K–$420K", base:"$195–$240K", rsu:"$80–$160K", bonus:"$20–$40K",  co:"FAANG / Top Tier",  demand:"Very High", color:C.green  },
    { role:"Senior Software Engineer (L5/L6)",  comp:"$220K–$340K", base:"$175–$215K", rsu:"$40–$120K", bonus:"$15–$30K",  co:"FAANG / Tier 1",    demand:"Very High", color:C.green  },
    { role:"Principal Engineer",                comp:"$350K–$550K", base:"$220–$280K", rsu:"$120–$250K",bonus:"$30–$50K",  co:"FAANG / Unicorns",  demand:"High",      color:C.acc    },
    { role:"Engineering Manager (L6+)",         comp:"$280K–$450K", base:"$210–$260K", rsu:"$80–$180K", bonus:"$30–$50K",  co:"FAANG / Scale-ups", demand:"High",      color:C.acc    },
    { role:"ML Engineer / AI Engineer",         comp:"$260K–$450K", base:"$200–$260K", rsu:"$60–$180K", bonus:"$20–$40K",  co:"AI Labs / FAANG",   demand:"Extreme",   color:C.green  },
    { role:"AI Research Scientist",             comp:"$300K–$600K+",base:"$200–$320K", rsu:"$100–$280K",bonus:"$30–$60K",  co:"OpenAI/Anthropic/Meta",demand:"Extreme",color:C.red    },
    { role:"Staff/Principal PM",                comp:"$280K–$420K", base:"$185–$230K", rsu:"$80–$160K", bonus:"$30–$60K",  co:"FAANG / Scale-ups", demand:"High",      color:C.acc    },
    { role:"Senior Product Manager",            comp:"$200K–$320K", base:"$160–$200K", rsu:"$30–$100K", bonus:"$20–$40K",  co:"FAANG / Tier 1",    demand:"High",      color:C.orange },
    { role:"Data Scientist / ML Ops",           comp:"$200K–$340K", base:"$165–$210K", rsu:"$30–$120K", bonus:"$15–$30K",  co:"FAANG / AI Co's",   demand:"High",      color:C.orange },
    { role:"Security Engineer (Staff+)",        comp:"$250K–$380K", base:"$185–$230K", rsu:"$60–$140K", bonus:"$20–$40K",  co:"FAANG / Finance",   demand:"High",      color:C.blue   },
    { role:"DevOps / Platform Engineer (Staff)",comp:"$220K–$330K", base:"$175–$215K", rsu:"$40–$110K", bonus:"$15–$30K",  co:"FAANG / Infra co's",demand:"High",      color:C.blue   },
    { role:"Technical Program Manager (Sr)",    comp:"$200K–$310K", base:"$165–$205K", rsu:"$30–$100K", bonus:"$20–$40K",  co:"FAANG",             demand:"Medium",    color:C.muted  },
    { role:"SWE New Grad (Top School/FAANG)",   comp:"$180K–$230K", base:"$150–$185K", rsu:"$30–$60K",  bonus:"$15–$30K",  co:"FAANG / Top Tier",  demand:"High",      color:C.muted  },
  ];

  return (
    <div style={{ overflowX:"auto", margin:"28px 0" }}>
      <table style={{ width:"100%", borderCollapse:"collapse", fontSize:"12px" }}>
        <thead>
          <tr style={{ background:C.dark }}>
            {["Role","Total Comp","Base","RSU/yr","Bonus","Company Tier","Demand"].map(h=>(
              <th key={h} style={{ padding:"10px 14px", textAlign:"left", fontSize:"9px", letterSpacing:"0.15em", textTransform:"uppercase", color:"rgba(245,240,232,0.5)", fontWeight:700, whiteSpace:"nowrap" }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {roles.map((r,i)=>(
            <tr key={i} style={{ borderBottom:`1px solid ${C.bd}`, background: i%2===0?"transparent":C.paper, transition:"background .12s" }}
              onMouseEnter={e=>e.currentTarget.style.background=`${C.acc}10`}
              onMouseLeave={e=>e.currentTarget.style.background=i%2===0?"transparent":C.paper}
            >
              <td style={{ padding:"12px 14px", fontWeight:600, color:r.color, fontFamily:"'DM Mono',monospace", fontSize:"11.5px" }}>{r.role}</td>
              <td style={{ padding:"12px 14px", fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:"13px", color:C.dark, whiteSpace:"nowrap" }}>{r.comp}</td>
              <td style={{ padding:"12px 14px", color:C.muted, whiteSpace:"nowrap" }}>{r.base}</td>
              <td style={{ padding:"12px 14px", color:C.muted, whiteSpace:"nowrap" }}>{r.rsu}</td>
              <td style={{ padding:"12px 14px", color:C.muted, whiteSpace:"nowrap" }}>{r.bonus}</td>
              <td style={{ padding:"12px 14px", color:C.muted, whiteSpace:"nowrap" }}>{r.co}</td>
              <td style={{ padding:"12px 14px" }}>
                <span style={{
                  padding:"2px 8px", fontSize:"9px",
                  background: r.demand==="Extreme"?`${C.green}15`:r.demand==="Very High"?`${C.acc}15`:r.demand==="High"?`${C.orange}15`:`${C.muted}15`,
                  color:r.demand==="Extreme"?C.green:r.demand==="Very High"?C.acc:r.demand==="High"?C.orange:C.muted,
                  border:`1px solid ${r.demand==="Extreme"?`${C.green}30`:r.demand==="Very High"?`${C.acc}30`:r.demand==="High"?`${C.orange}30`:`${C.muted}30`}`,
                  fontFamily:"'DM Mono',monospace", letterSpacing:"0.08em", textTransform:"uppercase",
                }}>{r.demand}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ fontSize:"10px", color:C.muted, marginTop:"10px", letterSpacing:"0.06em" }}>
        * Source: Levels.fyi, Glassdoor, and direct recruiter data — Q1 2026. Ranges reflect 25th–90th percentile. RSU figures are annualized from typical 4-year vesting schedules.
      </div>
    </div>
  );
};

/* ── COMPANY TABLE ── */
const CompanyTable = () => {
  const companies = [
    { co:"Google (Alphabet)",  l5:"$290–$380K",  l6:"$380–$520K", staff:"$500K–$750K+", hiring:"Selective", notes:"L5/L6 SWE + AI roles most open. SWE interviews heavily algorithmic + system design.", color:C.blue   },
    { co:"Meta",               l5:"$280–$370K",  l6:"$380–$530K", staff:"$520K–$800K+", hiring:"Selective", notes:"Aggressive return-to-office. Paying premiums for AI/LLM engineers. E6+ hard to crack.",  color:C.blue   },
    { co:"Apple",              l5:"$270–$340K",  l6:"$340–$460K", staff:"$460K–$650K",  hiring:"Selective", notes:"Base-heavy, lower RSU than peers. ML and systems roles most active. Very secretive process.", color:C.muted  },
    { co:"Amazon",             l5:"$220–$290K",  l6:"$290–$400K", staff:"$400K–$580K",  hiring:"Active",    notes:"$350K RSU cap historically — changing. AWS roles pay most. Strong LP-based bar.",     color:C.orange },
    { co:"Microsoft",          l5:"$230–$300K",  l6:"$300–$420K", staff:"$420K–$620K",  hiring:"Active",    notes:"AI/Copilot teams at premium. Azure + Developer Tools hiring most. Strong WLB.",          color:C.blue   },
    { co:"OpenAI",             l4:"$280–$380K",  l5:"$380–$550K", staff:"$550K–$900K",  hiring:"Very Active",notes:"Top market comp. Equity value uncertain post-IPO. Research roles command $600K+.",        color:C.acc    },
    { co:"Anthropic",          l4:"$270–$360K",  l5:"$360–$520K", staff:"$520K–$850K",  hiring:"Active",    notes:"Safety focus adds unique bar. Mission-aligned culture screen. Equity upside significant.", color:C.acc    },
    { co:"Stripe",             l4:"$240–$320K",  l5:"$320–$440K", staff:"$440K–$660K",  hiring:"Active",    notes:"High interview bar. Infra + payments + ML roles active. Known for strong eng culture.",    color:C.green  },
    { co:"Databricks",         l4:"$230–$310K",  l5:"$310–$420K", staff:"$420K–$620K",  hiring:"Active",    notes:"Pre-IPO equity valuable. Data + AI infra roles. Strong engineering org.",                  color:C.green  },
    { co:"Coinbase",           l4:"$220–$290K",  l5:"$290–$400K", staff:"$400K–$560K",  hiring:"Moderate",  notes:"Crypto exposure in equity. Remote-friendly. Strong comp for blockchain engineers.",        color:C.orange },
    { co:"Netflix",            l4:"$300–$400K",  l5:"$400–$560K", staff:"$560K–$780K",  hiring:"Selective", notes:"High base, low RSU — cash-heavy comp. Senior bar is extremely high. No PIP culture.",     color:C.red    },
    { co:"Nvidia",             l4:"$240–$320K",  l5:"$320–$450K", staff:"$450K–$700K",  hiring:"Active",    notes:"GPU/CUDA roles commanding significant premiums in 2026. AI infra = highest demand.",       color:C.green  },
    { co:"Scale AI",           l4:"$210–$280K",  l5:"$280–$380K", staff:"$380K–$560K",  hiring:"Active",    notes:"AI training data infrastructure. Growing fast. Pre-IPO equity.",                          color:C.acc    },
    { co:"Ramp/Rippling",      l3:"$200–$260K",  l4:"$260–$340K", staff:"$340K–$500K",  hiring:"Active",    notes:"Fintech scale-up tier. Pre-IPO equity. Strong compensation for fintech infra roles.",     color:C.orange },
  ];

  return (
    <div style={{ overflowX:"auto", margin:"28px 0" }}>
      <table style={{ width:"100%", borderCollapse:"collapse", fontSize:"12px" }}>
        <thead>
          <tr style={{ background:C.dark }}>
            {["Company","~L5 Comp","~L6 Comp","Staff+","Hiring","Notes"].map(h=>(
              <th key={h} style={{ padding:"10px 14px", textAlign:"left", fontSize:"9px", letterSpacing:"0.15em", textTransform:"uppercase", color:"rgba(245,240,232,0.5)", fontWeight:700, whiteSpace:"nowrap" }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {companies.map((r,i)=>(
            <tr key={i} style={{ borderBottom:`1px solid ${C.bd}`, background:i%2===0?"transparent":C.paper, transition:"background .12s" }}
              onMouseEnter={e=>e.currentTarget.style.background=`${C.acc}10`}
              onMouseLeave={e=>e.currentTarget.style.background=i%2===0?"transparent":C.paper}
            >
              <td style={{ padding:"12px 14px", fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:"13px", color:r.color }}>{r.co}</td>
              <td style={{ padding:"12px 14px", fontFamily:"'DM Mono',monospace", fontSize:"11.5px", color:C.text, whiteSpace:"nowrap" }}>{r.l5||r.l4||r.l3}</td>
              <td style={{ padding:"12px 14px", fontFamily:"'DM Mono',monospace", fontSize:"11.5px", color:C.text, whiteSpace:"nowrap" }}>{r.l6||r.l5}</td>
              <td style={{ padding:"12px 14px", fontFamily:"'DM Mono',monospace", fontSize:"11.5px", color:C.text, whiteSpace:"nowrap" }}>{r.staff}</td>
              <td style={{ padding:"12px 14px" }}>
                <span style={{
                  padding:"2px 8px", fontSize:"9px",
                  background:r.hiring==="Very Active"?`${C.green}15`:r.hiring==="Active"?`${C.acc}15`:r.hiring==="Moderate"?`${C.orange}15`:`${C.muted}15`,
                  color:r.hiring==="Very Active"?C.green:r.hiring==="Active"?C.acc:r.hiring==="Moderate"?C.orange:C.muted,
                  border:`1px solid ${r.hiring==="Very Active"?`${C.green}30`:r.hiring==="Active"?`${C.acc}30`:r.hiring==="Moderate"?`${C.orange}30`:`${C.muted}30`}`,
                  fontFamily:"'DM Mono',monospace", letterSpacing:"0.05em", textTransform:"uppercase",
                }}>{r.hiring}</span>
              </td>
              <td style={{ padding:"12px 14px", color:C.muted, lineHeight:1.5, fontSize:"11.5px" }}>{r.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ fontSize:"10px", color:C.muted, marginTop:"10px" }}>
        * Comp data from Levels.fyi, Glassdoor, Blind, and recruiter reports — Q1 2026. Ranges reflect 25th–90th percentile. Level naming varies by company.
      </div>
    </div>
  );
};

/* ══════════════════════════════════════════
   MAIN COMPONENT
══════════════════════════════════════════ */
const TechJob200k2026 = () => {
  return (
    <div style={{ fontFamily:"'DM Mono',monospace", background:C.bg, color:C.text, lineHeight:1.7, fontSize:"14px" }}>
      <Fonts/>

      {/* ── HERO ── */}
      <header style={{
        background:C.dark, color:"#f5f0e8",
        padding:"clamp(60px,8vw,100px) clamp(20px,5vw,60px) 60px",
        position:"relative", overflow:"hidden",
      }}>
        {/* Grid bg */}
        <div style={{
          position:"absolute", inset:0, pointerEvents:"none",
          backgroundImage:`linear-gradient(rgba(255,255,255,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.04) 1px,transparent 1px)`,
          backgroundSize:"60px 60px",
          maskImage:"radial-gradient(ellipse at 80% 30%,black 30%,transparent 75%)",
        }}/>

        <div style={{ maxWidth:"1060px", margin:"0 auto", position:"relative", zIndex:1 }}>
          {/* Tags */}
          <div className="fu" style={{ display:"flex", gap:"10px", marginBottom:"36px", flexWrap:"wrap" }}>
            {[{l:"Career",c:C.acc},{l:"Salary",c:C.acc},{l:"Hiring",c:C.blue},{l:"Levels.fyi",c:C.green},{l:"Negotiation",c:C.orange}].map(t=>(
              <span key={t.l} style={{
                padding:"4px 12px", fontSize:"10px",
                letterSpacing:"0.12em", textTransform:"uppercase",
                background:`${t.c}15`, color:t.c,
                border:`1px solid ${t.c}35`,
                fontFamily:"'DM Mono',monospace",
              }}>{t.l}</span>
            ))}
          </div>

          <h1 className="fu1" style={{
            fontFamily:"'Syne',sans-serif",
            fontSize:"clamp(40px,7vw,88px)",
            fontWeight:800, lineHeight:0.92, letterSpacing:"-3px",
            marginBottom:"28px",
          }}>
            How to Land a<br/>
            <em style={{ fontStyle:"normal", color:C.acc }}>$200K+</em><br/>
            Tech Job in 2026
          </h1>

          <p className="fu2" style={{
            fontFamily:"'Instrument Serif',serif", fontStyle:"italic",
            fontSize:"clamp(16px,2.2vw,21px)",
            color:"rgba(245,240,232,0.62)", maxWidth:"580px", lineHeight:1.55,
            marginBottom:"40px",
          }}>
            Which roles survived AI displacement with salaries intact, which companies are hiring right now, what the total comp math looks like, and the exact negotiation playbook to maximize every offer.
          </p>

          {/* Hero stats */}
          <div className="fu3" style={{
            display:"grid",
            gridTemplateColumns:"repeat(auto-fit,minmax(160px,1fr))",
            gap:"1px", background:"rgba(255,255,255,0.08)",
            border:"1px solid rgba(255,255,255,0.08)",
          }}>
            {[
              { n:"$420K",   l:"Median Staff SWE (FAANG)",      c:C.acc   },
              { n:"$600K+",  l:"Top AI Research Scientists",     c:C.green },
              { n:"68%",     l:"Of people never negotiate",      c:C.red   },
              { n:"$1M+",    l:"Lifetime cost of not negotiating",c:C.orange},
              { n:"L5→L6",   l:"The most valuable level jump",   c:C.acc   },
              { n:"14 wks",  l:"Avg job search timeline",        c:C.muted },
            ].map((s,i)=>(
              <div key={i} style={{ background:"rgba(255,255,255,0.03)", padding:"22px 20px" }}>
                <div style={{ fontFamily:"'Syne',sans-serif", fontSize:"clamp(20px,2.5vw,30px)", fontWeight:800, letterSpacing:"-1px", color:s.c, lineHeight:1 }}>{s.n}</div>
                <div style={{ fontSize:"10px", letterSpacing:"0.1em", textTransform:"uppercase", color:"rgba(245,240,232,0.45)", marginTop:"5px", lineHeight:1.4 }}>{s.l}</div>
              </div>
            ))}
          </div>

          {/* Meta */}
          <div style={{
            marginTop:"36px", paddingTop:"28px",
            borderTop:"1px solid rgba(255,255,255,0.1)",
            display:"flex", gap:"24px", flexWrap:"wrap",
            fontSize:"10px", letterSpacing:"0.12em", textTransform:"uppercase",
            color:"rgba(245,240,232,0.35)",
          }}>
            <span>📅 Feb 2026</span>
            <span>⏱ 22 min read</span>
            <span>🔬 Demand Score: 97/100</span>
            <span>📊 Data: Levels.fyi · Glassdoor · Blind · JOLTS</span>
          </div>
        </div>
      </header>

      {/* ── BODY ── */}
      <div style={{ maxWidth:"1060px", margin:"0 auto", padding:"clamp(32px,6vw,72px) clamp(20px,5vw,60px)" }}>

        {/* ── TAKEAWAY ── */}
        <Callout label="The Bottom Line (Read This First)" accent={C.acc}>
          <strong>$200K is not a unicorn salary in tech in 2026 — it's the floor for senior engineers at top companies.</strong> The median total comp for an L5 Software Engineer at Google is $310K. The median Staff Engineer at Meta clears $480K. What <em>has</em> changed is that getting there requires more intentionality than before: AI has bifurcated the market into roles that are thriving and roles that are being compressed. This brief tells you exactly which side of that line to be on, how to get interviews, how to pass them, and how to negotiate the maximum possible number at the end.
        </Callout>

        {/* ───────────────────────────────────── */}
        <SectionHead n="01" title="The State of the $200K+ Market in 2026: What the Data Actually Shows" color={C.acc}/>

        <p style={{ marginBottom:"20px", color:C.muted, lineHeight:1.85 }}>
          The post-2022 "tech winter" narrative aged poorly. While mid-tier tech companies and non-technical roles experienced real compression, top-of-market engineering compensation has continued its upward trajectory — fueled primarily by the AI infrastructure buildout, which has created extraordinary demand for a narrow band of technical roles.
        </p>
        <p style={{ marginBottom:"20px", color:C.muted, lineHeight:1.85 }}>
          According to Levels.fyi Q4 2025 data, the median total compensation for a Senior Software Engineer (L5 equivalent) across the top 20 tech companies is <strong style={{ color:C.dark }}>$285,000</strong>. That number is up 12% from 2023's post-layoff trough. For Staff Engineers (L6/L7), the median is <strong style={{ color:C.dark }}>$420,000</strong>. For AI/ML-specific roles, medians are running 20–35% higher than their non-AI equivalents at the same level.
        </p>

        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))", gap:"1px", background:C.bd, border:`1px solid ${C.bd}`, margin:"32px 0" }}>
          <StatCard number="$285K" label="Median L5 SWE Total Comp" sub="Top 20 tech companies · Q4 2025" color={C.acc}/>
          <StatCard number="$420K" label="Median Staff SWE Total Comp" sub="FAANG + Tier-1 tech · Q4 2025" color={C.green}/>
          <StatCard number="+12%" label="TC Growth vs 2023 Trough" sub="Senior roles · Levels.fyi data" color={C.blue}/>
          <StatCard number="+28%" label="AI Role Premium" sub="vs same-level non-AI roles" color={C.orange}/>
        </div>

        <Callout label="The Bifurcation Reality" accent={C.red}>
          While top-of-market comp is thriving, the middle is being compressed. Roles that involve primarily code generation, boilerplate scripting, basic CRUD work, and non-differentiated junior engineering are experiencing real wage pressure as AI tools increase individual output. The market is not declining — it's polarizing. The gap between commoditized coding work ($80K–$140K) and differentiated systems/AI/architecture work ($250K–$600K+) is <strong>widening, not narrowing</strong>. The playbook in this brief is specifically about reaching and staying in the latter category.
        </Callout>

        <h3 style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:"18px", marginTop:"40px", marginBottom:"16px" }}>The AI Effect on Tech Hiring: The Actual Numbers</h3>
        <p style={{ color:C.muted, lineHeight:1.85, marginBottom:"16px" }}>
          Goldman Sachs Research estimated in late 2025 that AI tooling has increased per-engineer productivity by an average of 18–24% across the industry. This has had a counterintuitive effect on hiring: rather than cutting headcount proportionally, leading companies have used the productivity gain to accelerate product development. The net effect is that <em>fewer junior positions</em> are being opened, but <em>more senior positions</em> are being funded at higher compensation.
        </p>
        <p style={{ color:C.muted, lineHeight:1.85, marginBottom:"20px" }}>
          The Bureau of Labor Statistics JOLTS data for December 2025 showed software developer job openings at 168,000 — below the 2021 peak of 220,000, but well above the 2019 pre-pandemic baseline of 132,000. What the aggregate numbers hide: senior roles ($180K+) are up 14% YoY, while junior roles ($70–$120K) are down 22% YoY. This is not a market in decline — it's a market that has re-stratified.
        </p>

        {/* ───────────────────────────────────── */}
        <SectionHead n="02" title="The $200K+ Roles: A Complete Map" color={C.green}/>

        <p style={{ color:C.muted, lineHeight:1.85, marginBottom:"24px" }}>
          The following table shows every role category where $200K+ total compensation is regularly achievable, what the realistic ranges look like by level, and where demand is heading. Data sourced from Levels.fyi (100K+ data points), Glassdoor compensation reports, and direct recruiter surveys.
        </p>

        <RoleTable/>

        <h3 style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:"18px", marginTop:"40px", marginBottom:"16px" }}>The AI Engineer: The Highest-Demand Role of 2026</h3>
        <p style={{ color:C.muted, lineHeight:1.85, marginBottom:"16px" }}>
          "AI Engineer" has emerged as a distinct role category — not quite ML Research Scientist, not quite traditional SWE. It sits at the intersection: someone who can take foundation models and deploy them into production systems that work reliably, scale efficiently, and produce measurable business outcomes. The demand-supply imbalance here is severe: a 2025 Lightcast labor market analysis found that job postings requiring AI/LLM skills grew 312% between January 2024 and December 2025, while the qualified candidate pool grew only 68%.
        </p>
        <p style={{ color:C.muted, lineHeight:1.85, marginBottom:"16px" }}>
          At OpenAI, an L5-equivalent AI Engineer earns $380K–$550K total comp. At Anthropic, similar roles are $360K–$520K. At Google DeepMind, $320K–$480K. At mid-tier companies deploying LLMs into their products ($100M–$1B revenue range), AI Engineers are typically earning $200K–$320K with meaningful equity upside.
        </p>
        <p style={{ color:C.muted, lineHeight:1.85, marginBottom:"20px" }}>
          The skills that define this role: RAG system design, fine-tuning and RLHF, LLM evaluation frameworks, prompt engineering at scale, agentic workflow architecture, and latency/cost optimization of inference workloads. These are not academically exotic skills — they can be learned and demonstrated in 3–6 months of focused practice with open-source tools.
        </p>

        {/* ───────────────────────────────────── */}
        <SectionHead n="03" title="Where to Aim: Companies Paying $200K+ Right Now" color={C.blue}/>

        <p style={{ color:C.muted, lineHeight:1.85, marginBottom:"24px" }}>
          Not all $200K+ environments are created equal. The following table covers the companies where $200K is realistically achievable at senior-but-not-staff levels, plus the nuances that matter for your decision: interview style, hiring velocity, equity profile, and the specific teams that are most active in Q1 2026.
        </p>

        <CompanyTable/>

        <h3 style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:"18px", marginTop:"40px", marginBottom:"16px" }}>Tier-2 Companies: The Hidden $200K Path</h3>
        <p style={{ color:C.muted, lineHeight:1.85, marginBottom:"16px" }}>
          FAANG/AI labs are not the only path. A meaningful number of engineers hit $200K+ at companies that rarely appear in the standard "top paying tech companies" lists — typically Series C to pre-IPO companies where equity does significant work. Examples from 2025–2026 compensation data:
        </p>

        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))", gap:"1px", background:C.bd, margin:"20px 0 28px" }}>
          {[
            { co:"Anduril / Palantir",  note:"Defense tech paying FAANG-equivalent comp for cleared engineers. Fastest-growing segment.", comp:"$220K–$380K", color:C.blue   },
            { co:"Figma / Linear / Notion",note:"Design/productivity tools. Smaller teams, high autonomy, strong equity.", comp:"$200K–$340K", color:C.acc    },
            { co:"Vercel / Railway",    note:"Developer infrastructure. Senior eng roles command FAANG base with startup equity.", comp:"$200K–$320K", color:C.green  },
            { co:"Watershed / Arcadia", note:"Climate tech — one of the fastest-growing sectors for senior technical talent.", comp:"$195K–$310K", color:C.green  },
            { co:"Brex / Ramp / Rippling",note:"Fintech scale-ups paying market-rate and offering meaningful equity.", comp:"$210K–$360K", color:C.orange },
            { co:"xAI / Mistral / Cohere",note:"Newer AI labs aggressive on comp to attract talent from OpenAI/Anthropic/Google.", comp:"$280K–$550K", color:C.acc    },
          ].map((r,i)=>(
            <div key={i} style={{ background:C.paper, padding:"22px", borderLeft:`3px solid ${r.color}` }}>
              <div style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:"14px", color:C.dark, marginBottom:"6px" }}>{r.co}</div>
              <div style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:"16px", color:r.color, marginBottom:"8px" }}>{r.comp}</div>
              <div style={{ fontSize:"12px", color:C.muted, lineHeight:1.6 }}>{r.note}</div>
            </div>
          ))}
        </div>

        {/* ───────────────────────────────────── */}
        <SectionHead n="04" title="Understanding Total Comp: The Math You Must Know" color={C.orange}/>

        <p style={{ color:C.muted, lineHeight:1.85, marginBottom:"20px" }}>
          Most people negotiate the wrong number. They focus on base salary because it feels most concrete. But base salary is typically the smallest lever — and at senior levels, it's often constrained by internal equity bands that recruiters genuinely cannot move. RSU grants and signing bonuses are where the real negotiation happens. Here's how the components break down and what actually moves:
        </p>

        {/* TC breakdown visual */}
        <div style={{ border:`1px solid ${C.bd}`, marginBottom:"32px" }}>
          <div style={{ background:C.dark, padding:"16px 20px" }}>
            <div style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:"11px", letterSpacing:"0.2em", textTransform:"uppercase", color:"rgba(245,240,232,0.5)" }}>
              Total Compensation Anatomy — L5 SWE at FAANG ($310K example)
            </div>
          </div>
          {[
            { comp:"Base Salary",       amount:"$185,000", pct:60, bar:60, note:"Fixed. Typically $150K–$220K at FAANG senior. Band is real — limited negotiation room. Matters for 401K, overtime, benefits calculation.", movable:"Low",   color:C.blue   },
            { comp:"Annual RSU Vesting",amount:"$90,000",  pct:29, bar:29, note:"This is where the major TC negotiation happens. Initial grant size is negotiable. Refresh grants in years 2–4 often match or exceed year 1.", movable:"High",  color:C.acc    },
            { comp:"Annual Bonus",      amount:"$25,000",  pct:8,  bar:8,  note:"Target bonus (% of base) is set by level. Actually receiving it depends on performance rating. At L5, typically 10–15% of base.",              movable:"Medium",color:C.orange },
            { comp:"Signing Bonus",     amount:"$10,000*", pct:3,  bar:3,  note:"One-time. Often clawed back if you leave within 1–2 years. Can be $20K–$150K. Critical negotiation lever for RSU vesting cliff gap.",         movable:"High",  color:C.green  },
          ].map((r,i)=>(
            <div key={i} style={{ padding:"18px 20px", borderBottom:`1px solid ${C.bd}`, display:"grid", gridTemplateColumns:"180px 1fr 100px", gap:"20px", alignItems:"start" }}>
              <div>
                <div style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:"14px", color:r.color }}>{r.comp}</div>
                <div style={{ fontFamily:"'Syne',sans-serif", fontSize:"20px", fontWeight:800, color:C.dark, marginTop:"2px" }}>{r.amount}</div>
                <div style={{ height:"3px", background:C.bd, marginTop:"6px" }}>
                  <div style={{ height:"100%", background:r.color, width:`${r.bar}%` }}/>
                </div>
              </div>
              <div style={{ fontSize:"12px", color:C.muted, lineHeight:1.7 }}>{r.note}</div>
              <div style={{ textAlign:"right" }}>
                <span style={{
                  padding:"3px 8px", fontSize:"9px",
                  background:r.movable==="High"?`${C.green}15`:r.movable==="Medium"?`${C.orange}15`:`${C.blue}15`,
                  color:r.movable==="High"?C.green:r.movable==="Medium"?C.orange:C.blue,
                  border:`1px solid ${r.movable==="High"?`${C.green}30`:r.movable==="Medium"?`${C.orange}30`:`${C.blue}30`}`,
                  fontFamily:"'DM Mono',monospace", letterSpacing:"0.05em", textTransform:"uppercase",
                }}>Movable: {r.movable}</span>
              </div>
            </div>
          ))}
          <div style={{ padding:"12px 20px", background:`${C.acc}08`, fontSize:"11px", color:C.muted, letterSpacing:"0.05em" }}>
            * Signing bonus is one-time and not included in the $310K annual TC figure. It represents additional year-1 value only.
          </div>
        </div>

        <Callout label="The RSU Math Most People Misunderstand" accent={C.acc}>
          RSUs (Restricted Stock Units) vest over 4 years, typically with a 1-year cliff. This means if you receive a $360,000 RSU grant, you receive <strong>$90,000 worth of stock per year</strong> (at the grant price). But stock price changes — both up and down. At Google, many 2020 grants have tripled in value; 2021 grants at some companies are worth half. When negotiating, focus on <em>number of shares</em>, not dollar value. The dollar value at grant is speculative; the share count is contractual. Negotiate shares. Then model scenarios.
        </Callout>

        <h3 style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:"18px", marginTop:"40px", marginBottom:"16px" }}>Level Mapping: Why L5→L6 Is the Most Valuable Jump in Tech</h3>
        <p style={{ color:C.muted, lineHeight:1.85, marginBottom:"16px" }}>
          At Google, the median TC for L5 (Senior SWE) is $310K. The median TC for L6 (Staff SWE) is $480K — a $170K jump, or 55% increase, for what is often a single promotion cycle. This is not a pay increase in the traditional sense; it's a reclassification into a fundamentally different compensation band. The same pattern holds at Meta (E5 to E6 is roughly $260K to $420K), at Amazon (L6 to L7 is $250K to $380K), and at Microsoft (Level 65 to 67 is $235K to $360K).
        </p>
        <p style={{ color:C.muted, lineHeight:1.85, marginBottom:"20px" }}>
          The strategic implication: if you are currently in the L4/L5/E4/E5 range at a top company, the highest-leverage career move you can make is not changing companies — it's getting promoted. If you're joining a new company, negotiating your starting level (L5 vs. L6) is worth more over a 4-year vesting cycle than negotiating your RSU grant within a level.
        </p>

        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))", gap:"1px", background:C.bd, margin:"20px 0 32px" }}>
          {[
            { title:"Google L5→L6",    before:"$310K",  after:"$480K",  delta:"+$170K/yr", color:C.blue   },
            { title:"Meta E5→E6",      before:"$260K",  after:"$420K",  delta:"+$160K/yr", color:C.blue   },
            { title:"Amazon L6→L7",    before:"$250K",  after:"$380K",  delta:"+$130K/yr", color:C.orange },
            { title:"Microsoft 65→67", before:"$235K",  after:"$360K",  delta:"+$125K/yr", color:C.blue   },
          ].map((s,i)=>(
            <div key={i} style={{ background:C.paper, padding:"24px", textAlign:"center", borderBottom:`3px solid ${s.color}` }}>
              <div style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:"13px", marginBottom:"12px", color:C.dark }}>{s.title}</div>
              <div style={{ display:"flex", justifyContent:"center", alignItems:"center", gap:"12px" }}>
                <span style={{ fontSize:"14px", color:C.muted }}>{s.before}</span>
                <span style={{ color:s.color }}>→</span>
                <span style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:"20px", color:C.dark }}>{s.after}</span>
              </div>
              <div style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:"16px", color:s.color, marginTop:"8px" }}>{s.delta}</div>
            </div>
          ))}
        </div>

        {/* ───────────────────────────────────── */}
        <SectionHead n="05" title="How to Position Yourself: Skills, Signals, and Differentiation" color={C.acc}/>

        <p style={{ color:C.muted, lineHeight:1.85, marginBottom:"20px" }}>
          Hiring managers at top-paying companies are not primarily looking for people who know how to code. They're looking for people who demonstrate that they can own a domain, navigate ambiguity, influence technical decisions, and produce outcomes that matter. The skills are table stakes; the signals are what get you the offer.
        </p>

        <h3 style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:"17px", marginTop:"36px", marginBottom:"14px" }}>The Technical Skills That Command Premiums in 2026</h3>

        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))", gap:"1px", background:C.bd, marginBottom:"28px" }}>
          {[
            {
              cat:"AI/ML Engineering",
              color:C.green,
              skills:[
                ["LLM fine-tuning & RLHF",          "Extreme"],
                ["RAG systems & vector databases",    "Extreme"],
                ["Agentic AI (LangGraph, CrewAI)",   "Very High"],
                ["LLM evaluation & benchmarking",    "Very High"],
                ["Inference optimization (vLLM, TRT)","High"],
                ["Multimodal systems (vision+text)",  "High"],
              ]
            },
            {
              cat:"Systems & Infrastructure",
              color:C.blue,
              skills:[
                ["Distributed systems design",        "Very High"],
                ["Kubernetes & cloud-native (AWS/GCP)","High"],
                ["Data pipeline architecture",         "High"],
                ["High-performance networking/storage","High"],
                ["GPU programming (CUDA)",             "Very High"],
                ["eBPF & Linux internals",             "Medium-High"],
              ]
            },
            {
              cat:"Software Engineering Core",
              color:C.acc,
              skills:[
                ["System design at scale (10M+ users)","Very High"],
                ["API design & service architecture",  "High"],
                ["Database optimization & query perf", "High"],
                ["Observability & incident response",  "High"],
                ["Security engineering",               "High"],
                ["TypeScript/Rust/Go (beyond Python)", "Medium-High"],
              ]
            },
          ].map((cat,i)=>(
            <div key={i} style={{ background:C.paper, padding:"24px" }}>
              <div style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:"15px", color:cat.color, marginBottom:"16px", display:"flex", gap:"10px", alignItems:"center" }}>
                <span style={{ width:"20px", height:"3px", background:cat.color }}/>
                {cat.cat}
              </div>
              {cat.skills.map(([s,d],j)=>(
                <div key={j} style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"8px 0", borderBottom:`1px solid ${C.bd}`, gap:"8px" }}>
                  <span style={{ fontSize:"12px", color:C.text }}>{s}</span>
                  <span style={{
                    fontSize:"8.5px", padding:"2px 7px",
                    background:d==="Extreme"?`${C.green}12`:d==="Very High"?`${C.acc}12`:`${C.muted}0a`,
                    color:d==="Extreme"?C.green:d==="Very High"?C.acc:C.muted,
                    border:`1px solid ${d==="Extreme"?`${C.green}25`:d==="Very High"?`${C.acc}25`:`${C.muted}20`}`,
                    fontFamily:"'DM Mono',monospace", letterSpacing:"0.05em", textTransform:"uppercase",
                    whiteSpace:"nowrap",
                  }}>{d}</span>
                </div>
              ))}
            </div>
          ))}
        </div>

        <h3 style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:"17px", marginTop:"36px", marginBottom:"14px" }}>The Non-Technical Signals That Separate Candidates</h3>
        <p style={{ color:C.muted, lineHeight:1.85, marginBottom:"16px" }}>
          At senior levels, most candidates have similar technical capabilities. The signal that separates $200K offers from $350K offers is almost entirely in the non-technical domain — how you present past impact, how you articulate your reasoning, and how you demonstrate the judgment that senior roles require.
        </p>

        {[
          {
            title:"Quantified Impact — The STAR+ Method",
            content: <p style={{ fontSize:"13px", color:C.muted, lineHeight:1.8 }}>
              The standard STAR (Situation, Task, Action, Result) interview framework is table stakes. What top-paying companies want is STAR+: Situation, Task, Action, <strong style={{color:C.dark}}>Result with numbers</strong>, and <strong style={{color:C.dark}}>what it unlocked</strong>. "I reduced API latency by 40%" is fine. "I reduced API latency by 40%, which eliminated 18% of customer support tickets and unblocked the sales team's enterprise deal pipeline worth $12M ARR" is what gets a level bump at offer time. Every story you tell in an interview needs a number, a business outcome, and ideally a second-order effect.
            </p>,
            accent:C.acc,
          },
          {
            title:"Cross-Functional Influence — The Invisible Bar",
            content: <p style={{ fontSize:"13px", color:C.muted, lineHeight:1.8 }}>
              Staff+ level promotions (and hires) hinge on a specific capability: the ability to influence decisions without direct authority. Can you drive alignment across product, design, data science, and engineering for a technical decision? Can you push back on a PM's scope with data and win? Can you mentor three engineers to ship better code without being their manager? These capabilities are assessed in behavioral interviews, in system design (do you ask about stakeholders?), and in references. Build explicit examples of this for every interview cycle.
            </p>,
            accent:C.blue,
          },
          {
            title:"Technical Writing & Public Work",
            content: <p style={{ fontSize:"13px", color:C.muted, lineHeight:1.8 }}>
              A technical blog post with 10,000 views, a well-maintained GitHub project with 500+ stars, or a published paper are not just vanity metrics — they're passive interview credibility. Hiring managers Google candidates before calls. Having a findable body of technical work that demonstrates genuine depth changes the tenor of every interview. It signals that you think deeply about problems and care about communicating that thinking. It also shortcuts the "prove you're smart" phase of interviews, leaving more room for the collaborative discussion phase where you can demonstrate judgment.
            </p>,
            accent:C.green,
          },
        ].map((item,i)=>(
          <Expand key={i} title={item.title} accent={item.accent}>{item.content}</Expand>
        ))}

        {/* ───────────────────────────────────── */}
        <SectionHead n="06" title="Getting the Interview: The Exact Playbook" color={C.blue}/>

        <p style={{ color:C.muted, lineHeight:1.85, marginBottom:"20px" }}>
          The gap between "qualified for $200K+ roles" and "getting interviews for $200K+ roles" is primarily a distribution problem, not a skills problem. Most qualified candidates are invisible because they rely on cold applications. The data on cold applications is grim: a 2025 Greenhouse study found that cold applications at top tech companies have a 2.3% response rate for senior roles. Referrals have a 48% response rate. The playbook is about getting into the 48% funnel.
        </p>

        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))", gap:"1px", background:C.bd, margin:"24px 0 32px" }}>
          {[
            { channel:"Referral",          response:"48%",  hire:"25%",  color:C.green  },
            { channel:"LinkedIn InMail (Recruiter outbound)", response:"22%", hire:"12%", color:C.acc },
            { channel:"LinkedIn (Direct apply + connection)", response:"8%",  hire:"4%",  color:C.orange},
            { channel:"Company careers page (cold)",          response:"3%",  hire:"1.5%",color:C.red  },
          ].map((r,i)=>(
            <div key={i} style={{ background:C.paper, padding:"22px", borderBottom:`3px solid ${r.color}` }}>
              <div style={{ fontSize:"11px", letterSpacing:"0.1em", textTransform:"uppercase", color:r.color, marginBottom:"8px", fontWeight:700 }}>{r.channel}</div>
              <div style={{ display:"flex", gap:"24px" }}>
                <div>
                  <div style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:"24px", color:C.dark }}>{r.response}</div>
                  <div style={{ fontSize:"10px", color:C.muted, textTransform:"uppercase", letterSpacing:"0.08em" }}>Response Rate</div>
                </div>
                <div>
                  <div style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:"24px", color:r.color }}>{r.hire}</div>
                  <div style={{ fontSize:"10px", color:C.muted, textTransform:"uppercase", letterSpacing:"0.08em" }}>Hire Rate</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h3 style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:"17px", marginTop:"36px", marginBottom:"14px" }}>How to Build a Referral Network (Even Without One Right Now)</h3>
        <p style={{ color:C.muted, lineHeight:1.85, marginBottom:"16px" }}>
          A referral is not a favor — it's a rational transaction. Most tech companies pay $5,000–$25,000 in referral bonuses to employees who refer successful hires. When you ask someone for a referral, you are offering them a potential $10,000+ bonus, not begging for charity. Reframe this internally before every outreach.
        </p>

        <Callout label="Referral Outreach Template That Works" accent={C.acc}>
          <strong>Subject:</strong> [Company name] referral — [specific role] — quick ask<br/><br/>
          <em>"Hey [Name], I came across your profile after seeing your post about [specific thing]. I'm actively looking at [Company] for the [specific role] — particularly interested in [team/product area] because [specific, genuine reason]. Would you be willing to submit a referral? Happy to share my background first so you can decide if it fits — I know your name is on it. Really appreciate the consideration either way."</em><br/><br/>
          <span style={{ fontSize:"12px", color:C.muted }}>Key elements: Specific role (not "any role"). Genuine reason for the company. Acknowledges their name is on the referral. Makes it easy to say no.</span>
        </Callout>

        <h3 style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:"17px", marginTop:"36px", marginBottom:"14px" }}>The LinkedIn Profile That Gets Recruiter Inbound</h3>
        <p style={{ color:C.muted, lineHeight:1.85, marginBottom:"16px" }}>
          If you're a senior engineer not receiving at least 3–5 recruiter messages per week on LinkedIn, your profile is costing you. The algorithm rewards profiles that tick specific keywords recruiters search for. Optimization takes 90 minutes and has a measurable effect within 2 weeks.
        </p>

        {[
          {
            title:"Headline: The Most Valuable 220 Characters in Your Career",
            content: <div style={{ fontSize:"13px", color:C.muted, lineHeight:1.8 }}>
              <p style={{ marginBottom:"10px" }}>Bad: "Software Engineer at ACME Corp" (gets ranked below 200K other engineers with the same headline)</p>
              <p style={{ marginBottom:"10px" }}>Good: "Senior Software Engineer | Distributed Systems & AI Infrastructure | Previously [Company] | 6 years backend at scale"</p>
              <p>The formula: <strong style={{color:C.dark}}>Seniority + Domain Specialization + (Optional) Past Company + Quantified Experience.</strong> Include the exact keywords recruiters search: "Senior", "Staff", "ML Engineer", "Platform Engineer", etc. LinkedIn's search ranks on headline keyword match. Your photo, banner, and headline determine 80% of whether a recruiter clicks through.</p>
            </div>,
            accent:C.acc,
          },
          {
            title:"About Section: Tell the Story, Not the Job Description",
            content: <div style={{ fontSize:"13px", color:C.muted, lineHeight:1.8 }}>
              <p style={{ marginBottom:"10px" }}>Most About sections are wall-of-text job history. Nobody reads them. The About section that gets responses is 3–4 short paragraphs:</p>
              <p style={{ marginBottom:"8px" }}>1. <strong style={{color:C.dark}}>The hook</strong>: What's the through-line of your career? What problem do you uniquely solve? (2–3 sentences)</p>
              <p style={{ marginBottom:"8px" }}>2. <strong style={{color:C.dark}}>The proof</strong>: 2–3 specific accomplishments with numbers. Systems you've built. Scale you've operated at. Impact delivered.</p>
              <p style={{ marginBottom:"8px" }}>3. <strong style={{color:C.dark}}>The interests</strong>: What technical problems genuinely fascinate you right now? (signals what you'd be great at next)</p>
              <p>4. <strong style={{color:C.dark}}>The CTA</strong>: "Open to conversations about [specific role types] at [company tier]. Best way to reach me: [email]"</p>
            </div>,
            accent:C.blue,
          },
          {
            title:"Experience Section: Bullets That Signal Senior-Level Thinking",
            content: <div style={{ fontSize:"13px", color:C.muted, lineHeight:1.8 }}>
              <p style={{ marginBottom:"10px" }}>Each role should have 3–5 bullets. Every bullet should follow this pattern:</p>
              <p style={{ marginBottom:"10px", fontFamily:"'Instrument Serif',serif", fontStyle:"italic", color:C.dark }}>
                "Built [what] using [tech/approach] that [achieved outcome] — reducing [metric] by X% / enabling [business result]."
              </p>
              <p style={{ marginBottom:"10px" }}>Weak: "Developed microservices architecture for data pipeline."</p>
              <p>Strong: "Redesigned 14-service data pipeline using event-driven architecture (Kafka + Flink), reducing P99 latency from 8s to 220ms and enabling real-time inventory decisions that reduced overstock losses by $4.2M annually."</p>
            </div>,
            accent:C.green,
          },
        ].map((item,i)=>(
          <Expand key={i} title={item.title} accent={item.accent}>{item.content}</Expand>
        ))}

        {/* ───────────────────────────────────── */}
        <SectionHead n="07" title="The Interview Process: What to Expect and How to Win" color={C.green}/>

        <p style={{ color:C.muted, lineHeight:1.85, marginBottom:"20px" }}>
          Top-paying tech companies have interview processes that are more rigorous than most PhD defenses. Understanding the structure in advance is the single highest-leverage preparation investment. You're not cramming to learn the material — you're learning to demonstrate what you already know in a format optimized for their evaluation framework.
        </p>

        <h3 style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:"17px", marginTop:"36px", marginBottom:"14px" }}>The Standard FAANG Loop (and What Each Round Is Actually Testing)</h3>

        <div style={{ border:`1px solid ${C.bd}`, marginBottom:"28px" }}>
          {[
            {
              round:"Recruiter Screen",
              duration:"30 min",
              testing:"Eligibility, communication, compensation ballpark, and whether you can explain your background coherently.",
              prep:"Know your 3-minute career story cold. Know your target comp range. Know why you want this company specifically (have a real answer). Do NOT reveal a number first — say 'I'm targeting market rate for a Senior L5/L6 role — what's the range for this position?'",
              color:C.muted,
            },
            {
              round:"Technical Screen / Coding",
              duration:"45–60 min",
              testing:"Algorithm fluency, code quality, communication while coding, debugging under pressure.",
              prep:"150+ LeetCode problems, focus on medium-hard. Blind 75 is the minimum. Neetcode 150 is better. But more important than problem count: practice talking while coding. Record yourself. 60% of candidates who fail coding screens fail because of communication, not correctness.",
              color:C.blue,
            },
            {
              round:"System Design",
              duration:"45–60 min",
              testing:"How you handle ambiguity, whether you ask good questions, how you reason about trade-offs, scale intuition.",
              prep:"Read 'Designing Data-Intensive Applications' (Kleppmann). Study 20 canonical system design problems (URL shortener, Twitter feed, distributed cache, etc.). The frame that wins: Requirements → Capacity → High-level design → Deep dive → Trade-offs. They're not looking for the right answer; they're looking for the right process.",
              color:C.green,
            },
            {
              round:"Behavioral / Leadership",
              duration:"45–60 min",
              testing:"Past behavior as a predictor of future behavior. Ownership, judgment, collaboration, and dealing with conflict.",
              prep:"Prepare 8–10 STAR stories covering: biggest technical failure, most impactful project, cross-functional conflict you navigated, time you pushed back on leadership and why, a decision you made with incomplete data, someone you mentored. For staff+: add 'time you influenced a major technical direction without authority.'",
              color:C.orange,
            },
            {
              round:"Bar Raiser / Senior Calibration",
              duration:"45–60 min",
              testing:"Whether you clear the company's overall bar — not just the team's. This interviewer is often from a different team.",
              prep:"Same prep as behavioral, but calibrate upward. The bar raiser is asking: 'Would I want this person to make critical decisions affecting systems I depend on?' Answer that question through every story. Also: be genuinely curious about the interviewer's work. Bar raisers often flag candidates who seem performative rather than genuinely engaged.",
              color:C.red,
            },
          ].map((r,i)=>(
            <div key={i} style={{ padding:"20px 24px", borderBottom:`1px solid ${C.bd}`, display:"grid", gridTemplateColumns:"160px 1fr", gap:"24px", alignItems:"start" }}>
              <div>
                <div style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:"15px", color:r.color }}>{r.round}</div>
                <div style={{ fontSize:"10px", color:C.muted, marginTop:"4px", letterSpacing:"0.06em" }}>{r.duration}</div>
                <div style={{ marginTop:"10px", fontSize:"11px", fontStyle:"italic", color:r.color, lineHeight:1.5 }}>Testing: {r.testing}</div>
              </div>
              <div style={{ fontSize:"12.5px", color:C.muted, lineHeight:1.8 }}>{r.prep}</div>
            </div>
          ))}
        </div>

        <Callout label="The Most Common Senior-Level Interview Failure Mode" accent={C.red}>
          Senior candidates fail not because they can't solve the problems — they fail because they solve them too quietly. At L5/L6+, interviewers are explicitly looking for how you think, not just what you produce. Saying nothing for 10 minutes while furiously coding is an automatic negative signal. The habit to build: <strong>narrate your thinking in real time</strong>. "I'm going to start with a brute force approach to establish a baseline, then I'll optimize. My instinct is that there's a sliding window solution here because the problem has optimal substructure." This signals exactly what senior engineers look like in practice: someone who thinks out loud and invites collaboration.
        </Callout>

        {/* ───────────────────────────────────── */}
        <SectionHead n="08" title="The Salary Negotiation Playbook: Scripts, Tactics, and the Full Framework" color={C.acc}/>

        <p style={{ color:C.muted, lineHeight:1.85, marginBottom:"16px" }}>
          A McKinsey analysis found that the average negotiation on a tech offer increases total compensation by $15,000–$35,000. Over a standard 4-year vest cycle, that's $60,000–$140,000. Over a full career, compounding on top of that (since each subsequent offer is benchmarked against your previous comp), it's well over $1,000,000. <strong style={{ color:C.dark }}>The cost of not negotiating is not zero — it's seven figures.</strong>
        </p>
        <p style={{ color:C.muted, lineHeight:1.85, marginBottom:"20px" }}>
          68% of people never negotiate. Of those who do, most negotiate only the base salary. The playbook below covers the full negotiation — base, RSU, signing, and competing offers — including the exact language to use.
        </p>

        <h3 style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:"17px", marginTop:"32px", marginBottom:"14px" }}>The 7 Principles of Tech Offer Negotiation</h3>

        {[
          { n:"01", title:"Never Accept on the Call", body:"Every offer presentation call ends with some version of 'so what do you think?' The correct answer is always some version of 'I'm genuinely excited — this is strong. I want to take a day to review the full package and come back to you thoughtfully. Can we talk Thursday?' You never lose an offer by asking for time. You sometimes lose thousands of dollars by not asking." },
          { n:"02", title:"Never Give the First Number", body:"If asked for your current salary or comp expectations before an offer is made, the correct response is: 'I'd rather understand the role and scope fully before discussing numbers — what's the range you're working with?' In California and several other states, asking for current salary is now illegal. Nationally, you are under no obligation to reveal it. Your current salary is a ceiling on you — never offer it voluntarily." },
          { n:"03", title:"Leverage Multiple Offers — Real or Manufactured", body:"The single most powerful negotiation tool is a competing offer. A real competing offer at a comparable company gives you hard leverage. But even an 'in-process' signal at another company creates soft leverage. If you have even one other company at the offer stage, say so. If you have three, you have the negotiation — not the recruiter." },
          { n:"04", title:"Negotiate Total Comp, Not Just Base", body:"When you push back on an offer, lead with total comp. 'I was targeting $380K total comp — the offer is at $310K. Can we close that gap?' This gives the recruiter room to move RSU or signing rather than base (which has harder constraints). They often can't move base much. They frequently can move RSU by 20–40%." },
          { n:"05", title:"The Exploding Offer Tactic Is Overused and Mostly Bluffable", body:"'This offer expires Friday' is almost always a tactic, not a real constraint. At FAANG and top-tier companies, offers are extended for standard reasons that engineers need more time. A polite 'I'm actively interviewing with two other companies and want to make a fully informed decision — can I have until the end of next week?' will extend 90% of exploding offers. If a company rescinds an offer for asking for more time, that's market research." },
          { n:"06", title:"The Counter-Offer Email: Format Matters", body:"When you counter, put it in email. Not to create a paper trail — but because a written counter forces clarity, is easier to forward up the approval chain, and lets you control the exact framing. Verbal counters get lost or misrepresented. Written counters get forwarded directly to the comp committee." },
          { n:"07", title:"Know Your Walk-Away Number", body:"Before any negotiation, define the number below which you will not accept regardless of how the conversation goes. This is not the number you open with — it's the number you hold in your head as the floor. Having it defined prevents you from folding under pressure when a recruiter uses social pressure tactics ('this is really our best offer, and I've gone to bat for you...') to close." },
        ].map((item,i)=>(
          <div key={i} style={{
            display:"grid", gridTemplateColumns:"48px 1fr",
            gap:"20px", padding:"20px 0",
            borderBottom:`1px solid ${C.bd}`,
          }}>
            <div style={{
              fontFamily:"'Syne',sans-serif", fontWeight:800,
              fontSize:"22px", color:C.acc, lineHeight:1,
              paddingTop:"2px",
            }}>{item.n}</div>
            <div>
              <div style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:"15px", color:C.dark, marginBottom:"6px" }}>{item.title}</div>
              <div style={{ fontSize:"13px", color:C.muted, lineHeight:1.8 }}>{item.body}</div>
            </div>
          </div>
        ))}

        <Divider label="The Scripts"/>

        <h3 style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:"17px", marginBottom:"16px" }}>Negotiation Scripts: Word-for-Word</h3>

        <Script label="When You Receive the Initial Offer">
          "Thank you so much — I'm genuinely excited about this role and the team. This is a strong offer. I want to give it the full consideration it deserves before I respond. Can I get back to you by [specific date, 3–5 days out]?"
        </Script>

        <Script label="The Counter — Single Offer, No Competing Offer">
          "I've thought carefully about this and I'm very excited about the opportunity. Based on my research on market rates for this level and my background in [specific domain], I was targeting closer to [your number — 15–25% above their offer]. Is there room to move toward that? I'm most flexible on how we get there — whether that's base, RSU grant, or signing."
        </Script>

        <Script label="The Counter — With a Competing Offer">
          "I have to be transparent with you — I've also received an offer from [Company B] at [total comp number]. I'm genuinely more excited about [this company] for [specific, real reason]. But there's a meaningful gap in total comp. If you can get to [target number], I'm ready to accept and withdraw from the other process. I want this to work."
        </Script>

        <Script label="When They Say 'This Is Our Best and Final'">
          "I appreciate you being direct. I want to make this work — I'm not trying to squeeze every dollar out of the process. But I have to be honest that the gap between this offer and my target is still [$ amount]. Is there any flexibility on the signing bonus to bridge that gap, even if RSU and base are fixed? That would help me make this decision easier."
        </Script>

        <Script label="Asking for an Offer Extension">
          "I'm in the final stages with one other company and I want to make a fully informed decision rather than a rushed one. I'm genuinely excited about [this company] — is it possible to extend the deadline to [specific date, 7–10 days]? I don't want to let a timeline drive a decision this significant."
        </Script>

        <Script label="After You've Negotiated — Locking In the Comp">
          "Thank you — I really appreciate you going to bat for this. I've reviewed the updated offer and I'm ready to accept. Can you send over the updated offer letter with [base X, RSU grant Y, signing Z] so I can sign it today?"
        </Script>

        <h3 style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:"17px", marginTop:"40px", marginBottom:"16px" }}>The Counter-Offer Math: What to Ask For</h3>

        <div style={{ border:`1px solid ${C.bd}`, marginBottom:"28px" }}>
          <div style={{ background:C.dark, padding:"14px 20px" }}>
            <div style={{ fontSize:"9px", letterSpacing:"0.2em", textTransform:"uppercase", color:"rgba(245,240,232,0.4)", fontFamily:"'Syne',sans-serif", fontWeight:700 }}>
              Example: Google L5 SWE offer — negotiation trajectory
            </div>
          </div>
          {[
            { stage:"Initial Offer",         base:"$180K", rsu:"$300K ($75K/yr)", sign:"$20K",  tc:"$275K/yr", note:"First number — always low in their range",         highlight:false },
            { stage:"Counter (Round 1)",      base:"$180K", rsu:"$340K ($85K/yr)", sign:"$25K",  tc:"$290K/yr", note:"RSU moved +$10K/yr, signing moved +$5K",           highlight:false },
            { stage:"Counter (Competing Offer)", base:"$185K",rsu:"$380K ($95K/yr)", sign:"$30K",tc:"$310K/yr", note:"Competing offer at $305K from Microsoft used",     highlight:false },
            { stage:"Final Accepted",         base:"$185K", rsu:"$400K ($100K/yr)","sign":"$35K",tc:"$320K/yr", note:"Final: +$45K/yr vs initial offer over 4-yr vesting", highlight:true  },
          ].map((r,i)=>(
            <div key={i} style={{
              display:"grid", gridTemplateColumns:"160px 1fr 1fr 1fr 1fr 200px",
              gap:"1px", background:r.highlight?`${C.acc}15`:i%2===0?"transparent":C.paper,
              borderBottom:`1px solid ${C.bd}`, padding:r.highlight?"0 0 0 16px":"0",
            }}>
              {[r.stage, r.base, r.rsu, r.sign, r.tc, r.note].map((val,j)=>(
                <div key={j} style={{
                  padding:"14px 16px",
                  fontFamily: j===4?"'Syne',sans-serif":"'DM Mono',monospace",
                  fontWeight: j===4?800:400,
                  fontSize: j===4?"15px":"12px",
                  color: j===4?C.acc : j===0?C.dark:C.muted,
                }}>{val}</div>
              ))}
            </div>
          ))}
          <div style={{ padding:"12px 20px", background:`${C.acc}06`, fontSize:"11px", color:C.muted }}>
            Total gain from negotiation: <strong style={{color:C.dark}}>+$45,000/year = +$180,000 over 4-year vest.</strong> Negotiation time invested: 3 calls, 2 emails, ~2 hours.
          </div>
        </div>

        {/* ───────────────────────────────────── */}
        <SectionHead n="09" title="The 90-Day Job Search Timeline: What to Do and When" color={C.orange}/>

        <div style={{ display:"flex", flexDirection:"column", gap:"1px", background:C.bd, marginBottom:"28px" }}>
          {[
            {
              phase:"Days 1–14",
              title:"Foundation & Positioning",
              color:C.blue,
              items:[
                "Optimize LinkedIn profile (headline, about, experience bullets)",
                "Update resume — 1-page rule for <10 years; 2-page max otherwise",
                "Set up Levels.fyi comp target by role and company tier",
                "Enable 'Open to Work' (visible to recruiters only, not your employer)",
                "List 30 target companies across 3 tiers (dream / realistic / backup)",
                "Begin LeetCode daily practice — 2 problems/day minimum",
                "Read 'System Design Interview' Vol 1 & 2 (Alex Xu)",
              ],
            },
            {
              phase:"Days 15–35",
              title:"Warm Up & Network Activation",
              color:C.acc,
              items:[
                "Reach out to 5–10 connections inside target companies for referrals",
                "Post 2–3 technical LinkedIn posts to signal active thought leadership",
                "Apply to 'practice' companies first — companies you're interested in but not desperate for",
                "Schedule informational calls with engineers at 5 target companies",
                "Do 3 mock behavioral interviews (interviewing.io, Pramp, peer)",
                "Do 5 mock coding screens with focus on communication",
                "Identify your 10 core STAR stories and write them out fully",
              ],
            },
            {
              phase:"Days 36–60",
              title:"Active Interview Phase",
              color:C.green,
              items:[
                "Apply to all target companies in parallel — do not stagger, parallelize",
                "Aim for 3–5 active processes simultaneously for negotiation leverage",
                "Track every application, screen, and interview in a spreadsheet",
                "Debrief after every interview — write down every question asked",
                "System design: do 1 practice design per day",
                "When first offer arrives, deliberately NOT accepting immediately — use it as leverage",
                "Continue interviewing even after first offer arrives",
              ],
            },
            {
              phase:"Days 61–90",
              title:"Offers & Negotiation",
              color:C.orange,
              items:[
                "Collect 2–3 competing offers before entering serious negotiation",
                "Use the scripts in Section 08 — every time",
                "Run the comp math: TC × 4yr vesting on each offer",
                "Factor in: equity liquidity, market cap trajectory, team quality",
                "Negotiate signing bonus to bridge any vesting cliff gap",
                "Get final offers in writing before declining competing offers",
                "After signing: schedule 30-day, 60-day, 90-day check-ins with new manager",
              ],
            },
          ].map((phase,i)=>(
            <div key={i} style={{ background:i%2===0?C.paper:"white", padding:"28px", display:"grid", gridTemplateColumns:"160px 1fr", gap:"24px", alignItems:"start" }}>
              <div>
                <div style={{ fontFamily:"'DM Mono',monospace", fontSize:"10px", letterSpacing:"0.12em", color:phase.color, marginBottom:"4px" }}>{phase.phase}</div>
                <div style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:"15px", color:C.dark }}>{phase.title}</div>
                <div style={{ width:"32px", height:"3px", background:phase.color, marginTop:"10px" }}/>
              </div>
              <ul style={{ listStyle:"none", padding:0, margin:0 }}>
                {phase.items.map((item,j)=>(
                  <li key={j} style={{
                    fontSize:"12.5px", color:C.muted, lineHeight:1.7,
                    padding:"5px 0", borderBottom:`1px solid ${C.bd}`,
                    display:"flex", gap:"10px", alignItems:"flex-start",
                  }}>
                    <span style={{ color:phase.color, flexShrink:0, marginTop:"1px" }}>→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ───────────────────────────────────── */}
        <SectionHead n="10" title="Red Flags: Companies and Offers to Walk Away From" color={C.red}/>

        <p style={{ color:C.muted, lineHeight:1.85, marginBottom:"20px" }}>
          Not all $200K offers are equal. A $200K offer at a company in financial distress, with illiquid equity, where the culture burns people out in 18 months, is worth less than a $170K offer at a stable company with genuine equity upside and strong mentorship. The following are real red flags that the compensation number obscures.
        </p>

        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))", gap:"1px", background:C.bd, marginBottom:"28px" }}>
          {[
            { flag:"Equity in distressed or stagnant company",  risk:"High", detail:"RSU from a company whose stock is -60% from grant price is worth far less than the offer stated. Research stock trajectory and unit economics before accepting.", color:C.red    },
            { flag:"No RSU refresh grants policy",              risk:"High", detail:"If year-1 RSU is your only equity, by year 3 you have no deferred comp cliff. The best retention tool is annual refreshes — ask explicitly: 'What does the annual refresh policy look like for this level?'", color:C.red },
            { flag:"Impossible-to-attain performance ratings",  risk:"Medium", detail:"Companies like Amazon have forced distribution models where only a % of engineers can receive 'Exceeds Expectations' — which is required to receive full bonus and refresh. Research the internal ratings curve.", color:C.orange },
            { flag:"Comp that requires working 70+ hrs/week",   risk:"Medium", detail:"Netflix's high comp is real. So is their 'freedom and responsibility' culture that has fired 30% of staff in some reorganizations. Ask current employees about actual expectations, not what's on the careers page.", color:C.orange },
            { flag:"No clear leveling discussion at offer",     risk:"Medium", detail:"If a company won't discuss what level they're hiring you at, that's a signal you may be being under-leveled to save money. Demand clarity: 'What level is this role — and what does promotion to the next level look like?'", color:C.orange },
            { flag:"Signing bonus that replaces RSU rather than supplements it", risk:"High", detail:"A large signing bonus ($50K+) that comes with below-market RSU is a trap: signing bonuses don't recur, RSU does. The math over 4 years always favors RSU.", color:C.red },
          ].map((r,i)=>(
            <div key={i} style={{ background:C.paper, padding:"22px", borderTop:`3px solid ${r.color}` }}>
              <div style={{ display:"flex", justifyContent:"space-between", marginBottom:"8px" }}>
                <div style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:"13px", color:C.dark, lineHeight:1.3 }}>{r.flag}</div>
                <span style={{ fontSize:"9px", padding:"2px 7px", background:`${r.color}15`, color:r.color, border:`1px solid ${r.color}30`, fontFamily:"'DM Mono',monospace", letterSpacing:"0.05em", whiteSpace:"nowrap", height:"fit-content" }}>{r.risk} Risk</span>
              </div>
              <div style={{ fontSize:"12px", color:C.muted, lineHeight:1.7 }}>{r.detail}</div>
            </div>
          ))}
        </div>

        {/* ───────────────────────────────────── */}
        <SectionHead n="11" title="After the Offer: The First 90 Days That Determine Everything" color={C.blue}/>

        <p style={{ color:C.muted, lineHeight:1.85, marginBottom:"20px" }}>
          Getting the offer is the beginning of the leverage window, not the end. Your performance in the first 90 days at a $200K+ role determines whether you get the refreshes and promotions that make it $280K by year 3, or whether you're in a performance review conversation by year 2. The research on onboarding is clear: engineers who achieve a meaningful win in the first 30 days are 62% more likely to receive an 'Exceeds Expectations' rating in their first formal review (Google internal onboarding study, 2024).
        </p>

        <Callout label="The 30/60/90 Day Framework for Senior Engineers" accent={C.blue}>
          <strong>Days 1–30:</strong> Listen, learn, ship one small thing. Map the org. Understand the codebase. Understand the current quarter's priorities. Do not propose changes. Ship one small thing with complete ownership. Build relationships with 5–10 key stakeholders. Goal: be trusted.<br/><br/>
          <strong>Days 31–60:</strong> Take ownership of a real project. Identify one thing that's broken or inefficient that nobody owns. Start a proposal. Be visibly helpful to the people around you. Participate meaningfully in technical discussions — but listen 2x more than you talk. Goal: be relied upon.<br/><br/>
          <strong>Days 61–90:</strong> Deliver the project. Document what you learned and how the system works. Share knowledge with the team. Identify your promotion case if you were under-leveled. Start a conversation with your manager about 6-month goals and what success looks like. Goal: be seen as someone who was worth every dollar they were paid.
        </Callout>

        {/* ───────────────────────────────────── */}
        <Divider label="Summary"/>

        {/* Summary grid */}
        <h3 style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:"22px", letterSpacing:"-0.5px", marginBottom:"24px", color:C.dark }}>The 12-Point $200K+ Checklist</h3>

        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))", gap:"1px", background:C.bd, border:`1px solid ${C.bd}`, marginBottom:"40px" }}>
          {[
            { n:"01", text:"Target L5/L6 roles at FAANG or AI labs — $200K is the floor here, not a stretch goal",         color:C.acc   },
            { n:"02", text:"Specialize in AI/ML engineering or distributed systems — both command 20–35% premiums",          color:C.green },
            { n:"03", text:"Fix your LinkedIn headline to include seniority level + domain — recruiter inbound will increase",color:C.acc   },
            { n:"04", text:"Build referral relationships before you need them — the 48% response rate is your goal",         color:C.blue  },
            { n:"05", text:"Grind LeetCode Medium/Hard + study system design — the bar hasn't dropped despite AI tools",    color:C.orange},
            { n:"06", text:"Parallelize interviews — have 3+ active processes at once for negotiation leverage",            color:C.acc   },
            { n:"07", text:"Never accept on the call — always ask for 3–5 days to review",                                 color:C.red   },
            { n:"08", text:"Negotiate total comp, not base — RSU and signing are where the real money moves",               color:C.acc   },
            { n:"09", text:"Use competing offers — even in-process ones — as explicit leverage",                            color:C.green },
            { n:"10", text:"Understand the L5→L6 jump: $170K+/year difference at Google. Fight for your level.",           color:C.acc   },
            { n:"11", text:"Check equity health: stagnant stock + no refresh policy = the number on the offer is fake",    color:C.red   },
            { n:"12", text:"Ship something meaningful in the first 30 days — it sets the trajectory for everything after", color:C.blue  },
          ].map((item,i)=>(
            <div key={i} style={{ background:i%2===0?C.bg:C.paper, padding:"22px" }}>
              <div style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:"28px", color:item.color, lineHeight:1, marginBottom:"8px" }}>{item.n}</div>
              <div style={{ fontSize:"12.5px", color:C.muted, lineHeight:1.7 }}>{item.text}</div>
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <div style={{ background:C.dark, padding:"clamp(32px,5vw,56px)", marginBottom:"0" }}>
          <div style={{
            fontFamily:"'DM Mono',monospace", fontSize:"9px",
            letterSpacing:"0.25em", textTransform:"uppercase",
            color:"rgba(245,240,232,0.35)", marginBottom:"16px",
          }}>Blackbourxe — Research Without the Noise</div>
          <h2 style={{
            fontFamily:"'Syne',sans-serif",
            fontSize:"clamp(24px,4vw,42px)",
            fontWeight:800, letterSpacing:"-1.5px",
            lineHeight:1.05, color:"#f5f0e8", marginBottom:"16px",
          }}>
            The difference between $150K and<br/>
            <span style={{ color:C.acc }}>$350K is not your code.</span><br/>
            It's what you do with the information.
          </h2>
          <p style={{
            fontFamily:"'Instrument Serif',serif", fontStyle:"italic",
            fontSize:"16px", color:"rgba(245,240,232,0.5)",
            lineHeight:1.65, maxWidth:"540px",
          }}>
            Every piece of leverage in this brief has been available to engineers for years. Most people don't use it because they don't know it exists. Now you do. The negotiation alone is worth more than two months of any salary you'll earn.
          </p>

          <div style={{ marginTop:"36px", paddingTop:"28px", borderTop:"1px solid rgba(255,255,255,0.08)", display:"flex", gap:"24px", flexWrap:"wrap" }}>
            <div>
              <div style={{ fontSize:"9px", letterSpacing:"0.15em", textTransform:"uppercase", color:"rgba(245,240,232,0.3)", marginBottom:"6px" }}>Sources Used</div>
              <div style={{ fontSize:"11px", color:"rgba(245,240,232,0.4)", lineHeight:1.8 }}>
                Levels.fyi Q4 2025 · Bureau of Labor Statistics JOLTS Dec 2025 · Glassdoor Tech Salary Reports 2026 · Lightcast Labor Market Analytics · Goldman Sachs Global Technology Research · McKinsey Compensation Analysis · Greenhouse Hiring Benchmark Report 2025 · Google Internal Onboarding Study 2024 (cited in re:Work publications)
              </div>
            </div>
          </div>
        </div>

        {/* Tags footer */}
        <div style={{ marginTop:"28px", display:"flex", gap:"8px", flexWrap:"wrap" }}>
          {["$200K+","Tech Careers","Salary Negotiation","FAANG","Levels.fyi","AI Engineer","Staff Engineer","Total Compensation","System Design","Interview Prep","Job Search","2026"].map(t=>(
            <Tag key={t}>{t}</Tag>
          ))}
        </div>

      </div>
    </div>
  );
};

export default TechJob200k2026;