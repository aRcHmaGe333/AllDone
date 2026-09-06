# AllDone

**AllDone removes grocery shopping by replacing it with continuous food supply.**

That change is worth much more than one less trip to the supermarket. Grocery shopping drags an entire chain behind it: planning, travel, carrying, guessed quantities, fixed pack sizes, stale food, spoiled food, plastic, cardboard, household garbage, fuel, exhaust and a retail system built around repeating the same transaction forever.

A continuous food supply cuts into that chain at the source.

## Grocery shopping is only the first thing removed

The grocery trip itself disappears. So does the time spent getting to the store, walking aisles, queueing, carrying food home and doing the same thing again a few days later.

The larger savings sit around that trip:

- **Repeated planning disappears.** Checking the fridge, checking cupboards, remembering shortages, making lists, estimating quantities and fixing forgotten items with emergency trips move out of human attention and into the supply system.
- **Food stops being bought in guessed quantities.** Supply can follow actual consumption instead of fixed retail packs and a household guess about the next week.
- **Overbuying falls.** Less food enters the home because the available pack was too large, the timing was wrong or somebody bought extra "just in case."
- **Stale and spoiled food fall with it.** Food can arrive closer to the time it will actually be used instead of sitting around until the next shopping cycle.
- **Food waste is prevented before disposal enters the picture.** The useful result is less food becoming waste in the first place.
- **Food remains leave the landfill stream.** The design target is complete recovery of unavoidable food remains into a dedicated compost stream instead of mixed household garbage.
- **Disposable grocery packaging leaves the normal loop.** Reusable containers replace plastic tubs, films, trays, bags, cardboard boxes and other one-use material attached to ordinary food retail.
- **The upstream packaging burden falls with it.** Less disposable plastic and cardboard need to be manufactured, printed, transported, stocked, collected and processed simply to move food through a household once.
- **Household garbage volume drops sharply.** Food and its packaging are two persistent waste streams; one is reduced at source and the other is designed for reuse.
- **Waste handling shrinks with that volume.** Fewer bags, bins, collections, transfers and disposal operations are needed for material the food system no longer creates.
- **Repeated personal transport for food disappears.** Fuel, fares, parking, vehicle wear and tailpipe exhaust tied to grocery trips stop being necessary parts of obtaining food.
- **Food logistics become a planned recurring flow.** Supply and return can be consolidated around actual demand instead of stacking retail replenishment, household shopping trips and scattered one-off deliveries on top of one another.
- **The remaining logistics become much easier to run without fossil fuel.** One recurring route is a smaller transport problem to electrify than thousands of independent collection trips.
- **Physical hauling disappears from the household workload.** Carrying bags through parking lots, public transport, rain, stairs, corridors and elevators adds no value to the food itself.
- **Emergency shopping largely disappears.** Consumption tracking can catch ordinary shortages before one missing item creates another inefficient trip.
- **Retail pack sizes stop dictating household quantities.** Food can be portioned around actual use instead of shelf conventions, merchandising and fixed consumer packs.
- **Demand becomes visible earlier.** Consumption history gives operators and suppliers a better picture of recurring need before another retail transaction happens.
- **Upstream waste falls too.** Procurement, preparation and eventually production can follow recurring real demand more closely instead of carrying excess inventory because nobody knew what would actually be consumed.
- **Every cycle improves the next one.** Timing and quantity estimates get better with use instead of resetting to another shopping guess.
- **Dense housing becomes easier to supply.** One food-supply and return loop can replace overlapping household trips, courier stops, packaging flows and waste movements around the same buildings.
- **The savings spread across the whole system.** Households recover time and avoid waste; suppliers gain clearer demand; buildings handle less garbage; cities absorb fewer redundant trips; waste systems move less material; the operator earns from costs that genuinely disappeared.

The environmental gain is built into the removals: less food waste, less organic landfill, less disposable packaging and less unnecessary transport.

The economic gain comes from the same place. Money currently spent on wasted food, packaging, grocery-trip fuel, duplicated handling, waste collection, emergency purchases and fragmented logistics stops being spent when the corresponding work and material stop being necessary.

The human gain is just as direct. Time, attention and physical effort now spent running a private miniature grocery operation are returned because the food supply takes responsibility for staying supplied.

None of this depends on turning everybody into unusually disciplined consumers. The system itself stops generating a large part of the waste.

## One loop replaces several bad ones

AllDone runs food supply as a recurring closed loop:

**measure use -> determine the next quantity -> portion/pack -> deliver -> consume -> collect -> compost food remains -> wash containers -> refill -> deliver again**

Reusable glass is the current planned default for the consumer-facing food container set where it is operationally suitable. The container remains an asset of the system after the food is consumed, so every successful return prevents another disposable package and supplies the next cycle with a container that already exists.

Continuous supply also changes household inventory. The useful target is not maximum food sitting in the home; it is the minimum amount needed to keep the home reliably supplied. That tighter fit between supply and consumption attacks staleness, spoilage, overbuying and dead food sitting in storage.

The return path closes both material streams. Containers go back for washing and reuse. Unavoidable food remains go into compost. Neither has to become anonymous household garbage.

## The economics have to include the system being replaced

Comparing AllDone with one courier bringing one grocery order misses almost the entire point. A courier order leaves the grocery system intact and adds another delivery layer.

The useful comparison is the full grocery loop against the full AllDone loop.

The grocery loop spends money and resources on retail packaging, shelf handling, household planning, grocery trips, carrying, fixed pack sizes, overbuying, spoilage, emergency purchases, fragmented delivery, organic waste, packaging waste and repeated disposal.

AllDone adds its own real costs: reusable containers, washing, inspection, refill, consolidated delivery, return logistics, compost handling, breakage reserve and the software that coordinates the loop.

Those costs only make sense against the larger collection of costs being removed. The closed loop has to cost less, waste less and require less human work than the grocery-shopping system it replaces.

That gives the project several independent sources of value instead of one narrow retail margin. Households save time, attention, transport expense and wasted food. Suppliers gain more predictable recurring demand. Buildings and waste systems handle less material. Cities absorb fewer redundant trips. The operator can capture a share of savings created across the loop while leaving the other participants better off.

## Working software already exists

The project already has an early backend for household consumption profiles, quantity adjustment, schedule generation, reusable-container circulation, route/wash/billing workflows and local persistence.

That software handles the coordination the physical system depends on: normal household consumption, the next quantity to pack, containers currently out, containers returned, wash state, packing requirements and the load moving in both directions on each route.

The project is therefore past the point where the value exists only on paper. The remaining uncertainty is physical and measurable: route density, container performance, washing, labor, food-waste reduction, packaging reduction and full-loop economics.

Node.js 18+:

```bash
npm install
npm start
```

Sample-data demo:

```bash
npm run demo:api
```

The prototype API starts in [src/backend/index.js](src/backend/index.js).

## The first pilot converts the case into numbers

A small dense pilot can measure nearly every important claim at once: prediction accuracy, food waste removed, disposable packaging avoided, food remains recovered for compost, container return rate, container lifespan, washing cost, labor per household, route density, transport removed and full-loop cost against the grocery system it replaces.

Those measurements are more useful than a large speculative rollout. They show which gains are already real, which improve with density and which parts need redesign before scale deserves money.

The next work is correspondingly narrow: lock the first food/container set, finish the wash-and-return and compost operating model, make the pilot economics defensible, complete only the software needed to run the loop, then measure the result hard enough that the next decision rests on evidence.

Deeper project material:

- [Categorized documentation](docs/README.md) — the full project split into manageable routes.
- [Pilot model and assumptions](docs/PILOT_MODEL_AND_ASSUMPTIONS.md) — the first live loop and the assumptions it tests.
- [Pilot unit economics](docs/PILOT_UNIT_ECONOMICS.md) — the replacement loop against the costs it removes.
- [Total system value model](docs/TOTAL_SYSTEM_VALUE_MODEL.md) — the economic comparison between AllDone and the grocery loop.
- [Container material system](docs/container_material_system_spec.md) — reusable packaging as circulating infrastructure.
- [Wash and return operating model](docs/WASH_AND_RETURN_OPERATING_MODEL.md) — the physical return, wash and reuse operation.
- [Architecture overview](docs/ARCHITECTURE_OVERVIEW.md) — software coordination across supply, return and operator state.

## Short version

**AllDone makes grocery shopping unnecessary, then removes the food waste, stale and spoiled food, organic landfill, disposable plastic and cardboard, grocery-trip fuel spending, exhaust, carrying, planning, fragmented logistics and repeated waste handling that only existed because grocery shopping was still the way food reached the home.**

The IP and verification material preserves a public authorship and timestamp trail under the **IPClaim APC License v1.1**: [LICENSE.md](LICENSE.md) and [VERIFY.md](VERIFY.md).
