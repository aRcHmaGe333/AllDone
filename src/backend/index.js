const express = require('express');
const distributionRouter = require('./routes/distribution');
const operationsRouter = require('./routes/operations');

const app = express();
const port = process.env.PORT || 3100;

app.use(express.json());

app.get('/health', (req, res) => {
  res.json({
    service: 'AllDone prototype API',
    status: 'ok',
    timestamp: new Date().toISOString()
  });
});

app.get('/', (req, res) => {
  res.json({
    service: 'AllDone prototype API',
    status: 'prototype',
    docs: {
      overview: 'docs/INVESTOR_OVERVIEW.md',
      architecture: 'docs/ARCHITECTURE_OVERVIEW.md'
    },
    endpoints: {
      health: '/health',
      distribution: '/api/distribution',
      operations: '/api/operations'
    }
  });
});

app.use('/api/distribution', distributionRouter);
app.use('/api/operations', operationsRouter);

const server = app.listen(port, () => {
  console.log(`AllDone prototype API listening on port ${port}`);
});

server.on('error', (error) => {
  if (error.code === 'EADDRINUSE') {
    console.error(`Port ${port} is already in use. Set PORT to another value and retry.`);
    process.exit(1);
  }

  throw error;
});
