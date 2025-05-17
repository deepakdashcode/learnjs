const arr = [1, 2, 3, 4, 5]

for (const element of arr) {
    console.log(element);
}

// Map
const map = new Map()
map.set("10", 100)
map.set("20", 200)
map.set("10", 200)
// console.log(map);
// console.log(...map);


// for (const [key, val] of map) {
//     console.log(key, val);
// }

const myObj = {
    'game1': "NFS",
    'game2': "Batman"
}

// Objects are not iterable
// for (const element of myObj) {
//     console.log(myObj);
// }


const obj = {
    js: "javascript",
    py: "python",
    kt: "kotlin"
}

for (const key in obj) {
    console.log(key, obj[key]);
}