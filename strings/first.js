const name = "   Deepak"
const repoCount = 50
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


const newName = new String('Deepak')
console.log(name.trim());
console.log(newName.trim());
console.log(newName.toUpperCase());
console.log(newName.length);
console.log(name.length);
console.log(newName.indexOf('e'));
console.log(newName.indexOf('E'));
console.log(newName.lastIndexOf('e'));

console.log(newName.substring(0, 4));
console.log(newName.slice(-10, 10));

const url = new String("https://deepak.com/test?name=Deepak%20Dash")

console.log(url.replace("%20", " "));
// Splitting

const splitVal = new String("abc-def-ghi")
console.log(splitVal.split("-"));

