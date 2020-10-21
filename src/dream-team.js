const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(!Array.isArray(members)) {
    return false;
  }
  let result = [];
  members.map(function(item) {
    if(typeof item === 'string') {
      result.push(item.trim()[0].toUpperCase());
    }
  });
  return result.sort().join('');
};
