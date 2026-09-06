# AllDone

**AllDone removes grocery shopping by replacing it with continuous food supply.**

The value starts there, because grocery shopping is not one useful activity surrounded by a few inefficiencies; it is an entire repeated process built around keeping food in the home.

Food is selected again, bought again, carried again, packaged again, transported again, checked again, partly forgotten, partly spoiled, and then the same cycle starts over.

AllDone replaces that cycle with a managed supply loop that follows actual consumption closely enough for food to arrive because it is needed, not because somebody has gone shopping again.

That removes the supermarket trip itself, the repeated planning around it, the carrying, the interruptions, and the constant low-grade work of checking what ran out and deciding how much to buy next.

## The waste disappears with the shopping process

When supply follows actual consumption, the system no longer needs to depend on guessed household quantities and retail pack sizes, which is what allows stale food, spoilage, overbuying, forgotten food and avoidable food waste to be designed out of the loop rather than dealt with after the purchase.

Unavoidable food remains are separated from mixed household waste and returned as compost, with the system targeting complete recovery of food remains into the compost stream instead of sending organic matter to landfill.

Reusable containers remove the plastic and cardboard waste created by ordinary grocery packaging because the container remains part of the system after the food inside it is consumed.

Those containers are collected, industrially washed, refilled and returned to circulation, with reusable glass as the current planned default for the consumer-facing food container set where it is operationally suitable.

The return route therefore has value twice: it prevents the container from becoming waste and gives the next supply cycle a container that already exists.

## The logistics are replaced as well

Ordinary grocery supply spends transport twice: the retail system moves food through its own chain and households then perform millions of separate final collection trips themselves.

AllDone replaces those fragmented household trips with recurring supply-and-return routes that can be planned around actual demand instead of independent shopping events.

That removes the fossil-fuel spending and exhaust associated with grocery-shopping trips and gives the remaining logistics a much smaller, consolidated transport problem to solve without fossil-fuel operation.

The same consolidation removes repeated parking, stop-start driving, overlapping delivery movement and a large amount of low-value transport effort around food that was going to the same homes anyway.

## The economic value is larger than delivery

The relevant comparison is not AllDone versus a courier bringing one grocery order, because that preserves almost the entire system AllDone is meant to replace.

The relevant comparison is the full cost of grocery shopping, disposable food packaging, fragmented transport, household planning and carrying, food mismatch, spoilage, organic waste handling and repeated retail handling against the cost of reusable containers, washing, refill, consolidated delivery, return logistics and the software that coordinates the loop.

That matters because AllDone can create value in several places at once rather than needing one narrow margin to pay for the whole system.

Households recover time, attention, physical effort, transport spending and food that would otherwise be wasted.

Buildings and waste systems receive less packaging volume and less organic waste.

Suppliers gain clearer recurring demand and a tighter relationship between packed quantity and actual consumption.

The operator gains a recurring service whose value comes from removing costs and waste from the existing system rather than adding another transaction layer on top of them.

The central economic thesis is therefore that the incumbent grocery loop is wasteful enough for a well-run closed loop to be better overall even after the real costs of containers, washing, return logistics, breakage, refill operations and software are included.

## What already exists

The project already has a working early backend for household consumption profiles, quantity adjustment, schedule generation, reusable-container circulation, route/wash/billing workflows and local persistence, which means the coordination problem is already represented in executable software rather than existing only as a concept.

That software has value because the physical loop depends on knowing what each household normally consumes, what has to be packed next, which containers are out, which have returned, which have been washed and what each route has to carry in both directions.

The current implementation is still pre-pilot, so its value is evidence that the operating logic can be built and tested while the remaining uncertainty is concentrated where it belongs: the physical loop and its economics.

## What the pilot has to prove

The next useful proof is a small, dense live loop that measures how accurately consumption predicts supply, how much food waste actually disappears, how much packaging is avoided, how reliably containers return, how many cycles they survive, what washing costs, how much labor each household requires, how dense the routes need to be and what the full loop costs against the grocery system it replaces.

A small pilot has more value than a large speculative rollout because those measurements reveal which parts of the system improve with density and which parts need redesign before scale creates anything useful.

The immediate work is therefore to lock the first food/container set, finish the wash-and-return operating model, make the pilot economics defensible and complete only the software required to run that real loop.

The existing [pilot model](docs/PILOT_MODEL_AND_ASSUMPTIONS.md), [pilot unit economics](docs/PILOT_UNIT_ECONOMICS.md), [container system work](docs/container_material_system_spec.md), [wash and return model](docs/WASH_AND_RETURN_OPERATING_MODEL.md), [value model](docs/TOTAL_SYSTEM_VALUE_MODEL.md) and [categorized documentation](docs/README.md) exist to turn those claims into things that can be checked rather than merely asserted.

## The project value in one line

**AllDone removes grocery shopping, then removes the food waste, packaging waste, organic landfill, fossil-fuel spending and fragmented logistics that exist around that process because the process itself no longer needs to exist.**

## IP and verification

The IP and verification material protects the value of the work by preserving a public authorship and timestamp trail under the **IPClaim APC License v1.1** through [LICENSE.md](LICENSE.md) and [VERIFY.md](VERIFY.md).
