# Research Proposal

**Lin Weiye**  
**2026/05/18**

## Research Theme

**State-Locked Decoupling of Photoinduced Halide Phase Segregation in Wide-Bandgap Mixed-Halide Perovskites**

## Abstract

Wide-bandgap mixed-halide perovskites are key top absorbers for perovskite/silicon tandem solar cells, but their voltage and spectral stability are limited by photoinduced I/Br phase segregation. This project proposes a **state-locked decoupling framework**: drive the material into defined segregation states, suppress further evolution by low-temperature locking, and read each locked state using optical, chemical, structural, electrostatic, and defect-sensitive probes. The locked-state fingerprints will constrain a Cahn-Hilliard-type composition-evolution model and identify which physical term dominates onset, growth, saturation, and recovery. The expected result is a falsifiable mechanism map rather than a PL-only description of phase segregation.

## 1. Background and Research Question

Wide-bandgap mixed-halide perovskites with bandgaps of about 1.65-1.80 eV are essential for high-efficiency tandem photovoltaics<sup>8</sup>. Their adjustable I/Br ratio enables bandgap control, but the same compositional flexibility also creates a serious instability: under illumination, initially mixed halides can segregate into iodide-rich and bromide-rich regions<sup>1</sup>. The iodide-rich regions have lower bandgap, collect carriers by funneling, red-shift photoluminescence (PL), and reduce quasi-Fermi-level splitting and open-circuit voltage<sup>1,5</sup>.

Previous studies have clarified important parts of this process. Hoke et al. established reversible red-shifted emission in mixed-halide perovskites<sup>1</sup>; Brivio et al. described the thermodynamic miscibility gap<sup>2</sup>; Tang<sup>3</sup>, Zhao<sup>4</sup>, Peng<sup>6</sup>, and Fan<sup>7</sup> showed that local microstructure, strain, and cryogenic imaging reveal spatially heterogeneous segregation pathways. A unified theoretical account that combines thermodynamics, electrostatics, and carrier funneling has also been proposed<sup>5</sup>. However, the field still lacks an operational method to decide whether different measurements are observing the same material state. A PL time point is not enough, because PL can be dominated by a small low-bandgap domain and may not represent average composition or complete recovery.

The central research question is:

> Can photoinduced halide phase segregation be divided into reproducible operational states, and can locked-state readout identify which physical term controls each transition?

This question is motivated by four unresolved contradictions: where segregation starts, whether non-optical precursors exist before PL onset, what PL actually reports, and whether optical recovery means material recovery. The proposed project therefore shifts the unit of analysis from a single PL trace to a **locked material state**.

## 2. Objective, Hypothesis, and State Definition

The objective is to establish a state-resolved experimental and physical framework for photoinduced phase segregation in wide-bandgap mixed-halide perovskites. The framework must be useful even if the initial state boundaries are revised by data.

The central hypothesis is:

> Photoinduced halide phase segregation can be segmented into reproducible operational states <i>S</i><sub>0</sub> to <i>S</i><sub>5</sub>. The conserved halide composition field <i>c</i>(<b>r</b>, <i>t</i>) evolves according to a Cahn-Hilliard-type framework, while mobility, electrostatic, elastic, interface, and memory channels determine which term dominates each state transition.

The proposed operational states are:

| State | Operational meaning | Main locking cue |
|---|---|---|
| <i>S</i><sub>0</sub> | dark mixed baseline | PL, potential, structural, and chemical signals remain within baseline noise |
| <i>S</i><sub>1</sub> | photoactivated precursor | CPD/SPV or weak optical precursor changes before clear composition contrast |
| <i>S</i><sub>2</sub> | segregation onset | iodide-rich PL, XRD/GIWAXS splitting, EELS/SIMS contrast, or another endpoint indicator first exceeds threshold |
| <i>S</i><sub>3</sub> | growth | red fraction, spatial contrast, or domain size increases monotonically |
| <i>S</i><sub>4</sub> | saturated segregated state | PL and at least one non-PL endpoint channel approach a plateau |
| <i>S</i><sub>5</sub> | recovery / memory | optical recovery is compared with residual chemical, structural, or defect memory |

The measured fingerprint of state <i>S</i><sub>k</sub> is:

<div class="eq" style="position: relative;"><i>Z</i>(<i>S</i><sub>k</sub>) = [<i>c</i><sub>k</sub>(<b>r</b>), <i>v</i><sub>k</sub>(<b>r</b>), φ<sub>k</sub>(<b>r</b>), ε<sub>k</sub>(<b>r</b>), <i>q</i><sub>k</sub>(<b>r</b>)]<span style="position: absolute; right: 2pt; font-style: normal;">(1)</span></div>

Here <i>c</i> is the local iodide fraction, <i>v</i> is a vacancy or ionic-mobility proxy, φ is a surface/local potential proxy, ε is strain or microstrain, and <i>q</i> represents irreversible chemistry or memory. This fingerprint is not claimed to be a complete microscopic state. It is an experimentally accessible constraint on the model.

## 3. Physical Framework

The primary order parameter is the conserved halide composition:

<div class="eq" style="position: relative;"><i>c</i>(<b>r</b>, <i>t</i>) = <i>x</i><sub>I</sub>(<b>r</b>, <i>t</i>), &nbsp;&nbsp; d/dt ∫<sub>Ω</sub> <i>c</i>(<b>r</b>, <i>t</i>) dV ≈ 0<span style="position: absolute; right: 2pt; font-style: normal;">(2)</span></div>

For a mixed I/Br lattice, a regular-solution-type free energy gives the basic demixing tendency:

<div class="eq" style="position: relative;"><i>f</i><sub>mix</sub>(<i>c</i>) = (<i>k</i><sub>B</sub><i>T</i>/Ω<sub>0</sub>)[<i>c</i> ln <i>c</i> + (1 - <i>c</i>) ln(1 - <i>c</i>) + χ<i>c</i>(1 - <i>c</i>)]<span style="position: absolute; right: 2pt; font-style: normal;">(3)</span></div>

The working free-energy functional is:

<div class="eq" style="position: relative;"><i>G</i>[<i>c</i>] = ∫<sub>Ω</sub> [<i>f</i><sub>mix</sub>(<i>c</i>) + (κ/2)|∇<i>c</i>|<sup>2</sup> + <i>f</i><sub>light</sub> + <i>f</i><sub>elastic</sub> + <i>f</i><sub>elec</sub>] dV + <i>G</i><sub>interface</sub><span style="position: absolute; right: 2pt; font-style: normal;">(4)</span></div>

The corresponding Cahn-Hilliard-type evolution equation<sup>9</sup> is:

<div class="eq" style="position: relative;">∂<i>c</i>/∂<i>t</i> = ∇ · [<i>M</i>(<i>c</i>, <i>v</i>, <i>T</i>)∇μ<sub>c</sub>] + <i>R</i><sub>q</sub>, &nbsp;&nbsp; μ<sub>c</sub> = δ<i>G</i>/δ<i>c</i><span style="position: absolute; right: 2pt; font-style: normal;">(5)</span></div>

In this formulation, <i>f</i><sub>mix</sub> and the gradient term describe thermodynamic demixing and domain formation; <i>M</i>(<i>c</i>, <i>v</i>, <i>T</i>) describes vacancy-assisted ionic mobility; <i>f</i><sub>elec</sub> and <i>f</i><sub>elastic</sub> capture potential and strain contributions; <i>G</i><sub>interface</sub> enters through boundaries and grain/interface conditions; <i>R</i><sub>q</sub> is a controlled extension for irreversible chemistry or material memory. The model will be used diagnostically: for each transition, the dominant term is the one that best explains onset position, growth rate, saturation, or residual memory with stated uncertainty.

## 4. Methodology

The experimental strategy has four steps. First, samples will be driven into target states by controlled light dose, wavelength, intensity, temperature, and atmosphere. Operando PL hyperspectral imaging will track peak position, red fraction, linewidth, and spatial contrast. KPFM or SPV will be used where possible to detect potential-related precursors.

Second, once a target <i>S</i><sub>k</sub> is reached, further evolution will be suppressed by low-temperature state preservation. Practical routes include cryostage quenching to 170-100 K, liquid-nitrogen cold-stage transfer near 77 K, and plunge-freeze cryo preparation for TEM-compatible samples when collaboration is available. Locking will be validated by delay series, dark-transfer controls, low-temperature PL, beam-dose tests, and sister-sample replication. A successful lock means that drift during transfer/readout is smaller than state-to-state contrast or is explicitly included as uncertainty.

Third, the locked state will be read by scale-tagged endpoint characterization:

| Target | Main readout | Model role |
|---|---|---|
| <i>c</i> | EELS, TOF-SIMS, XPS, GIWAXS/XRD | composition, mixing, gradient terms |
| <i>v</i> | admittance, DLTS, TRPL, hysteresis proxy | mobility modifier <i>M</i>(<i>c</i>, <i>v</i>, <i>T</i>) |
| φ | KPFM, SPV | electrostatic or surface-potential contribution |
| ε | GIWAXS, XRD, Raman, 4D-STEM | elastic contribution |
| <i>q</i> | XPS, SIMS, PbI2-related XRD, recovery-delay tests | irreversible chemistry or memory |

Fourth, the measured fields will be mapped to model terms. The core publishable path is PL/KPFM or SPV plus XPS/SIMS and GIWAXS/Raman. Cryo-CL, cryo-EELS, 4D-STEM, and cryo-STEM-EDS are validation paths, not requirements for project success.

## 5. Three-Year Research Plan

| Period | Main work | Acceptance gate |
|---|---|---|
| Year 1 | Fabricate baseline wide-bandgap mixed-halide films and device-like stacks; build fiducial ROI samples; establish operando PL and KPFM/SPV protocols; define preliminary <i>S</i><sub>0</sub>-<i>S</i><sub>5</sub> triggers; develop 170-100 K and 77 K locking protocols. | Locking fidelity is quantified, and transfer/readout drift is smaller than state contrast or reported as uncertainty. |
| Year 2 | Read locked states by PL/KPFM or SPV, XPS/SIMS, and GIWAXS/Raman; correlate same-ROI or fiducial-matched optical, chemical, potential, and strain signatures; validate selected states by cryogenic microscopy if available. | At least two independent endpoint channels correlate with state labels; Paper 1 on state-locked decoupling is submitted. |
| Year 3 | Analyze <i>S</i><sub>4</sub> → <i>S</i><sub>5</sub> recovery and memory; compare measured <i>Z</i>(<i>S</i><sub>k</sub>) changes with the model terms; construct a mechanism regime diagram for onset, growth, saturation, and recovery. | The model explains the data better than a PL-only description, or the state boundaries are revised; Paper 2 and thesis chapters are completed. |

## 6. Expected Outcomes, Originality, and Risk Management

The expected outcomes are: (1) reproducible operational definitions for <i>S</i><sub>0</sub>-<i>S</i><sub>5</sub>; (2) a transferable write-lock-read-map protocol; (3) a state-resolved mechanism map assigning dominant physical terms to transitions; and (4) two publication-ready datasets, one focused on state-locked decoupling and one on the mechanism regime diagram.

The originality lies in three aspects. First, the project treats phase segregation as a state-resolved physical process rather than a PL red-shift alone. Second, locking is triggered by physical state criteria rather than arbitrary illumination time. Third, the model explicitly separates conserved composition evolution from proxy variables and irreversible memory, avoiding overclaiming complete microscopic inversion.

The main risks and fallback strategies are:

| Risk | Fallback |
|---|---|
| State locking is imperfect | quantify drift and include it as uncertainty |
| Same-ROI registration fails | use fiducial matched regions and ROI-level statistics |
| KPFM/SPV is surface-sensitive | report φ only as a surface/local potential proxy |
| SIMS/EELS damages the sample | use dose series and cross-check with XPS/GIWAXS |
| Cryogenic microscopy collaboration is unavailable | retain PL/KPFM(SPV)/XPS/SIMS/GIWAXS/Raman as the core path |
| <i>S</i><sub>0</sub>-<i>S</i><sub>5</sub> is incomplete | revise state boundaries based on data rather than forcing the initial model |

Overall, the project is designed to remain falsifiable: if a channel fails, the framework is reduced to validated variables; if the six-state model is wrong, the state definition is revised; if locking is imperfect, the uncertainty becomes part of the result.

## References

1. Hoke, E. T.; Slotcavage, D. J.; Dohner, E. R.; Bowring, A. R.; Karunadasa, H. I.; McGehee, M. D. Reversible Photo-Induced Trap Formation in Mixed-Halide Hybrid Perovskites for Photovoltaics. *Chemical Science* **2015**, 6, 613-617.
2. Brivio, F.; Caetano, C.; Walsh, A. Thermodynamic Origin of Photoinstability in the CH3NH3Pb(I1-xBrx)3 Hybrid Halide Perovskite Alloy. *Journal of Physical Chemistry Letters* **2016**.
3. Tang, X.; van den Berg, M. F. A.; Gu, E.; Horneber, A.; Matt, G. J.; Osvet, A.; Meixner, A. J.; Zhang, D.; Brabec, C. J. Local Observation of Phase Segregation in Mixed-Halide Perovskite. *Nano Letters* **2018**.
4. Zhao, Y.; Miao, P.; Elia, J.; Hu, H.; Wang, X.; Heumueller, T.; et al. Strain-Activated Light-Induced Halide Segregation in Mixed-Halide Perovskite Solids. *Nature Communications* **2020**, 11, 6328.
5. Chen, Z.; Brocks, G.; Tao, S.; Bobbert, P. A. Unified Theory for Light-Induced Halide Segregation in Mixed Halide Perovskites. *Nature Communications* **2021**, 12, 2687.
6. Peng, S.; Wang, Y.; Braun, M.; Dionne, J.; Cai, W.; McIntyre, P. C. Kinetics and Mechanism of Light-Induced Phase Separation in a Mixed-Halide Perovskite. *Matter* **2023**, 6, 2052-2065.
7. Fan, Q.; Cui, Y.; Li, Y.; Karunadasa, H. I.; Lindenberg, A. M.; et al. Phase Segregation Dynamics in Mixed-Halide Perovskites Revealed by Plunge-Freeze Cryo-Electron Microscopy. *Cell Reports Physical Science* **2025**, 6, 102653.
8. Nie, T.; Fang, Z.; Ren, X.; Duan, Y.; Liu, S. Recent Advances in Wide-Bandgap Organic-Inorganic Halide Perovskite Solar Cells and Tandem Application. *Nano-Micro Letters* **2023**, 15, 70.
9. Cahn, J. W.; Hilliard, J. E. Free Energy of a Nonuniform System. I. Interfacial Free Energy. *Journal of Chemical Physics* **1958**, 28, 258-267.
