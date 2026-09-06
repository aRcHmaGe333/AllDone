# AllDone

**AllDone removes grocery shopping by replacing it with continuous food supply.**

That one change removes much more than the trip to the supermarket. Grocery shopping is the point where a whole chain of repeated work, waste, packaging, transport and badly matched food supply gets recreated again and again. Once the food supply itself becomes continuous, most of that chain stops needing to exist.

## What disappears with grocery shopping

The gains start with the obvious one: **the grocery trip is gone.** The time spent travelling to a store, walking aisles, queueing, carrying food home and repeating the same process every few days becomes unnecessary.

The larger gains come from everything attached to that trip:

- **Repeated planning disappears.** Checking the fridge, checking cupboards, remembering what ran out, making lists, estimating quantities and repairing forgotten items with emergency trips move from human attention into the supply system.
- **Food stops being bought in guessed quantities.** Supply can follow actual consumption instead of arbitrary retail pack sizes and the household's best guess about the next week.
- **Overbuying falls with that mismatch.** Less food enters the home merely because the available pack was too large, a future need was guessed badly, or somebody bought extra "just in case."
- **Stale and spoiled food are designed out of the loop as far as predictable consumption allows.** Food can arrive closer to when it will actually be used instead of waiting for the next shopping cycle to justify another purchase.
- **Avoidable food waste falls before disposal is even involved.** The useful gain is not better treatment of food after it becomes waste; it is preventing food from becoming waste in the first place.
- **Unavoidable food remains leave the landfill stream.** The design target is for food remains to enter a dedicated compost stream instead of mixed household garbage, making complete recovery into compost part of the supply loop rather than an optional afterthought.
- **Disposable grocery packaging disappears from the normal loop.** Reusable containers replace the plastic tubs, films, trays, bags, cardboard boxes and other one-use material attached to ordinary food retail.
- **The upstream packaging burden disappears with it.** Less disposable plastic and cardboard have to be manufactured, printed, transported, stocked, collected and processed simply to move food through a household once.
- **Household garbage volume drops sharply.** Two of the most persistent grocery-related waste streams — food and its packaging — are prevented or separated at the source instead of being pushed into the general waste system.
- **Waste handling falls with that volume.** Fewer bags, bins, collections, transfers and disposal operations are needed for material the food system no longer creates.
- **Repeated personal transport for food disappears.** Fuel, fares, parking, vehicle wear and tailpipe exhaust associated with household grocery trips stop being necessary parts of obtaining food.
- **Food logistics become a planned recurring flow instead of millions of disconnected collection events.** Supply and return can be consolidated around actual demand instead of combining retail replenishment, household shopping trips and scattered one-off deliveries on top of one another.
- **Fossil-fuel spending and exhaust can be removed from the remaining logistics instead of merely reduced at the edges.** A consolidated recurring route is a much smaller transport problem to electrify or otherwise operate without fossil fuel than the collection of independent trips it replaces.
- **Physical hauling disappears from the household workload.** Carrying bags through parking lots, public transport, rain, stairs, corridors and elevators adds no value to the food itself and has no reason to remain a normal part of food supply.
- **Emergency shopping largely disappears.** A system following consumption can react before ordinary food runs out, removing expensive and inefficient trips caused by one missing item.
- **Retail pack-size mismatch loses its reason to dominate household quantities.** Food can be portioned according to actual use rather than shelf conventions, merchandising and fixed consumer packs.
- **Demand becomes visible before the next purchase happens.** Consumption history gives the operator and suppliers a better picture of what will actually be needed instead of waiting for another retail transaction to reveal demand after the fact.
- **That visibility reduces waste upstream as well.** Procurement, preparation and eventually production can track recurring real demand more closely, reducing inventory that exists mainly because nobody knew what would actually be consumed.
- **The system improves through use.** Every completed supply cycle provides better information about quantity and timing, so the next cycle can fit reality more closely instead of resetting to another shopping guess.
- **Dense housing becomes easier to supply.** One recurring food-supply and return loop can replace a large number of overlapping household trips, courier stops, packaging flows and waste movements around the same buildings.
- **The value is distributed across the whole system.** Households recover time and avoid waste; suppliers gain clearer demand; buildings handle less garbage; cities absorb fewer redundant trips; waste systems move less material; the operator has a recurring service whose value comes from costs that genuinely disappeared.

The environmental gain is therefore not a separate feature added to AllDone. It is what happens when repeated food waste, organic landfill, disposable packaging and unnecessary transport stop being structural requirements of getting food into a home.

The economic gain comes from the same removals. Money currently spent on wasted food, disposable packaging, grocery-trip fuel, duplicated handling, waste collection, emergency purchases and fragmented logistics becomes available because the corresponding work and material no longer have to be paid for.

The human gain is just as direct. Time, attention and physical effort currently spent maintaining a private miniature grocery operation are returned because the food supply becomes responsible for staying supplied.

The strongest part is that none of this depends on turning everybody into unusually disciplined consumers. The waste falls because the system stops producing it as a normal consequence of obtaining food.

## The system that replaces grocery shopping

AllDone turns food supply into a recurring closed loop:

**measure use -> determine the next quantity -> portion/pack -> deliver -> consume -> collect -> compost food remains -> wash containers -> refill -> deliver again**

Reusable glass is the current planned default for the consumer-facing food container set where it is operationally suitable. The container remains an asset of the system instead of becoming garbage after one use, so every successful return prevents another disposable package and gives the next supply cycle a container that already exists.

Continuous supply also changes the meaning of inventory. The useful inventory is not "how much food can be pushed into a household at once" but how little food has to be present while the household remains reliably supplied. That tighter relationship between supply and consumption is what attacks staleness, spoilage, overbuying and dead food sitting in storage.

The same return path closes the other half of the food loop. Containers go back for washing and reuse; unavoidable food remains go back into a compost stream. Both outputs stop being anonymous household garbage and become known material with a next use.

## Why the comparison is much bigger than delivery

The relevant comparison is not AllDone versus a courier bringing one grocery order. A courier order leaves almost the entire grocery system intact and adds another delivery layer on top of it.

The real comparison is the full incumbent loop against the full AllDone loop.

The incumbent loop spends money and resources on retail packaging, shelf handling, household planning, grocery trips, carrying, fixed pack sizes, overbuying, spoilage, emergency purchases, fragmented delivery, organic waste, packaging waste and repeated disposal.

AllDone introduces visible replacement costs — reusable containers, washing, inspection, refill, consolidated delivery, return logistics, compost handling, breakage reserve and the software that coordinates the loop — but those costs are paying for a system that removes the much larger collection of repeated costs around grocery shopping.

That is why the economics have to be judged at system level. AllDone does not need to beat one isolated courier fee. It needs the full closed loop to cost less, waste less and require less human work than the full grocery-shopping system it replaces.

That also gives the project several independent sources of value rather than one narrow retail margin. The household saves time, attention, transport expense and wasted food. Suppliers gain more predictable recurring demand. Buildings and waste systems handle less material. Cities absorb fewer redundant trips. The operator can capture a sensible share of savings created across the whole loop while leaving the other participants materially better off.

## What already exists

The project already has a working early backend for household consumption profiles, quantity adjustment, schedule generation, reusable-container circulation, route/wash/billing workflows and local persistence.

That matters because the physical system depends on exactly those coordination problems being solvable: knowing what a household normally consumes, what quantity should come next, which containers are out, which have returned, which have been washed, what has to be packed and what each route has to carry in both directions.

The software therefore moves AllDone past the stage where the value exists only as an idea. The remaining uncertainty is concentrated where a real pre-pilot project should have it: physical operation, measured waste removal, route density, container performance, washing, labor and full-loop economics.

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

## What the first pilot is worth proving

A small dense pilot can turn nearly every important part of the value case from an argument into a measurement.

It can measure how accurately consumption predicts the next quantity, how much food waste disappears, how much disposable packaging is avoided, how much organic material is recovered for compost, how reliably containers return, how many cycles they survive, what washing costs, how much labor each household requires, how dense the routes need to be, how much transport disappears and what the full loop costs against the grocery system it replaces.

Those measurements are more valuable than a large speculative rollout because they show which gains are already real, which improve with density and which parts need redesign before scale deserves any money.

The immediate work is therefore narrowly valuable: lock the first food/container set, finish the wash-and-return and compost operating model, make the pilot economics defensible, complete only the software required to run the loop, and measure the removals hard enough that the next decision is based on evidence rather than optimism.

The deeper project material is organized by the question it helps answer:

- [Categorized documentation](docs/README.md) — the full project without forcing every file into one reading path.
- [Pilot model and assumptions](docs/PILOT_MODEL_AND_ASSUMPTIONS.md) — what the first real loop is supposed to test.
- [Pilot unit economics](docs/PILOT_UNIT_ECONOMICS.md) — whether the replacement loop can beat the costs it removes.
- [Total system value model](docs/TOTAL_SYSTEM_VALUE_MODEL.md) — the correct economic comparison between AllDone and the incumbent grocery loop.
- [Container material system](docs/container_material_system_spec.md) — how packaging becomes circulating infrastructure instead of recurring waste.
- [Wash and return operating model](docs/WASH_AND_RETURN_OPERATING_MODEL.md) — how the reusable side of the loop stays physically real.
- [Architecture overview](docs/ARCHITECTURE_OVERVIEW.md) — how the software coordinates the supply, return and operator state needed to run the loop.

## The value in one sentence

**AllDone makes grocery shopping unnecessary, then removes the food waste, stale and spoiled food, organic landfill, disposable plastic and cardboard, grocery-trip fuel spending, exhaust, carrying, planning, fragmented logistics and repeated waste handling that only existed because grocery shopping was still the way food reached the home.**

The IP and verification material preserves the value of the work through a public authorship and timestamp trail under the **IPClaim APC License v1.1**: [LICENSE.md](LICENSE.md) and [VERIFY.md](VERIFY.md).
