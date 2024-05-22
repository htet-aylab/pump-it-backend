const { PrismaClient } = require('@prisma/client');
const Model = require('../models').User;

const prisma = new PrismaClient();

const create = async (data) => {
  return prisma.users.create({ data });
};

const aggregate = async (options) => {
  return prisma.users.aggregate(options);
};

const pagination = async (page = 1, limit = 10, sort = 'desc', condition = {}) => {
  const totalRows = await aggregate({ _count: { _all: true }, where: { ...condition } });
  const totalCount = totalRows._count._all || 1;
  const offset = (page - 1) * limit;

  const whereClause = Object.entries(condition).reduce((clause, [key, value]) => {
    return `${clause} AND ${key} = ${value}`;
  }, '');

  const data = await prisma.$queryRawUnsafe(
    `SELECT id,wallet_address,createdAt,updatedAt FROM Users WHERE 1=1 ${whereClause} ORDER BY id ${sort.toLocaleUpperCase()} LIMIT ${limit} OFFSET ${offset}`
  );
  return { data, total_count: totalCount, page, limit };
};

const findMany = async (query) => {
  return prisma.users.findMany(query);
};

const findOne = async (query) => {
  return prisma.users.findUnique(query);
};

const findByWallet = async (wallet_address) => {
  const query = {
    where: {
      wallet_address,
    },
  };

  return prisma.users.findFirst(query);
};

const findFirst = async (query) => {
  return prisma.users.findFirst(query);
};

const update = async (queryAndData) => {
  return prisma.users.update(queryAndData);
};

const deleteOne = async (query) => {
  return prisma.users.delete(query);
};

module.exports = {
  create,
  pagination,
  aggregate,
  findMany,
  findOne,
  findFirst,
  update,
  findByWallet,
  deleteOne,
};
