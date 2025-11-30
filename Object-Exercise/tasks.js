
// Task 1:
let name = "Will";
let age = 33;
let studyField = "Software Developer";

const participant = {
    name,
    age,
    studyField
};

// Task 2:
const participantCopy = {...participant,
    displayInfo() {
        console.log(`Participant: ${this.name}, Age: ${this.age}, Study Field: ${this.studyField}`);
    }
};
participantCopy.displayInfo()

// Task 3:
const participantCopy2 = {...participant,
    displayInfo: () => {console.log(`Participant: ${this.name}, Age: ${this.age}, Study Field: ${this.studyField}`);}
};
participantCopy2.displayInfo()

// The arrow function doesn't work with "this" context. This leads to undefined values for the properties.

// Task 4:
function updateParticipantInfo(participant, key, value) {
    return {...participant,
        [key]: value
    };
}
