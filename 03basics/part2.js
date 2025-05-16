// Singleton Objects

const bgmi = new Object()
bgmi.id = "135abc"
bgmi.name = "deepak"

const regularUser = {
    email: "dk@gmail.com",
    name: {
        firstname: "Deepak",
        middlename: "Kumar",
        lastname: "Dash"
    }
}
// console.log(regularUser.name?.firstname);


// Merging
const obj1 = {1: "a", 2: "b", z: 10}
const obj2 = {3: "c", 4: "d", z: 20}

// const obj3 = {obj1, obj2}
// console.log(obj3);

// const obj4 = {...obj1, ...obj2}
// console.log(obj4);

// let obj5 = {}
// Object.assign(obj5, obj1, obj2)
// console.log(obj5);


// assign merges and assigns the values to the first parameter and returns the total 
// Object.assign(obj1, obj2)
// console.log(obj1);


// console.log(Object.assign({}, obj1, obj2))
// console.log(obj1);

const users = [
    {
        name: "Deepak Kumar Dash"
    },
    {
        name: "Ritesh Panda"
    }
]

// Important Functions
console.log(obj1);
console.log(Object.keys(obj1));
console.log(Object.values(obj1));
console.log(Object.entries(obj1));
console.log(Object.hasOwn(obj1, 'z')); // Checks if a key exists inside a object
console.log(Object.hasOwn(obj1, 'a'));

