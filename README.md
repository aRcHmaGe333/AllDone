# AllDone

**AllDone removes grocery shopping by making food supply continuous.**

Every household still runs a small supply chain by hand. Someone checks what is left, notices what is running out, decides how much to buy, makes a list, travels to the store, picks and inspects the goods, pays, carries them home, stores them, deals with the packaging and starts watching the cupboards again.

AllDone is designed to take that repeated work away from the household.

## The home stays supplied

Food is used continuously. Grocery shopping still supplies it in bursts.

AllDone turns recurring household supply into a loop that follows what the household actually uses. The household chooses what it wants. The service keeps track of the recurring requirement, prepares the next useful quantity and brings it to the home before the previous supply becomes a problem.

Suitable goods arrive in reusable containers. Empty containers leave on the return run, are inspected, washed, refilled and put back into circulation. Where it makes practical sense, unavoidable food remains can leave through a separate organic-waste path instead of mixed household rubbish.

The basic loop is:

`use -> measure -> decide the next quantity -> pack -> deliver -> collect -> wash -> inspect -> refill -> deliver again`

The household should experience very little of that machinery. The useful result is simple: the things it routinely uses are there when they are needed.

## Grocery shopping is more work than the trip to the shop

The supermarket visit is only the visible part of the job. Around it sits the rest: checking stock, remembering shortages, estimating quantities, rebuilding lists, fitting the trip into the day, travelling, queueing, carrying, unpacking, storing, correcting forgotten items and eventually doing it all again.

The work often arrives in fragments. Milk is low. Soap is nearly gone. Someone remembers pasta while doing something else. A cupboard gets checked. A list starts. A trip is postponed. Something runs out first.

AllDone moves recurring replenishment into a service that can remember those needs instead of asking the household to rediscover them every few days.

The household keeps control of what it wants and can change, skip, pause or stop the recurring supply. AllDone handles the repeated logistics around those choices.

## Quantities follow consumption

Retail packs are fixed. Household consumption is not.

A household that consistently uses less can receive less next time. One that uses more can receive more. The aim is to send enough, at the right time, without repeatedly buying surplus simply because the shelf offered the wrong unit.

That can reduce overbuying, stale stock, spoilage, duplicate purchases and emergency runs caused by shortages.

The repo already contains early consumption-profile logic that records served and consumed quantities, tracks waste, estimates future demand and can suggest portion changes. For the first pilot, reliable delivery, return and washing matter more than sophisticated prediction. Better prediction can improve the loop once the loop works.

## Reusable containers replace disposable packaging

A disposable package may be useful inside the home for minutes or days even though it had to be manufactured, printed, filled, transported, stocked, bought, collected and processed.

A reusable container stays useful after the food is gone. It comes back, gets washed and inspected, receives new contents and serves again.

For the pilot, AllDone is taking a glass-first approach to consumer-facing food containers, with stainless steel and silicone in the closure path. Glass is heavier and more fragile than the polypropylene used by many established reuse systems, so the pilot has to measure whether its benefits in inertness, inspection, cleaning and long service life justify the extra handling and breakage risk.

## A two-way route does more useful work

Most retail logistics are good at getting products to the customer and much worse at getting useful material back.

AllDone is designed around a recurring two-way route. Filled containers go in. Empty containers come out. A return should happen when the service is already at the door rather than requiring another household trip.

Dense housing makes this especially useful. One recurring route through an apartment block or housing cooperative can replace many separate shopping journeys and simplify collection of empty containers.

Density changes the economics directly: less travel between stops, easier access, simpler returns, better use of driver time and a smaller area in which containers can go missing.

## Demand becomes visible earlier

A recurring supply relationship can reveal part of household demand before the next purchase would normally happen.

If a household usually consumes the same staple each week, procurement and preparation can work from that recurring pattern. Changes in actual consumption can then adjust the next cycle.

That gives suppliers and packers a clearer view of what is likely to be needed. Over time, it can also create a useful connection to local production systems without making the first AllDone pilot depend on them.

## What AllDone replaces

Ordinary grocery delivery removes the trip from the store to the home while leaving most of the retail loop intact.

AllDone goes further. It combines recurring replenishment, quantity decisions, reusable packaging, delivery, collection, washing, recirculation and the software that keeps those parts connected.

The relevant economic comparison is therefore the full grocery loop against the full AllDone loop.

The grocery loop carries costs in household time, personal transport, carrying, fixed pack sizes, overbuying, spoilage, disposable packaging, fragmented delivery and repeated waste handling.

AllDone has replacement costs of its own: reusable containers, washing, inspection, refill operations, consolidated delivery, return logistics, breakage and loss, tracking, billing and software.

The system deserves to scale only if the replacement leaves less total cost, less waste and less household work after those costs are counted.

## Working software

The repository contains a working Node.js/Express prototype with two main API areas:

- `/api/operations` for households, subscriptions, pack plans, routes, returns, wash batches and billing events
- `/api/distribution` for the earlier consumption-learning, quantity and scheduling work

The operations code can already create households and subscriptions, generate pack plans, allocate containers, generate route manifests, complete route stops, process returned containers, create and inspect wash batches, release clean containers back into refill-ready stock and record billing events.

Prototype state is saved to local JSON files under `data/runtime/`, so the workflow survives a restart. That persistence model is suitable for demonstration and still needs hardening before live pilot use.

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

The current pilot plan is intentionally narrow:

- one dense residential cluster
- about 60 active households
- weekly recurring replenishment
- 8-15 staple SKUs
- `Storage-M` and `Dose-M` reusable container formats
- deposit-backed returns
- centralized washing

The pilot is designed to replace planning assumptions with measurements: return behaviour, wash cost, breakage and loss, route time, labour per household, repeat use, food waste avoided, packaging avoided and the operating cost of the loop.

Current targets include at least 97% return compliance within the agreed return window and combined breakage plus non-return below 1% of container turns. Those are targets to test, not results already achieved.

## Current stage

AllDone is public, documented and prototype-backed. The system design, pilot shape, container specifications, wash-and-return model, planning economics and core backend workflow are already in the repository.

The project is still pre-pilot. Real supplier quotes, physical container validation, measured wash and breakage data, a pilot-safe persistence layer, driver and depot interfaces, live deposit/payment handling, a pilot site, recruited households and local compliance clearance still have to be secured or measured.

That is the next proof stage.

## Documentation

- [Start here](docs/start-here/README.md)
- [Investor overview](docs/INVESTOR_OVERVIEW.md)
- [Value proposition](docs/VALUE_PROPOSITION.md)
- [Pilot model and assumptions](docs/PILOT_MODEL_AND_ASSUMPTIONS.md)
- [Pilot unit economics](docs/PILOT_UNIT_ECONOMICS.md)
- [Container material system](docs/container_material_system_spec.md)
- [Wash and return operating model](docs/WASH_AND_RETURN_OPERATING_MODEL.md)
- [Architecture overview](docs/ARCHITECTURE_OVERVIEW.md)

## Short version

**AllDone keeps the home supplied without routine grocery shopping. The household chooses what it wants; AllDone handles the recurring replenishment, reusable containers, delivery, return, washing and recirculation around it.**

The IP and verification material preserves a public authorship and timestamp trail under the **IPClaim APC License v1.1**: [LICENSE.md](LICENSE.md) and [VERIFY.md](VERIFY.md).
