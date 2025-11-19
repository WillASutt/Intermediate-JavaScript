const users = [
    {firstName: "Alice", lastName: "Johnson", points: 120},
    {firstName: "Bob", lastName: "Smith", points: 99},
    {firstName: "Charlie", lastName: "Brown", points: 180}
];

let newUsers = users.map(function (user) {
    if (user.points < 100) {
        return {fullName: `${user.firstName} ${user.lastName}`, membershipStatus: "Standard"};
    }
    else {
        return {fullName: `${user.firstName} ${user.lastName}`, membershipStatus: "Premium"};
    }
});

console.log(newUsers);

