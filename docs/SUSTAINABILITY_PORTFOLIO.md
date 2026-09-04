# Sustainability portfolio

I have a few projects that keep colliding around the same stupidly obvious question:

**How much stuff are we producing, moving, storing, powering and repeating for no good reason?**

They are not all at the same stage, and I am not going to pretend they are. Some already have working software. Some are proper R&D. The common thread is waste reduction by changing the system, not by decorating the old one with a green sticker.

## AllDone

Repository: https://github.com/aRcHmaGe333/AllDone

AllDone is the easiest one to explain.

You use recurring household stuff. It runs out. The next amount arrives. The empty reusable container goes back, gets washed, refilled and comes around again.

The point is to get rid of repeated shopping, disposable packaging, a pile of fragmented deliveries and a decent amount of overbuying/spoilage in one go.

What exists now: an early working backend for consumption profiles, quantity adjustment, scheduling, reusable-container circulation and operator workflows.

Current stage: **working early prototype / pre-pilot**.

What money or a serious partner actually buys next: a real container set, wash/return logistics, proper pilot economics and a small live loop that proves whether the whole thing works outside the repo.

## HopOn

Repository: https://github.com/aRcHmaGe333/HopOn

Live simulator: https://archmage333.github.io/HopOn/

Cars keep driving around with empty seats while other people are trying to get somewhere along the same road.

HopOn tries to use that capacity instead of summoning another dedicated car. The passenger walks to a safe pickup point, gets matched with a driver whose route already overlaps the destination, gets in, gets out, done.

The repo already has deterministic route-overlap matching, pickup-point logic, deviation handling, timeout/reassignment logic, tests and a live browser simulator.

Current stage: **algorithmic MVP + live simulator**.

Sustainability-wise, the proposition is simple: use more of the transport that is already moving before adding more transport.

## Autonomous Food System (AFS)

Repository: https://github.com/aRcHmaGe333/AutonomousFoodSystem

AFS is much bigger physically, so the maturity split matters more here.

The long-term idea is increasingly autonomous food infrastructure: growing, cooking and portioning, dairy-first livestock management and shared resource loops. Food produced there can hand off into AllDone for distribution.

The software side is real. The repo has working backend surfaces for recipe/ingredient management, cooking coordination, growing, livestock, analytics and simulation-first hardware paths.

The physical system is not built yet.

Current stage: **software-first prototype; physical validation still required**.

The environmental angle is not "AI agriculture yay." It is much more concrete: local production where it makes sense, precise portioning, less food waste, better use of water/materials, and turning byproducts back into useful inputs instead of treating them as somebody else's problem.

## Universal Data Fabric (UDF)

Repository: https://github.com/aRcHmaGe333/udf

UDF starts from another obvious waste pattern: the same data gets copied again and again across machines, services and storage.

The idea is to store unique chunks once, reference them wherever they are needed, move only what changed and keep frequently used data near where it is actually used.

There are architecture/spec documents, an impact model, hardware planning, a pilot roadmap and small Python demonstrations of deduplication, delta sync and caching.

Current stage: **R&D architecture + small executable demos**.

The sustainability claim here should stay boring until it is measured: less duplicated storage and less unnecessary transfer should mean less hardware, network traffic and energy. The next useful proof is a reproducible benchmark showing how much.

## ECOmpile

Repository: https://github.com/aRcHmaGe333/ECOmpile

ECOmpile is the weirdest one to explain in one sentence, but the waste angle is real.

A model solves something. Some parts of that solution turn out to be stable and repeatable. Instead of making a giant neural system rediscover the same thing forever, ECOmpile tries to turn the repeatable part into inspectable deterministic code and only keep the genuinely variable part neural.

The repo has architecture, a roadmap, governance material, a concrete case-to-kernel seed, routing/index material and early SDK/benchmark examples.

Current stage: **R&D prototype / bounded proof seeds**.

The energy/material story is still a hypothesis until benchmarked properly. If a repeated neural workload can be replaced by much cheaper deterministic execution without losing the useful behavior, compute and energy should drop. We need measurements, not chest-thumping.

## Why bundle these at all?

Because they are all versions of the same instinct:

**Stop paying forever for the same waste.**

AllDone attacks disposable packaging, repetitive shopping and fragmented household supply.

HopOn attacks empty transport capacity.

AFS attacks waste in food production, preparation and resource loops.

UDF attacks duplicated storage and transfer.

ECOmpile attacks repeated expensive computation where the useful part may already have become deterministic.

That does not make them one company or one product. It makes them a useful portfolio to show people who fund sustainability, circular systems, transport, food, infrastructure or efficiency R&D.

## What I am actually looking for

For AllDone and HopOn: money, pilot partners, operators, cities, logistics/mobility people, and anybody who can help push a real bounded test into the world.

For AFS: funding plus the physical/domain expertise needed to turn software-first work into actual hardware validation.

For UDF and ECOmpile: R&D backing, compute/infrastructure partners and people willing to benchmark the claims properly.

If you fund, build, test, publish, research or deploy things like this, I am interested in talking.

Repository owner: https://github.com/aRcHmaGe333
