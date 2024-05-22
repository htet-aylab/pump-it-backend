const bcrypt = require('bcryptjs');

exports.hash = async (password) => {
  return bcrypt.hash(password, 8);
};

exports.match = async (passwordPlain, passwordHash) => {
  return bcrypt.compare(passwordPlain, passwordHash);
};
