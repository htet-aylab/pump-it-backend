const schedule = require('node-schedule');

const scheduleTaskAll = () => {
  process.on('SIGINT', () => {
    schedule.gracefulShutdown().then(() => process.exit(0));
  });
};

module.exports = { scheduleTaskAll };
