/* ── METADATA ── */
export const metadata = {
  title: "How to Build an AI-Powered Business in 2026 — The No-Fluff Playbook",
  publishedAt: "Feb 20, 2026",
  updatedAt: "Mar 2, 2026",
  status: "published",
  wordCount: 8500,
  readTime: "18 min"
};

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
  bg:"#f5f0e8", paper:"#ede8e0", dark:"#0a0a0a", dark2:"#141414", dark3:"#1e1e1e",
  bd:"rgba(10,10,10,0.1)", bdDark:"rgba(255,255,255,0.07)", text:"#0a0a0a",
  muted:"#6b6560", acc:"#c8ff00", rust:"#d4380d", red:"#e63329",
  blue:"#0057ff", green:"#00b87a", orange:"#e87820",
};

/* ── MICRO COMPONENTS ── */

const Divider = ({ label, color }) => (
  <div style={{
    display:"flex", alignItems:"center", gap:"16px", margin:"64px 0 32px",
    fontFamily:"'Syne',sans-serif", fontSize:"10px", fontWeight:700,
    letterSpacing:"0.28em", textTransform:"uppercase", color:color||C.acc,
  }}>
    <span style={{ flex:1, height:"1px", background:color?`${color}40`:`${C.dark}15` }}/>
    <span>{label}</span>
    <span style={{ flex:1, height:"1px", background:color?`${color}40`:`${C.dark}15` }}/>
  </div>
);

const Callout = ({ label, children, accent, dark }) => (
  <div style={{
    background:dark?C.dark:accent?`${accent}0c`:C.paper,
    border:`1px solid ${dark?C.bdDark:accent?`${accent}25`:C.bd}`,
    borderLeft:`3px solid ${accent||C.acc}`, padding:"24px 28px", margin:"28px 0",
  }}>
    {label && <div style={{ fontFamily:"'Syne',sans-serif", fontSize:"9px", fontWeight:700, letterSpacing:"0.25em", textTransform:"uppercase", color:dark?C.acc:accent||C.acc, marginBottom:"10px" }}>{label}</div>}
    <div style={{ fontSize:"13.5px", lineHeight:1.8, color:dark?"rgba(245,240,232,0.85)":C.text }}>{children}</div>
  </div>
);

const BigStat = ({ number, label, sub, color }) => (
  <div style={{ background:C.dark, padding:"28px 24px", borderBottom:`3px solid ${color||C.acc}` }}>
    <div style={{ fontFamily:"'Syne',sans-serif", fontSize:"clamp(28px,3.5vw,40px)", fontWeight:800, letterSpacing:"-1.5px", lineHeight:1, color:color||C.acc, marginBottom:"6px" }}>{number}</div>
    <div style={{ fontSize:"11px", fontWeight:600, letterSpacing:"0.08em", textTransform:"uppercase", color:"rgba(245,240,232,0.9)", marginBottom:"4px" }}>{label}</div>
    {sub && <div style={{ fontSize:"11px", color:"rgba(245,240,232,0.4)", lineHeight:1.5 }}>{sub}</div>}
  </div>
);

const SectionHead = ({ n, title, color }) => (
  <div style={{ margin:"72px 0 32px" }}>
    <div style={{ fontFamily:"'DM Mono',monospace", fontSize:"10px", letterSpacing:"0.2em", textTransform:"uppercase", color:color||C.rust, marginBottom:"10px", display:"flex", alignItems:"center", gap:"10px" }}>
      <span style={{ width:"20px", height:"1px", background:color||C.rust, display:"inline-block" }}/>
      Section {n}
    </div>
    <h2 style={{ fontFamily:"'Syne',sans-serif", fontSize:"clamp(24px,3.5vw,38px)", fontWeight:800, letterSpacing:"-1px", lineHeight:1.1, color:C.dark, borderBottom:`1px solid ${C.bd}`, paddingBottom:"16px" }}>{title}</h2>
  </div>
);

const WarningBlock = ({ label, title, children }) => (
  <div style={{ background:`${C.red}06`, border:`1px solid ${C.red}22`, borderLeft:`3px solid ${C.red}`, padding:"24px 28px", margin:"20px 0" }}>
    <div style={{ fontFamily:"'Syne',sans-serif", fontSize:"9px", fontWeight:700, letterSpacing:"0.25em", textTransform:"uppercase", color:C.red, marginBottom:"8px" }}>⚠ {label}</div>
    <div style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:"15px", letterSpacing:"-0.3px", color:C.dark, marginBottom:"10px" }}>{title}</div>
    <div style={{ fontSize:"13.5px", lineHeight:1.8, color:C.muted }}>{children}</div>
  </div>
);

const CheckRow = ({ ok, children }) => (
  <div style={{ display:"flex", gap:"12px", alignItems:"flex-start", padding:"10px 0", borderBottom:`1px solid ${C.bd}`, fontSize:"13px", lineHeight:1.7, color:C.muted }}>
    <span style={{ color:ok?C.green:C.red, fontWeight:700, flexShrink:0, marginTop:"1px" }}>{ok?"✓":"✕"}</span>
    <span>{children}</span>
  </div>
);

const StepBlock = ({ n, title, sub, children, color }) => (
  <div style={{ display:"grid", gridTemplateColumns:"48px 1fr", gap:"20px", padding:"24px 0", borderBottom:`1px solid ${C.bd}` }}>
    <div style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:"28px", letterSpacing:"-1.5px", color:color?`${color}35`:`${C.acc}35`, lineHeight:1, textAlign:"right", paddingTop:"4px" }}>{n}</div>
    <div>
      <div style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:"15px", letterSpacing:"-0.3px", color:C.dark, marginBottom:"4px" }}>{title}</div>
      {sub && <div style={{ fontSize:"10px", letterSpacing:"0.15em", textTransform:"uppercase", color:color||C.acc, marginBottom:"8px" }}>{sub}</div>}
      <div style={{ fontSize:"13px", lineHeight:1.85, color:C.muted }}>{children}</div>
    </div>
  </div>
);

/* ════════════════════════════════════
   MAIN COMPONENT
════════════════════════════════════ */
const AiPoweredBusiness2026 = () => {
  const prose = { fontFamily:"'DM Mono',monospace", fontSize:"14px", lineHeight:1.9, color:C.muted, marginBottom:"20px", maxWidth:"700px" };
  const s = { color:C.dark, fontWeight:600 };

  return (
    <div style={{ fontFamily:"'DM Mono',monospace", background:C.bg, color:C.text, lineHeight:1.75, fontSize:"14px" }}>
      <Fonts />

      {/* ── TOP BAR ── */}
      <div style={{ background:C.dark, padding:"12px 60px", display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:"12px" }}>
        <span style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:"13px", color:C.acc }}>Blackbourxe</span>
        <div style={{ display:"flex", gap:"20px", flexWrap:"wrap", fontSize:"9px", letterSpacing:"0.18em", textTransform:"uppercase", color:"rgba(245,240,232,0.3)" }}>
          <span>Deep Research Brief</span>
          <span style={{ color:"rgba(245,240,232,0.5)" }}>AI · Business Models · Startup Routes</span>
          <span style={{ color:`${C.acc}99` }}>March 2026</span>
        </div>
      </div>

      {/* ── HERO ── */}
      <header style={{ background:C.dark, color:"#f5f0e8", padding:"80px 60px 64px", position:"relative", overflow:"hidden", borderBottom:"1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ position:"absolute", inset:0, pointerEvents:"none", backgroundImage:"linear-gradient(rgba(255,255,255,0.018) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.018) 1px,transparent 1px)", backgroundSize:"72px 72px" }}/>
        <div style={{ position:"absolute", top:0, right:0, width:"50%", height:"100%", background:"radial-gradient(ellipse at 100% 0%,rgba(200,255,0,0.06),transparent 60%)", pointerEvents:"none" }}/>

        <div style={{ display:"flex", gap:"24px", marginBottom:"36px", fontSize:"11px", letterSpacing:"0.15em", textTransform:"uppercase", color:"rgba(245,240,232,0.4)", flexWrap:"wrap", position:"relative", zIndex:1 }}>
          {["Deep Research Report","March 2026","AI · Business"].map((t,i)=>(
            <span key={i} style={{ display:"flex", alignItems:"center", gap:"8px" }}><span style={{ color:C.acc }}>▸</span>{t}</span>
          ))}
        </div>

        <h1 className="fu" style={{ fontFamily:"'Syne',sans-serif", fontSize:"clamp(38px,7vw,82px)", fontWeight:800, lineHeight:0.95, letterSpacing:"-3px", marginBottom:"28px", position:"relative", zIndex:1 }}>
          How to Build an{" "}<em style={{ fontStyle:"normal", color:C.acc }}>AI-Powered<br/>Business</em>{" "}in 2026 —<br/>
          <span style={{ color:"rgba(245,240,232,0.18)" }}>The Complete Playbook</span>
        </h1>

        <p className="fu1" style={{ fontFamily:"'Instrument Serif',serif", fontStyle:"italic", fontSize:"clamp(17px,2.2vw,21px)", color:"rgba(245,240,232,0.6)", maxWidth:"620px", lineHeight:1.55, marginBottom:"52px", position:"relative", zIndex:1 }}>
          Which models produce real revenue. The verified case studies. The real moats. And the exact step-by-step routes for starting each of the four business types — including what to do on day one, what to charge, and what kills founders before they get traction.
        </p>

        <div className="fu2" style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(145px,1fr))", gap:"1px", background:"rgba(255,255,255,0.06)", border:"1px solid rgba(255,255,255,0.06)", position:"relative", zIndex:1 }}>
          {[
            { num:"$238B",  label:"VC invested in AI",    sub:"47% of all global VC, 2025" },
            { num:"$3.3M",  label:"Rev / employee",       sub:"Cursor — new efficiency benchmark" },
            { num:"75%",    label:"SaaS will be vertical", sub:"By 2028 — Gartner projection" },
            { num:"4 mo.",  label:"Faster to $1M ARR",    sub:"AI startups vs. traditional SaaS" },
            { num:"80%",    label:"Op. margins (lean AI)", sub:"vs. 10–20% traditional SaaS" },
          ].map((s,i)=>(
            <div key={i} style={{ padding:"22px 20px", borderTop:`3px solid ${C.acc}` }}>
              <div style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:"clamp(20px,3vw,30px)", letterSpacing:"-1.5px", lineHeight:1, color:C.acc, marginBottom:"6px" }}>{s.num}</div>
              <div style={{ fontSize:"10px", fontWeight:600, letterSpacing:"0.08em", textTransform:"uppercase", color:"rgba(245,240,232,0.85)", marginBottom:"3px" }}>{s.label}</div>
              <div style={{ fontSize:"10px", color:"rgba(245,240,232,0.35)", lineHeight:1.4 }}>{s.sub}</div>
            </div>
          ))}
        </div>
      </header>

      {/* ── CONTENT ── */}
      <div style={{ maxWidth:"1100px", margin:"0 auto", padding:"0 60px" }}>

        {/* TOC */}
        <div style={{ margin:"52px 0", padding:"28px 32px", background:C.paper, border:`1px solid ${C.bd}`, borderLeft:`3px solid ${C.acc}` }}>
          <div style={{ fontFamily:"'Syne',sans-serif", fontSize:"9px", fontWeight:700, letterSpacing:"0.25em", textTransform:"uppercase", color:C.acc, marginBottom:"16px" }}>Contents — 13 Sections</div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(260px,1fr))", gap:"6px 32px" }}>
            {[
              "01 — Why This Moment Is Different","02 — The New Efficiency Benchmarks",
              "03 — Four Models Producing Revenue","04 — Verified Case Studies",
              "05 — What the Real Moats Are","06 — The Operational Stack",
              "07 — What Doesn't Work in 2026","08 — The AI Business Decision Stack",
              "09 — What One Person Can Build","10 — How to Start Model 01: Vertical AI SaaS",
              "11 — How to Start Model 02: AI-Augmented Services","12 — How to Start Model 03: Agent-as-a-Service",
              "13 — How to Start Model 04: AI-Native Consumer Product","14 — The Future: What to Build for 2027–2030",
              "15 — Conclusions",
            ].map((item,i)=>(
              <div key={i} style={{ fontSize:"12.5px", color:C.muted, padding:"4px 0", borderBottom:`1px solid ${C.bd}` }}>{item}</div>
            ))}
          </div>
        </div>

        {/* ═══ 01 ═══ */}
        <SectionHead n="01" title="Why This Moment Is Different" />
        <p style={prose}>In 2025, $238 billion in venture capital flowed into AI — 47% of all global VC investment. The OECD puts it higher: $258.7 billion, or 61% of all venture capital globally. No single technology sector has ever captured that share of global investment capital at any point in recorded financial history.</p>
        <p style={prose}>But capital concentration tells you less than where the revenue is actually landing. Menlo Ventures' 2025 Generative AI Report found $37 billion in enterprise AI revenue — up 3× year-over-year — split almost evenly between user-facing AI products ($19B) and AI infrastructure ($18B). The opportunity is bifurcated: infrastructure is a capital-intensive bet on being the foundational layer, application layer is a domain-expertise bet on owning a specific workflow. For most founders, that's a clear answer on where to play.</p>
        <p style={prose}>Gartner's 2026 prediction: vertical SaaS will account for 75% of the total SaaS opportunity by 2028. That window is open right now and it will not be open indefinitely. 30% of enterprise AI deployments are already vertical-specific as of 2026, and that number is accelerating. The companies that enter specific verticals in 2026 will be the ones with 3–4 years of workflow data and customer relationships when the 2029 competitive wave arrives.</p>

        <Callout label="The Market Structure in 2026" accent={C.rust}>
          <strong style={s}>Three things are true simultaneously:</strong> (1) The market is enormous — $37B enterprise AI revenue growing 3× YoY. (2) Most of that value is concentrated in specific, defensible workflow positions, not broad "AI for everything" products. (3) The window for staking a claim in an undefended vertical is still open — but closing faster than most people realize. Gartner's 1,445% surge in multi-agent system inquiries from Q1 2024 to Q2 2025 signals that enterprise buyers know what they want. The founders who built the products they want are going to win big.
          <div style={{ fontSize:"10px", color:C.muted, marginTop:"8px", letterSpacing:"0.08em", textTransform:"uppercase" }}>Menlo Ventures 2025 · Gartner Strategic Predictions 2026 · OECD AI Investment Report 2026</div>
        </Callout>

        <p style={prose}>The most important strategic insight in this brief: <span style={s}>the companies generating sustainable AI revenue in 2026 are not the ones with the best AI.</span> They're the ones with the deepest workflow integration, the most specific audience, and the clearest reason a customer can't replace them with whatever the foundation model companies ship next quarter. Business and professional services — the primary target for vertical AI — account for 13% of US GDP. That's roughly 10× the size of the entire software market. Vertical AI isn't competing for IT budgets. It's competing for labor budgets. The labor line is 10× larger, and AI is the first technology in history that can genuinely threaten it.</p>

        {/* ═══ 02 ═══ */}
        <SectionHead n="02" title="The New Efficiency Benchmarks" color={C.green} />
        <p style={{ ...prose, fontFamily:"'Instrument Serif',serif", fontStyle:"italic", fontSize:"18px", color:C.dark, maxWidth:"680px" }}>
          Traditional software companies generate $150K–$300K in revenue per employee. That was the benchmark for decades. A small cohort of AI-native companies have made that number look like a rounding error.
        </p>

        <div style={{ overflowX:"auto", margin:"32px 0 8px" }}>
          <table style={{ width:"100%", borderCollapse:"collapse", fontSize:"13px" }}>
            <thead>
              <tr style={{ background:C.dark }}>
                {["Company","Revenue","Employees","Rev / Employee","Model"].map(h=>(
                  <th key={h} style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:"9.5px", letterSpacing:"0.15em", textTransform:"uppercase", padding:"12px 18px", textAlign:"left", color:"rgba(245,240,232,0.5)", borderBottom:"2px solid rgba(255,255,255,0.07)" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                { co:"Midjourney",         rev:"$500M",     emp:"~163",   rpe:"$3M–$5M",  rpeC:C.green,  hl:true,  model:"Consumer subscription — $0 marketing spend, ever" },
                { co:"Cursor (Anysphere)", rev:"$500M ARR", emp:"~50",    rpe:"$3.3M",    rpeC:C.green,  hl:true,  model:"Developer tools — $1M to $100M ARR in 12 months" },
                { co:"Harvey AI",          rev:"$195M ARR", emp:"~500",   rpe:"$390K",    rpeC:C.orange, hl:false, model:"Vertical AI — legal, enterprise, B2B" },
                { co:"Gamma",              rev:"$50M ARR",  emp:"30",     rpe:"$1.67M",   rpeC:C.green,  hl:true,  model:"AI presentations — 50M users, profitable month 15" },
                { co:"Base44",             rev:"$80M exit", emp:"1",      rpe:"$80M",     rpeC:C.green,  hl:true,  model:"Solo B2B SaaS — 6 months build, 6 months to exit" },
                { co:"OpenAI",             rev:"$14.2B",    emp:"~3,000", rpe:"$1.5M+",   rpeC:C.orange, hl:false, model:"Foundation model — consumer + enterprise API" },
                { co:"Traditional SaaS",   rev:"—",         emp:"—",      rpe:"$150–300K",rpeC:C.muted,  hl:false, model:"Pre-AI benchmark (comparison baseline)" },
              ].map((r,i)=>(
                <tr key={i} style={{ background:r.hl?`${C.acc}08`:i%2===0?"transparent":C.paper, cursor:"default", transition:"background .12s" }}
                  onMouseEnter={e=>e.currentTarget.style.background=`${C.acc}12`}
                  onMouseLeave={e=>e.currentTarget.style.background=r.hl?`${C.acc}08`:i%2===0?"transparent":C.paper}
                >
                  <td style={{ padding:"13px 18px", borderBottom:`1px solid ${C.bd}`, borderLeft:r.hl?`3px solid ${C.acc}`:"3px solid transparent", fontFamily:"'Syne',sans-serif", fontWeight:r.hl?700:500, color:r.hl?C.dark:C.muted }}>{r.co}</td>
                  <td style={{ padding:"13px 18px", borderBottom:`1px solid ${C.bd}`, fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:"15px", letterSpacing:"-0.5px", color:C.acc }}>{r.rev}</td>
                  <td style={{ padding:"13px 18px", borderBottom:`1px solid ${C.bd}`, color:C.muted }}>{r.emp}</td>
                  <td style={{ padding:"13px 18px", borderBottom:`1px solid ${C.bd}`, fontFamily:"'Syne',sans-serif", fontWeight:700, color:r.rpeC }}>{r.rpe}</td>
                  <td style={{ padding:"13px 18px", borderBottom:`1px solid ${C.bd}`, color:C.muted, fontSize:"12px", lineHeight:1.5 }}>{r.model}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={{ fontSize:"10px", color:C.muted, marginBottom:"28px" }}>* Revenue data: Dealroom.co, Sacra Research, Quantumrun Foresight, ByteIota Analysis · Q4 2025 / Q1 2026</div>

        <Callout label="The Midjourney Anomaly" dark>
          <strong style={{ color:C.acc }}>$500 million in annual revenue.</strong> 163 employees. Zero marketing spend — ever. In 2023, at 11 employees and $200M in revenue, revenue per employee hit $18M — the highest ratio in the recorded history of software companies. They never ran an ad. Never hired a growth team. Distribution was entirely product-driven: every image created was a product advertisement for the tool that created it. The lesson isn't "build something viral." The lesson is that when your output is inherently demonstrative of your product's capability, you don't need a CAC budget.
          <div style={{ fontSize:"10px", color:"rgba(245,240,232,0.3)", marginTop:"10px", letterSpacing:"0.08em", textTransform:"uppercase" }}>AIPRM Midjourney Statistics · ByteIota Tiny Teams Revolution · 2025</div>
        </Callout>

        <p style={prose}>The efficiency revolution has a structural explanation. Traditional software companies scale by adding headcount proportionally to revenue. AI-native companies have decoupled this relationship: when your product's core delivery mechanism is AI inference rather than human labor, adding more customers doesn't require adding more people at anywhere near the same ratio. <span style={s}>Gross margins of 70–85% are achievable because the variable cost of serving one more customer is essentially the API call cost — a few dollars per month, not another human's salary.</span> This is the most profound change in business unit economics since the cloud eliminated on-premise infrastructure costs.</p>

        {/* ═══ 03 ═══ */}
        <SectionHead n="03" title="Four Models Actually Producing Revenue in 2026" />
        <p style={{ ...prose, fontFamily:"'Instrument Serif',serif", fontStyle:"italic", fontSize:"18px", color:C.dark, maxWidth:"680px" }}>
          The margins, startup requirements, defensibility timelines, and exit profiles of these four models are completely different. Choosing the wrong model for your situation is the most expensive mistake a founder makes in 2026. Know which game you're playing before you write a single line of code.
        </p>

        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))", gap:"1px", background:C.bd, border:`1px solid ${C.bd}`, margin:"32px 0" }}>
          {[
            { n:"01", name:"Vertical AI SaaS", range:"$50M–$195M ARR", rangeLabel:"24–36 months (verified cases)", color:C.green,
              rows:[
                ["What it is","Deep, domain-specific AI built for one industry's most painful workflows. Legal research and document review. Medical clinical note generation. Financial analysis and compliance. Construction project management. The narrower, the better."],
                ["Why it works","Specificity creates defensibility that a general LLM can't replicate. A model fine-tuned on 100,000 legal briefs and trained by practicing lawyers understands context, citations, and risk factors that matter to a Latham & Watkins partner. That specificity translates to outcome quality that commands enterprise pricing."],
                ["Revenue model","Monthly/annual subscriptions per seat or per document processed. Enterprise contracts $50K–$500K ACV. Healthcare clients pay $40K–$80K implementation plus $3K–$6K/month ongoing. Legal and financial verticals similar."],
                ["Startup requirement","Domain expertise (yours or your co-founder's) plus technical ability to build and integrate. Regulated industries require patience with compliance. Ideal founder: former industry practitioner who learned to code, or technical founder with deep industry partnership."],
                ["Exit ceiling","Acquisition or IPO. Harvey at $8B valuation. The exit multiples in vertical AI are significantly higher than horizontal SaaS because of the defensibility premium buyers pay. Gartner: vertical SaaS will be 75% of total SaaS opportunity by 2028."],
              ]},
            { n:"02", name:"AI-Augmented Services", range:"$15K–$80K / month", rangeLabel:"solo or micro-team, verified", color:C.acc,
              rows:[
                ["What it is","Agency-style professional services — copywriting, design, video production, ad creative, SEO, software development — executed 5–10× faster using AI tools. The human provides strategy, creative direction, and quality control. AI handles the bulk of execution."],
                ["Why it works","Clients pay for outcomes and deliverables, not for the hours it takes you to produce them. If AI compresses a 20-hour project into 2 hours, your effective billing rate is 10× higher — but the client is paying for the same result, often faster and at comparable or better quality."],
                ["Revenue model","Project-based fees ($5K–$500K depending on scope) or monthly retainers ($2K–$50K). Operating margins: 60–80% because your main costs are AI tools ($200–$500/month) and your time. No employees needed at sub-$20K MRR."],
                ["Startup requirement","One existing professional skill combined with AI tool proficiency. You don't need to build anything. You need to know which tools accelerate your specific service and how to quality-control their output. The barrier is credibility, not technology."],
                ["The ceiling","Revenue plateaus without productization. The ceiling on a services business is how many clients one person can serve at high quality. At 3–5 retainer clients at $5K–$15K each, you're at $15K–$75K MRR. Beyond that, you either hire, automate further, or productize."],
              ]},
            { n:"03", name:"Agent-as-a-Service", range:"$5K–$55K MRR", rangeLabel:"workflow-specific, verified", color:C.orange,
              rows:[
                ["What it is","Building, deploying, and maintaining autonomous AI agent workflows for specific business functions — lead qualification, content production pipelines, customer support triage, invoice processing, employee onboarding — then selling access as a monthly subscription."],
                ["Why it works","The buyer isn't paying for software. They're paying to eliminate a specific labor cost. Budget comes from the operations line of their P&L, not the software line — and operations budgets are typically 10× larger than software budgets. ROI is immediately calculable: 'This agent handles 400 support tickets a month that used to require two part-time contractors.'"],
                ["Revenue model","Setup fee ($3K–$25K, non-negotiable — never free) plus monthly management fee ($2K–$15K). Enterprise implementations: $40K–$80K setup plus $5K–$10K/month. The retainer model builds predictable MRR. A single enterprise client at $10K/month is $120K ARR."],
                ["Startup requirement","Technical ability to build agent workflows using Make.com, n8n, LangChain, or similar tools, combined with sales ability to explain ROI in plain language to non-technical buyers. You're not selling AI. You're selling 'we eliminate the cost of your accounts payable clerk.'"],
                ["Defensibility","The agent itself has low defensibility. A competitor can replicate the architecture in weeks. The moat is integration depth — the agent touches your client's CRM, their email, their Slack, their data. Ripping it out means rebuilding 12 integrations and retraining staff. That is a real switching cost."],
              ]},
            { n:"04", name:"AI-Native Consumer Product", range:"$8.8M–$500M ARR", rangeLabel:"high variance — very high ceiling", color:C.blue,
              rows:[
                ["What it is","Consumer subscription products built on AI capabilities — image generation, music composition, code completion, presentation creation, writing assistance. Midjourney, Cursor, BoredHumans, Gamma, Character.ai, ElevenLabs."],
                ["Why it works","The distribution economics are unlike any other model. If the product creates shareable outputs — images, music, code, slides — every output is an organic advertisement for the product. Midjourney grew to $500M ARR on $0 marketing because every generated image had 'Made with Midjourney' implied. CAC approaches zero when users bring you users."],
                ["Revenue model","Freemium to paid subscription ($10–$50/month typical). Volume is the requirement: 50K paid users at $15/month is $750K MRR. The economics require either viral distribution or a very specific user community with strong referral behavior."],
                ["The cold start problem","This is the hardest model to start. You need a distribution mechanism before the product launches, not after. Cursor launched into developer communities where word-of-mouth moves fast. BoredHumans used SEO at scale. Without a specific distribution angle, you're competing with OpenAI and Anthropic for the same general-purpose AI user — and you'll lose."],
                ["Ceiling & floor","$500M ARR ceiling (Midjourney). But the floor is also real: most consumer AI products fail to reach escape velocity. The distribution problem is the product problem. If you can't explain in one sentence how users will hear about this product organically, the model is wrong."],
              ]},
          ].map((m,i)=>(
            <div key={i} style={{ background:C.bg, padding:"32px 28px", borderTop:`3px solid ${m.color}` }}>
              <div style={{ fontFamily:"'DM Mono',monospace", fontSize:"8.5px", letterSpacing:"0.2em", textTransform:"uppercase", padding:"3px 8px", marginBottom:"14px", display:"inline-block", color:m.color, border:`1px solid ${m.color}30`, background:`${m.color}08` }}>Model {m.n}</div>
              <div style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:"clamp(17px,2.5vw,20px)", letterSpacing:"-0.5px", color:C.dark, marginBottom:"8px" }}>{m.name}</div>
              <div style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:"clamp(18px,3vw,26px)", letterSpacing:"-1.5px", color:m.color, marginBottom:"4px" }}>{m.range}</div>
              <div style={{ fontSize:"9px", letterSpacing:"0.12em", textTransform:"uppercase", color:C.muted, marginBottom:"20px" }}>{m.rangeLabel}</div>
              <div style={{ fontSize:"12.5px", lineHeight:1.85, color:C.muted }}>
                {m.rows.map(([label,text],j)=>(
                  <p key={j} style={{ marginBottom:j<m.rows.length-1?"14px":0 }}><strong style={s}>{label}:</strong> {text}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ═══ 04 ═══ */}
        <SectionHead n="04" title="Verified Case Studies — Real Numbers Only" color={C.orange} />
        <p style={{ ...prose, fontFamily:"'Instrument Serif',serif", fontStyle:"italic", fontSize:"18px", color:C.dark, maxWidth:"680px" }}>Every number below is confirmed by at least two independent sources. The pattern across all of them is identical: one specific problem, one specific buyer, faster execution than anyone expected, and distribution that compounded organically.</p>

        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))", gap:"1px", background:C.bd, border:`1px solid ${C.bd}`, margin:"32px 0" }}>
          {[
            { co:"Harvey AI",         type:"Vertical · Legal · Enterprise",  metric:"$195M ARR",  ml:"36 months · 290% YoY growth · 2025",      color:C.rust,   note:"Founded by securities litigator Winston Weinberg — not an AI engineer. 1,000+ customers in 59 countries. $8B valuation. The domain expertise was the entire moat. A generalist competitor couldn't replicate Harvey by swapping in GPT-4; they'd have to rebuild 36 months of legal workflow understanding." },
            { co:"Midjourney",        type:"Consumer · Image Gen · PLG",     metric:"$500M",      ml:"2025 · $0 marketing · 163 employees",      color:C.green,  note:"Profitable one month after launch. Revenue 10× from 2022 to 2025. Zero VC funding. Every image created was a product advertisement. At peak (11 employees, $200M revenue), revenue per employee was $18M — the highest in software history. They built nothing broad. They built one thing deeply." },
            { co:"Cursor",            type:"Dev Tools · Subscription · PLG", metric:"$500M ARR",  ml:"Fastest SaaS growth ever · ~50 employees",  color:C.blue,   note:"$1M to $100M ARR in 12 months. Zero marketing budget — word-of-mouth among developers is the highest-quality distribution channel in software. 72% of professional developers now use or plan to use an AI coding assistant. Cursor owned that transition. One specific user. One specific workflow." },
            { co:"BoredHumans",       type:"Consumer · Solo · Ad + Sub",     metric:"$8.8M ARR",  ml:"Solo founder · Zero employees · Verified",  color:C.orange, note:"Nick Dobos: 100+ AI tools on one platform. Volume strategy — more tools = more SEO surface area = more organic traffic = more ad revenue. No funding. One person. $8.8M ARR. Proves the consumer model works even without a viral hook if you have enough surface area and consistent SEO execution." },
            { co:"Gamma",             type:"Consumer/B2B · Presentations",   metric:"$50M ARR",   ml:"50M users · 30 employees · Profitable 15+mo",color:C.acc,    note:"Grant Lee deliberately caps the team at 50. Profitable for 15+ consecutive months. Zero employee attrition. The distribution mechanism: product-led growth where one user discovers it and immediately shares it with their entire team. Product creates collaboration artifacts that pull in collaborators." },
            { co:"Base44",            type:"B2B SaaS · Bootstrap to Exit",   metric:"$80M exit",  ml:"6 months to build · 6 months to exit · 2025",color:C.red,    note:"Maor Shlomo: built Base44 in 6 months, sold it for $80M. The entire arc — idea, build, exit — in 12 months. This is the execution velocity that AI tooling makes possible. The code-to-shipping-to-acquisition cycle has compressed by a factor of 3–5× since 2022." },
          ].map((c,i)=>(
            <div key={i} style={{ background:C.bg, padding:"26px 24px", borderLeft:`3px solid ${c.color}` }}>
              <div style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:"16px", letterSpacing:"-0.3px", color:C.dark, marginBottom:"4px" }}>{c.co}</div>
              <div style={{ fontSize:"8.5px", letterSpacing:"0.18em", textTransform:"uppercase", color:C.muted, marginBottom:"14px" }}>{c.type}</div>
              <div style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:"26px", letterSpacing:"-1.5px", color:c.color, lineHeight:1, marginBottom:"4px" }}>{c.metric}</div>
              <div style={{ fontSize:"9px", letterSpacing:"0.12em", textTransform:"uppercase", color:C.muted, marginBottom:"14px" }}>{c.ml}</div>
              <div style={{ fontSize:"12.5px", lineHeight:1.75, color:C.muted }}>{c.note}</div>
            </div>
          ))}
        </div>

        {/* ═══ 05 ═══ */}
        <SectionHead n="05" title="What the Real Moats Are" />
        <p style={{ ...prose, fontFamily:"'Instrument Serif',serif", fontStyle:"italic", fontSize:"18px", color:C.dark, maxWidth:"680px" }}>The most common wrong answers: "our data" and "our model." Both are being commoditized faster than most people realize. Here is what actually holds in 2026 when a well-funded competitor enters your market.</p>

        {[
          { num:"01", sc:C.green, strength:"Strong · 5+ year defensibility",
            title:"Workflow ownership — the only durable moat",
            body:<>The companies winning are not the ones with the best models. They're the ones whose product sits in the critical path of daily work. <span style={s}>When your tool is embedded in the process by which money flows, documents get approved, or operations run</span> — removing it creates disruption that nobody wants to cause. This is switching cost at its most durable. Vertical AI companies building into specific operational workflows create moats that survive model updates because the value is in the workflow integration, not the inference. Vendep's research: companies with strong workflow integration grow revenue 2.1× faster and achieve 46% higher customer lifetime value. And Bessemer confirms: "The best vertical AI products earn the right to expand into increasingly core workflows through an initial breakthrough."</> },
          { num:"02", sc:C.orange, strength:"Medium · 12–18 months before competitors close gap",
            title:"Data moats — real, but narrower window than founders expect",
            body:<>Data moats exist — but not all are equal. <span style={s}>Static historical datasets are being replicated via synthetic data generation faster than most founders realize.</span> Google's research shows synthetic data frequently outperforms real-world data for model training in controlled domains. The data moats that hold are built on continuous real-world feedback loops: every correction a lawyer makes to an AI draft, every approval or rejection in your workflow — this generates training signal that competitors would need to build your exact business model to access. Ferguson Analytics: first-mover data advantages in AI applications decay in 12–18 months without a continuous generation mechanism. Workflow integration is what keeps data moats alive.</> },
          { num:"03", sc:C.green, strength:"Strong · Compounds exponentially over time",
            title:"Distribution and community — the most underrated moat",
            body:<>Midjourney didn't grow because it had the best model. Cursor didn't grow because it advertised. Both grew because the professionals who used them told other professionals. <span style={s}>In AI products, community and organic word-of-mouth are the most powerful moats that never get discussed as moats.</span> Vendep: companies with strong communities see $6.40 return per $1 invested in community development, grow 2.1× faster, and have 46% higher CLV. The key insight: when your user base grows the product for you, your growth cost approaches zero while your competitor's acquisition cost stays high. That's compounding asymmetry. It's the most powerful structural advantage in the AI business landscape.</> },
          { num:"04", sc:C.green, strength:"Strong · Cannot be acquired or replicated externally",
            title:"Domain expertise embedded in founding team",
            body:<>Harvey was not founded by an AI researcher who hired lawyers. It was founded by Winston Weinberg, a securities litigator who learned AI. Abridge was founded by cardiologist Shivdev Rao, M.D. Fieldguide was founded by auditor Jin Chang. <span style={s}>In vertical AI, deep industry knowledge about what actually matters in a specific context — what makes a legal brief defensible, what a clinical note legally requires, what regulatory compliance actually looks like — is more valuable than model expertise.</span> Model expertise can be hired. Institutional knowledge of what makes a particular type of document acceptable to a specific type of professional cannot be acquired — it has to be lived. Bessemer: "Vertical AI typically rewards insider expertise more than horizontal SaaS did."</> },
          { num:"05", sc:C.red, strength:"None · Zero defensibility in 2026",
            title:"What has no moat: the thin wrapper",
            body:<>If your entire product can be replicated by someone writing a smart system prompt in 20 minutes, you don't have a product. You have a feature. <span style={s}>In 2024, this was a viable temporary business. In 2026, it's a race condition against OpenAI's product roadmap.</span> VC Cafe January 2026: "Startups that are thin wrappers may find themselves in a pickle in 2026 and will need to pivot, sell, or shut down." The AI startups that survived moved so deep into a specific workflow that replication would require rebuilding the entire domain expertise layer — not just swapping the model. The commoditization clock started when ChatGPT launched. In 2026, it has been ticking for 3+ years. General-purpose AI features are the new commodity.</> },
        ].map((m,i)=>(
          <div key={i} style={{ display:"grid", gridTemplateColumns:"56px 1fr", gap:"24px", padding:"28px 0", borderBottom:i<4?`1px solid ${C.bd}`:"none" }}>
            <div style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:"clamp(32px,5vw,52px)", letterSpacing:"-2px", lineHeight:1, color:`${C.dark}07`, textAlign:"right" }}>{m.num}</div>
            <div>
              <div style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:"clamp(15px,2.5vw,19px)", letterSpacing:"-0.4px", color:C.dark, marginBottom:"10px" }}>{m.title}</div>
              <div style={{ fontSize:"13.5px", lineHeight:1.85, color:C.muted, maxWidth:"640px", marginBottom:"12px" }}>{m.body}</div>
              <div style={{ display:"inline-flex", alignItems:"center", gap:"6px", padding:"4px 10px", fontSize:"9px", letterSpacing:"0.18em", textTransform:"uppercase", color:m.sc, border:`1px solid ${m.sc}30`, background:`${m.sc}08` }}>⬤ {m.strength}</div>
            </div>
          </div>
        ))}

        {/* ═══ 06 ═══ */}
        <SectionHead n="06" title="The Operational Stack" color={C.green} />
        <p style={prose}>The solopreneur AI stack costs <span style={s}>$3,000–$12,000 per year</span>. Five years ago, equivalent capabilities required $300K–$1.2M in annual headcount. That 98% cost reduction is not a marginal improvement — it's a structural change in who can build what.</p>

        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(175px,1fr))", gap:"1px", background:C.bd, border:`1px solid ${C.bd}`, margin:"28px 0" }}>
          {[
            { cat:"AI Core",     name:"Claude Sonnet",   use:"Research, writing, analysis, complex agentic tasks",              cost:"$20/mo" },
            { cat:"AI Core",     name:"ChatGPT",         use:"General tasks, image gen, voice, code execution",                cost:"$20/mo" },
            { cat:"Code",        name:"Cursor",          use:"AI-native IDE — industry standard for AI-assisted engineering",  cost:"$20/mo" },
            { cat:"Code",        name:"Bolt / Lovable",  use:"Full-stack app from prompt — $0 to working product in hours",    cost:"$20–200/mo" },
            { cat:"Automation",  name:"Make.com",        use:"Workflow automation, webhook integrations, agent orchestration", cost:"$9–29/mo" },
            { cat:"Automation",  name:"n8n",             use:"Self-hosted automation, AI agent flows, 10K+ integrations",      cost:"$20–50/mo" },
            { cat:"Agent Infra", name:"LangChain",       use:"Agent framework, RAG pipelines, memory, multi-tool use",        cost:"API usage" },
            { cat:"Agent Infra", name:"Supabase",        use:"DB + vector store + auth — standard lean AI backend",           cost:"$0–25/mo" },
            { cat:"Sales",       name:"Clay",            use:"AI-enriched lead research and outbound automation at scale",    cost:"$149–800/mo" },
            { cat:"Content",     name:"Descript",        use:"AI video/podcast editing — remove filler, auto-captions",       cost:"$12–24/mo" },
            { cat:"Analytics",   name:"PostHog",         use:"Product analytics — free tier is genuinely enough to start",   cost:"Free–$450/mo" },
            { cat:"Payments",    name:"Stripe",          use:"Payments, subscriptions, metered outcome-based billing",        cost:"2.9% + 30¢" },
          ].map((t,i)=>(
            <div key={i} style={{ background:C.bg, padding:"18px 20px" }}>
              <div style={{ fontSize:"8.5px", letterSpacing:"0.18em", textTransform:"uppercase", color:C.muted, marginBottom:"7px" }}>{t.cat}</div>
              <div style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:"14px", letterSpacing:"-0.2px", color:C.dark, marginBottom:"5px" }}>{t.name}</div>
              <div style={{ fontSize:"11.5px", lineHeight:1.6, color:C.muted }}>{t.use}</div>
              <div style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:"12px", color:C.acc, marginTop:"8px" }}>{t.cost}</div>
            </div>
          ))}
        </div>

        {/* ═══ 07 ═══ */}
        <SectionHead n="07" title="What Doesn't Work in 2026" color={C.red} />
        <WarningBlock label="Failure Mode 01" title="Building a GPT wrapper with no workflow integration">
          If your product can be replicated by writing a system prompt in 20 minutes, you don't have a product. You have a feature. <span style={s}>OpenAI, Anthropic, and Google are actively building products that eliminate the most common wrapper use cases.</span> The commoditization clock has been running for 3+ years. Thin wrappers are a race condition against a trillion-dollar competitor's product roadmap. The AI startups that survived moved so deep into a specific workflow that replication would require rebuilding the entire domain layer, not just swapping the model.
        </WarningBlock>
        <WarningBlock label="Failure Mode 02" title="Horizontal 'AI for productivity' with no specific audience">
          "AI tools for knowledge workers" is not a market. It's a demographic. <span style={s}>The market is "AI that writes the specific type of RFP that government contractors need to submit to the DoD" or "AI that generates clinical discharge notes for orthopedic surgeons."</span> Bessemer confirms: vertical AI companies are winning precisely because horizontal AI leaves specific, high-value, regulated needs underserved. The depth of specificity is the product. Don't apologize for being narrow. The narrow position is the competitive advantage.
        </WarningBlock>
        <WarningBlock label="Failure Mode 03" title="Pricing per seat instead of per outcome">
          Seat-based pricing caps your revenue at your customer's headcount. <span style={s}>Outcome-based pricing grows with the value you create.</span> Intercom's Fin AI agent charges $0.99 per resolved ticket — tied directly to the outcome the buyer wants. Bessemer: "Start with a price. If customers say 'sold' immediately, you're too cheap. Raise until you hear 'we have to think about that.' Stop just before it becomes a blocker." Most AI founders default to cost-plus pricing because asking for more feels uncomfortable. This is expensive discomfort avoidance.
        </WarningBlock>
        <WarningBlock label="Failure Mode 04" title="Building in stealth for 6+ months without a paying customer">
          MVP build time for AI SaaS has collapsed from 6–18 months to 6–14 weeks using current tools (Groovy Web, 2026). <span style={s}>Every week you build without a paying customer is a week you're building the wrong thing.</span> The 2026 validation method: manually execute the workflow for three potential customers using AI tools before building any product. If they pay for the manual version, they'll pay for the automated version. If they won't pay for the manual version, you don't have a product — and you need to know that now, not after 6 months of building.
        </WarningBlock>
        <WarningBlock label="Failure Mode 05" title="Not asking: what happens when GPT-7 ships this as a native feature?">
          <span style={s}>This is the single most important strategic question for any AI application company.</span> If the answer is "our business goes away," you're building temporary arbitrage. The companies that survive model updates have value in their workflow integration, their data flywheel, their customer relationships, and their domain expertise. None of these ship in a model update. Your moat must be in something that a better underlying model cannot simply overwrite.
        </WarningBlock>

        {/* ═══ 08 ═══ */}
        <SectionHead n="08" title="The AI Business Decision Stack" color={C.acc} />

        <div style={{ background:C.paper, border:`1px solid ${C.bd}`, borderLeft:`3px solid ${C.acc}`, padding:"36px 40px", margin:"32px 0", position:"relative" }}>
          <div style={{ position:"absolute", top:0, left:0, width:32, height:32, borderTop:`2px solid ${C.acc}50`, borderLeft:`2px solid ${C.acc}50` }}/>
          <div style={{ position:"absolute", bottom:0, right:0, width:32, height:32, borderBottom:`2px solid ${C.acc}50`, borderRight:`2px solid ${C.acc}50` }}/>
          <div style={{ fontFamily:"'Syne',sans-serif", fontSize:"9px", fontWeight:700, letterSpacing:"0.25em", textTransform:"uppercase", color:C.acc, marginBottom:"24px" }}>Blackbourxe Framework — AI Business Construction</div>
          {[
            { title:"Pick one boring, painful, specific workflow",
              desc:<>Not an industry. Not a demographic. A workflow. <span style={s}>The specific sequence of steps someone does repeatedly, expensively, and without enjoying it.</span> Legal document review. Clinical note generation. RFP response drafting. Government contractor bid writing. Construction daily progress reports. Operations budgets are 10× larger than software budgets — and workflows that live there command 10× the willingness to pay.</> },
            { title:"Validate with 3 paying customers before writing production code",
              desc:<>MVP build time has collapsed to 6–14 weeks. But validation should take less time than that. <span style={s}>Manually execute the workflow for three potential customers using AI tools before building anything.</span> Charge them. If they pay for the manual version, they'll pay for the automated product. Groovy Web 2026: "The right choice depends on your personal unfair advantages." Bessemer: "Many startups are built by industry insiders who have deep experience in their vertical."</> },
            { title:"Go deeper into the workflow than any competitor",
              desc:<>The moat is depth, not breadth. <span style={s}>Every feature that takes you deeper into the specific workflow makes you harder to replace. Every feature that takes you broader makes you more vulnerable to platform commoditization.</span> Harvey didn't try to be AI for professional services. It built legal research, legal drafting, legal diligence — and dominated law firms. Depth first. Breadth is a 2028 strategy.</> },
            { title:"Design the product to generate training signal from day one",
              desc:<>Every correction a user makes, every approval or rejection — this is proprietary training data. <span style={s}>Build the product so that usage generates signal that improves performance that attracts usage.</span> This is the compounding mechanism that turns a 12-month head start into a 36-month moat. Ferguson Analytics: first-mover data advantages decay in 12–18 months without a continuous generation mechanism. Workflow integration is what keeps them alive.</> },
            { title:"Charge for outcomes, not seats or access",
              desc:<>Per document reviewed. Per ticket resolved. Per appointment booked. <span style={s}>Outcome-based pricing grows with usage and ties revenue directly to value created.</span> Intercom charges $0.99 per fully resolved support ticket. The buyer cares about resolved tickets, not about how many AI seats they've activated. Match your pricing to the metric your buyer already uses to measure success. Bessemer: raise until you hear "we have to think about that."</> },
            { title:"Build distribution into the product architecture, not the marketing plan",
              desc:<>Midjourney grew because every image was a billboard. Gamma grew because one user's presentation pulled their entire team into the product. Cursor grew because developers told developers. <span style={s}>When your product creates outputs that demonstrate its own value to people who didn't create them, you don't need a marketing budget.</span> Ask at product design time: does using this product create something that non-users will see and ask about? If yes, you have distribution architecture.</> },
          ].map((step,i)=>(
            <div key={i} style={{ display:"grid", gridTemplateColumns:"44px 1fr", gap:"16px", padding:"18px 0", borderBottom:i<5?`1px solid ${C.bd}`:"none" }}>
              <div style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:"20px", letterSpacing:"-1px", color:`${C.acc}40`, lineHeight:1.3, textAlign:"right" }}>{i+1}</div>
              <div>
                <div style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:"14px", letterSpacing:"-0.2px", color:C.dark, marginBottom:"6px" }}>{step.title}</div>
                <div style={{ fontSize:"12.5px", lineHeight:1.8, color:C.muted }}>{step.desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* ═══ 09 ═══ */}
        <SectionHead n="09" title="What One Person Can Build in 2026" />
        <p style={prose}>Dario Amodei said, with 70–80% confidence, that the first one-person billion-dollar company would emerge by 2026. Sam Altman's CEO group chat has a betting pool on when it happens. The consensus is not whether. The data on what one person can actually build right now supports the thesis entirely.</p>

        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(175px,1fr))", gap:"1px", background:C.dark, margin:"28px 0" }}>
          {[
            { number:"52.3%",  label:"Solo-led startup exits succeed",       sub:"Up sharply from pre-AI era rates",          color:C.acc },
            { number:"36.3%",  label:"New startups are solo-founded",        sub:"Up from 23.7% in 2019 (Nucamp)",           color:C.green },
            { number:"4 mo.",  label:"Faster to $1M ARR vs. traditional",    sub:"AI startups — Nucamp Research 2025",        color:C.orange },
            { number:"$200",   label:"Minimum viable MVP launch cost",       sub:"Down from $20K–$200K in 2021",             color:C.acc },
          ].map((s,i)=>(
            <BigStat key={i} number={s.number} label={s.label} sub={s.sub} color={s.color} />
          ))}
        </div>

        <p style={prose}>BoredHumans at $8.8M ARR is one person. Pieter Levels runs Nomad List and Remote OK solo — seven figures, zero employees, no VC. Danny Postma built HeadshotPro to $1M ARR in under a year. Maor Shlomo built Base44 in 6 months and sold it for $80M. <span style={s}>These are not outliers. They are the leading edge of a structural shift in what one person can accomplish.</span></p>
        <p style={prose}>What changed is not ambition. What changed is the tool set. AI agents now handle research, drafting, coding, support triage, analytics, and content at a level of quality that previously required a team. The bottleneck has shifted from execution capacity to decision quality. That shift heavily advantages founders with deep domain knowledge over founders with large capital raises.</p>

        {/* ════════════════════════════════════
            NEW SECTIONS — STARTUP ROUTES
        ════════════════════════════════════ */}

        <Divider label="The Startup Routes — How to Actually Start" color={C.rust} />
        <p style={{ ...prose, fontFamily:"'Instrument Serif',serif", fontStyle:"italic", fontSize:"18px", color:C.dark, maxWidth:"680px", marginBottom:"40px" }}>
          Most research tells you what the opportunity looks like. This section tells you the exact sequence of actions for starting each of the four business models — week by week, decision by decision, what to charge on day one, and the specific mistakes that kill founders before they get traction.
        </p>

        {/* ═══ 10 ═══ */}
        <SectionHead n="10" title="How to Start Model 01: Vertical AI SaaS" color={C.green} />

        <Callout label="Before You Start — The Selection Test" accent={C.green}>
          <strong style={s}>You are not choosing a market. You are identifying a painful workflow that you already understand better than any outsider can.</strong> Bessemer's 2026 Vertical AI Playbook: "Intimate understanding of your industry's challenges, clarity on which workflows drive real ROI for customers, and a specific initial wedge you can dominate — that's what matters most." If you can't describe the exact 7–12 step process someone goes through to complete the workflow you want to automate, you don't have enough domain knowledge yet. Either go acquire it, or pick a different vertical.
          <div style={{ fontSize:"10px", color:C.muted, marginTop:"8px", letterSpacing:"0.08em", textTransform:"uppercase" }}>Bessemer Venture Partners · Building Vertical AI: An Early Stage Playbook · January 2026</div>
        </Callout>

        <div style={{ margin:"32px 0" }}>
          <StepBlock n="01" title="Choose your entry wedge — not your market" sub="Weeks 1–2" color={C.green}>
            Vertical AI rewards the narrowest possible entry point. Bessemer identifies three valid entry points: (1) <span style={s}>Pain point discovery</span> — a specific workflow that's expensive, error-prone, and hated by practitioners. (2) <span style={s}>Incumbent disruption</span> — an existing software solution that's slow, overpriced, or doesn't use AI. (3) <span style={s}>Compliance complexity</span> — regulated industries where the stakes are high and the willingness to pay is exceptional. Healthcare AI: $40K–$80K implementation + $3K–$6K/month ongoing is industry standard. Legal AI: enterprise contracts of $50K–$500K ACV. Pick the one wedge where your existing knowledge or network gives you an unfair advantage. Not the largest market — the one where you can win.
          </StepBlock>
          <StepBlock n="02" title="Map the exact workflow, step by step, before touching code" sub="Week 2–3" color={C.green}>
            Before building anything, write a document that describes the workflow you're targeting in precise operational detail. For a legal brief review workflow: who initiates it, what sources they pull, what the review checklist contains, what formats the output needs to be in, who approves it, where it goes next. This document is your product spec and your competitive moat outline simultaneously. <span style={s}>Any competitor who builds without this level of workflow understanding will build the wrong thing.</span> Your document represents the domain knowledge they can't replicate by hiring an engineer.
          </StepBlock>
          <StepBlock n="03" title="Validate manually before building — charge from day one" sub="Weeks 3–6" color={C.green}>
            Run the workflow manually for three potential customers using Claude, GPT-4, and whatever domain tools exist. Present the output as if it came from a working product. <span style={s}>Charge for it.</span> A Bessemer-backed approach: "Many of the greatest SaaS companies started as internal solutions." Groovy Web 2026: MVP build time has collapsed to 6–14 weeks. But you want to validate before you build. If customers pay $200–$500 for the manual version of the output, you've confirmed that the output has value. That's the signal to build. If they don't pay, you've learned something in 3 weeks instead of 6 months.
          </StepBlock>
          <StepBlock n="04" title="Build the MVP using AI-first development tools" sub="Weeks 4–14" color={C.green}>
            Cursor + Bolt + Supabase + Claude API is the standard 2026 lean AI SaaS stack. <span style={s}>You can get to a working MVP in 6–14 weeks at a cost under $5,000 in tooling.</span> The product at this stage should do one thing well: execute the specific workflow step you're targeting, with better accuracy or speed than doing it manually. Do not build dashboards, admin panels, user management, or analytics before you have 3 paying customers. Every feature that isn't the core workflow is technical debt before you've validated the core.
          </StepBlock>
          <StepBlock n="05" title="Acquire the first 3–5 customers through personal network and direct outreach" sub="Months 2–4" color={C.green}>
            The first customers do not come from marketing. They come from who you know. Write the list of every practitioner in your target vertical you can reach directly. Aim for 20 conversations in the first 30 days. One ask per conversation: "Would you try this for 30 days and pay $X if it saves you Y hours per month?" Early pricing: $500–$2,000/month for the first 5 customers. The goal is not revenue optimization — it's feedback density. These 5 customers will tell you the 3 things you got wrong and the 2 things that matter most.
          </StepBlock>
          <StepBlock n="06" title="Build the data flywheel deliberately into the product" sub="Month 3 onward" color={C.green}>
            <span style={s}>Every user action is a training signal.</span> Every correction to an AI output, every document the user accepts vs. rejects, every edit they make to a generated draft — this is proprietary data that improves your model's performance in ways that a general competitor cannot replicate without your exact user base. Instrument this from day one: log every output, every edit, every approval. The companies that succeed in vertical AI are building models that are better at their specific domain every month. The ones that don't instrument this are building a static product in a dynamic competitive environment.
          </StepBlock>
        </div>

        <div style={{ background:C.paper, border:`1px solid ${C.bd}`, borderTop:`3px solid ${C.green}`, padding:"28px 32px", margin:"28px 0" }}>
          <div style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:"13px", letterSpacing:"-0.2px", color:C.dark, marginBottom:"16px" }}>Vertical AI SaaS — Do and Don't</div>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"0 32px" }}>
            <div>
              {[
                "Start with a workflow you understand from the inside",
                "Charge from the first manual validation session",
                "Build regulation compliance into the core product architecture",
                "Design every user interaction to generate training signal",
                "Expand into adjacent workflows only after achieving retention in your first one",
                "Price based on outcome value, not on your cost to deliver",
              ].map((t,i)=><CheckRow key={i} ok>{t}</CheckRow>)}
            </div>
            <div>
              {[
                "Start with a vertical you have no existing relationships in",
                "Build product features before validating with paying customers",
                "Use horizontal AI as your selling point ('we use GPT-4')",
                "Expand to a second vertical before dominating the first",
                "Compete on model quality alone — any competitor can swap the model",
                "Ignore compliance and regulation requirements until customers ask",
              ].map((t,i)=><CheckRow key={i} ok={false}>{t}</CheckRow>)}
            </div>
          </div>
        </div>

        {/* ═══ 11 ═══ */}
        <SectionHead n="11" title="How to Start Model 02: AI-Augmented Services" color={C.acc} />

        <Callout label="The Core Premise" accent={C.acc}>
          <strong style={s}>You are not selling AI. You are selling a professional service that happens to be delivered 5–10× faster than your competitors can deliver it.</strong> The client doesn't care that you use Claude. They care that their ad campaign brief is in their inbox in 4 hours instead of 4 days, at a quality that converts better than what they were getting before. The AI is your operational secret. The value proposition is the outcome.
        </Callout>

        <div style={{ margin:"32px 0" }}>
          <StepBlock n="01" title="Pick the one service you can deliver 5× better with AI today" sub="Week 1" color={C.acc}>
            Start with what you already know how to do. If you've worked in content marketing, start with AI-accelerated content strategy and production. If you're a developer, start with AI-accelerated code delivery. If you're in design, start with AI-accelerated brand identity or ad creative production. <span style={s}>Do not start an AI agency in a service category you don't understand without AI.</span> The AI amplifies your existing expertise — it cannot substitute for expertise you don't have. One service, one target industry, one specific deliverable. The constraint is what makes you credible.
          </StepBlock>
          <StepBlock n="02" title="Calculate your actual pricing based on value delivered, not hours" sub="Week 1–2" color={C.acc}>
            The pricing formula: <span style={s}>Value to client ÷ 3 to 5 = your price.</span> If AI-optimized ad creative saves a client $30K/month in wasted spend, charge $6K–$10K/month. Not $150/hour for the 2 hours it actually takes you to produce it. The market for professional services is not priced on cost — it's priced on outcome. ALM Corp 2026: agencies that lead with AI as a proprietary methodology and focus on strategic outcomes charge 2–3× the market rate of generalists. Madgicx 2026 guide: performance-based pricing is growing fastest — fees tied to KPIs and measurable business outcomes. Start project-based, move to retainer within 90 days.
          </StepBlock>
          <StepBlock n="03" title="Get the first 3 clients from personal credibility, not cold outreach" sub="Weeks 2–6" color={C.acc}>
            The fastest path to first revenue in a services business is through people who already trust your judgment. Your first 3 clients should come from: (1) Previous employers or colleagues who know your work quality. (2) People in your professional network who have the pain you're solving. (3) One free pilot project with a well-known company whose name you can reference. <span style={s}>Do not spend money on ads, a website, or business cards before you have 3 paying clients.</span> The agency business has been validated. The question is whether you can deliver — and you prove that by delivering.
          </StepBlock>
          <StepBlock n="04" title="Build the AI workflow as a repeatable system, not a custom job every time" sub="Month 1–3" color={C.acc}>
            The margin in an AI-augmented service business is in systematization. Every project should be executed using a documented prompt stack, a defined review checklist, and a structured output template. <span style={s}>If you're rebuilding the workflow from scratch for every client, you're operating as a freelancer, not as a business.</span> The goal is a workflow so systematized that you could hand it to a junior contractor and have them execute 80% of it. That's the foundation for your first hire — and eventually for productizing the service into a SaaS offering.
          </StepBlock>
          <StepBlock n="05" title="Raise your prices after every client until you hear real resistance" sub="Ongoing" color={C.acc}>
            Bessemer's pricing principle applies here too: raise until you hear "we have to think about that," then stop just short of the blocker. <span style={s}>Most service founders underprice by 40–60%.</span> The tell: if a potential client says "yes" within 24 hours without negotiating, you're priced too low. Madgicx: the most successful AI agencies "priced AI as a proprietary methodology" and "maintained premium positioning through superior strategy." The differentiation is not the tools — it's the judgment that guides the tools. That judgment commands premium pricing.
          </StepBlock>
          <StepBlock n="06" title="Plan the productization path from month one" sub="Month 3–12" color={C.acc}>
            The ceiling of a services business is how many clients one person can serve at high quality. At $10K/month average client, you hit a ceiling at 6–8 clients ($60K–$80K MRR). <span style={s}>The only way past that ceiling is to productize: turn the most repeatable service into a subscription product.</span> Document which part of your service is the most consistently repeated, most systematizable, and most valuable to clients. Build a tool that does that specific thing. Sell access to the tool at $500–$2,000/month. Your existing clients become your first product customers. That's the bridge from services to SaaS.
          </StepBlock>
        </div>

        <div style={{ background:C.paper, border:`1px solid ${C.bd}`, borderTop:`3px solid ${C.acc}`, padding:"28px 32px", margin:"28px 0" }}>
          <div style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:"13px", letterSpacing:"-0.2px", color:C.dark, marginBottom:"16px" }}>AI-Augmented Services — Do and Don't</div>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"0 32px" }}>
            <div>
              {[
                "Start with the service you already know how to deliver well",
                "Price based on client outcome value, not your delivery time",
                "Systematize every workflow into documented, repeatable processes",
                "Get first clients from personal network before spending on marketing",
                "Plan the productization path before the services ceiling arrives",
                "Use your first 3 clients as case studies before scaling outreach",
              ].map((t,i)=><CheckRow key={i} ok>{t}</CheckRow>)}
            </div>
            <div>
              {[
                "Position AI as your selling point — clients don't care what tools you use",
                "Offer free work in exchange for testimonials (it signals low value)",
                "Take clients in industries you don't understand",
                "Build a services business with the intention of keeping it a services business",
                "Price per hour — this caps your margin and ties revenue to time",
                "Start with cold outreach before you have a single case study",
              ].map((t,i)=><CheckRow key={i} ok={false}>{t}</CheckRow>)}
            </div>
          </div>
        </div>

        {/* ═══ 12 ═══ */}
        <SectionHead n="12" title="How to Start Model 03: Agent-as-a-Service" color={C.orange} />

        <Callout label="The Strategic Framing" accent={C.orange}>
          <strong style={s}>Stop selling AI. Start selling the elimination of a specific cost.</strong> The 2026 AI Implementation Agency Playbook is direct: "Stop selling 'AI.' Start selling 'The End of Manual Data Entry' or '24/7 Lead Response.' The more you focus on the business outcome and the less you discuss the model (GPT-5, Claude, etc.), the faster you will close deals." The buyer's budget is in their operations P&L, not their software budget. Operations managers make the decision. They care about: hours saved per week, cost per unit of output eliminated, and whether it breaks their existing compliance requirements.
          <div style={{ fontSize:"10px", color:C.muted, marginTop:"8px", letterSpacing:"0.08em", textTransform:"uppercase" }}>99BusinessIdeas · AI Implementation Agency Roadmap · January 2026</div>
        </Callout>

        <div style={{ margin:"32px 0" }}>
          <StepBlock n="01" title="Identify the workflow before identifying the client" sub="Week 1" color={C.orange}>
            The best Agent-as-a-Service businesses are built around one specific, high-repetition workflow: lead qualification, inbound support triage, invoice processing, content publishing pipelines, employee onboarding sequences, or appointment scheduling. <span style={s}>Choose the workflow where you can calculate the ROI in dollars within 30 minutes of speaking to a prospect.</span> If you can say "this workflow currently costs you $8,000/month in contractor hours, and our agent reduces that to $1,500/month," you have a sales conversation. If you can't make that calculation quickly, you don't have the right workflow yet.
          </StepBlock>
          <StepBlock n="02" title="Build a working prototype before you approach any client" sub="Weeks 2–4" color={C.orange}>
            The most effective sales strategy in the AI agency space is the personalized demo. The 2026 AI Implementation Agency Playbook: "Find a target business (e.g., a Law Firm in Chicago). Record a 2-minute screen share using Loom. Show them their own website or a public process and say: 'I noticed your intake form takes 24 hours to respond. I built a prototype of an AI agent that could handle this in 30 seconds.'" <span style={s}>Build the prototype for a specific prospect before approaching them.</span> The specificity of the demo is the conversion mechanism. Generic AI demos do not convert. Specific solutions to specific problems convert at 60–75%.
          </StepBlock>
          <StepBlock n="03" title="Always charge a setup fee — never free implementation" sub="Client acquisition" color={C.orange}>
            This is the most counterintuitive rule in the Agent-as-a-Service business: never offer free setup in exchange for a higher monthly fee. The AI Implementation Agency Playbook is explicit: "In the US market, 'free' is often perceived as 'low quality.' Always charge a setup fee to cover your initial development costs and ensure the client is 'all in' on the transformation." <span style={s}>Setup fees signal that implementation has real value and that the client is making a real commitment.</span> Clients who pay setup fees have higher retention. Clients who get free setup treat the agent as disposable. Setup fee range: $3,000–$25,000 depending on complexity.
          </StepBlock>
          <StepBlock n="04" title="Price the monthly retainer based on value, not hours spent managing" sub="Pricing structure" color={C.orange}>
            The retainer pricing tiers from the 2026 market: Starter retainers $2,000–$5,000/month (single workflow, simple integrations, ongoing optimization). Growth retainers $5,000–$15,000/month (continuous new automation development, strategic expansion). <span style={s}>Enterprise AI partnerships $15,000–$50,000/month — comprehensive AI management, becoming the client's dedicated AI team.</span> At $10,000/month per client, 5 clients is $50,000 MRR. That's a $600K ARR business with zero employees. AI agent costs to you: $200–$500/month in API and platform costs. Operating margin: 95%+.
          </StepBlock>
          <StepBlock n="05" title="Build integration depth to create real switching costs" sub="Months 1–6" color={C.orange}>
            The agent architecture itself has low defensibility — a competitor can replicate the technical structure in weeks. <span style={s}>The moat is integration depth: every API connection to the client's CRM, their Slack, their email, their document storage, their reporting systems.</span> The more integrations you build in the first 6 months, the more painful removal becomes. Ripping out an agent that touches 12 systems and that 30 employees have adjusted their workflows around is a 2-month project. That's a real switching cost — not a technical moat, but a deeply practical one. Design for integration depth from the first contract.
          </StepBlock>
          <StepBlock n="06" title="Build toward multi-tenant: the services-to-product path" sub="Month 6–18" color={C.orange}>
            The natural productization of an Agent-as-a-Service business is the same agent configuration sold to multiple clients in the same industry. <span style={s}>When you've built the same basic agent for 5 law firms, you have the foundation of a vertical SaaS product for law firms.</span> The transition: move from custom builds to a templated offering with industry-standard configurations, charge setup for customization, and charge monthly for the platform. This is the path from $100K ARR services business to $1M ARR SaaS business. The agent-as-a-service model is the fastest validated path to vertical AI SaaS.
          </StepBlock>
        </div>

        <div style={{ background:C.paper, border:`1px solid ${C.bd}`, borderTop:`3px solid ${C.orange}`, padding:"28px 32px", margin:"28px 0" }}>
          <div style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:"13px", letterSpacing:"-0.2px", color:C.dark, marginBottom:"16px" }}>Agent-as-a-Service — Do and Don't</div>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"0 32px" }}>
            <div>
              {[
                "Build a specific prototype for a specific client before cold outreach",
                "Always charge a setup fee — never offer free implementation",
                "Lead with the business outcome, not with the AI technology",
                "Build integration depth in every client to raise switching costs",
                "Document your workflow configurations for future productization",
                "Price retainers on value eliminated, not on hours you'll spend managing",
              ].map((t,i)=><CheckRow key={i} ok>{t}</CheckRow>)}
            </div>
            <div>
              {[
                "Try to serve 5+ different industries at once",
                "Offer free setup — it signals low value and creates low-commitment clients",
                "Build agents that are technically impressive but solve no measurable problem",
                "Ignore legal compliance (CCPA, EU AI Act, HIPAA where relevant)",
                "Rely on a single client for more than 40% of your MRR",
                "Build custom one-off solutions without documenting for reuse",
              ].map((t,i)=><CheckRow key={i} ok={false}>{t}</CheckRow>)}
            </div>
          </div>
        </div>

        {/* ═══ 13 ═══ */}
        <SectionHead n="13" title="How to Start Model 04: AI-Native Consumer Product" color={C.blue} />

        <Callout label="The Unspoken Truth About This Model" accent={C.blue}>
          <strong style={s}>This is the highest-ceiling model and the most dangerous starting point for founders without existing distribution.</strong> Midjourney succeeded because it launched inside a community of artists and designers who were already there. Cursor succeeded because developers are the highest-velocity word-of-mouth community in the world. BoredHumans succeeded because SEO compounds with content volume. <span style={s}>In every case, the distribution mechanism was identified before the product was built.</span> If you can't identify a specific community, platform, or organic growth mechanism that will carry your product to 10,000 users without a marketing budget, you're not ready to build a consumer AI product yet.
        </Callout>

        <div style={{ margin:"32px 0" }}>
          <StepBlock n="01" title="Identify the distribution mechanism before writing a single line of code" sub="Week 1" color={C.blue}>
            The distribution question is not a marketing question. It's a product design question. <span style={s}>The outputs your product creates need to answer yes to this question: will non-users see this output and ask what tool created it?</span> Midjourney images are recognizable. Gamma slides have a visual signature. Cursor's AI-assisted code shows up in GitHub. If the answer to that question is "maybe" or "it depends," the distribution architecture isn't in place yet. Valid distribution mechanisms for consumer AI in 2026: shareable output (Midjourney), platform community (Cursor + dev communities), SEO at volume (BoredHumans), or specific viral community (tools built for Notion users, for Shopify merchants, for Discord communities).
          </StepBlock>
          <StepBlock n="02" title="Build the smallest useful version of the one core capability" sub="Weeks 2–6" color={C.blue}>
            The consumer AI products that failed in 2024–2025 tried to be general-purpose tools. <span style={s}>The ones that won were impossibly specific about what they did.</span> Midjourney: image generation from text prompts. One capability. Cursor: AI code completion inside an IDE. One environment. Gamma: AI-generated slides. One output type. The minimum viable consumer AI product is the smallest version of one specific capability that creates outputs demonstrably better than what existed before. Do not add features before you have 1,000 users who use the core capability every week.
          </StepBlock>
          <StepBlock n="03" title="Launch into communities, not onto platforms" sub="Month 1" color={C.blue}>
            The standard Product Hunt launch as a distribution strategy peaked in 2022. <span style={s}>In 2026, community-first distribution is the mechanism that actually converts to retained users.</span> Identify 3–5 specific online communities where your target user spends time: specific subreddits, Discord servers, Slack groups, Linkedin niches, Twitter/X communities. Join them. Contribute without pitching for 4–6 weeks. Then present the product as a solution to a problem the community has discussed. The credibility from community participation converts at 10–20× the rate of cold product launches.
          </StepBlock>
          <StepBlock n="04" title="Build freemium deliberately — the free tier is your distribution mechanism" sub="Month 1–3" color={C.blue}>
            Consumer AI pricing in 2026: free tier with meaningful capability limits + $10–$50/month paid tier. <span style={s}>The free tier is not charity — it's your distribution budget.</span> Every free user who shares an output, mentions the tool in a community, or invites a colleague is doing acquisition work that you don't pay for. Midjourney was free in public beta, which generated the initial community that created the social proof for the paid launch. BoredHumans offers free access to 100+ tools (ad-supported) because the free access generates the SEO traffic that feeds the monetization. Design the free tier to create organic distribution, not just to generate paid conversion.
          </StepBlock>
          <StepBlock n="05" title="Instrument virality from day one — measure K-factor obsessively" sub="Ongoing" color={C.blue}>
            K-factor: the number of new users each existing user brings in. A K-factor above 1.0 is viral growth. <span style={s}>Consumer AI products need to know their K-factor within 30 days of launch.</span> Measure: how many users come from referral links? How many new signups mention hearing about the product from a friend? How many outputs are shared externally per week? PostHog (free tier) can instrument all of this. If your K-factor is below 0.5, your distribution architecture isn't working. That's a product problem, not a marketing problem — and you need to solve it before scaling acquisition spend.
          </StepBlock>
          <StepBlock n="06" title="The SEO-at-scale strategy — BoredHumans' actual playbook" sub="Months 2–12" color={C.blue}>
            For founders who don't have an existing community or viral output mechanism, volume SEO is the proven alternative path. BoredHumans' strategy: build many tools on one platform, each targeting a distinct search query. <span style={s}>100 tools × 1,000 monthly organic visitors each = 100,000 monthly visitors.</span> At 2% conversion to paid or ad monetization, that's 2,000 paying users or high-volume ad revenue. The execution requirements: technical SEO knowledge, fast tool iteration (Claude API makes tool generation extremely fast), and patience — SEO compounds over 6–18 months. The advantage: unlike viral distribution, SEO traffic compounds and doesn't require continuous effort once established.
          </StepBlock>
        </div>

        <div style={{ background:C.paper, border:`1px solid ${C.bd}`, borderTop:`3px solid ${C.blue}`, padding:"28px 32px", margin:"28px 0" }}>
          <div style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:"13px", letterSpacing:"-0.2px", color:C.dark, marginBottom:"16px" }}>AI-Native Consumer Product — Do and Don't</div>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"0 32px" }}>
            <div>
              {[
                "Identify the specific distribution mechanism before writing code",
                "Build the smallest useful version of one specific capability",
                "Launch inside existing communities, not via platform launches",
                "Design the free tier to create distribution, not just paid conversion",
                "Measure K-factor obsessively from day 30 onward",
                "Use SEO-at-volume if viral distribution isn't achievable",
              ].map((t,i)=><CheckRow key={i} ok>{t}</CheckRow>)}
            </div>
            <div>
              {[
                "Launch without a specific distribution mechanism identified",
                "Build a general-purpose 'AI productivity' tool without specificity",
                "Add features before reaching 1,000 weekly active users on the core feature",
                "Compete on model quality with OpenAI or Anthropic consumer products",
                "Spend on paid acquisition before your K-factor is above 0.3",
                "Build for a market segment that doesn't use online communities",
              ].map((t,i)=><CheckRow key={i} ok={false}>{t}</CheckRow>)}
            </div>
          </div>
        </div>

        {/* ═══ 14 — FUTURE ═══ */}
        <SectionHead n="14" title="The Future-Oriented Approach — What to Build for 2027–2030" color={C.rust} />

        <p style={{ ...prose, fontFamily:"'Instrument Serif',serif", fontStyle:"italic", fontSize:"18px", color:C.dark, maxWidth:"680px" }}>
          Building for 2026 is table stakes. The founders who win by 2030 are the ones who understand where the AI business landscape is structurally heading — and position their companies to sit on the right side of those structural shifts.
        </p>

        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))", gap:"1px", background:C.bd, border:`1px solid ${C.bd}`, margin:"32px 0" }}>
          {[
            { title:"Multi-agent systems replace monolithic products", color:C.green, icon:"→",
              when:"2026–2027",
              body:"Gartner reported a 1,445% surge in multi-agent system inquiries from Q1 2024 to Q2 2025. The architectural direction: instead of one large AI product doing everything, orchestrated teams of specialized agents handle specific subtasks. The founder who builds the coordination layer — or the specialized agent that plugs into every orchestration system — owns a structural position that compounds with the ecosystem." },
            { title:"B2B buying moves to AI-agent intermediation", color:C.orange, icon:"→",
              when:"2027–2028",
              body:"Gartner: by 2028, 90% of B2B buying will be AI-agent intermediated — $15 trillion of B2B spend flowing through AI agent exchanges. Traditional SEO and PPC give way to 'agent engine optimization.' The businesses that sell through AI agents (rather than to humans via search) will dominate B2B procurement in the next decade. Build your product to be discoverable by AI buyers, not just human ones." },
            { title:"Vertical AI becomes the default, not the exception", color:C.blue, icon:"→",
              when:"2026–2028",
              body:"Gartner predicts 75% of SaaS opportunity is vertical by 2028. 40% of enterprise apps will include task-specific AI agents by 2026. By 2028, the question won't be 'why did you build a vertical AI product?' — it will be 'why didn't you?' The verticals with the largest remaining undefended workflows in 2026 are construction, manufacturing, logistics, local government, and small professional services firms (accountants, architects, local law firms). These are the least glamorous and most lucrative." },
            { title:"Outcome-based pricing becomes the industry standard", color:C.rust, icon:"→",
              when:"2026–2027",
              body:"Bessemer: 'As 2025 pilots hit 2026 renewals, pricing must reflect actual value, not promise.' Seat-based SaaS pricing is being replaced by outcome-based models: per resolved ticket (Intercom), per workflow completed (n8n), per document processed (legal AI), per appointment booked (healthcare AI). The companies that build outcome tracking infrastructure into their product now will have pricing leverage that seat-based competitors won't be able to match." },
            { title:"Sovereign AI and regional specialization", color:C.muted, icon:"→",
              when:"2027–2030",
              body:"Gartner: by 2027, 35% of countries will be locked into region-specific AI platforms using proprietary contextual data. Vertical AI companies building with local language, local regulation, and local industry context — before the sovereign AI infrastructure walls go up — will be the only viable options in those markets. For founders outside the US, this is a first-mover opportunity that US companies will struggle to enter once regional platforms are established." },
            { title:"AI collapses the marginal cost of building new verticals", color:C.acc, icon:"→",
              when:"2026 onward",
              body:"The structural change that makes everything else possible: MVP build time has already collapsed from 6–18 months to 6–14 weeks. By 2027, that timeline will be closer to days for well-defined workflows. The founders who compound fastest are the ones who develop domain expertise in a vertical, ship a product, learn rapidly, and apply that pattern to adjacent verticals. The pattern is the moat, not the individual product." },
          ].map((item,i)=>(
            <div key={i} style={{ background:C.bg, padding:"26px 24px", borderTop:`3px solid ${item.color}` }}>
              <div style={{ fontSize:"9px", letterSpacing:"0.2em", textTransform:"uppercase", color:item.color, marginBottom:"8px", fontFamily:"'DM Mono',monospace" }}>Horizon · {item.when}</div>
              <div style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:"15px", letterSpacing:"-0.4px", color:C.dark, marginBottom:"12px", lineHeight:1.3 }}>{item.title}</div>
              <div style={{ fontSize:"12.5px", lineHeight:1.75, color:C.muted }}>{item.body}</div>
            </div>
          ))}
        </div>

        <Callout label="The Most Important Future Bet" accent={C.rust}>
          <strong style={s}>By 2028, 90% of B2B buying will be AI-agent intermediated — $15 trillion of B2B spend flowing through AI purchasing agents.</strong> This is the structural shift that makes "agent engine optimization" more important than SEO within 3 years. The companies that build products discoverable by, evaluatable by, and purchasable by AI buyers — not just human buyers — will have a structural distribution advantage that compounds for the rest of the decade. Build for AI discovery from 2026 onward.
          <div style={{ fontSize:"10px", color:C.muted, marginTop:"8px", letterSpacing:"0.08em", textTransform:"uppercase" }}>Gartner Strategic Predictions 2026 · Bessemer AI Pricing Playbook 2026 · PwC AI Business Predictions 2026</div>
        </Callout>

        {/* ═══ 15 ═══ */}
        <SectionHead n="15" title="Conclusions — What the Research Says to Do" color={C.acc} />
        <p style={{ ...prose, fontFamily:"'Instrument Serif',serif", fontStyle:"italic", fontSize:"18px", color:C.dark, maxWidth:"680px" }}>
          The research points to conclusions that contradict most AI business advice currently circulating. Here they are, direct.
        </p>

        {[
          { acc:undefined, title:"The opportunity is real. The window is narrowing. Specificity is survival.",
            body:"Gartner predicts vertical SaaS will be 75% of total SaaS opportunity by 2028. 30% of enterprise AI deployments are already vertical-specific. The companies that stake specific workflow positions in 2026 will have 3–4 years of data, customer relationships, and integration depth when the 2029 competitive wave arrives. Broad positioning is the most expensive mistake a founder makes in 2026." },
          { acc:C.green, title:"The efficiency numbers are structural, not anomalous.",
            body:"Midjourney ($3M–$5M revenue per employee), Cursor ($3.3M), Gamma ($1.67M), Base44 ($80M solo exit) — these are the result of AI eliminating the marginal cost of execution. This is a permanent structural change in business unit economics. The competitive advantage of a large company's headcount is collapsing in every domain where AI can handle execution. One person can now do what required 50." },
          { acc:C.orange, title:"The startup route depends entirely on your starting position.",
            body:"Domain expert with no tech background → AI-Augmented Services first, Agent-as-a-Service second, productize third. Technical founder with industry knowledge → Vertical AI SaaS. Technical founder without industry network → Agent-as-a-Service in a vertical you can learn quickly. Founder with distribution access (community, SEO, audience) → AI-Native Consumer Product. The wrong model for your starting position is more dangerous than the wrong market." },
          { acc:C.acc, title:"For solo founders in emerging markets: the structural advantage is real.",
            body:"52.3% solo startup exit success rate. 36.3% of new startups are solo-founded. $1M ARR in 12 months is a validated target with the right model and workflow choice. The operational stack costs under $1,000/month. The build time is 6–14 weeks. The distribution channels are open. The only required inputs are domain expertise and execution speed — and both are things you build by doing, not by waiting." },
        ].map((c,i)=>(
          <Callout key={i} accent={c.acc}>
            <strong style={s}>{c.title}</strong>
            <div style={{ marginTop:"8px" }}>{c.body}</div>
          </Callout>
        ))}

        <Divider label="The Bottom Line" />
        <p style={prose}>The question in 2026 is not whether to build with AI. That window closed for the competitive question — AI is the operating system of every business built from here forward. The question is which specific workflow you are going to own, which of the four models fits your starting position, and whether you will go deep enough, fast enough, to make removal feel impossible to your first 10 customers.</p>
        <p style={prose}><span style={s}>36 months.</span> That's Harvey. Zero to $195M ARR. One specific problem. One specific buyer. Deeper than any alternative. The playbook is in your hands.</p>

      </div>{/* /content */}

      {/* ── SOURCES ── */}
      <div style={{ background:C.paper, borderTop:`1px solid ${C.bd}`, padding:"52px 60px" }}>
        <div style={{ maxWidth:"1100px", margin:"0 auto" }}>
          <div style={{ fontFamily:"'DM Mono',monospace", fontSize:"10px", letterSpacing:"0.2em", textTransform:"uppercase", color:C.rust, marginBottom:"24px", display:"flex", alignItems:"center", gap:"10px" }}>
            <span style={{ width:20, height:1, background:C.rust, display:"inline-block" }}/> Sources &amp; Citations
          </div>
          {[
            "Crunchbase News · '6 Charts That Show The Big AI Funding Trends Of 2025' · December 2025 — $202.3B AI investment, 47% of all global VC",
            "OECD · 'Venture Capital Investments in Artificial Intelligence Through 2025' · 2026 — $258.7B AI VC, 61% of all venture capital globally",
            "Menlo Ventures · Generative AI Report 2025 — Enterprise AI revenue $37B, 3× YoY; $19B user-facing, $18B infrastructure",
            "Bessemer Venture Partners · 'Building Vertical AI: An Early Stage Playbook for Founders' · January 2026 — Domain expertise, entry wedge, workflow depth",
            "Bessemer Venture Partners · 'The AI Pricing and Monetization Playbook' · February 2026 — Outcome-based pricing, seat pricing risks, renewal cliff",
            "Bessemer Venture Partners · 'The State of AI 2025' · August 2025 — Vertical AI defensibility, insider expertise as moat",
            "Gartner · Strategic Predictions for 2026 — 90% B2B agent-intermediated by 2028, $15T spend, 35% sovereign AI by 2027",
            "Gartner · 75% of SaaS opportunity vertical by 2028; 40% of enterprise apps will include task-specific AI agents by 2026",
            "Gartner · 1,445% surge in multi-agent system inquiries Q1 2024 to Q2 2025",
            "Quantumrun Foresight · 'Midjourney Statistics' · December 2025 — $500M revenue, 163 employees, $18M revenue per employee at peak",
            "AIPRM · '50+ Midjourney Statistics 2025' — Zero marketing spend confirmed, revenue timeline verified",
            "Sacra Research · 'Harvey at $195M ARR' · January 2026 — 290% YoY growth, 1,000+ customers, 59 countries, $8B valuation",
            "DevGraphIQ · 'Cursor Statistics 2025' — $500M ARR, ~50 employees, $3.3M revenue per employee (Dealroom.co verification)",
            "Market Clarity · 'Top 35 Most Profitable AI Startups in 2025' — BoredHumans $8.8M ARR, Gamma $50M ARR, 30 employees",
            "ByteIota · 'Tiny Teams Revolution' · January 2026 — Revenue per employee benchmarks, solo founder case studies",
            "Groovy Web · 'Best AI-Powered SaaS Product Ideas for 2026' · February 2026 — MVP timeline collapsed to 6–14 weeks",
            "ALM Corp · 'How to Make Money with AI for Digital Agencies in 2026' · December 2025 — Healthcare AI pricing, agency margins",
            "99BusinessIdeas · 'How to Start an AI Implementation Agency in 2026' · January 2026 — Personalized video outreach, setup fee strategy",
            "Vendep · 'Forget the data moat: The workflow is your fortress' — 2.1× growth, 46% higher CLV, $6.40 ROI per $1 community investment",
            "Ferguson Analytics · 'Data Moats in the AI Era' · January 2025 — 12–18 month first-mover data advantage decay rate",
            "VC Cafe · 'Vertical AI in 2026: The Good, The Bad, and The Ugly' · January 2026 — Thin wrapper failure mode, outcome-based pricing",
            "Nucamp · 'How to Launch a Global AI Startup as a Solo Tech Founder' · August 2025 — 52.3% solo exits, $200 MVP cost, 4 months faster ARR",
            "PwC · '2026 AI Business Predictions' — Agentic AI proof points, centralized AI studio model, 80/20 rule for AI initiatives",
            "SS&C Blue Prism · 'AI Agent Trends in 2026' — 38% of organizations have AI agents in human teams by 2028",
            "Chargebee · 'Selling Intelligence: The 2026 Playbook for Pricing AI Agents' — Outcome-based vs. usage-based, K-factor analysis",
            "Madgicx · 'How to Start an AI Agency in 2025' — Retainer pricing tiers $2K–$50K/month, value-first outbound strategy",
            "Dealroom.co · Revenue per employee benchmarks 2025 — Cursor $3.3M, Midjourney $2M+, OpenAI $1.5M+, Base44 solo exit",
            "IDC · By 2026, AI copilots embedded in nearly 80% of enterprise workplace applications",
            "Machine Learning Mastery · '7 Agentic AI Trends to Watch in 2026' · January 2026 — Multi-agent architecture, cost optimization patterns",
          ].map((src,i)=>(
            <div key={i} style={{ fontSize:"11px", lineHeight:1.7, color:C.muted, padding:"7px 0", borderBottom:i<28?`1px solid ${C.bd}`:"none" }}>{src}</div>
          ))}
        </div>
      </div>

      {/* ── CTA ── */}
      <div style={{ background:C.dark, padding:"72px 60px" }}>
        <div style={{ maxWidth:"1100px", margin:"0 auto" }}>
          <div style={{ fontFamily:"'DM Mono',monospace", fontSize:"9px", letterSpacing:"0.25em", textTransform:"uppercase", color:"rgba(245,240,232,0.3)", marginBottom:"16px", display:"flex", alignItems:"center", gap:"10px" }}>
            <span style={{ width:16, height:1, background:"rgba(245,240,232,0.2)", display:"inline-block" }}/> Blackbourxe Research Library
          </div>
          <h2 style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:"clamp(28px,5vw,56px)", letterSpacing:"-2.5px", lineHeight:0.95, color:"#f5f0e8", marginBottom:"18px" }}>
            70+ briefs. Free.<br/><span style={{ color:C.acc }}>No paywall. Every Tuesday.</span>
          </h2>
          <p style={{ fontSize:"14px", lineHeight:1.85, color:"rgba(245,240,232,0.45)", maxWidth:"520px", marginBottom:"28px" }}>
            Intelligence on AI, business, tech, money, and career. Every claim sourced. Every framework built to change how you act — not how you feel.
          </p>
          <a href="https://blackbourxe.vercel.app" target="_blank" rel="noreferrer"
            style={{ display:"inline-flex", alignItems:"center", gap:"10px", background:C.acc, color:C.dark, padding:"14px 26px", fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:"12px", letterSpacing:"0.08em", textTransform:"uppercase", textDecoration:"none" }}>
            Read the full library →
          </a>
        </div>
      </div>

      {/* ── FOOTER ── */}
      <div style={{ background:C.bg, padding:"20px 60px", borderTop:`1px solid ${C.bd}`, display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:"10px" }}>
        <span style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:"12px", color:C.dark }}>Blackbourxe</span>
        <span style={{ fontSize:"9px", letterSpacing:"0.15em", textTransform:"uppercase", color:C.muted }}>Research without the noise · blackbourxe.vercel.app · @blackbourxe</span>
        <span style={{ fontSize:"9px", letterSpacing:"0.15em", textTransform:"uppercase", color:C.muted }}>March 2026 · AI Business Brief</span>
      </div>

    </div>
  );
};

export default AiPoweredBusiness2026;