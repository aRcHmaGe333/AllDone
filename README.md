**AllDone**

**Never shop for the everyday stuff again.**

AllDone is a new system designed to replace repetitive household shopping with a smart, closed-loop supply service. Your recurring needs --- groceries, prepared food, hygiene products, cleaning supplies, and other daily consumables --- would arrive in durable, reusable containers. Quantities would adapt automatically to your actual usage. When empty, the containers would be collected, industrially washed, refilled, and returned to circulation. No disposable packaging. No more guessing how much to buy. Just reliable supply that improves over time.

### The core idea

It's a complete loop: production → reusable packaging → home use → return → professional cleaning → reuse. Reusable glass is the planned default for consumer-facing containers.

This isn't another delivery app layered on top of the broken retail system. It's a fundamentally different operating model that removes the recurring chore of shopping, reduces waste, and creates lasting efficiency for everyone involved.

### Why this matters

Today's way of buying everyday goods wastes:

- Your precious time running errands

- Money and resources on single-use packaging

- Transportation and logistics effort

- Food (through overbuying, poor timing, and spoilage)

- Human labor across fragmented shopping and last-mile delivery

AllDone is built to eliminate that entire layer of friction and waste rather than just tweaking it.

### Who this creates value for

- **Households & consumers**: Simpler daily life with less hassle, less waste, and less guilt.

- **Investors**: A high-leverage opportunity with recurring revenue, strong system-level cost savings, and clear sustainability advantages.

- **Future teammates & operators**: A meaningful project at the intersection of logistics, software, sustainability, and better everyday living.

- **Potential partners**: Producers, wash facilities, retailers, and pilot cities who want to participate in building reusable infrastructure at scale.

### Current status

This is a public concept, research, and early prototype project. It is **not yet** an operating service --- there is no delivery happening today. The repository is intentionally open as a clear record of the idea, the economics, the technical foundation, and the remaining work needed to make it real.

It is ready for:

- Serious conversations

- Early funding discussions

- Feedback and collaboration

It is **not yet** ready for a live neighborhood pilot.

### Working prototype

The codebase already includes a functional early backend for:

- Household consumption profiling

- Smart quantity adjustment logic

- Schedule generation

- Reusable container circulation modeling

- Basic operator workflows (households, subscriptions, routes, washing, billing)

**Tech**: Node.js 18+

Quick start:

```bash

npm install

npm start

```

Demo with sample data:

```bash

npm run demo:api

```

### Recommended reading path

Start here:

1\. [DOCUMENT_GUIDE.md](docs/DOCUMENT_GUIDE.md)

2\. [INVESTOR_OVERVIEW.md](docs/INVESTOR_OVERVIEW.md)

3\. [VALUE_PROPOSITION.md](docs/VALUE_PROPOSITION.md)

4\. [VALUE_ANGLE_BREAKDOWN.md](docs/VALUE_ANGLE_BREAKDOWN.md)

5\. [EXTERNAL_POSITIONING.md](docs/EXTERNAL_POSITIONING.md)

6\. [PILOT_MODEL_AND_ASSUMPTIONS.md](docs/PILOT_MODEL_AND_ASSUMPTIONS.md)

7\. [PILOT_UNIT_ECONOMICS.md](docs/PILOT_UNIT_ECONOMICS.md)

8\. [steer.md](steer.md) --- current priorities and roadmap

Full investor pack: [investor_pack/README.md](investor_pack/README.md)

### Immediate priorities

To turn this into reality we need to focus on:

1\. Locking in the first pilot container set

2\. Defining the industrial washing and return logistics model

3\. Building rock-solid pilot unit economics

4\. Completing the minimal software required to run the full loop

### Intellectual property & verification

Published under the **IPClaim APC License v1.1**. Authorship is supported by cryptographic timestamps.

See [LICENSE.md](LICENSE.md) and [VERIFY.md](VERIFY.md).

### Get involved

Looking for collaborators, pilot partners, licensing opportunities, or investors who want to help build this:

→ [GitHub profile](https://github.com/aRcHmaGe333)

**Support the work**  

[![Ko-fi](https://img.shields.io/badge/Ko--fi-Support%20this%20work-ff5e5b?logo=ko-fi&logoColor=white)](https://ko-fi.com/earthcraft)

---

**The vision is simple: Source it, pack it, bring it, collect it, wash it, and reuse it --- so you can just use it.**


# AllDone

**Closed-loop home provisioning built around reusable containers, return logistics, industrial washing, and recirculation.**

AllDone is a concept and prototype project for replacing repetitive household shopping with a managed supply loop. Goods arrive in reusable containers, quantities adapt over time, and containers are collected, washed, refilled, and returned to circulation.

Reusable glass is the default planned consumer-facing container standard.

---

## What AllDone is

AllDone is far from a delivery service.

It is a broader operating model:

**production -> packaging -> circulation -> home supply -> return -> reuse**

The project is aimed at recurring household needs such as:

- groceries and prepared food
- hygiene products
- household consumables
- other goods that fit a managed return-and-reuse loop

## Why it matters

The current retail model wastes:

- [consumer time](docs/VALUE_ANGLE_BREAKDOWN.md#consumer-time)
- [packaging](docs/VALUE_ANGLE_BREAKDOWN.md#packaging-removal)
- [transport effort](docs/VALUE_ANGLE_BREAKDOWN.md#transport-compression)
- [food through mismatch and overbuying](docs/VALUE_ANGLE_BREAKDOWN.md#waste-and-mismatch-reduction)
- [labor through fragmented shopping and last-mile behavior](docs/VALUE_ANGLE_BREAKDOWN.md#labor-simplification)

AllDone is designed to remove that chore layer rather than slightly optimize the same disposable system.

Broader value and capture logic:

- [docs/VALUE_PROPOSITION.md](docs/VALUE_PROPOSITION.md)
- [docs/VALUE_ANGLE_BREAKDOWN.md](docs/VALUE_ANGLE_BREAKDOWN.md)
- [docs/TOTAL_SYSTEM_VALUE_MODEL.md](docs/TOTAL_SYSTEM_VALUE_MODEL.md)

## Current repo status

This repository is public and presentable as:

- a concept repo
- a research repo
- a prototype repo
- an authorship and IP-claim record

It is **not yet a pilot-ready operating business**. The repo is explicit about that, and the remaining gaps are documented.

Recommended framing:

- public exposure: yes
- funding readiness: yes, at an early/pre-seed narrative level
- pilot readiness: not yet

See [docs/EXTERNAL_POSITIONING.md](docs/EXTERNAL_POSITIONING.md).
All outward-facing text should also pass [docs/EXPOSURE_GATE.md](docs/EXPOSURE_GATE.md).

## Prototype code

The current codebase contains an early backend prototype for:

- household consumption profiling
- quantity adjustment logic
- simple schedule generation
- reusable container circulation modeling
- operator-facing household, subscription, route, wash, and billing workflow scaffolding
- local file-backed runtime persistence

Local requirements:

- Node.js 18+

Minimal local run path:

```bash
npm install
npm start
```

Optional demo run with sample data:

```bash
npm run demo:api
```

Prototype API entrypoint:

- [index.js](src/backend/index.js)

Prototype API surfaces:

- `/api/distribution`
- `/api/operations`

Persistence note:

- [docs/BACKEND_PERSISTENCE.md](docs/BACKEND_PERSISTENCE.md)
- [docs/API_QUICKSTART.md](docs/API_QUICKSTART.md)

## Reading path

Start here:

1. [docs/DOCUMENT_GUIDE.md](docs/DOCUMENT_GUIDE.md)
2. [docs/INVESTOR_OVERVIEW.md](docs/INVESTOR_OVERVIEW.md)
3. [docs/VALUE_PROPOSITION.md](docs/VALUE_PROPOSITION.md)
4. [docs/VALUE_ANGLE_BREAKDOWN.md](docs/VALUE_ANGLE_BREAKDOWN.md)
5. [docs/EXTERNAL_POSITIONING.md](docs/EXTERNAL_POSITIONING.md)
6. [docs/EXPOSURE_GATE.md](docs/EXPOSURE_GATE.md)
7. [docs/ARCHITECTURE_OVERVIEW.md](docs/ARCHITECTURE_OVERVIEW.md)
8. [docs/API_QUICKSTART.md](docs/API_QUICKSTART.md)
9. [docs/PILOT_MODEL_AND_ASSUMPTIONS.md](docs/PILOT_MODEL_AND_ASSUMPTIONS.md)
10. [docs/PILOT_UNIT_ECONOMICS.md](docs/PILOT_UNIT_ECONOMICS.md)
11. [docs/TOTAL_SYSTEM_VALUE_MODEL.md](docs/TOTAL_SYSTEM_VALUE_MODEL.md)
12. [docs/FUNDRAISING_READINESS.md](docs/FUNDRAISING_READINESS.md)
13. [docs/TASKS.md](docs/TASKS.md)
14. [steer.md](steer.md) (Current Priorities and Roadmap)

Public investor-pack structure:

- [investor_pack/README.md](investor_pack/README.md)

Core decisions:

- [docs/packaging_guidance.md](docs/packaging_guidance.md)
- [docs/container_material_system_spec.md](docs/container_material_system_spec.md)
- [docs/glass_container_family_spec.md](docs/glass_container_family_spec.md)
- [docs/CONTAINER_SOURCING_REALITY.md](docs/CONTAINER_SOURCING_REALITY.md)
- [docs/PILOT_BRIEF.md](docs/PILOT_BRIEF.md)
- [docs/PILOT_UNIT_ECONOMICS.md](docs/PILOT_UNIT_ECONOMICS.md)
- [docs/PILOT_READINESS_GAPS.md](docs/PILOT_READINESS_GAPS.md)

Supporting technical notes:

- [docs/Integrated_gravity-based_urban_logistics.md](docs/Integrated_gravity-based_urban_logistics.md)
- [docs/vehicle_modularity.md](docs/vehicle_modularity.md)
- [docs/reusable-packaging-systems-research.md](docs/reusable-packaging-systems-research.md)

## Project priorities

The immediate work is not "more features in the prototype."

The immediate work is:

1. lock the first pilot container set
2. define the wash and return operating model
3. build defensible pilot economics
4. implement the software required to run the loop

## Intellectual property and verification

This work is published under the **IPClaim APC License v1.1**.

- [LICENSE.md](LICENSE.md)
- [VERIFY.md](VERIFY.md)

Authorship is supported by cryptographic timestamp records in `.timestamps/`.

The latest proof chain has been refreshed for the current public AllDone publication state. See [LICENSE.md](LICENSE.md) and [VERIFY.md](VERIFY.md).

## Contact

For collaboration, licensing, pilot partnerships, or investment inquiries:

- [GitHub profile](https://github.com/aRcHmaGe333)

## Support

[![Ko-fi](https://img.shields.io/badge/Ko--fi-Support%20this%20work-ff5e5b?logo=ko-fi&logoColor=white)](https://ko-fi.com/earthcraft)

---

**We source it, pack it, bring it, collect it, and reuse it. You just use it.**
