const JsonFileStore = require('../utils/JsonFileStore');

class AllDoneOperationsService {
  constructor() {
    this.store = new JsonFileStore('operations.json');
    this.households = new Map();
    this.subscriptions = new Map();
    this.containers = new Map();
    this.packPlans = new Map();
    this.routes = new Map();
    this.washBatches = new Map();
    this.billingAccounts = new Map();
    this.metrics = {
      generatedPackPlans: 0,
      generatedRoutes: 0,
      processedReturns: 0,
      washBatchesCompleted: 0,
      billingEventsRecorded: 0
    };
    this.loadState();
  }

  seedDemoData() {
    if (this.households.size > 0) {
      return;
    }

    const householdA = this.createHousehold({
      householdId: 'hh_001',
      name: 'North Courtyard 12A',
      address: 'North Courtyard Block, 12A',
      members: 2,
      environmentType: 'apartment_block',
      dietaryConstraints: ['vegetarian'],
      handlingConstraints: ['leave_at_door'],
      pilotCluster: 'north_courtyard'
    });

    const householdB = this.createHousehold({
      householdId: 'hh_002',
      name: 'North Courtyard 14C',
      address: 'North Courtyard Block, 14C',
      members: 3,
      environmentType: 'apartment_block',
      dietaryConstraints: [],
      handlingConstraints: ['return_pickup_required'],
      pilotCluster: 'north_courtyard'
    });

    this.createSubscription({
      subscriptionId: 'sub_001',
      householdId: householdA.householdId,
      cadence: 'weekly',
      deliveryDay: 'thursday',
      serviceFee: 5,
      depositBalance: 40,
      planItems: [
        { sku: 'olive_oil', description: 'Olive oil', quantity: 1, unit: 'Dose-M', category: 'dose' },
        { sku: 'prepared_salad_base', description: 'Prepared salad base', quantity: 2, unit: 'Storage-M', category: 'storage' }
      ]
    });

    this.createSubscription({
      subscriptionId: 'sub_002',
      householdId: householdB.householdId,
      cadence: 'weekly',
      deliveryDay: 'thursday',
      serviceFee: 5,
      depositBalance: 40,
      planItems: [
        { sku: 'tomato_sauce', description: 'Tomato sauce', quantity: 2, unit: 'Dose-M', category: 'dose' },
        { sku: 'prepared_grain_box', description: 'Prepared grain box', quantity: 2, unit: 'Storage-M', category: 'storage' }
      ]
    });

    this.recordBillingEvent({
      householdId: householdA.householdId,
      type: 'deposit_collected',
      amount: 40,
      notes: 'Initial pilot deposit'
    });

    this.recordBillingEvent({
      householdId: householdB.householdId,
      type: 'deposit_collected',
      amount: 40,
      notes: 'Initial pilot deposit'
    });

    this.persistState();
  }

  createHousehold(data = {}) {
    const householdId = data.householdId || this.buildId('hh');
    if (this.households.has(householdId)) {
      throw new Error(`Household ${householdId} already exists`);
    }

    const household = {
      householdId,
      name: data.name || householdId,
      address: data.address || '',
      members: data.members || 1,
      environmentType: data.environmentType || 'apartment_block',
      dietaryConstraints: data.dietaryConstraints || [],
      handlingConstraints: data.handlingConstraints || [],
      pilotCluster: data.pilotCluster || 'pilot_cluster_01',
      status: data.status || 'active',
      createdAt: new Date(),
      updatedAt: new Date()
    };

    this.households.set(householdId, household);
    this.ensureBillingAccount(householdId);
    this.persistState();

    return household;
  }

  listHouseholds() {
    return Array.from(this.households.values());
  }

  getHousehold(householdId) {
    return this.households.get(householdId);
  }

  createSubscription(data = {}) {
    const household = this.getHousehold(data.householdId);
    if (!household) {
      throw new Error(`Household ${data.householdId} not found`);
    }

    const subscriptionId = data.subscriptionId || this.buildId('sub');
    if (this.subscriptions.has(subscriptionId)) {
      throw new Error(`Subscription ${subscriptionId} already exists`);
    }

    const subscription = {
      subscriptionId,
      householdId: data.householdId,
      cadence: data.cadence || 'weekly',
      deliveryDay: data.deliveryDay || 'thursday',
      status: data.status || 'active',
      serviceFee: data.serviceFee ?? 5,
      depositBalance: data.depositBalance ?? 40,
      planItems: (data.planItems || []).map(item => ({
        sku: item.sku,
        description: item.description || item.sku,
        quantity: item.quantity ?? 1,
        unit: item.unit || 'Storage-M',
        category: item.category || (item.unit === 'Dose-M' ? 'dose' : 'storage')
      })),
      skipDates: data.skipDates || [],
      createdAt: new Date(),
      updatedAt: new Date()
    };

    this.subscriptions.set(subscriptionId, subscription);
    this.ensureBillingAccount(subscription.householdId);
    this.persistState();

    return subscription;
  }

  listSubscriptions() {
    return Array.from(this.subscriptions.values());
  }

  getSubscription(subscriptionId) {
    return this.subscriptions.get(subscriptionId);
  }

  generatePackPlan(targetDateInput) {
    const targetDate = this.normalizeDate(targetDateInput);
    const packPlanId = this.buildId('pack');
    const items = [];

    this.listSubscriptions()
      .filter(subscription => subscription.status === 'active')
      .forEach(subscription => {
        const household = this.getHousehold(subscription.householdId);
        subscription.planItems.forEach(planItem => {
          for (let count = 0; count < planItem.quantity; count += 1) {
            const container = this.createContainer({
              containerType: planItem.unit,
              householdId: household.householdId,
              assignedDate: targetDate,
              currentState: 'assigned'
            });

            items.push({
              packItemId: this.buildId('pack_item'),
              householdId: household.householdId,
              householdName: household.name,
              subscriptionId: subscription.subscriptionId,
              sku: planItem.sku,
              description: planItem.description,
              containerSku: planItem.unit,
              containerId: container.containerId,
              category: planItem.category,
              quantity: 1,
              fulfillmentState: 'planned'
            });
          }
        });
      });

    const packPlan = {
      packPlanId,
      targetDate,
      generatedAt: new Date(),
      items,
      totalsByContainerSku: this.groupCounts(items, 'containerSku'),
      totalsByHousehold: this.groupCounts(items, 'householdId')
    };

    this.packPlans.set(packPlanId, packPlan);
    this.metrics.generatedPackPlans += 1;
    this.persistState();

    return packPlan;
  }

  getPackPlan(packPlanId) {
    return this.packPlans.get(packPlanId);
  }

  listPackPlans() {
    return Array.from(this.packPlans.values());
  }

  generateRouteManifest(targetDateInput, options = {}) {
    const targetDate = this.normalizeDate(targetDateInput);
    const packPlan = options.packPlanId ? this.getPackPlan(options.packPlanId) : this.findPackPlanByDate(targetDate);
    if (!packPlan) {
      throw new Error(`No pack plan found for ${targetDate}`);
    }

    const groupedStops = new Map();
    packPlan.items.forEach(item => {
      if (!groupedStops.has(item.householdId)) {
        const household = this.getHousehold(item.householdId);
        groupedStops.set(item.householdId, {
          stopId: this.buildId('stop'),
          householdId: household.householdId,
          householdName: household.name,
          address: household.address,
          deliveryWindow: '08:00-12:00',
          items: [],
          expectedReturns: 0,
          status: 'planned'
        });
      }

      groupedStops.get(item.householdId).items.push(item);
    });

    const stops = Array.from(groupedStops.values()).sort((left, right) => left.householdName.localeCompare(right.householdName));
    const route = {
      routeId: this.buildId('route'),
      targetDate,
      packPlanId: packPlan.packPlanId,
      generatedAt: new Date(),
      stops: stops.map((stop, index) => ({
        ...stop,
        stopOrder: index + 1
      })),
      status: 'planned'
    };

    this.routes.set(route.routeId, route);
    this.metrics.generatedRoutes += 1;
    this.persistState();

    return route;
  }

  listRoutes() {
    return Array.from(this.routes.values());
  }

  getRoute(routeId) {
    return this.routes.get(routeId);
  }

  completeRouteStop(routeId, stopId, data = {}) {
    const route = this.getRoute(routeId);
    if (!route) {
      throw new Error(`Route ${routeId} not found`);
    }

    const stop = route.stops.find(candidate => candidate.stopId === stopId);
    if (!stop) {
      throw new Error(`Stop ${stopId} not found`);
    }

    stop.status = data.status || 'completed';
    stop.completedAt = new Date();
    stop.returnedContainerIds = data.returnedContainerIds || [];
    stop.notes = data.notes || '';
    this.persistState();

    return {
      routeId,
      stop
    };
  }

  createContainer(data = {}) {
    const containerId = data.containerId || this.buildId('ctr');
    const container = {
      containerId,
      containerType: data.containerType || 'Storage-M',
      householdId: data.householdId || null,
      currentState: data.currentState || 'ready_to_refill',
      assignedDate: data.assignedDate ? new Date(data.assignedDate) : null,
      timesReused: data.timesReused || 0,
      condition: data.condition || 'good',
      currentLocation: data.currentLocation || 'depot',
      lastWashBatchId: data.lastWashBatchId || null,
      createdAt: new Date(),
      updatedAt: new Date()
    };

    this.containers.set(containerId, container);
    this.persistState();
    return container;
  }

  listContainers(filters = {}) {
    return Array.from(this.containers.values()).filter(container => {
      if (filters.state && container.currentState !== filters.state) {
        return false;
      }

      if (filters.householdId && container.householdId !== filters.householdId) {
        return false;
      }

      return true;
    });
  }

  getContainer(containerId) {
    return this.containers.get(containerId);
  }

  processReturnedContainers(data = {}) {
    const returnedContainerIds = data.returnedContainerIds || [];
    if (returnedContainerIds.length === 0) {
      throw new Error('returnedContainerIds is required');
    }

    const processed = returnedContainerIds.map(containerId => {
      const container = this.getContainer(containerId);
      if (!container) {
        throw new Error(`Container ${containerId} not found`);
      }

      container.currentState = 'returned_dirty';
      container.currentLocation = 'dirty_intake';
      container.returnedAt = new Date();
      container.condition = data.condition || container.condition || 'good';
      container.updatedAt = new Date();

      return container;
    });

    this.metrics.processedReturns += processed.length;
    this.persistState();

    return {
      processedCount: processed.length,
      containers: processed
    };
  }

  createWashBatch(data = {}) {
    const containerIds = data.containerIds || [];
    if (containerIds.length === 0) {
      throw new Error('containerIds is required');
    }

    const washBatchId = this.buildId('wash');
    const containers = containerIds.map(containerId => {
      const container = this.getContainer(containerId);
      if (!container) {
        throw new Error(`Container ${containerId} not found`);
      }

      container.currentState = 'washing';
      container.currentLocation = 'wash_line';
      container.lastWashBatchId = washBatchId;
      container.updatedAt = new Date();
      return container;
    });

    const washBatch = {
      washBatchId,
      createdAt: new Date(),
      containerIds,
      status: 'washing',
      notes: data.notes || ''
    };

    this.washBatches.set(washBatchId, washBatch);
    this.persistState();

    return {
      washBatch,
      containers
    };
  }

  inspectWashBatch(washBatchId, data = {}) {
    const washBatch = this.washBatches.get(washBatchId);
    if (!washBatch) {
      throw new Error(`Wash batch ${washBatchId} not found`);
    }

    washBatch.status = 'inspection';
    washBatch.inspectedAt = new Date();
    washBatch.inspectionNotes = data.inspectionNotes || '';
    washBatch.failedContainerIds = data.failedContainerIds || [];

    washBatch.containerIds.forEach(containerId => {
      const container = this.getContainer(containerId);
      if (!container) {
        return;
      }

      if (washBatch.failedContainerIds.includes(containerId)) {
        container.currentState = 'damaged_hold';
        container.currentLocation = 'quarantine';
      } else {
        container.currentState = 'inspection_hold';
        container.currentLocation = 'clean_inspection';
      }

      container.updatedAt = new Date();
    });

    this.persistState();

    return washBatch;
  }

  releaseWashBatch(washBatchId) {
    const washBatch = this.washBatches.get(washBatchId);
    if (!washBatch) {
      throw new Error(`Wash batch ${washBatchId} not found`);
    }

    washBatch.status = 'completed';
    washBatch.completedAt = new Date();

    washBatch.containerIds.forEach(containerId => {
      const container = this.getContainer(containerId);
      if (!container || container.currentState === 'damaged_hold') {
        return;
      }

      container.currentState = 'ready_to_refill';
      container.currentLocation = 'clean_inventory';
      container.householdId = null;
      container.timesReused += 1;
      container.cleanedAt = new Date();
      container.updatedAt = new Date();
    });

    this.metrics.washBatchesCompleted += 1;
    this.persistState();
    return washBatch;
  }

  listWashBatches() {
    return Array.from(this.washBatches.values());
  }

  ensureBillingAccount(householdId) {
    if (!this.billingAccounts.has(householdId)) {
      this.billingAccounts.set(householdId, {
        householdId,
        balance: 0,
        depositBalance: 0,
        events: []
      });
    }

    return this.billingAccounts.get(householdId);
  }

  recordBillingEvent(data = {}) {
    const account = this.ensureBillingAccount(data.householdId);
    const event = {
      billingEventId: this.buildId('bill'),
      type: data.type || 'service_fee',
      amount: data.amount ?? 0,
      notes: data.notes || '',
      createdAt: new Date()
    };

    if (event.type.includes('deposit')) {
      account.depositBalance += event.amount;
    } else {
      account.balance += event.amount;
    }

    account.events.push(event);
    this.metrics.billingEventsRecorded += 1;
    this.persistState();

    return {
      account,
      event
    };
  }

  listBillingAccounts() {
    return Array.from(this.billingAccounts.values());
  }

  getOperationsDashboard() {
    const activeSubscriptions = this.listSubscriptions().filter(subscription => subscription.status === 'active').length;
    const containerStates = {};

    this.listContainers().forEach(container => {
      containerStates[container.currentState] = (containerStates[container.currentState] || 0) + 1;
    });

    return {
      households: this.households.size,
      activeSubscriptions,
      packPlans: this.packPlans.size,
      routes: this.routes.size,
      washBatches: this.washBatches.size,
      billingAccounts: this.billingAccounts.size,
      containerStates,
      metrics: this.metrics
    };
  }

  buildId(prefix) {
    return `${prefix}_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
  }

  normalizeDate(value) {
    const date = value ? new Date(value) : new Date();
    if (Number.isNaN(date.getTime())) {
      throw new Error('Invalid date');
    }

    return date.toISOString().slice(0, 10);
  }

  groupCounts(items, key) {
    return items.reduce((totals, item) => {
      const bucket = item[key];
      totals[bucket] = (totals[bucket] || 0) + 1;
      return totals;
    }, {});
  }

  findPackPlanByDate(targetDate) {
    return this.listPackPlans().find(packPlan => packPlan.targetDate === targetDate);
  }

  loadState() {
    const state = this.store.load(null);
    if (!state) {
      return;
    }

    this.households = new Map((state.households || []).map(item => [item.householdId, this.reviveRecord(item)]));
    this.subscriptions = new Map((state.subscriptions || []).map(item => [item.subscriptionId, this.reviveRecord(item)]));
    this.containers = new Map((state.containers || []).map(item => [item.containerId, this.reviveRecord(item)]));
    this.packPlans = new Map((state.packPlans || []).map(item => [item.packPlanId, this.reviveRecord(item)]));
    this.routes = new Map((state.routes || []).map(item => [item.routeId, this.reviveRecord(item)]));
    this.washBatches = new Map((state.washBatches || []).map(item => [item.washBatchId, this.reviveRecord(item)]));
    this.billingAccounts = new Map((state.billingAccounts || []).map(item => [item.householdId, this.reviveRecord(item)]));
    this.metrics = state.metrics || this.metrics;
  }

  persistState() {
    this.store.save({
      households: this.listHouseholds(),
      subscriptions: this.listSubscriptions(),
      containers: this.listContainers(),
      packPlans: this.listPackPlans(),
      routes: this.listRoutes(),
      washBatches: this.listWashBatches(),
      billingAccounts: this.listBillingAccounts(),
      metrics: this.metrics
    });
  }

  reviveRecord(record) {
    if (Array.isArray(record)) {
      return record.map(item => this.reviveRecord(item));
    }

    if (!record || typeof record !== 'object') {
      return record;
    }

    const revived = {};
    Object.entries(record).forEach(([key, value]) => {
      if (typeof value === 'string' && /^\d{4}-\d{2}-\d{2}T/.test(value)) {
        revived[key] = new Date(value);
      } else {
        revived[key] = this.reviveRecord(value);
      }
    });

    return revived;
  }
}

module.exports = AllDoneOperationsService;
