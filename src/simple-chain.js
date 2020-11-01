const CustomError = require("../extensions/custom-error");

let chain = [];

const chainMaker = {
  getLength() {
    return chain.length;
  },
  addLink(value) {
    chain.push(value === null || typeof value === "undefined" ? "null" : value);
    return this;
  },
  removeLink(position) {
    position -= 1;
    if (
      !(
        Number.isInteger(position) &&
        position >= 0 &&
        position < this.getLength() - 1
      )
    ) {
      chain = [];
      throw new Error();
    }
    chain.splice(position, 1);
    return this;
  },
  reverseChain() {
    chain.reverse();
    return this;
  },
  finishChain() {
    let chainView = `( ${chain.join(" )~~( ")} )`;
    chain = [];
    return chainView;
  },
};

module.exports = chainMaker;
