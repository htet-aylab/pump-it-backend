const dateTimeDiffinDays = (startDateTime, endDateTime) => {
  if (!startDateTime || !endDateTime) return 0;
  const start = new Date(startDateTime);
  const end = new Date(endDateTime);
  const timeDiff = end.getTime() - start.getTime();
  return Math.round(timeDiff / (1000 * 3600 * 24));
};

const dateTimeFormat = (datetime, seprator = '/') => {
  const date = new Date(datetime);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hour = String(date.getHours()).padStart(2, '0');
  const minute = String(date.getMinutes()).padStart(2, '0');
  const second = String(date.getSeconds()).padStart(2, '0');

  return `${year}${seprator}${month}${seprator}${day} ${hour}:${minute}:${second}`;
};

const dateFormat = (datetime, seprator = '/') => {
  const date = new Date(datetime);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}${seprator}${month}${seprator}${day}`;
};

const addYears = (years = 1) => {
  const today = new Date();
  return new Date(today.getFullYear() + years, today.getMonth(), today.getDate());
};

module.exports = { dateTimeDiffinDays, dateFormat, dateTimeFormat, addYears };
