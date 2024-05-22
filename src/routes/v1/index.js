const express = require('express');
const authMiddleware = require('../../middlewares/auth.middleware');
const config = require('../../config/config');
const userRoute = require('./user.route');

const router = express.Router();

const defaultRoutes = [
  { path: '/users', route: userRoute }
];

const protectedRoute = [
  
];

const devRoutes = [
  // routes available only in development mode
];

router.get('/', async (req, res) => {
  res.send({ status: 0, message: 'Hello Api V1! Pump It !' });
});

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

protectedRoute.forEach((route) => {
  router.use(route.path, authMiddleware.tokenVerify, route.route);
});

/* istanbul ignore next */
if (config.env === 'development') {
  devRoutes.forEach((route) => {
    router.use(route.path, route.route);
  });
}

module.exports = router;
