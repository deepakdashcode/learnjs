// Stack, Heap

// Stack => Primitive
// Heap => Non-rpimitive

// Call By Value
let myName = "Deepak"
let anotherName = myName
anotherName = "Dash"
console.log(myName);
console.log(anotherName);

// Call by Reference
let user = {
    email: "dk@gmail.com",
    name: "deepak"
}

let newUser = user
newUser.email = "deepak@gmail.com"
console.log(newUser);
console.log(user);
