'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function fixedZero(val) {
    return val < 10 ? "0" + val : val;
}
function logPerson(person) {
    console.log("***********************");
    console.log("persion name is : ", person.name);
    console.log("persion age is : ", person.age);
}

exports.fixedZero = fixedZero;
exports.logPerson = logPerson;
