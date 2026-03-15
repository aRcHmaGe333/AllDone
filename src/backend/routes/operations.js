const express = require('express');
const AllDoneOperationsService = require('../services/AllDoneOperationsService');
const logger = require('../utils/logger');

const router = express.Router();
const operationsService = new AllDoneOperationsService();

function parseDateOrUndefined(value) {
  if (!value) {
    return undefined;
  }

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    throw new Error('Invalid date');
  }

  return date.toISOString();
}

router.get('/', (req, res) => {
  res.json({
    service: 'AllDone operations prototype',
    status: 'prototype',
    endpoints: [
      'GET /api/operations/households',
      'POST /api/operations/households',
      'GET /api/operations/subscriptions',
      'POST /api/operations/subscriptions',
      'POST /api/operations/pack-plans/generate',
      'POST /api/operations/routes/generate',
      'POST /api/operations/returns/process',
      'POST /api/operations/wash-batches',
      'POST /api/operations/billing/events',
      'GET /api/operations/dashboard'
    ]
  });
});

router.get('/households', (req, res) => {
  res.json({
    households: operationsService.listHouseholds()
  });
});

router.post('/households', (req, res) => {
  try {
    const household = operationsService.createHousehold(req.body);
    logger.info(`Created household ${household.householdId}`);
    res.status(201).json(household);
  } catch (error) {
    logger.error('Error creating household:', error);
    res.status(400).json({
      error: 'Bad Request',
      message: error.message
    });
  }
});

router.get('/households/:householdId', (req, res) => {
  const household = operationsService.getHousehold(req.params.householdId);
  if (!household) {
    return res.status(404).json({
      error: 'Not Found',
      message: `Household ${req.params.householdId} not found`
    });
  }

  res.json(household);
});

router.get('/subscriptions', (req, res) => {
  res.json({
    subscriptions: operationsService.listSubscriptions()
  });
});

router.post('/subscriptions', (req, res) => {
  try {
    const subscription = operationsService.createSubscription(req.body);
    logger.info(`Created subscription ${subscription.subscriptionId}`);
    res.status(201).json(subscription);
  } catch (error) {
    logger.error('Error creating subscription:', error);
    res.status(400).json({
      error: 'Bad Request',
      message: error.message
    });
  }
});

router.post('/pack-plans/generate', (req, res) => {
  try {
    const packPlan = operationsService.generatePackPlan(parseDateOrUndefined(req.body.targetDate));
    logger.info(`Generated pack plan ${packPlan.packPlanId}`);
    res.json(packPlan);
  } catch (error) {
    logger.error('Error generating pack plan:', error);
    res.status(400).json({
      error: 'Bad Request',
      message: error.message
    });
  }
});

router.get('/pack-plans', (req, res) => {
  res.json({
    packPlans: operationsService.listPackPlans()
  });
});

router.get('/pack-plans/:packPlanId', (req, res) => {
  const packPlan = operationsService.getPackPlan(req.params.packPlanId);
  if (!packPlan) {
    return res.status(404).json({
      error: 'Not Found',
      message: `Pack plan ${req.params.packPlanId} not found`
    });
  }

  res.json(packPlan);
});

router.post('/routes/generate', (req, res) => {
  try {
    const route = operationsService.generateRouteManifest(parseDateOrUndefined(req.body.targetDate), {
      packPlanId: req.body.packPlanId
    });
    logger.info(`Generated route ${route.routeId}`);
    res.json(route);
  } catch (error) {
    logger.error('Error generating route:', error);
    res.status(400).json({
      error: 'Bad Request',
      message: error.message
    });
  }
});

router.get('/routes', (req, res) => {
  res.json({
    routes: operationsService.listRoutes()
  });
});

router.get('/routes/:routeId', (req, res) => {
  const route = operationsService.getRoute(req.params.routeId);
  if (!route) {
    return res.status(404).json({
      error: 'Not Found',
      message: `Route ${req.params.routeId} not found`
    });
  }

  res.json(route);
});

router.post('/routes/:routeId/stops/:stopId/complete', (req, res) => {
  try {
    const result = operationsService.completeRouteStop(req.params.routeId, req.params.stopId, req.body);
    logger.info(`Completed route stop ${req.params.stopId}`);
    res.json(result);
  } catch (error) {
    logger.error('Error completing route stop:', error);
    res.status(400).json({
      error: 'Bad Request',
      message: error.message
    });
  }
});

router.get('/containers', (req, res) => {
  res.json({
    containers: operationsService.listContainers({
      state: req.query.state,
      householdId: req.query.householdId
    })
  });
});

router.get('/containers/:containerId', (req, res) => {
  const container = operationsService.getContainer(req.params.containerId);
  if (!container) {
    return res.status(404).json({
      error: 'Not Found',
      message: `Container ${req.params.containerId} not found`
    });
  }

  res.json(container);
});

router.post('/returns/process', (req, res) => {
  try {
    const result = operationsService.processReturnedContainers(req.body);
    logger.info(`Processed ${result.processedCount} returned containers`);
    res.json(result);
  } catch (error) {
    logger.error('Error processing returned containers:', error);
    res.status(400).json({
      error: 'Bad Request',
      message: error.message
    });
  }
});

router.post('/wash-batches', (req, res) => {
  try {
    const result = operationsService.createWashBatch(req.body);
    logger.info(`Created wash batch ${result.washBatch.washBatchId}`);
    res.status(201).json(result);
  } catch (error) {
    logger.error('Error creating wash batch:', error);
    res.status(400).json({
      error: 'Bad Request',
      message: error.message
    });
  }
});

router.get('/wash-batches', (req, res) => {
  res.json({
    washBatches: operationsService.listWashBatches()
  });
});

router.post('/wash-batches/:washBatchId/inspect', (req, res) => {
  try {
    const washBatch = operationsService.inspectWashBatch(req.params.washBatchId, req.body);
    logger.info(`Inspected wash batch ${washBatch.washBatchId}`);
    res.json(washBatch);
  } catch (error) {
    logger.error('Error inspecting wash batch:', error);
    res.status(400).json({
      error: 'Bad Request',
      message: error.message
    });
  }
});

router.post('/wash-batches/:washBatchId/release', (req, res) => {
  try {
    const washBatch = operationsService.releaseWashBatch(req.params.washBatchId);
    logger.info(`Released wash batch ${washBatch.washBatchId}`);
    res.json(washBatch);
  } catch (error) {
    logger.error('Error releasing wash batch:', error);
    res.status(400).json({
      error: 'Bad Request',
      message: error.message
    });
  }
});

router.get('/billing/accounts', (req, res) => {
  res.json({
    accounts: operationsService.listBillingAccounts()
  });
});

router.post('/billing/events', (req, res) => {
  try {
    const result = operationsService.recordBillingEvent(req.body);
    logger.info(`Recorded billing event ${result.event.billingEventId}`);
    res.status(201).json(result);
  } catch (error) {
    logger.error('Error recording billing event:', error);
    res.status(400).json({
      error: 'Bad Request',
      message: error.message
    });
  }
});

router.get('/dashboard', (req, res) => {
  res.json(operationsService.getOperationsDashboard());
});

if (process.env.ALLDONE_SAMPLE_DATA === 'true') {
  operationsService.seedDemoData();
}

module.exports = router;
