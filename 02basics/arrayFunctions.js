const marvelHeores = ['Thor', 'Ironman', 'spiderman']
const dcHeroes = ['Superman', 'Flash']


// 1
// marvelHeores.push(dcHeroes)
// console.log(marvelHeores);

// 2
// const allHeroes = marvelHeores.concat(dcHeroes)
// console.log(allHeroes);

// 3
// const allHeores = [...marvelHeores,'Shaktiman' ,...dcHeroes]
// console.log(allHeores)

// 4
// const anotherArr = [1, 2, 3, [4, 5, 6], 7, [8, [9, 10, [11, 12]]]]
// console.log(anotherArr.flat(3));

// 5
// const anotherArr = [1, 2, 3, [4, 5, 6], 7, [8, [9, 10, [11, 12]]]]
// console.log(anotherArr.flat(Infinity));

// 6
// const arr = Array.from("hitesh")
// console.log(arr)

// 7
// const arr = Array.from(Object.keys({fname: "deepak", lname: "Dash"}))
// console.log(arr)

// 8 (Error, use 9 instead)
// const arr = Array.from(1, 3, 5, 7, 9)
// console.log(arr);

// 9
const arr = Array.of(1, 3, 5, 7, 9)
console.log(arr);
