const httpStatus = require('http-status');
const Model = require('../models').User;
const ApiError = require('../utils/ApiError');

const create = async (body) => {
  return Model.create({ ...body });
};

const pagination = async (page, limit, sort, condition) => {
  return Model.pagination(page, limit, sort, condition);
};

const index = async (type) => {
  const query = {
    where: {
      deleted: false,
      type,
    },
    orderBy: {
      id: 'desc',
    },
  };

  return Model.findMany(query);
};

const getById = async (id, type) => {
  const query = {
    where: {
      id,
      type,
    },
  };

  return Model.findOne(query);
};

const updateById = async (id, body, type) => {
  const data = await getById(id, type);
  if (!data) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'No user found');
  }

  Object.assign(data, body);
  const queryAndData = {
    where: {
      id,
    },
    data,
  };
  return Model.update(queryAndData);
};

const deleteById = async (id, type) => {
  return updateById(id, { deleted: true }, type);
};


module.exports = {
  create,
  pagination,
  index,
  getById,
  updateById,
  deleteById
};
