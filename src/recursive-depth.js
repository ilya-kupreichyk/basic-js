const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth( arr ) {
  let deep = 1;
  let depth;

    for(let a of arr){
   if (Array.isArray(a)) {
     depth = this.calculateDepth(a)+1;
  }
  (depth > deep)? deep = depth: true;
}
return deep;
  }
};
