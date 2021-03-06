const CustomError = require("../extensions/custom-error");

const chainMaker = {
  getLength() {
    return chainMaker.length;
  },
  addLink(value) {
    return `( ${value} )`;
  },
  removeLink(position) {
    
  },
  reverseChain() {
    throw new CustomError('Not implemented');
    // remove line with error and write your code here
  },
  finishChain() {
    throw new CustomError('Not implemented');
    // remove line with error and write your code here
  }
};

module.exports = chainMaker;
