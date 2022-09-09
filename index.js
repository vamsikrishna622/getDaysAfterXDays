var addDays = require("date-fns/addDays");
let getDateAfterXDays = function (days) {
  let newDate = addDays(new Date(2020, 07, 22), days);
  return `${newDate.getDate()}-${
    newDate.getMonth() + 1
  }-${newDate.getFullYear()}`;
};
module.exports = getDateAfterXDays;
