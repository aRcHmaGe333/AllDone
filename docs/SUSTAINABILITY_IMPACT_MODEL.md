# Sustainability impact model

**Status: modeled ranges, not measured pilot results — 2026-09-30**

AllDone has several potential sustainability effects because it changes the whole household food loop rather than adding one more delivery layer. The purpose of this model is to make those effects explicit, measurable and usable in funding or partnership discussions without presenting hypotheses as completed results.

The first pilot is currently modeled at 60 households, 4 container turns per household per week: **240 turns/week, 12,480 turns/year**.

## External baselines

Current EU reference points:

- The European Commission says an efficient household dishwasher uses about **9 L** to wash up to 15 place settings, while comparable hand washing uses around **20 L**. The Commission also reports an EU average of about **0.8 kWh per dishwasher cycle** in 2020.
- Eurostat/European Commission data for 2023 put EU household food waste at about **69 kg/person/year**, more than half of total EU food waste.
- The 2025 amendment of the EU Waste Framework Directive introduced a binding **30% per-capita reduction target by 2030** for food waste jointly across retail and consumption.
- Eurostat reports **177.8 kg of packaging waste per EU inhabitant in 2023**, including **35.3 kg of plastic packaging waste**.

Sources:
- https://energy-efficient-products.ec.europa.eu/product-list/dishwashers_en
- https://food.ec.europa.eu/food-safety/food-waste_en
- https://food.ec.europa.eu/food-safety/food-waste/eu-food-waste-relevant-legislation/food-waste-reduction-targets_en
- https://ec.europa.eu/eurostat/web/products-eurostat-news/w/ddn-20251022-1

## 1. Reusable packaging

The pilot should weigh the disposable packaging replaced by every AllDone container type rather than rely on a generic packaging statistic.

Until that measurement exists, an illustrative displacement range of **10–40 g of single-use packaging per container turn** gives:

| Assumption | Pilot annual single-use packaging displaced |
|---|---:|
| 10 g/turn | 125 kg/year |
| 25 g/turn | 312 kg/year |
| 40 g/turn | 499 kg/year |

These are scenario values, not claimed savings. The final calculation must subtract replacement lids/gaskets, breakage and the lifecycle burden of the reusable fleet.

For context, the current Storage-M design target is roughly 700–1000 g of glass with a 300–500+ cycle target. Spread across those cycles, that is about **1.4–3.3 g of glass mass per turn** before closure components. This is a material-throughput comparison, not an LCA result.

## 2. Low-water container cleaning

The inverted water-sheet washing concept currently targets two short water-only passes before sanitation.

A working design envelope of **60–120 mL total gross-cleaning water per container** would use:

| Gross-cleaning water | 60-household pilot |
|---|---:|
| 60 mL/turn | 749 L/year |
| 90 mL/turn | 1,123 L/year |
| 120 mL/turn | 1,498 L/year |

This does **not** include the final validated sanitation/rinse stage. It should not be represented as total wash-water consumption until the complete hygienic cycle is built and measured.

The development objective is to minimize total water, detergent and heat while meeting a defined refill-safe cleanliness standard.

## 3. Household dishwashing avoided

If an AllDone container is pleasant to eat from, it can replace both packaging and an additional bowl/plate. That can prevent dishes from being dirtied at all.

The exact effect depends on behavior, so the first pilot should record actual household dishwasher cycles and hand-washing frequency before and during use.

An illustrative scenario in which AllDone avoids **0.5–2 household dishwasher cycles per household per week** would correspond across 60 households to:

- roughly **14–56 m³/year of household dishwasher water not used**, using the Commission's 9 L/cycle reference;
- roughly **1.25–5.0 MWh/year of household dishwasher electricity not used**, using the Commission's 0.8 kWh/cycle reference.

Those are gross avoided household loads. Net impact must subtract AllDone's complete centralized wash, sanitation and drying requirements.

Hand washing can make the potential water difference larger, but should be measured rather than assumed.

## 4. Food waste reduction

AllDone attacks food waste in several ways:

- replenishment can follow actual consumption rather than fixed retail pack sizes;
- less overbuying and duplicate stock;
- rounded containers make more of the contents physically accessible to the user;
- first-stage water-only residue recovery can keep remaining organics separate from detergent;
- ready-meal production can eventually match portions to actual household consumption.

EU households currently generate about **69 kg/person/year** of food waste. As context only, a system-wide reduction of:

| Reduction | Equivalent against EU household baseline |
|---|---:|
| 5% | 3.45 kg/person/year |
| 15% | 10.35 kg/person/year |
| 30% | 20.7 kg/person/year |

The first pilot will not cover all household food, so it must report **waste reduction for covered products**, not apply these percentages to the whole household and call them achieved.

The project objective is to measure edible food supplied, consumed, returned as residue, recovered into the food-to-soil stream and lost elsewhere.

## 5. Food-to-soil recovery

The container geometry and washer are designed so that most remaining food can be removed before detergent enters the process:

**empty/invert → A→B water-only sheet → collect → C→D water-only sheet → collect → sanitation**

The ambition is **100% of recoverable food residue into a useful organic stream rather than residual waste**, subject to hygiene and local treatment requirements.

The pilot metric should be a mass balance:

**food packed → food consumed → organic residue recovered → unrecovered/lost**

No percentage should be claimed until that mass balance has been run.

## 6. Shopping transport

AllDone can replace household shopping trips with one dense recurring route and simultaneous collection of empties.

The impact should be calculated from real pilot data:

**avoided household vehicle-km by mode − allocated AllDone route vehicle-km**

The model should distinguish walking/transit trips from car trips. A shopping trip avoided on foot has almost no direct transport-emissions benefit; replacing multiple car trips with one dense route can have a substantial one.

No fixed CO2 number is claimed before household travel mode and route data exist.

## 7. Ready meals and cooking

This is a later-stage effect, not a first-pilot claim.

If AllDone supplies personalized ready meals, the household flow can become:

**receive → refrigerate → heat if needed → eat → return**

That can reduce household cooking energy, cooking-water use, food preparation waste and washing of pots/pans. Centralized production can also use wholesale ingredients, batch heat, automation and controlled portioning.

The net sustainability calculation must include centralized preparation energy, cold-chain energy and reheating. Until those are measured, the correct formula is:

**household cooking + washing avoided − centralized preparation + cold-chain + reheating**

## 8. Detergent and cleaning chemistry

The first two proposed container-cleaning passes are water only. If they remove essentially all gross food residue, detergent/sanitizer can be reserved for the minimum hygienic stage rather than used as the main soil-removal mechanism.

Measure:

- detergent grams/container;
- sanitizer concentration and volume;
- rinse-water volume;
- chemistry recovered/reused;
- wastewater load.

The target is a large reduction, but no percentage is claimed before the wash prototype is validated.

## 9. Household objects and embodied material

If AllDone containers replace meaningful use of bowls, plates, food-storage containers and eventually some dishwasher demand, there may be a second-order reduction in household goods and appliance manufacturing.

This is potentially large over decades but should remain outside near-term impact totals until adoption data show that people actually buy fewer replacement dishes, storage containers or dishwashers.

## Reporting rule

Every sustainability number published by AllDone should carry one of four labels:

- **measured** — observed in the live pilot;
- **calculated** — arithmetic from measured AllDone inputs;
- **scenario** — explicit assumed range;
- **target** — intended engineering or operational outcome.

That lets AllDone project the full sustainability opportunity aggressively without confusing potential impact with achieved impact.
