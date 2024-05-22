const express = require('express');
const validate = require('../../middlewares/validate');
const validation = require('../../validations/').userValidation;
const controller = require('../../controllers/').userController;

const router = express.Router();

router.route('/').post(validate(validation.create), controller.create);

module.exports = router;
