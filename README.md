# AllDone

**Never shop for the everyday stuff again.**

You use things. They run out. Somebody should know roughly how much you use, bring the next amount, take the empty container back, wash it, refill it and do it again.

That is AllDone.

The obvious targets are the things people keep buying over and over anyway: groceries, prepared food, hygiene products, household consumables and whatever else fits the same loop.

The container comes back. It does not become garbage because you used what was inside it. Reusable glass is the current planned default for the consumer-facing container set.

The loop is basically:

**produce -> pack -> bring -> use -> collect -> wash -> refill -> bring again**

The goal is not to make shopping 12% nicer. The goal is to make a large part of shopping disappear.

## Why bother

Because the current version is absurdly repetitive. People keep spending time buying the same things. Packaging keeps getting manufactured, carried home and thrown away. Delivery and shopping trips are fragmented. Food gets overbought or arrives at the wrong time and gets wasted.

AllDone tries to remove as much of that repeated work and material as possible in one system instead of fixing each little symptom separately.

There is a sustainability angle for the same reason: if the container keeps circulating, deliveries can be consolidated, quantities can follow actual use and fewer things need to be produced, moved and discarded for no useful reason.

I have a broader sustainability bundle around this too: [SUSTAINABILITY_PORTFOLIO.md](docs/SUSTAINABILITY_PORTFOLIO.md).

## What actually exists right now

This is not a live service yet. Nobody is getting an AllDone delivery today.

There is, however, a working early backend. It already covers:

- household consumption profiles
- quantity adjustment
- schedule generation
- reusable-container circulation modelling
- household/subscription/route/wash/billing workflow scaffolding
- local runtime persistence

So this is past the "I wrote an idea in a paragraph" stage. It is still before the "we can run a real neighbourhood without embarrassing ourselves" stage.

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

## What has to happen before a real pilot

The next work is much less mysterious than the size of the idea makes it sound:

1. Decide the first small container set.
2. Nail down how collection, industrial washing and return actually work.
3. Get the pilot economics to the point where the numbers survive contact with reality.
4. Finish the software needed to operate that loop.

The current pilot planning assumes staying deliberately small and dense first. I would much rather prove one boring loop that works every week than draw a giant map of cities we do not operate in.

Useful detail is here:

- [Investor overview](docs/INVESTOR_OVERVIEW.md)
- [Pilot model and assumptions](docs/PILOT_MODEL_AND_ASSUMPTIONS.md)
- [Pilot unit economics](docs/PILOT_UNIT_ECONOMICS.md)
- [Container material system](docs/container_material_system_spec.md)
- [Container sourcing reality](docs/CONTAINER_SOURCING_REALITY.md)
- [Architecture](docs/ARCHITECTURE_OVERVIEW.md)
- [Current priorities](steer.md)

## Funding / partners / somebody who can actually help make it exist

This is ready to discuss with people who can help turn it into a real pilot: funding, wash/return operations, reusable packaging, production, logistics, buildings/cities, research or implementation.

The useful question is not "is reusable packaging nice?" It is whether the whole loop can be made better enough than repeated retail + disposable packaging + fragmented delivery that people simply prefer it.

That is what I want to prove.

## IP / verification

The project is published under the **IPClaim APC License v1.1**. Authorship is backed by cryptographic timestamp records.

- [LICENSE.md](LICENSE.md)
- [VERIFY.md](VERIFY.md)

## Contact

For collaboration, investment, pilots, licensing or implementation: [GitHub profile](https://github.com/aRcHmaGe333)

[Support the work](https://ko-fi.com/earthcraft)

---

**Source it, pack it, bring it, collect it, wash it, reuse it. You just use it.**
