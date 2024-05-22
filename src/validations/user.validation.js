const Joi = require('joi');

const create = {
  body: Joi.object().keys({
    wallet_address: Joi.string().required(),
  }),
};

module.exports = {
    create,
};
  