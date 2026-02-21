Status: approved

# Packaging guidance — reusable containers & replacing cardboard

Purpose
-------
Guidance for replacing single-use cardboard and designing reusable packaging for food and non-food goods. Covers container shapes/sizes, materials, cleaning, racks vs nested returns, tracking, lifecycle considerations, and lessons learned from existing systems.

Why replace cardboard?
----------------------
- Cardboard is resource-intensive (wood, water), creates waste streams, and produces methane in landfills.
- Reusable systems reduce material extraction and labour for (a relatively uncertain process of) recycling and can lower lifecycle emissions when used enough times.

Scope
-----
- Prepared food, groceries, consumer goods, hygiene products, medicine, parts and small appliances.
- Multiple container families: meal trays, bulk bins, modular crates, padded inserts for fragile goods.

Design priorities
-----------------
- Safety & cleanliness (food-grade where needed)
- Reusability and reparability
- Stackability and transport efficiency
- Ease of automated handling and washing
- Traceability and lifecycle accounting
- **Fridge-slottable**: must fit standard European 60cm fridge shelves
- **Dishwasher-compatible**: must fit domestic and commercial 500x500mm racks

---

Sizing standard: Gastronorm (GN) compatibility
-----------------------------------------------
The Gastronorm system (EN 631, introduced 1964, EU standard since 1993) is the universal modular sizing system used in every commercial kitchen, food service trolley, blast chiller, combi oven, and bain-marie in Europe.

**Adopting GN-compatible dimensions means containers work with existing infrastructure on both commercial and domestic sides, eliminating the need for custom equipment.**

### GN size reference

| GN Size | Dimensions (L x W mm) | Relationship to GN 1/1 |
|---|---|---|
| GN 2/1 | 650 x 530 | Double full-size |
| GN 1/1 | 530 x 325 | Full-size (base unit) |
| GN 2/3 | 354 x 325 | Two-thirds |
| GN 1/2 | 325 x 265 | Half |
| GN 1/3 | 325 x 176 | Third |
| GN 1/4 | 265 x 163 | Quarter |
| GN 1/6 | 176 x 162 | Sixth |
| GN 1/9 | 108 x 176 | Ninth |

Standard depths: 10, 20, 40, 65, 100, 150, 200 mm. Most common general-purpose: **65 mm**.

### Recommended container sizes for consumer delivery

| Use case | GN size | Dimensions (mm) | Approx. capacity | Notes |
|---|---|---|---|---|
| Single meal portion | GN 1/4, 65 mm deep | 265 x 163 x 65 | ~1.8 L | Fits fridge, dishwasher, one hand |
| Family/sharing portion | GN 1/2, 65 mm deep | 325 x 265 x 65 | ~4.0 L | Fits fridge with room to spare |
| Small side/sauce/condiment | GN 1/6, 65 mm deep | 176 x 162 x 65 | ~1.0 L | Compact |
| Deep storage/soup/stew | GN 1/4, 100 mm deep | 265 x 163 x 100 | ~2.5 L | Still fits in fridge |
| Salad/large item | GN 1/3, 65 mm deep | 325 x 176 x 65 | ~2.5 L | Long format |
| Hygiene/household goods | GN 1/4 or 1/6 | Various | Various | Non-food; same modularity |

**Not viable for domestic use:** GN 1/1 (530 x 325 mm) — too wide for most fridges.

### Why GN is the right foundation

1. **Universal infrastructure compatibility.** Every commercial kitchen in Europe already accepts GN.
2. **Domestic fridge fit.** GN 1/4 and GN 1/2 fit comfortably in standard European 60cm fridges (usable shelf: 450-500 mm wide, 350-400 mm deep).
3. **Dishwasher fit.** GN 1/4 fits 4+ per commercial 500x500mm rack. GN 1/2 fits 2 per rack. Both fit domestic dishwashers.
4. **Supply chain exists.** PP and stainless GN containers are mass-produced globally at commodity prices.
5. **Stackability built in.** GN is designed for precise stacking with lids, in trolleys and storage.

---

Domestic infrastructure constraints
-------------------------------------

### European 60cm fridge (internal)

| Attribute | Range | Notes |
|---|---|---|
| Usable shelf width | 450-500 mm | After insulation walls |
| Usable shelf depth | 350-430 mm | Front-to-back; door shelf intrusion varies |
| Shelf spacing (vertical) | 100-200 mm | Adjustable; ~150 mm most common |
| Door shelf depth | 80-120 mm | Bottles and small containers |

**Design constraint:** Containers must fit within ~450-500 mm width and ~350-400 mm depth. No taller than 100-150 mm to allow stacking on a single shelf.

### European 60cm dishwasher (internal)

| Attribute | Domestic | Commercial (pass-through) |
|---|---|---|
| Rack usable width | 500-540 mm | 500 mm standard |
| Rack usable depth | 480-520 mm | 500 mm standard |
| Lower rack clearance | ~300 mm | — |
| Upper rack clearance | 180-220 mm | — |
| Cycle time | — | 80-95 sec (undercounter), 45-163 sec (tunnel) |
| Throughput | — | 90-280 trolleys/hour (MEIKO tunnel) |

---

Container families & use-cases
------------------------------
- **Meal containers:** GN 1/4 and GN 1/2 trays with silicone gasket lids. PP for pilot, 304 stainless for scale.
- **Mixed-goods crates:** Modular crates with configurable internal partitions and padded inserts for fragile items.
- **Bulk bins:** Stackable 20-50 L crates for grocery restocking and depot operations.
- **Padded inserts:** Removable foam or corrugated plastic inserts for fragile consumer goods.
- **Hygiene/medicine containers:** GN 1/6 or GN 1/4 with tamper-evident closures.

---

Materials & tradeoffs
---------------------

| Material | Wash compatible | Reuse cycles | Weight | Cost | Best for |
|---|---|---|---|---|---|
| Polypropylene (PP) | Yes (domestic + commercial) | 200-500 | Light | Low | Pilot phase, meal containers, high-volume |
| Stainless steel 304 | Yes (all chemicals + temps) | 1000+ | Heavy | High | Scale phase, hot food, industrial |
| Anodized aluminum | Yes (caution: acidic foods) | 500+ | Medium | Medium | Weight-sensitive applications |
| Polycarbonate | Caution (clouds/cracks) | 100-200 | Light | Medium | Display/visibility (not recommended for wash-heavy) |
| Tritan | Yes | 200+ | Light | Medium | Specialty (Vytal sushi container uses it) |
| LDPE | Limited (softens at high temp) | <100 | Light | Low | Not recommended for repeated industrial wash |
| Corrugated PP | Yes | 50-100 | Light | Low | Reusable inserts (better than cardboard) |

**Pilot recommendation: Polypropylene.** Every successful reusable system (RECUP, Vytal, CupClub) uses PP. It's lightweight, BPA-free, dishwasher-safe, microwave-safe, freezer-safe, cheap to mold, and survives 200-500 cycles.

**Scale recommendation: 304 stainless steel** for high-cycle applications (depot operations, bulk bins). PP for consumer-facing containers where weight and microwave compatibility matter.

---

Lessons from existing reusable packaging systems
-------------------------------------------------

### Systems studied

| System | Country | Material | Tracking | Deposit | Reuse cycles | Wash model | Status |
|---|---|---|---|---|---|---|---|
| Loop (TerraCycle) | Global | Glass, steel, aluminum, plastics | Centralized logistics | $1-$10 | 100+ | Centralized facility | Failed most markets; surviving in France |
| RECUP/REBOWL | Germany | PP | None (deposit token) | EUR 1/5 | 200-500 | Distributed (each restaurant) | Active; 13,000+ return points |
| Vytal | Germany | PP | App + QR code | No deposit (14-day return) | 200+ | Distributed | Active; 99.2% return rate |
| CupClub/CLUBZERO | UK | PP | RFID chip | No | 132 | Centralized | Active; closed environments (offices) |
| Returnity | US | Woven composite | — | — | 50+ | — | Active; B2B shipping |

### Critical lessons

1. **Price must be at parity or cheaper than disposable.** Loop failed everywhere it charged more. It survived in France only when Carrefour priced Loop products *below* disposable equivalents. Non-negotiable.

2. **Returns must be effortless.** Best: return anywhere in a large network (RECUP: 13,000+ points). Good: app-guided return with 14-day window (Vytal). Bad: schedule a courier pickup (Loop e-commerce). Return density per km2 directly predicts viability.

3. **Distributed washing beats centralized for food containers.** RECUP and Vytal push washing to the restaurant (which already has a commercial dishwasher). Loop and CupClub centralize washing, adding transport cost and complexity. Exception: centralized makes sense for high-volume closed loops (depots, campuses).

4. **Standardization prevents fragmentation.** Germany now has multiple incompatible systems (RECUP, Vytal, McDonald's, Burger King). Consumers don't know what goes where. GN-compatible sizing avoids this by building on an existing universal standard.

5. **Scale from day one.** Loop's biggest lesson: small pilots are "almost intrinsically set to fail." Carrefour's 340+ store rollout worked. Tesco's cautious UK pilot did not. Network effects matter.

6. **Fast-turnover products work best.** Beverages (beer, soda, water) had the highest success in Loop France — containers cycle back quickly. Slow-turnover products (cleaning supplies) mean containers sit in homes for weeks, reducing efficiency.

7. **Design for existing infrastructure.** Returnity's key insight: their shipping container fits standard pallets, works with automated sorting, uses existing courier networks. No system redesign needed. Same principle applies to GN containers in commercial kitchens.

---

Tracking & incentives
----------------------

| Method | Pros | Cons | Best for |
|---|---|---|---|
| Deposit (RECUP model) | Simple, no app needed, no data required | No lifecycle data, no return reminders | High-volume, low-value containers |
| App + QR code (Vytal model) | 99.2% return rate, lifecycle tracking, user reminders | Requires smartphone, scan friction | Medium-value containers, data-driven optimization |
| RFID (CupClub model) | Automatic tracking, no user action needed | ~$0.10+ per tag, reader infrastructure needed | High-value containers, closed-loop depots |

**Our system advantage:** Subscription delivery means containers are collected on the next delivery run. No consumer return action needed. This eliminates the biggest failure mode (return friction) entirely. QR/RFID tracking serves operational purposes (lifecycle accounting, loss detection) rather than consumer return compliance.

---

Cleaning & depot operations
----------------------------

### Commercial warewashing (recommended for container depots)

| Parameter | Specification |
|---|---|
| Wash temperature | 60-65 C |
| Rinse temperature | 80-85 C (DIN 10534 / NSF ANSI-3 compliant) |
| Cycle time (undercounter) | 80-95 seconds per rack |
| Cycle time (rack conveyor/tunnel) | 45-163 seconds per rack |
| Throughput (tunnel) | 90-280 trolleys/hour |
| Standard rack size | 500 x 500 mm |
| Detergent | Commercial alkaline warewash |
| Rinse aid | Commercial, spot-free drying |

### Key equipment manufacturers
- **MEIKO** (Germany) — market leader; tunnel washers, trolley washers, rack conveyors.
- **Winterhalter** (Germany) — premium commercial dishwashers; double-walled, water efficient.
- **Hobart** — global commercial warewashing.

### Full CIP cycle (for piping/tank cleaning, not containers)

| Step | Temperature | Duration | Chemical |
|---|---|---|---|
| Pre-rinse | 32-43 C | 3-5 min | Water only |
| Caustic wash | 60-80 C | 15-30 min | NaOH 0.5-2.0% |
| Intermediate rinse | Ambient-warm | 3-5 min | Water only |
| Acid wash | 60-70 C | 10-20 min | HNO3 0.5% |
| Final rinse/sanitize | 85-95 C | 3-5 min | Hot water or chemical sanitizer |

### Depot model
- **Centralized depot washing** for high-volume operations: automated tunnel washers, rack conveyors, GN-compatible racks.
- **Distributed wash-and-return** for local pickup hubs: containers designed for robust manual or undercounter commercial washing.

---

Replacing cardboard strategies
------------------------------
- Use modular GN-compatible crates with padded inserts reusable across SKUs; keep inserts as consumables that are cheap to replace but recyclable.
- Use collapsible crates and consolidated returns to reduce empty run volume (Returnity model: 10 folded units nest into 1).
- For single-item shipments, pack into modular envelope-like soft containers that fold and are sanitizable.
- Corrugated PP inserts replace cardboard inserts — better lifetime, washable.

---

Economic considerations
------------------------
- Calculate reuse breakeven: cost of reusable unit / cost of single-use cardboard package = required reuses.
- PP containers at commodity GN pricing break even in 5-15 uses vs. cardboard.
- Track loss/theft rates and include replacement capex in the model.
- Subscription delivery model drastically reduces loss rates (containers collected on next run, not left to consumer initiative).

---

Pilot defaults (recommended)
-----------------------------
- **Grocery/parts pilot:** Modular PP crates (20 L) with GN-compatible internal partitions; collapsible return crates for transport.
- **Meal pilot:** PP GN 1/4 trays (265 x 163 x 65 mm, ~1.8 L) and GN 1/2 trays (325 x 265 x 65 mm, ~4.0 L) with silicone gasket lids; depot racks for washing.
- **Hygiene/household pilot:** PP GN 1/6 containers (176 x 162 x 65 mm) with tamper-evident closures.
- **Wash equipment:** MEIKO or Winterhalter undercounter commercial dishwasher for pilot depot; tunnel washer at scale.
- **Tracking:** QR code on every container; app-based lifecycle tracking for operational data; no consumer return action needed (subscription pickup).

---

What needs physical prototyping (cannot be specified from research alone)
--------------------------------------------------------------------------
- Lid seal performance under stacking load (silicone gasket vs snap-fit vs combination)
- Actual cycle count to visible wear/degradation for PP at 65mm depth
- Ergonomics of GN 1/4 as a one-handed eating vessel (handle? grip texture? weight with food?)
- Stacking stability when mixed sizes are combined in delivery crates
- Washing throughput with food residue types (dairy, grease, starch) — drying time matters
- Container-to-fridge-shelf interaction with common European fridge models (IKEA, Bosch, Electrolux)
- Tamper-evident closure design for medicine/hygiene containers

---

Next steps
----------
- Produce procurement-ready spec sheets for GN-compatible container families (sizes, material, vendor guidance).
- Draft operator wash procedures and loss/theft economic model.
- Source PP GN 1/4 and GN 1/2 samples for physical testing.
- Contact MEIKO/Winterhalter for depot wash equipment specs and pilot pricing.
- Identify materials engineer and food-safety consultant for MVP validation.

---

Research sources
-----------------
Full research document with detailed system analyses, specifications, and sources: see `reusable-packaging-systems-research.md` in project root.

Key references: Loop/TerraCycle (failed most markets, survived France at price parity), RECUP/REBOWL (13,000+ points, Germany), Vytal (99.2% return rate, QR tracking), CupClub/CLUBZERO (RFID, office environments), Returnity (B2B shipping, collapsible), Gastronorm EN 631 standard, MEIKO/Winterhalter commercial warewashing specs.
