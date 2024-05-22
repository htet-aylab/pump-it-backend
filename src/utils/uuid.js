// const { v4: uuidv4 } = require('uuid');

const transactionId = () => {
  return `${Date.now()}`;
  // return uuidv4();
};

const invoiceId = () => {
  return `${Date.now()}`;
  // return uuidv4();
};

module.exports = { transactionId, invoiceId };
