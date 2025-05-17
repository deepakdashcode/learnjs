import data from "./data.js"
const languages = ['js', 'py', 'java', 'cpp']
// 1
// languages.forEach((item, index, arr)=>{
//     console.log(`Index is ${index} Item is ${item}, entire array is ${arr}`);
// });
// console.log(languages);



// function printItem(item){
//     console.log(`Item is ${item}`);
// }
// function printItem(item, index){
//     console.log(`Index is ${index} Item is ${item}`);
// }
// function printItem(item, index, arr){
//     console.log(`Index is ${index} Item is ${item}, Array is ${arr}`);
// }
// languages.forEach(printItem)


const myCoding = [
    {
        langName: "javascript",
        langExt: "js"
    },
    {
        langName: "python",
        langExt: "py"
    },
    {
        langName: "kotlin",
        langExt: "kt"
    },
]

myCoding.forEach((item)=>{
    console.log(item.langName, item.langExt);
})

