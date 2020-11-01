const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options ) {

str = String(str);
let repeatTimes = options.repeatTimes;
let separator = options.separator;
let addition = options.addition;
let additionRepeatTimes = options.additionRepeatTimes;
let additionSeparator = options.additionSeparator;
let res = [];
let res2 = [];
let addRes = '';
addition = String(addition);

  (separator)?true:separator = '+';
  (additionSeparator)?true:additionSeparator = '|';
  if(additionSeparator&&options.additionSeparator!=null)
   {
 for (let i = 0; i <= additionRepeatTimes-1; i++) {
  if(i==additionRepeatTimes-1) {
      addRes+=String(addition);
      break;
  }
     addRes += String(addition+additionSeparator);
 }
}

else {
  for (let i = 0; i <= additionRepeatTimes-1; i++) {
    addRes += String(addition);
  }
}

if(!additionRepeatTimes&&additionSeparator&&options.additionSeparator!=null) {
      addRes += String(addition);
}

res.push(str+addRes);
for( let i of res) {
for (let c = 0; c <= repeatTimes-1; c++) {
  res2.push(i);
}
if(!repeatTimes) {
  res2.push(i)
}
}
 return res2.join(separator);
};
  
