# Architecture Overview

Status: concept-aligned prototype

This document explains the operating loop AllDone is trying to become.

## System model

AllDone is a closed-loop provisioning system:

1. demand is planned at the household level
2. goods are packed into reusable containers
3. containers are routed to homes
4. empties are collected back into the network
5. returned containers are inspected, washed, and released back to inventory

The system only works if all five parts exist. Delivery alone is not the product.

## Core operating layers

### 1. Household and subscription layer

- household records
- recurring needs
- cadence and skips
- dietary and handling constraints

### 2. Packaging and container layer

- standard container families
- closure systems
- deposit or return policy
- breakage and retirement rules

Default planned direction:

- reusable glass for the consumer-facing container standard

### 3. Fulfillment layer

- what must be packed today
- quantity by household
- mapping from goods to container SKUs
- exception handling for unavailable items

### 4. Route and return layer

- stop planning
- handoff confirmation
- container pickup association
- failed delivery and failed return handling

### 5. Wash and recirculation layer

- dirty intake
- inspection
- wash and dry
- gasket replacement where needed
- release back to refill-ready inventory

### 6. Billing and policy layer

- recurring billing
- deposits, credits, or loss fees
- breakage handling
- service exceptions

## Current software scope

The prototype repo currently covers only a small part of the eventual system:

- household consumption profiling
- simple quantity adjustment logic
- prototype schedule generation
- basic reusable-container state simulation

Current prototype entrypoint:

- [index.js](../src/backend/index.js)

This is supporting logic, not the full operating backbone.

## What is still non-software-critical

Several core project risks are operational rather than technical:

- glass handling economics
- wash-line design
- return compliance
- supplier and MOQ reality
- food-safety and materials compliance
- pilot unit economics

## Practical MVP boundary

For a real pilot, the software MVP should cover:

- subscriptions
- fulfillment and pack planning
- route execution
- container tracking
- wash workflow support
- billing and exception handling

Advanced demand learning should remain secondary until the loop itself works.
