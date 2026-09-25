# Investor FAQ

## How is AllDone different from ordinary grocery delivery?

Ordinary grocery delivery usually keeps the supermarket order intact and changes how the bags reach the home.

AllDone is built around recurring supply. It adds quantity adjustment, reusable containers, collection, washing, inspection, recirculation and software that follows the household and container state across the loop.

The economic comparison is therefore the full grocery loop against the full AllDone loop.

## Why use glass?

The current pilot direction uses borosilicate glass bodies with stainless steel and silicone in the closure path.

The reasons are chemical inertness, easy inspection, low odor absorption and compatibility with repeated washing. Glass also adds weight and breakage risk, so the pilot has to validate the choice against real route, handling and wash data.

Tempered or standard soda-lime glass remains the practical fallback where sourcing, cost or early physical testing makes that sensible.

## What stage is AllDone at?

AllDone is public, documented, prototype-backed and pre-pilot.

The repo is mature enough for serious early funding conversations about the next proof stage. Live pilot economics, customer retention, route performance, breakage and wash costs still have to be measured.

## What already exists in software?

The Node.js/Express prototype has two main areas:

- an operations flow for households, subscriptions, pack plans, routes, container returns, wash batches and billing events
- earlier consumption-learning and quantity-adjustment logic

Prototype state is persisted locally in JSON files under `data/runtime/`.

Before live pilot use, the persistence layer, operator interfaces and payment/deposit handling need to be hardened.

## What does the first pilot look like?

The current working model is one dense residential cluster with about 60 active households, weekly replenishment, 8-15 staple SKUs, two reusable container formats, deposit-backed returns and centralized washing.

## What are the main proof points?

- household retention
- return compliance
- breakage and loss
- wash cost and throughput
- route and stop efficiency
- packing accuracy
- actual basket margin
- contribution before central overhead

Current planning targets include at least 97% return compliance within the agreed window and combined breakage plus non-return below 1% of container turns.

## What would the first raise fund?

The current planning range is EUR 250,000-500,000, with EUR 350,000 used as the main 12-18 month case.

The money would fund the first real container fleet, wash-and-return operations, software hardening, operator interfaces, compliance work, pilot labour and enough runway to collect meaningful operating data.

## What could become difficult to copy?

The current advantage is the integrated system design.

A live loop can add operating knowledge about container lifespan, wash cost, return behaviour, packing exceptions, route density, building access, household changes and software shaped by real failures. That accumulated operating knowledge is more defensible than the customer-facing interface alone.
