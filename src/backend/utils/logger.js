function formatEntry(level, message, meta = undefined) {
  return {
    level,
    message,
    timestamp: new Date().toISOString(),
    ...(meta !== undefined ? { meta } : {})
  };
}

module.exports = {
  info(message, meta) {
    console.log(JSON.stringify(formatEntry('info', message, meta)));
  },

  error(message, meta) {
    console.error(JSON.stringify(formatEntry('error', message, meta)));
  },

  warn(message, meta) {
    console.warn(JSON.stringify(formatEntry('warn', message, meta)));
  }
};
