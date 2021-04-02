'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

exports.UtilRoundType = void 0;
(function (UtilRoundType) {
    UtilRoundType[UtilRoundType["Up"] = 1] = "Up";
    UtilRoundType[UtilRoundType["Down"] = 2] = "Down";
    UtilRoundType[UtilRoundType["Round"] = 3] = "Round";
})(exports.UtilRoundType || (exports.UtilRoundType = {}));
/**
 * @param num
 * @param roundType
 * @param numCount
 * */
function fixedZero(num, numCount, roundType) {
    if (roundType === void 0) { roundType = exports.UtilRoundType.Round; }
    console.log("************************  fixed zero");
    console.log(num, numCount, roundType);
    var tempNumCount = Math.ceil(numCount);
    var newValue = Math.round(num);
    switch (roundType) {
        case exports.UtilRoundType.Up: {
            console.log("case Up");
            newValue = Math.ceil(num);
            break;
        }
        case exports.UtilRoundType.Down: {
            console.log("case Down");
            newValue = Math.floor(num);
            break;
        }
        default: {
            console.log("case default");
            newValue = Math.round(num);
            break;
        }
    }
    console.log("new value", newValue);
    var valueStr = newValue.toString();
    console.log("value str", valueStr);
    var numLen = valueStr.length;
    if (numLen <= tempNumCount) {
        return valueStr;
    }
    while (numLen < tempNumCount) {
        valueStr = "0" + valueStr;
        numLen++;
    }
    console.log("result - value str", valueStr);
    return valueStr;
}
function logPerson(person) {
    console.log("***********************");
    console.log("persion name is : ", person.name);
    console.log("persion age is : ", person.age);
}

exports.fixedZero = fixedZero;
exports.logPerson = logPerson;
