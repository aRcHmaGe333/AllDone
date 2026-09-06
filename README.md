# AllDone

**AllDone removes grocery shopping by replacing it with continuous food supply.**

That removes much more than the supermarket trip. Grocery shopping also means planning, travelling, carrying, guessing quantities, buying fixed pack sizes, throwing away food, throwing away packaging, handling garbage and repeating the same process every few days.

AllDone replaces that repeated retail cycle with a supply loop built around actual consumption.

## Grocery shopping disappears

The first gain is literal: no routine trip to the supermarket. No travelling there, walking aisles, queueing, carrying bags home and doing it again a few days later.

The bigger gains come with it:

- **The household stops managing food supply manually.** Checking the fridge and cupboards, remembering shortages, making lists, estimating quantities and fixing forgotten items with emergency trips move into the supply system.
- **Food quantities follow actual consumption.** The next amount can be based on how much was actually used instead of fixed retail packs and a guess about the coming week.
- **Less food goes stale, spoils or gets thrown away.** Better timing and better quantities mean less food sitting unused simply because too much was bought or it arrived too early.
- **Unavoidable food remains can go straight to compost instead of mixed household garbage.** The design target is complete recovery of that material into a dedicated compost stream.
- **Disposable grocery packaging can leave the normal food-supply cycle.** Reusable containers replace plastic tubs, films, trays, bags, cardboard boxes and other one-use packaging. That also means less disposable material has to be manufactured, printed, transported, stocked, collected and processed just to move food through a household once.
- **Personal grocery transport disappears.** Fuel, fares, parking, vehicle wear, exhaust and the physical job of hauling bags stop being part of obtaining food.
- **Food delivery and container return become one planned recurring operation.** Instead of retail replenishment, household shopping trips and scattered one-off deliveries all happening on top of each other, supply and return can be consolidated around recurring demand.
- **Retail pack sizes stop deciding how much food enters the home.** Food can be portioned around actual use instead of shelf conventions and fixed consumer packs.
- **Suppliers see demand earlier and more clearly.** Consumption history gives procurement, preparation and eventually production a better basis for deciding how much will actually be needed, reducing excess inventory and avoidable upstream waste.
- **Dense housing can replace many overlapping trips with one coordinated food-supply and return loop.** That matters for route efficiency, waste handling and the amount of transport concentrated around the same buildings.

The savings are spread through the whole system. Households recover time and avoid wasted food. Suppliers get clearer recurring demand. Buildings handle less garbage. Cities absorb fewer unnecessary trips. Waste systems move less material. The operator can earn from costs that genuinely disappeared.

The environmental value is built into the same changes: less food thrown away, less organic material sent to landfill, less disposable packaging and less unnecessary transport.

The economic value comes from the same removals. Money now spent on wasted food, packaging, grocery-trip fuel, duplicated handling, waste collection, emergency purchases and fragmented logistics no longer has to be spent on those things.

The human value is equally direct: less planning, less carrying, less remembering, less checking, less shopping.

None of that requires unusually disciplined consumers. The supply system itself takes over work that is currently repeated by every household.

## One loop replaces several bad ones

AllDone runs food supply as a recurring closed loop:

**measure use -> determine the next quantity -> portion/pack -> deliver -> consume -> collect -> compost food remains -> wash containers -> refill -> deliver again**

Reusable glass is the current planned default for the consumer-facing food container set where it is operationally suitable. The container stays in circulation after the food is consumed, so a successful return supplies another delivery without another disposable package.

Continuous supply also changes household inventory. The target is not to keep as much food as possible in the home. It is to keep enough food there while avoiding unnecessary surplus. A closer fit between supply and consumption directly reduces staleness, spoilage and overbuying.

The return path handles both outgoing material streams. Containers go back for washing and reuse. Unavoidable food remains go to compost. Neither needs to become ordinary mixed household garbage.

## The economics include the grocery system being replaced

Comparing AllDone with one courier bringing one grocery order misses almost the entire project. A courier order leaves the grocery system intact and adds another delivery layer.

The relevant comparison is the full grocery loop against the full AllDone loop.

The grocery loop spends money and resources on retail packaging, shelf handling, household planning, grocery trips, carrying, fixed pack sizes, overbuying, spoilage, emergency purchases, fragmented delivery, organic waste, packaging waste and repeated disposal.

AllDone has real replacement costs: reusable containers, washing, inspection, refill, consolidated delivery, return logistics, compost handling, breakage reserve and the software that coordinates the loop.

The closed loop has to beat the grocery-shopping system as a whole: lower cost, less waste and less human work after those replacement costs are included.

That leaves several independent sources of economic value instead of one narrow retail margin. Households save time, transport expense and wasted food. Suppliers get more predictable recurring demand. Buildings and waste systems handle less material. Cities get fewer redundant trips. The operator can capture a share of savings created across the loop while leaving the other participants better off.

## Working software

The project already has an early backend for household consumption profiles, quantity adjustment, schedule generation, reusable-container circulation, route/wash/billing workflows and local persistence.

That software handles the coordination the physical system depends on: normal household consumption, the next quantity to pack, containers currently out, containers returned, wash state, packing requirements and the load moving in both directions on each route.

The remaining uncertainty is mainly physical and measurable: route density, container performance, washing, labor, food-waste reduction, packaging reduction and full-loop economics.

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

## The first pilot

A small dense pilot can measure nearly every important claim at once: prediction accuracy, food waste avoided, disposable packaging avoided, food remains recovered for compost, container return rate, container lifespan, washing cost, labor per household, route density, transport removed and full-loop cost against the grocery system it replaces.

Those numbers matter more than a large speculative rollout. They show which gains are already real, which improve with density and which parts need redesign before larger deployment deserves money.

The immediate work is narrow: lock the first food/container set, finish the wash-and-return and compost operating model, make the pilot economics defensible, complete only the software needed to run the loop, then measure the result.

## Documentation

- [Categorized documentation](docs/README.md) — the full project split into manageable routes.
- [Pilot model and assumptions](docs/PILOT_MODEL_AND_ASSUMPTIONS.md) — the first live loop and the assumptions it tests.
- [Pilot unit economics](docs/PILOT_UNIT_ECONOMICS.md) — the replacement loop against the costs it removes.
- [Total system value model](docs/TOTAL_SYSTEM_VALUE_MODEL.md) — the economic comparison between AllDone and the grocery loop.
- [Container material system](docs/container_material_system_spec.md) — reusable packaging as circulating infrastructure.
- [Wash and return operating model](docs/WASH_AND_RETURN_OPERATING_MODEL.md) — the physical return, wash and reuse operation.
- [Architecture overview](docs/ARCHITECTURE_OVERVIEW.md) — software coordination across supply, return and operator state.

## Short version

**AllDone makes grocery shopping unnecessary, then removes much of the food waste, disposable packaging, personal transport, carrying, planning, fragmented logistics and repeated waste handling that exist because grocery shopping is still the normal way food reaches the home.**

The IP and verification material preserves a public authorship and timestamp trail under the **IPClaim APC License v1.1**: [LICENSE.md](LICENSE.md) and [VERIFY.md](VERIFY.md).
