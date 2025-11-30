
// Task 1:
function animalSightings(...animal) {
    console.log(animal);
}
animalSightings("Cheetah", "Monkey", "Horse")

// Task 2:
const forestHabitats = ["Forest A", "Forest B"];
const savannahHabitats = ["Savannah C", "Savannah D"];

const allHabitats = [...forestHabitats, ...savannahHabitats];

// Task 3:
const rhinoStatus = {
    population: 500,
    status: "Endangered"
};

const newRhinoStatus = {...rhinoStatus, population: 750};

// Task 4:
const lionProfile = {
    name: "Leo",
    age: 5,
    species: "Lion"
};

const lionProfileCopy = {...lionProfile, genetics: "Big Cat"};
console.log(lionProfileCopy);
console.log(lionProfile);
// Modifying a property in the copied object does not affect the original object because the spread operator creates a shallow copy.

// Task 5:
const ecosystemHealth = {
    waterQuality: "Good",
    foodSupply: {
        herbivores: "Abundant",
        carnivores: "Sufficient"
    }
};

const ecosystemHealthCopy = {...ecosystemHealth};
ecosystemHealthCopy.foodSupply.carnivores = "Abundant";
console.log(ecosystemHealthCopy.foodSupply);
console.log(ecosystemHealth.foodSupply);
// Modifying a nested property in a shallow copy also affects the original object.
// When you have a nested object, the original and the shallow copy will hold references to the same nested object in memory.