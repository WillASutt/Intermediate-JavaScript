
// PART ONE:

// doubleValues:
function doubleValues(arr) {
    const doubledValues = [];
    arr.forEach(function(val) {
        doubledValues.push(val * 2);
    });
    return doubledValues;
}
doubleValues([1, 2, 3])

// onlyEvenValues:
function onlyEvenValues(arr) {
    const evenValues = [];
    arr.forEach(function(val) {
        if (val % 2 === 0) {
            evenValues.push(val);
        }
    });
    return evenValues;
}
onlyEvenValues([5,1,2,3,10])

// showFirstAndLast:
function showFirstAndLast(arr) {
    const firstAndLast = [];
    arr.forEach(function(str) {
        firstAndLast.push(str[0] + str[str.length - 1]);
    });
    console.log(firstAndLast);
}
showFirstAndLast(["hi", "goodbye", "smile"])

// addKeyAndValue:
function addKeyAndValue(arr, key, value) {
    arr.forEach(function(val) {
        val[key] = value;
    });
    return arr;
}

// vowelCount:
function vowelCount(str) {
    let vowelArray = str.split("");
    let vowelObj = {};
    const vowels = "aeiou";

    vowelArray.forEach(function(letter) {
        let lowerCasedL = letter.toLowerCase();
        if (vowels.includes(lowerCasedL)) {
            if (vowelObj[lowerCasedL]) {
                vowelObj[lowerCasedL]++;
            }
            else {
                vowelObj[lowerCasedL] = 1;
            }
        }
    });
    console.log(vowelObj);
}
vowelCount("Elliie")

// PART TWO:

// doubleValuesWithMap:
function doubleValuesWithMap(arr) {
    return arr.map(function(val) {
        return val * 2;
    });
}

// extractKey:
function extractKey(arr, key) {
    return arr.map(function(val) {
        return val[key];
    });
}

// filterByValue:
function filterByValue(arr, key) {
    return arr.filter(function(obj) {
        return obj[key] === "isCatOwner";
    });
}