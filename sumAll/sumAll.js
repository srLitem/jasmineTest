const sumAll = function (startNum, endNum) {
    let result = 0;
    if (!(typeof startNum == "number") || !(typeof endNum == "number")
        || (startNum < 0) || (endNum < 0)) {
        return 'ERROR';

    } else if (startNum < endNum) {
        for (let i = startNum; i <= endNum; i++) {
            result += i;
        }
    } else if (startNum > endNum) {
        for (let i = endNum; i <= startNum; i++) {
            result += i;
        }
    }

    return result;
}



module.exports = sumAll
