// // array

// const myArr = [0, 1, 2, 3, 4]
// console.log(myArr[2]);

// // Array Methods
// myArr.push(10)
// myArr.push(20)
// console.log(myArr);
// console.log(myArr.pop())
// console.log(myArr);

// console.log(myArr);
// myArr.unshift(22)
// console.log(myArr);

// const testArr = ['abc', 'def', 'ghi']

// console.log(testArr.join());


// // Part 2
// // slice and splice

// // slice
// const arr = [10, 20, 30, 40, 50]
// console.log('State A', arr);
// const newArr = arr.slice(1, 4)
// console.log(newArr);
// console.log('State B', arr);


/*
Dont uncomment splice 1 and 2 simultaneously 
*/
// // Splice 1
// const newTest = arr.splice(1, 3)
// console.log('New Test', newTest)
// console.log('State C', arr);


// // Splice 2

// // Splice inculdes both start and end
/*
splice(start, end<optional>)
overload
splice(start, end<optional>, *elements_to_insert<use spread operator to merge, else it will insert the array as a single element>)
*/
// const tempNewArr = [100, 200]
// const newTest = arr.splice(1, 3, ...tempNewArr, 'another', 'element')
// console.log('New Test', newTest)
// console.log('State C', arr);
