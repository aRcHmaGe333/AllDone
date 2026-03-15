# AllDone

**Closed-loop home provisioning built around reusable containers, return logistics, industrial washing, and recirculation.**

AllDone is a concept and prototype project for replacing repetitive household shopping with a managed supply loop. Goods arrive in reusable containers, quantities adapt over time, and containers are collected, washed, refilled, and returned to circulation.

Reusable glass is the default planned consumer-facing container standard.

---

## What AllDone is

AllDone is not just a delivery app.

It is a broader operating model:

**production -> packaging -> circulation -> home supply -> return -> reuse**

The project is aimed at recurring household needs such as:

- groceries and prepared food
- hygiene products
- household consumables
- other goods that fit a managed return-and-reuse loop

## Why it matters

The current retail model wastes:

- consumer time
- packaging
- transport effort
- food through mismatch and overbuying
- labor through fragmented shopping and last-mile behavior

AllDone is designed to remove that chore layer rather than slightly optimize the same disposable system.

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

Optional sample data for POSIX shells:

```bash
ALLDONE_SAMPLE_DATA=true npm start
```

Optional sample data for PowerShell:

```powershell
$env:ALLDONE_SAMPLE_DATA='true'
npm start
```

Prototype API entrypoint:

- [index.js](src/backend/index.js)

Prototype API surfaces:

- `/api/distribution`
- `/api/operations`

Persistence note:

- [docs/BACKEND_PERSISTENCE.md](docs/BACKEND_PERSISTENCE.md)

## Reading path

Start here:

1. [docs/DOCUMENT_GUIDE.md](docs/DOCUMENT_GUIDE.md)
2. [docs/INVESTOR_OVERVIEW.md](docs/INVESTOR_OVERVIEW.md)
3. [docs/VALUE_PROPOSITION.md](docs/VALUE_PROPOSITION.md)
4. [docs/EXTERNAL_POSITIONING.md](docs/EXTERNAL_POSITIONING.md)
5. [docs/EXPOSURE_GATE.md](docs/EXPOSURE_GATE.md)
6. [docs/ARCHITECTURE_OVERVIEW.md](docs/ARCHITECTURE_OVERVIEW.md)
7. [docs/PILOT_MODEL_AND_ASSUMPTIONS.md](docs/PILOT_MODEL_AND_ASSUMPTIONS.md)
8. [docs/PILOT_UNIT_ECONOMICS.md](docs/PILOT_UNIT_ECONOMICS.md)
9. [docs/FUNDRAISING_READINESS.md](docs/FUNDRAISING_READINESS.md)
10. [docs/TASKS.md](docs/TASKS.md)

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

Note: the current working tree is prepared for a new timestamped publication pass, but the proof status in [LICENSE.md](LICENSE.md) should be refreshed after the next publication commit and push.

## Contact

For collaboration, licensing, pilot partnerships, or investment inquiries:

- [GitHub profile](https://github.com/aRcHmaGe333)

## Support

[![Ko-fi](https://img.shields.io/badge/Ko--fi-Support%20this%20work-ff5e5b?logo=ko-fi&logoColor=white)](https://ko-fi.com/earthcraft)

---

**We source it, pack it, bring it, collect it, and reuse it. You just use it.**
