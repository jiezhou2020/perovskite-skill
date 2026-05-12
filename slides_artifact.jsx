// SL-PCI Slides — paste this into claude.ai Artifacts to preview / iterate
// 6 slides (S5–S10) at 1280×720 (16:9), navy academic palette
// Iterate by asking Claude in the Artifact: "make S7 more visual", "redesign S5", etc.

import React, { useState } from "react";
import { ChevronLeft, ChevronRight, ArrowRight, Check, Circle, CircleDashed } from "lucide-react";

// ---------- palette ----------
const C = {
  navy: "#1F3A5F",
  blue: "#2E75B6",
  teal: "#176B87",
  lightBlue: "#DCE6F2",
  pale: "#F5F7FA",
  white: "#FFFFFF",
  gray900: "#212529",
  gray700: "#494F55",
  gray500: "#868E96",
  gray300: "#C8CED3",
  red: "#C0392B",
  green: "#2E8655",
  amber: "#D9821C",
};

// ---------- shared slide frame ----------
const Frame = ({ page, title, children }) => (
  <div className="relative bg-white shadow-xl" style={{ width: 1280, height: 720, fontFamily: "Calibri, system-ui, sans-serif" }}>
    {/* Top divider */}
    <div className="absolute left-0 right-0" style={{ top: 58, height: 1.5, background: C.navy }} />
    {/* Bottom divider */}
    <div className="absolute left-0 right-0" style={{ top: 691, height: 1, background: C.navy }} />
    {/* Red corner badge */}
    <div className="absolute" style={{ top: 5, right: 5, width: 28, height: 28, background: C.red }} />
    {/* Title */}
    <div className="absolute font-bold leading-tight"
         style={{ top: 10, left: 12, right: 50, fontSize: 19, color: C.navy, lineHeight: 1.2 }}>
      {title}
    </div>
    {/* Page number */}
    <div className="absolute" style={{ right: 18, top: 697, fontSize: 11, color: C.gray500 }}>
      {page}
    </div>
    {children}
  </div>
);

const Subtitle = ({ children, top = 67 }) => (
  <div className="absolute italic" style={{ top, left: 20, right: 20, fontSize: 12.5, color: C.gray700, lineHeight: 1.25 }}>
    {children}
  </div>
);

// ============================================================
// S5 — Coupled-state problem
// Layout: 3 probe boxes ↓ central Z box, then 3 horizontal contradiction cards
// ============================================================
const S5 = () => {
  const probes = [
    { title: "PL Hyperspectral", sub: "peak, FWHM, dynamics" },
    { title: "KPFM / fast-KPFM", sub: "CPD, SPV, dark relaxation" },
    { title: "XPS · TOF-SIMS · GIWAXS · RGA", sub: "depth · chemistry · structure · gas" },
  ];
  const cards = [
    {
      n: 1,
      title: "PL signal is funneling-weighted, not phase-fraction-weighted",
      body: "Minority I-rich domains capture carriers from a diffusion volume V_D and dominate emission even at φ_I ≈ 10⁻³. A PL red-shift tells you carriers found a low-E_g site — it does not tell you how much phase formed.",
      ref: "Hoke 2015 · Ruth 2023 (ΔF_light, V_D)",
    },
    {
      n: 2,
      title: "KPFM CPD is a 5-component convolution",
      body: "V_CPD = W₀(χ_Br) − V_bb(N_defect) − V_SPV(I, N_defect) − V_ion(t, μ_X) − V_trap(r, t). A single static scan cannot attribute the signal to any one component, yet field reports routinely read it as local electric field.",
      ref: "Qu 2026 · Garrett fast-KPFM",
    },
    {
      n: 3,
      title: "Ex-situ probes can drive the very state they measure",
      body: "X-ray dose (XPS) and sputter (TOF-SIMS) move halides. A reported 'Br-rich surface' may be the probe's artifact, not the sample's state. Fang 2024 vs Navid 2026 directional disagreement is the canonical symptom.",
      ref: "Tian 2022 · Fang 2024 ⟷ Navid 2026",
    },
  ];

  return (
    <Frame page="0 5" title="4. Phase segregation is a coupled-state problem — three probes, three projections, one shared latent state">
      <Subtitle>
        Three contradictions in the literature are not measurement noise. Each technique reports a different projection of the same physical state, so their disagreements are diagnostic — not failures to be averaged away.
      </Subtitle>

      {/* Probe row */}
      <div className="absolute flex" style={{ top: 125, left: 80, width: 1120, height: 70, gap: 50 }}>
        {probes.map((p, i) => (
          <div key={i}
               className="flex-1 rounded-md flex flex-col items-center justify-center"
               style={{ background: C.lightBlue, border: `1.5px solid ${C.blue}` }}>
            <div className="font-bold" style={{ color: C.navy, fontSize: 13.5 }}>{p.title}</div>
            <div className="italic" style={{ color: C.gray700, fontSize: 10.5, marginTop: 2 }}>{p.sub}</div>
          </div>
        ))}
      </div>

      {/* SVG arrows + central Z */}
      <svg className="absolute" style={{ top: 195, left: 80, width: 1120, height: 100 }}>
        {[0, 1, 2].map(i => {
          const x = i * (1120 / 3) + 1120 / 6;
          return (
            <g key={i}>
              <line x1={x} y1={0} x2={x} y2={70} stroke={C.navy} strokeWidth={2} />
              <polygon points={`${x - 5},${70} ${x + 5},${70} ${x},${80}`} fill={C.navy} />
            </g>
          );
        })}
      </svg>

      <div className="absolute rounded-md" style={{ top: 275, left: 220, width: 840, height: 70, background: C.navy }}>
        <div className="text-center font-bold" style={{ color: C.lightBlue, fontSize: 10.5, marginTop: 8, letterSpacing: 1 }}>
          SHARED LATENT STATE
        </div>
        <div className="text-center font-bold" style={{ color: C.white, fontSize: 19, marginTop: 4, fontFamily: "Consolas, monospace" }}>
          Z = {"{ "}x_Br/I , N_defect , φ_local , ε , C_deg{" }"}
        </div>
      </div>

      <div className="absolute italic text-center" style={{ top: 355, left: 40, right: 40, fontSize: 11.5, color: C.gray700, fontFamily: "Consolas, monospace" }}>
        Forward observation model:  y_m = H_m(Z ; θ_m) + A_m + η_m     (physics · artifact channel · noise)
      </div>

      {/* 3 horizontal cards */}
      <div className="absolute" style={{ top: 395, left: 25, right: 25, display: "flex", flexDirection: "column", gap: 6 }}>
        {cards.map((c, i) => (
          <div key={i} className="flex" style={{ height: 84 }}>
            <div className="flex items-center justify-center font-bold"
                 style={{ width: 50, background: C.navy, color: C.white, fontSize: 28 }}>
              {c.n}
            </div>
            <div className="flex-1 px-3 py-1.5" style={{ background: C.pale, borderTop: `1px solid ${C.gray300}`, borderBottom: `1px solid ${C.gray300}` }}>
              <div className="font-bold" style={{ color: C.navy, fontSize: 12.5, marginBottom: 3 }}>{c.title}</div>
              <div style={{ color: C.gray900, fontSize: 10.5, lineHeight: 1.30 }}>{c.body}</div>
            </div>
            <div className="flex flex-col items-center justify-center px-2"
                 style={{ width: 230, background: C.white, border: `1px solid ${C.blue}` }}>
              <div className="font-bold" style={{ color: C.blue, fontSize: 8.5, letterSpacing: 1.2 }}>LITERATURE</div>
              <div className="text-center italic" style={{ color: C.gray900, fontSize: 10, marginTop: 4, lineHeight: 1.3 }}>{c.ref}</div>
            </div>
          </div>
        ))}
      </div>
    </Frame>
  );
};

// ============================================================
// S6 — Central Hypothesis: pentagon + 3 hypothesis cards
// ============================================================
const S6 = () => {
  // Pentagon geometry (in SVG coordinates)
  const cx = 280, cy = 330, r = 175;
  const nodes = [
    { sym: "x_Br/I", sub: "halide distribution" },
    { sym: "N_defect", sub: "defect density" },
    { sym: "φ_local", sub: "local potential" },
    { sym: "ε", sub: "strain heterogeneity" },
    { sym: "C_deg", sub: "irreversible chemistry" },
  ];
  const vertices = nodes.map((_, i) => {
    const ang = -Math.PI / 2 + i * (2 * Math.PI / 5);
    return { x: cx + r * Math.cos(ang), y: cy + r * Math.sin(ang) };
  });

  const hypotheses = [
    {
      tag: "Hα", chip: "CONDITIONAL", name: "Conditional stabilization",
      claim: "Br-rich surface stabilizes only when it simultaneously reduces N_defect, smooths φ_local, and releases ε.",
      decision: "Multi-variate regression slope β₁:  φ = β₀ + β₁·χ_Br + β₂·N_d + β₃·ε + β₄·φ_loc + ε",
      metric: "β₁ < 0,  95% CI excludes 0",
    },
    {
      tag: "Hβ", chip: "ELECTROSTATIC", name: "Electrostatic precursor",
      claim: "Local CPD anomaly is a trigger only if it precedes the PL hotspot in time AND co-locates in the same ROI.",
      decision: "Causal-precedence probability across state-locked S0→S5 sequence",
      metric: "P[t_CPD < t_PL | ROI] > 0.5 + δ",
    },
    {
      tag: "Hγ", chip: "REVERSIBILITY", name: "Reversibility boundary",
      claim: "Reversible LHS and irreversible degradation share PL signatures — separable only by joint posterior across optical + chemical + gas channels.",
      decision: "Bayes-factor K between M_reversible vs M_irreversible models",
      metric: "|log₁₀ K| > 1  ⟹  decisive",
    },
  ];

  return (
    <Frame page="0 6" title="5. Br-rich surface is conditionally stabilizing — three falsifiable sub-hypotheses on a coupled 5-state system">
      <Subtitle>
        Phase segregation is governed by five coupled latent states. Br richness is neither necessary nor sufficient — its role is set by whether it co-moves with defect, electrostatic, strain and chemical-potential changes.
      </Subtitle>

      {/* LEFT: pentagon SVG */}
      <div className="absolute" style={{ top: 110, left: 20, width: 560, height: 540 }}>
        <div className="font-bold text-center" style={{ color: C.blue, fontSize: 11, letterSpacing: 1.3, marginBottom: 2 }}>
          FIVE COUPLED LATENT STATES
        </div>
        <div className="italic text-center" style={{ color: C.gray500, fontSize: 10, marginBottom: 8 }}>
          every pair coupled bidirectionally
        </div>

        <svg width="560" height="490" style={{ overflow: "visible" }}>
          {/* All K5 edges */}
          {vertices.flatMap((v1, i) =>
            vertices.slice(i + 1).map((v2, j) => (
              <line key={`${i}-${j}`}
                    x1={v1.x} y1={v1.y} x2={v2.x} y2={v2.y}
                    stroke={C.gray300} strokeWidth={1} />
            ))
          )}
          {/* Nodes */}
          {vertices.map((v, i) => (
            <g key={i}>
              <ellipse cx={v.x} cy={v.y} rx={75} ry={32} fill={C.navy} />
              <text x={v.x} y={v.y - 3} textAnchor="middle" fill={C.white}
                    fontSize="14" fontWeight="bold" fontFamily="Consolas, monospace">
                {nodes[i].sym}
              </text>
              <text x={v.x} y={v.y + 14} textAnchor="middle" fill={C.lightBlue}
                    fontSize="9" fontStyle="italic">
                {nodes[i].sub}
              </text>
            </g>
          ))}
        </svg>

        <div className="italic text-center" style={{ color: C.gray700, fontSize: 11, marginTop: -10, padding: "0 30px" }}>
          Br-rich surface acts on x_Br/I directly — its phenotype depends on every other vertex moving with it.
        </div>
      </div>

      {/* RIGHT: 3 hypothesis cards */}
      <div className="absolute" style={{ top: 110, left: 600, right: 20 }}>
        <div className="font-bold text-center" style={{ color: C.blue, fontSize: 11, letterSpacing: 1.3, marginBottom: 2 }}>
          THREE FALSIFIABLE SUB-HYPOTHESES
        </div>
        <div className="italic text-center" style={{ color: C.gray500, fontSize: 10, marginBottom: 8 }}>
          each with a statistical decision rule, not a truth table
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {hypotheses.map((h, i) => (
            <div key={i} className="flex" style={{ height: 160, background: C.pale, border: `1px solid ${C.gray300}`, borderRadius: 3 }}>
              {/* Left tag column */}
              <div className="flex flex-col items-center justify-center" style={{ width: 85, background: C.navy }}>
                <div className="font-bold" style={{ color: C.white, fontSize: 24 }}>{h.tag}</div>
                <div className="font-bold" style={{ color: C.lightBlue, fontSize: 7.5, letterSpacing: 1, marginTop: 4 }}>{h.chip}</div>
              </div>
              {/* Content */}
              <div className="flex-1 px-3 py-2 flex flex-col">
                <div className="font-bold" style={{ color: C.navy, fontSize: 13, marginBottom: 6 }}>{h.name}</div>
                <div style={{ color: C.gray900, fontSize: 10.5, lineHeight: 1.3, marginBottom: 6 }}>{h.claim}</div>
                <div className="italic" style={{ color: C.gray700, fontSize: 9.5, lineHeight: 1.25, marginBottom: 4 }}>{h.decision}</div>
                <div className="mt-auto px-2 py-1 text-center font-bold"
                     style={{ background: C.lightBlue, color: C.navy, fontSize: 10, fontFamily: "Consolas, monospace" }}>
                  DECISION: {h.metric}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Frame>
  );
};

// ============================================================
// S7 — SL-PCI 4-step process
// ============================================================
const S7 = () => {
  const steps = [
    { n: 1, head: "STATE WRITING", sub: "define · timestamp",
      body: "Operando PL + KPFM in a fiducial ROI define six states S0–S5 from peak shift, FWHM and CPD dynamics. Each measurement carries history H = {I, t, T, atm, delay, dose}.",
      tech: "PL hyperspectral · fast-KPFM", tscale: "ms — min" },
    { n: 2, head: "STATE LOCKING", sub: "freeze · transport",
      body: "Low-T quench + dark transfer + inert atmosphere keep the written state frozen during transit to destructive probes. Twin-sample dose array provides backup when cryo-transfer is unavailable.",
      tech: "cryo-stage · twin-sample", tscale: "seconds (quench)" },
    { n: 3, head: "ENDPOINT READOUT", sub: "chemistry · structure",
      body: "TOF-SIMS / AR-XPS / GIWAXS / Raman / RGA read the locked state. Each artifact channel A_m is calibrated by dose / sputter / exposure series — never assumed to be zero.",
      tech: "SIMS · XPS · GIWAXS · RGA", tscale: "static endpoint" },
    { n: 4, head: "LATENT INFERENCE", sub: "posterior · uncertainty",
      body: "Bayesian inference returns p(Z, θ | y) with covariance. Jacobian SVD identifies ill-conditioned directions before any sample is made. Output: mechanism posteriors + Bayes factors.",
      tech: "HMC / VI · Jacobian SVD", tscale: "offline" },
  ];

  return (
    <Frame page="0 7" title="6. SL-PCI: four steps that turn correlative observation into Bayesian inference">
      <Subtitle>
        State-Locked Physics-Informed Correlative Inference — write a defined state, freeze it for endpoint probes, infer a shared latent state with explicit artifact channels.
      </Subtitle>

      {/* Feature equation banner */}
      <div className="absolute rounded-sm" style={{ top: 110, left: 40, right: 40, height: 90, background: C.navy }}>
        <div className="text-center font-bold" style={{ color: C.lightBlue, fontSize: 10.5, paddingTop: 8, letterSpacing: 2 }}>
          GENERATIVE OBSERVATION MODEL
        </div>
        <div className="text-center font-bold" style={{ color: C.white, fontSize: 27, marginTop: 4, fontFamily: "Consolas, monospace" }}>
          y_m  =  H_m( Z ; θ_m )  +  A_m  +  η_m
        </div>
        <div className="text-center italic" style={{ color: C.lightBlue, fontSize: 11, marginTop: 4 }}>
          observation  =  physics forward model  +  artifact channel  +  noise
        </div>
      </div>

      {/* 4-step horizontal flow */}
      <div className="absolute flex items-center" style={{ top: 235, left: 25, right: 25, height: 290, gap: 8 }}>
        {steps.map((s, i) => (
          <React.Fragment key={i}>
            <div className="flex-1 rounded-md flex flex-col"
                 style={{ height: 280, background: C.pale, border: `1px solid ${C.blue}`, overflow: "hidden" }}>
              {/* Header */}
              <div className="flex items-center px-3 py-2.5" style={{ background: C.navy, height: 78 }}>
                <div className="flex items-center justify-center rounded-full font-bold"
                     style={{ width: 46, height: 46, background: C.blue, color: C.white, fontSize: 22, flexShrink: 0 }}>
                  {s.n}
                </div>
                <div className="ml-2 min-w-0">
                  <div className="font-bold" style={{ color: C.white, fontSize: 12, letterSpacing: 0.8 }}>{s.head}</div>
                  <div className="italic" style={{ color: C.lightBlue, fontSize: 9.5 }}>{s.sub}</div>
                </div>
              </div>
              {/* Body */}
              <div className="px-3 py-3 flex-1" style={{ color: C.gray900, fontSize: 10.5, lineHeight: 1.32 }}>
                {s.body}
              </div>
              {/* Footer */}
              <div className="px-3 py-2" style={{ background: C.lightBlue }}>
                <div className="font-bold" style={{ color: C.navy, fontSize: 9 }}>
                  TECHNIQUE:  <span className="font-normal">{s.tech}</span>
                </div>
                <div className="font-bold" style={{ color: C.navy, fontSize: 9, marginTop: 2 }}>
                  TIME WINDOW:  <span className="font-normal">{s.tscale}</span>
                </div>
              </div>
            </div>
            {i < 3 && (
              <ArrowRight size={28} style={{ color: C.navy, flexShrink: 0 }} strokeWidth={2.5} />
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Innovation callout */}
      <div className="absolute" style={{ top: 545, left: 40, right: 40, height: 130, background: C.lightBlue, border: `1px solid ${C.blue}`, borderRadius: 3 }}>
        <div className="font-bold px-4 pt-3" style={{ color: C.navy, fontSize: 11.5, letterSpacing: 1.5 }}>
          WHY THIS IS NEW
        </div>
        <div className="px-4 pt-1" style={{ color: C.gray900, fontSize: 11, lineHeight: 1.4 }}>
          <div className="mb-1">•  No technique is asked to measure Z directly — each contributes a noisy, biased projection (H_m + A_m).</div>
          <div className="mb-1">•  The artifact channel A_m is explicit in the likelihood, not denied — beam damage and sputter mixing are first-class citizens.</div>
          <div>•  Jacobian SVD on the chosen probe set predicts identifiability before any sample is fabricated — experimental power is a quantitative number, not a hope.</div>
        </div>
      </div>
    </Frame>
  );
};

// ============================================================
// S8 — Forward Models table
// ============================================================
const S8 = () => {
  const rows = [
    { domain: "OPTICAL PROJECTIONS", color: C.blue, items: [
      { tech: "PL hyperspectral", obs: "I_PL(E, r, t)",
        eq: ["I_PL = Σ_p w_p · η_p(N_defect) · L_p(E_g^p, σ) · R(α, d)",
             "w_p ∝ V_D⁻¹ · exp(−ΔE_g / kT)    (Ruth 2023 funneling)"],
        resolves: ["x_Br/I", "φ_p", "N_defect"] },
      { tech: "PLQY + TRPL", obs: "η_PLQY, τ_eff",
        eq: ["η⁻¹ − 1 = 1/(k_rad · τ_SRH(N_b)) + S_surf(N_s)/(k_rad · d)",
             "τ_eff⁻¹ = τ_SRH⁻¹ + τ_rad⁻¹ + τ_surf⁻¹"],
        resolves: ["N_defect bulk", "N_defect surf"] },
    ]},
    { domain: "ELECTROSTATIC PROJECTIONS", color: C.teal, items: [
      { tech: "KPFM + fast-KPFM", obs: "V_CPD(r, t ; I, f )",
        eq: ["V_CPD = W₀(χ_Br_surf) − V_bb(N_defect) − V_SPV(I, N_defect)",
             "         − V_ion(t, μ_X) − V_trap(r, t)    (separable by τ: ms/s/min)"],
        resolves: ["χ_Br_surf", "N_defect", "φ_local"] },
    ]},
    { domain: "CHEMICAL + STRUCTURAL PROJECTIONS", color: C.amber, items: [
      { tech: "AR-XPS", obs: "I_Br(θ) / I_I(θ)",
        eq: ["I_Br(θ)/I_I(θ) = ∫ c_Br(z)·exp(−z/λ cos θ) dz / ∫ c_I(...)",
             "dose-series → zero-dose extrapolation removes beam-driven A_m"],
        resolves: ["x_Br/I(z)", "C_deg"] },
      { tech: "GIWAXS + Raman", obs: "Δq, FWHM, ω, Γ",
        eq: ["q_hkl(x_Br) = q₀(1 − x_Br · Δa/a)    (Vegard)",
             "FWHM ≈ ε·tan θ + Kλ/L    (Williamson–Hall)"],
        resolves: ["x_Br/I", "ε", "L_crystallite"] },
      { tech: "RGA + sealed-vs-open", obs: "P_I₂(t)",
        eq: ["dN_I₂/dt = R_loss(c_I, T, hν) · V_film",
             "atmosphere-control isolates irreversible loss from reversible drift"],
        resolves: ["C_deg", "μ_X"] },
    ]},
  ];

  return (
    <Frame page="0 8" title="7. Forward models link nine techniques to one shared latent state Z">
      <Subtitle>
        Listing H_m(Z; θ_m) explicitly makes the inference reproducible. Each technique's primary observable, governing equation and resolved Z components are laid out before any sample is fabricated.
      </Subtitle>

      {/* Z definition banner */}
      <div className="absolute" style={{ top: 110, left: 40, right: 40, height: 50, background: C.navy, display: "flex", alignItems: "center" }}>
        <div className="font-bold pl-4" style={{ color: C.lightBlue, fontSize: 11, letterSpacing: 2, flexShrink: 0 }}>
          LATENT STATE
        </div>
        <div className="flex-1 text-center font-bold" style={{ color: C.white, fontSize: 17, fontFamily: "Consolas, monospace" }}>
          Z = {"{ "}x_Br/I , N_defect , φ_local , ε , C_deg{" }"}
        </div>
      </div>

      {/* Table */}
      <div className="absolute" style={{ top: 175, left: 40, right: 40 }}>
        {/* Header */}
        <div className="flex" style={{ background: C.gray900, height: 30 }}>
          <div className="font-bold flex items-center justify-center" style={{ width: 200, color: C.lightBlue, fontSize: 9.5, letterSpacing: 1 }}>TECHNIQUE</div>
          <div className="font-bold flex items-center justify-center" style={{ width: 155, color: C.lightBlue, fontSize: 9.5, letterSpacing: 1 }}>OBSERVABLE</div>
          <div className="font-bold flex items-center justify-center flex-1" style={{ color: C.lightBlue, fontSize: 9.5, letterSpacing: 1 }}>FORWARD MODEL  H_m(Z ; θ_m)</div>
          <div className="font-bold flex items-center justify-center" style={{ width: 200, color: C.lightBlue, fontSize: 9.5, letterSpacing: 1 }}>RESOLVES IN Z</div>
        </div>

        {/* Domain groups */}
        {rows.map((d, di) => (
          <div key={di}>
            <div className="font-bold pl-4 flex items-center" style={{ background: d.color, color: C.white, fontSize: 10.5, height: 22, letterSpacing: 1 }}>
              {d.domain}
            </div>
            {d.items.map((row, ri) => (
              <div key={ri} className="flex" style={{ minHeight: 56, background: ri % 2 === 0 ? C.white : C.pale, borderBottom: `1px solid ${C.gray300}` }}>
                <div className="font-bold flex items-center justify-center text-center px-2" style={{ width: 200, color: C.navy, fontSize: 11 }}>{row.tech}</div>
                <div className="flex items-center justify-center" style={{ width: 155, color: C.gray900, fontSize: 10, fontFamily: "Consolas, monospace" }}>{row.obs}</div>
                <div className="flex flex-col justify-center px-3 py-2 flex-1" style={{ color: C.gray900, fontSize: 9.5, fontFamily: "Consolas, monospace", lineHeight: 1.4 }}>
                  {row.eq.map((line, ei) => <div key={ei}>{line}</div>)}
                </div>
                <div className="flex flex-wrap items-center justify-center gap-1.5 px-2" style={{ width: 200 }}>
                  {row.resolves.map((z, zi) => (
                    <span key={zi}
                          className="px-2 py-0.5 rounded text-center font-bold"
                          style={{ background: C.lightBlue, color: C.navy, fontSize: 9.5, fontFamily: "Consolas, monospace" }}>
                      {z}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="absolute text-center italic" style={{ bottom: 35, left: 40, right: 40, color: C.gray700, fontSize: 11 }}>
        Every probe is over-determined when combined — no single instrument resolves Z, but their joint likelihood does.
      </div>
    </Frame>
  );
};

// ============================================================
// S9 — Identifiability Budget: progressive Aim stages
// ============================================================
const S9 = () => {
  const Z = ["x_Br/I", "N_defect_b", "N_defect_s", "φ_local", "ε", "L_xtal", "C_deg"];
  const aims = [
    { tag: "AIM 1", year: "Year 1 · Foundation",
      probes: ["PL hyperspectral", "UV-vis", "Static KPFM", "UPS (W₀ anchor)", "M0 synthetic pipeline"],
      resolved: { "x_Br/I": "partial", "N_defect_b": "partial", "N_defect_s": "open", "φ_local": "open",
                  "ε": "open", "L_xtal": "open", "C_deg": "open" },
      kappa: "κ = baseline", note: "N_b vs N_s degenerate · C_deg unobservable" },
    { tag: "AIM 2", year: "Year 2 · Core proof",
      probes: ["+ fast-KPFM 3D scan", "+ TOF-SIMS depth", "+ AR-XPS", "+ TRPL thickness gradient", "all in same fiducial ROI"],
      resolved: { "x_Br/I": "ok", "N_defect_b": "ok", "N_defect_s": "ok", "φ_local": "ok",
                  "ε": "open", "L_xtal": "open", "C_deg": "open" },
      kappa: "κ ≤ 10²", note: "ε vs L still confounded · C_deg implicit only" },
    { tag: "AIM 3", year: "Year 3 · Mechanism map",
      probes: ["+ GIWAXS (Δq, FWHM)", "+ Raman (linewidth)", "+ RGA / gas trapping", "+ sealed-vs-open aging", "high-Br stress regime"],
      resolved: { "x_Br/I": "ok", "N_defect_b": "ok", "N_defect_s": "ok", "φ_local": "ok",
                  "ε": "ok", "L_xtal": "ok", "C_deg": "ok" },
      kappa: "κ ≈ 10", note: "all Z resolved · Hα/Hβ/Hγ testable" },
  ];

  const status = (s) => {
    if (s === "ok") return { bg: C.green, fg: C.white, glyph: "✓" };
    if (s === "partial") return { bg: C.amber, fg: C.white, glyph: "◐" };
    return { bg: C.gray300, fg: C.gray500, glyph: "○" };
  };

  return (
    <Frame page="0 9" title="8. Each Aim progressively closes the unresolved Z directions — κ tracks the budget">
      <Subtitle>
        Jacobian J_mj = ∂H_m / ∂Z_j is built from forward models before any sample exists. SVD reveals which mechanism directions a probe set constrains. Aim 1→3 adds probes that close specific ill-conditioned directions; condition number κ tracks progress.
      </Subtitle>

      {/* 3 stage cards with arrows */}
      <div className="absolute flex items-center" style={{ top: 130, left: 25, right: 25, gap: 12, height: 510 }}>
        {aims.map((a, i) => (
          <React.Fragment key={i}>
            <div className="flex-1 flex flex-col rounded-md"
                 style={{ height: 510, background: C.pale, border: `1.5px solid ${C.navy}`, overflow: "hidden" }}>
              {/* Header */}
              <div className="px-3 py-2.5" style={{ background: C.navy }}>
                <div className="font-bold" style={{ color: C.white, fontSize: 16 }}>{a.tag}</div>
                <div className="italic" style={{ color: C.lightBlue, fontSize: 10.5, marginTop: 2 }}>{a.year}</div>
              </div>
              {/* Probes */}
              <div className="px-3 pt-3">
                <div className="font-bold mb-1.5" style={{ color: C.blue, fontSize: 9.5, letterSpacing: 1 }}>PROBE SET</div>
                {a.probes.map((p, pi) => (
                  <div key={pi} className="mb-1" style={{ color: C.gray900, fontSize: 10.5 }}>
                    •  {p}
                  </div>
                ))}
              </div>
              {/* Z checklist */}
              <div className="px-3 pt-3">
                <div className="font-bold mb-1.5" style={{ color: C.blue, fontSize: 9.5, letterSpacing: 1 }}>Z  DIMENSIONS</div>
                {Z.map((z, zi) => {
                  const s = status(a.resolved[z]);
                  return (
                    <div key={zi} className="flex items-center mb-1">
                      <div className="flex items-center justify-center font-bold rounded"
                           style={{ width: 24, height: 18, background: s.bg, color: s.fg, fontSize: 11 }}>
                        {s.glyph}
                      </div>
                      <div className="ml-2"
                           style={{ color: a.resolved[z] === "open" ? C.gray500 : C.gray900,
                                    fontFamily: "Consolas, monospace", fontSize: 10.5,
                                    fontWeight: a.resolved[z] === "ok" ? "bold" : "normal" }}>
                        {z}
                      </div>
                    </div>
                  );
                })}
              </div>
              {/* κ metric */}
              <div className="mt-auto" style={{ background: C.blue, padding: 10 }}>
                <div className="text-center font-bold" style={{ color: C.white, fontSize: 18, fontFamily: "Consolas, monospace" }}>
                  {a.kappa}
                </div>
                <div className="text-center italic" style={{ color: C.lightBlue, fontSize: 9.5, marginTop: 4, lineHeight: 1.2 }}>
                  {a.note}
                </div>
              </div>
            </div>
            {i < 2 && (
              <div className="flex flex-col items-center" style={{ flexShrink: 0 }}>
                <div className="font-bold italic" style={{ color: C.navy, fontSize: 10 }}>+ probes</div>
                <ArrowRight size={32} style={{ color: C.navy }} strokeWidth={3} />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Footer */}
      <div className="absolute text-center italic" style={{ bottom: 32, left: 40, right: 40, color: C.gray700, fontSize: 11 }}>
        All κ values are computed by SVD on the Jacobian before any sample is fabricated — experimental power is a number you plan around, not a hope after data collection.
      </div>
    </Frame>
  );
};

// ============================================================
// S10 — Gantt timeline + year summaries
// ============================================================
const S10 = () => {
  const monthCount = 36;
  const timelineLeft = 145;
  const timelineWidth = 1100;
  const perMonth = timelineWidth / monthCount;

  const swimlanes = [
    { label: "M0 · Inference pipeline\n(synthetic data)", row: 0, bars: [{ s: 0, e: 4, c: C.blue }] },
    { label: "Sample platform\n(fiducial-grid WBG)", row: 1, bars: [{ s: 1, e: 24, c: C.navy }] },
    { label: "State writing & locking\n(PL · KPFM · cryo)", row: 2, bars: [{ s: 4, e: 12, c: C.teal }] },
    { label: "Same-ROI multimodal\n(KPFM · SIMS · XPS)", row: 3, bars: [{ s: 13, e: 24, c: C.teal }] },
    { label: "Structural / chemical\n(GIWAXS · Raman · RGA)", row: 4, bars: [{ s: 25, e: 33, c: C.amber }] },
    { label: "Manuscript writing\n+ thesis", row: 5, bars: [{ s: 22, e: 24, c: C.green }, { s: 30, e: 36, c: C.green }] },
  ];

  const milestones = [
    { m: 24, label: "Manuscript 1", sub: "SL-PCI proof" },
    { m: 36, label: "Manuscript 2", sub: "Mechanism regime" },
  ];

  const years = [
    { tag: "YEAR 1", color: C.blue,
      items: ["M0 synthetic pipeline validates inference recovery", "fiducial-grid WBG films & baseline SOP", "S0–S5 state writing; locking-drift quantified"],
      metric: "Δ_drift  <  Δ_mechanism" },
    { tag: "YEAR 2", color: C.teal,
      items: ["same-ROI PL → KPFM → TOF-SIMS on 2 × 3 matrix", "leave-one-modality-out cross-validation", "Manuscript 1 — Hα tested with reported β₁"],
      metric: "κ ≤ 10²  ·  Hα tested" },
    { tag: "YEAR 3", color: C.amber,
      items: ["GIWAXS + Raman + RGA close ε / L / C_deg", "mechanism regime diagram for E_g = 1.66–1.78 eV", "Manuscript 2 + thesis with Bayes-factor support"],
      metric: "all Z resolved  ·  log₁₀K reported" },
  ];

  const laneH = 32;
  const laneGap = 4;
  const ganttTop = 130;
  const ganttHeight = swimlanes.length * (laneH + laneGap) + 50;

  return (
    <Frame page="1 0" title="9. Three-year roadmap — two manuscripts and one thesis, all anchored on falsifiable claims with reported uncertainty">
      <Subtitle>
        Year 1 builds the pipeline on synthetic data and a fiducial-grid sample platform. Year 2 publishes the SL-PCI proof on the Br-rich vs passivation matrix. Year 3 closes the mechanism map and writes the thesis.
      </Subtitle>

      {/* Gantt SVG */}
      <svg className="absolute" style={{ top: ganttTop, left: 0, width: 1280, height: ganttHeight }}>
        {/* Month grid */}
        {Array.from({ length: 13 }, (_, q) => {
          const m = q * 3;
          const x = timelineLeft + m * perMonth;
          return (
            <g key={q}>
              <line x1={x} y1={20} x2={x} y2={swimlanes.length * (laneH + laneGap) + 20}
                    stroke={C.gray300} strokeWidth={0.5} />
              <text x={x} y={12} textAnchor="middle" fill={C.gray500} fontSize={10}>
                {m === 0 ? "M1" : `M${m}`}
              </text>
            </g>
          );
        })}
        {/* Year separators */}
        {[12, 24].map(ym => (
          <line key={ym} x1={timelineLeft + ym * perMonth} y1={20}
                x2={timelineLeft + ym * perMonth} y2={swimlanes.length * (laneH + laneGap) + 20}
                stroke={C.navy} strokeWidth={1.5} />
        ))}
        {/* Year labels */}
        <text x={timelineLeft + 6 * perMonth} y={32} textAnchor="middle" fill={C.navy} fontSize={11} fontWeight="bold">
          YEAR 1 — FOUNDATION
        </text>
        <text x={timelineLeft + 18 * perMonth} y={32} textAnchor="middle" fill={C.navy} fontSize={11} fontWeight="bold">
          YEAR 2 — CORE PROOF
        </text>
        <text x={timelineLeft + 30 * perMonth} y={32} textAnchor="middle" fill={C.navy} fontSize={11} fontWeight="bold">
          YEAR 3 — MECHANISM MAP
        </text>
        {/* Swimlanes */}
        {swimlanes.map((s, i) => {
          const y = 42 + s.row * (laneH + laneGap);
          return (
            <g key={i}>
              {/* Lane label */}
              <foreignObject x={4} y={y - 2} width={timelineLeft - 12} height={laneH + 4}>
                <div style={{ fontSize: 9.5, color: C.gray700, lineHeight: 1.15, padding: "2px 0", whiteSpace: "pre-line" }}>
                  {s.label}
                </div>
              </foreignObject>
              {/* Lane background */}
              <rect x={timelineLeft} y={y} width={timelineWidth} height={laneH} fill={C.pale} />
              {/* Bars */}
              {s.bars.map((b, bi) => (
                <rect key={bi}
                      x={timelineLeft + b.s * perMonth} y={y + 2}
                      width={(b.e - b.s) * perMonth} height={laneH - 4}
                      fill={b.c} rx={2} />
              ))}
            </g>
          );
        })}
        {/* Milestone diamonds */}
        {milestones.map((m, mi) => {
          const cx = timelineLeft + m.m * perMonth;
          const cy = 42 + swimlanes.length * (laneH + laneGap) + 10;
          return (
            <g key={mi}>
              <polygon points={`${cx},${cy - 10} ${cx + 10},${cy} ${cx},${cy + 10} ${cx - 10},${cy}`}
                       fill={C.red} />
              <text x={cx} y={cy + 30} textAnchor="middle" fill={C.red} fontSize={10} fontWeight="bold">
                {m.label}
              </text>
              <text x={cx} y={cy + 44} textAnchor="middle" fill={C.gray700} fontSize={9} fontStyle="italic">
                {m.sub}
              </text>
            </g>
          );
        })}
      </svg>

      {/* Year summary cards */}
      <div className="absolute flex" style={{ top: 470, left: 30, right: 30, gap: 14, height: 145 }}>
        {years.map((y, i) => (
          <div key={i} className="flex-1 rounded-md flex flex-col"
               style={{ background: C.pale, border: `1px solid ${y.color}`, overflow: "hidden" }}>
            <div className="px-3 py-1.5 font-bold" style={{ background: y.color, color: C.white, fontSize: 11, letterSpacing: 1 }}>
              {y.tag}
            </div>
            <div className="flex-1 px-3 py-2">
              {y.items.map((it, ii) => (
                <div key={ii} className="mb-1" style={{ color: C.gray900, fontSize: 10, lineHeight: 1.25 }}>
                  •  {it}
                </div>
              ))}
            </div>
            <div className="text-center px-3 py-1.5 font-bold"
                 style={{ background: C.lightBlue, color: C.navy, fontSize: 10.5, fontFamily: "Consolas, monospace" }}>
              {y.metric}
            </div>
          </div>
        ))}
      </div>

      {/* Thesis claim banner */}
      <div className="absolute" style={{ bottom: 22, left: 40, right: 40, height: 40, background: C.navy, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div className="italic font-bold text-center px-4" style={{ color: C.white, fontSize: 12.5 }}>
          “Br-rich surface is neither inherently good nor bad — its effect on phase segregation is decided by the coupled latent state it creates.”
        </div>
      </div>
    </Frame>
  );
};

// ============================================================
// App with navigation
// ============================================================
const App = () => {
  const slides = [S5, S6, S7, S8, S9, S10];
  const titles = ["S5 · Coupled-state problem", "S6 · Central hypothesis", "S7 · SL-PCI method", "S8 · Forward models", "S9 · Identifiability", "S10 · Roadmap"];
  const [idx, setIdx] = useState(0);
  const Current = slides[idx];

  return (
    <div className="min-h-screen p-6" style={{ background: "#E5E7EB", fontFamily: "system-ui, sans-serif" }}>
      <div className="mx-auto" style={{ maxWidth: 1280 }}>
        {/* Nav bar */}
        <div className="flex items-center justify-between mb-4 px-2">
          <button onClick={() => setIdx(Math.max(0, idx - 1))}
                  disabled={idx === 0}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded font-bold"
                  style={{ background: C.navy, color: C.white, opacity: idx === 0 ? 0.3 : 1 }}>
            <ChevronLeft size={16} /> Prev
          </button>
          <div className="flex items-center gap-2">
            <div className="font-bold" style={{ color: C.navy, fontSize: 14 }}>
              {titles[idx]}
            </div>
            <div className="flex gap-1.5 ml-3">
              {slides.map((_, i) => (
                <button key={i} onClick={() => setIdx(i)}
                        className="rounded-full"
                        style={{ width: 9, height: 9,
                                 background: i === idx ? C.navy : C.gray300,
                                 border: "none", cursor: "pointer" }} />
              ))}
            </div>
          </div>
          <button onClick={() => setIdx(Math.min(slides.length - 1, idx + 1))}
                  disabled={idx === slides.length - 1}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded font-bold"
                  style={{ background: C.navy, color: C.white, opacity: idx === slides.length - 1 ? 0.3 : 1 }}>
            Next <ChevronRight size={16} />
          </button>
        </div>

        {/* Slide */}
        <div className="flex justify-center">
          <Current />
        </div>

        {/* Iteration hint */}
        <div className="text-center mt-4" style={{ color: C.gray500, fontSize: 12 }}>
          Tip: ask Claude in this Artifact — “make S7 more visual”, “redesign S9 as a stacked bar chart”, “tighten typography on S5”, etc.
        </div>
      </div>
    </div>
  );
};

export default App;
