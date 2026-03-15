# Pilot Brief

Status: approved for planning

Purpose
-------
This document defines the first real AllDone pilot in one place.

It converts the project from a broad concept into a narrow operating target.

## Pilot objective

Prove that a glass-first closed-loop household provisioning service can operate reliably enough, cleanly enough, and usefully enough in one dense residential environment to justify a larger pilot or seed-stage buildout.

## Chosen pilot environment

The first pilot environment is:

- one apartment-block cluster or housing cooperative

This environment is preferred because it offers:

- high stop density
- predictable recurring demand
- easier return collection
- lower route fragmentation
- a better chance of controlled pilot operations

This decision closes `P3.2`.

## Chosen pilot product scope

The first pilot product scope is:

- grocery staples and a tightly defined set of fridge-stable recurring goods

In scope for pilot one:

- sauces
- oils
- grains or similar dry staples where appropriate
- chilled prepared basics
- produce or recurring ingredients that fit the selected container set

Out of scope for pilot one:

- broad fresh-meat handling
- frozen goods
- high-fragility bakery assortments
- large household-general merchandise catalog breadth
- cosmetics or hygiene-dose modules as a primary pilot category

This decision closes `P3.3`.

## Chosen pilot container set

The pilot container SKUs are:

- `Storage-M`
- `Dose-M`

The pilot does not start with a third SKU.

This decision closes `P1.1`.

## Chosen closure architecture

The pilot closure direction is:

- storage modules: stainless screw-thread or quarter-turn clamp-minimal closure with removable silicone gasket
- dose modules: standardized screw-neck closure with removable silicone seal and optional tamper band where category requires it

The pilot default is to avoid complex clamp-heavy mechanisms unless testing later proves a clear advantage.

This decision closes `P1.2`.

## Chosen wash model

The pilot wash model is:

- centralized washing at one small depot or wash partner

This is preferred over distributed washing because it gives:

- one sanitation standard
- one inspection process
- simpler container-state control
- cleaner evidence on actual operating cost

This decision closes `P2.1`.

## Chosen business model

The pilot business model is:

- recurring household subscription
- scheduled weekly replenishment
- refundable household deposit
- service fee layered on top of merchandise

Default commercial assumptions remain:

- average weekly basket: `EUR 55`
- weekly service fee: `EUR 5`
- refundable deposit: `EUR 40`

## Chosen software scope

The pilot software scope is:

- household and subscription records
- pack planning
- route and stop execution
- container lifecycle tracking
- wash and inspection support
- billing and exception handling

Advanced demand learning remains secondary.

## Success metrics

The pilot should be treated as successful only if it shows most of the following:

- return compliance at or above `97%` within the target return window
- combined breakage and non-return below `1%` of container turns
- stable wash and recirculation workflow
- strong repeat usage by pilot households
- route density that makes operations look repeatable
- a user experience that is clearly better than ordinary shopping and ordinary disposable delivery

## Why this pilot is narrow on purpose

The purpose of the first pilot is not to prove every possible AllDone category.

The purpose is to prove:

- the loop
- the packaging
- the return behavior
- the wash process
- the operator workflow
- the basic household value proposition

This decision closes `P5.1`.
