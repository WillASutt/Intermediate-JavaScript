
// Task 1:
const coordinates = {x: 34, y: 42, z: 67};

const {x, y} = coordinates;
console.log(x, y);


// Task 2:
const locations = {
    first: "Cave of Wonders",
    second: "Lake of Mystery",
    third: "Mount of Ages",
    fourth: "Desert of Shadows"
};

const {first, second, ...remaining} = locations;
console.log(first, second, remaining);


// Task 3:
const doorCode = {
    upper: "Alpha",
    lower: "Omega"
};

const {upper, middle = remaining.third, lower} = doorCode;
console.log(upper, middle, lower);


// Task 4:
const riddle = {
    ancientWord: "Sphinx",
    modernWord: "Cat"
};

const {ancientWord: translation} = riddle;
console.log(translation);


// Task 5:
const elements = ["Fire", "Water", "Earth", "Air"];

const [firstElement, secondElement] = elements;
console.log(firstElement, secondElement);


// Task 6:
const stones = [1, 2, 3, 4, 5, 6];

const [stone1,,,,, stone6] = stones;
console.log(stone1, stone6);


// Task 7:
const shadows = ["Darkness", "Silence", "Whisper", "Echo"];

const [visibleShadow, ...hiddenShadows] = shadows;
console.log(visibleShadow, hiddenShadows);


// Task 8:
const hiddenPath = {
    direction: "North",
    distance: "20 miles"
};

function revealPath({direction, distance}) {
    console.log(direction, distance);
}
revealPath(hiddenPath)


// Task 9:
const ingredients = {};
function mixPotion({ingredient1 = "Water", ingredient2 = "Fireflower"}) {
    console.log(ingredient1, ingredient2);
}
mixPotion(ingredients)


// Task 10:
const wiseOwlsList = ["Fire", "Wind", "Tree", "Fish"];

function castSpell([ing1, ing2]) {
    console.log(`I cast ${ing1} and ${ing2} on you!!!`);
}
castSpell(wiseOwlsList)


// Task 11:
const nestedSecret = {outer: {inner: "The Final Key"}};

const {outer: {inner: ultimateClue}} = nestedSecret;
console.log(ultimateClue);


// Task 12:
let stoneA = "Emerald";
let stoneB = "Ruby";

[stoneA, stoneB] = [stoneB, stoneA];
console.log(`stoneA is now ${stoneA}, and stoneB is ${stoneB}`);