const findSlot = (datetime = null) => {
  const hours = new Date(datetime).getHours();
  let slot = '';

  if (hours >= 0 && hours < 6) {
    slot = '24:00 - 06:00';
  } else if (hours >= 6 && hours < 12) {
    slot = '06:00 - 12:0';
  } else if (hours >= 12 && hours < 18) {
    slot = '12:00 - 18:00';
  } else if (hours >= 18 && hours <= 23) {
    slot = '18:00 - 24:00';
  }

  return slot;
};

module.exports = { findSlot };
