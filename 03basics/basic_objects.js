const mySymbol = Symbol("Key1")

const JSUser = {
    name: "Deepak",
    age: 21,
    [mySymbol]: 'key1',
    [Number(5)]: 10,
    location: "Jaipur",
    email: "dk@gmail.com",
    isLoggedIn: false,
    "full name": "Deepak Kumar Dash",
    5: 20
}

// console.log(JSUser['email']);
// console.log(JSUser["full name"]);
// console.log(JSUser);
// console.log(JSUser[mySymbol]);


// Freeze
// Object.freeze(JSUser)
// JSUser.email = "deepak@gmail.com" // This wont be changed
// console.log(JSUser);

JSUser.greeting = function () {
    console.log(`Hello ${this["full name"]}`);
}
JSUser.greeting()
