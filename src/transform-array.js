const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw new Error();
  let result = [];
  let cmd = false;
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case "--discard-next":
        cmd = true;
        i++;
        break;
      case "--discard-prev":
        !cmd && result.pop();
        cmd = true;
        break;
      case "--double-next":
        cmd = true;
        i + 1 < arr.length && result.push(arr[i + 1]);
        break;
      case "--double-prev":
        !cmd && i > 0 && result.push(arr[i - 1]);
        cmd = true;
        break;
      default:
        cmd = false;
        result.push(arr[i]);
    }
  }
  return result;
};
