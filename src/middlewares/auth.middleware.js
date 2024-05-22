const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const service = require('../services').tokenService;

const tokenVerify = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw new ApiError(httpStatus.BAD_REQUEST, 'Unauthorized access');
    }

    const token = authHeader.split(' ').pop();
    const { data } = await service.jwtVerify(token);
    req.auth = { advertiserId: data.id, advertiserName: data.name, advertiserEmail: data.email };

    return next();
  } catch (err) {
    return next(new ApiError(httpStatus.UNAUTHORIZED, 'Unauthorized access'));
  }
};

module.exports = { tokenVerify };
