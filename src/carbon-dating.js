const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity ) {
    let age = 0;
    if (typeof sampleActivity ==='string' && sampleActivity && +sampleActivity && +sampleActivity > 0 && +sampleActivity <= 15)
    {
        const k = 0.693 / HALF_LIFE_PERIOD;
        age = Math.log(MODERN_ACTIVITY / +sampleActivity) / k;
        return Math.ceil(age);
    }
    else 
        return false;
};
