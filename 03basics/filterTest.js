// const languages = ['js', 'py', 'java', 'cpp']

const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(nums.filter((num)=> {
    if(num % 3 == 2) return true;
    return false;
}));


// In Short, Filter accepts a function which takes
// (item, <value,arr>) and returns a boolean
// if it is true then item is taken in output else it is not


const prog = ['js', 'py', 'java', 'cpp']
function toTake(element){
    if (element.includes('p')) return true;
    return false;
}
console.log(prog.filter(toTake))
