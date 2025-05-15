// Primitive
// String, Number, Boolean, null, undefined, Symbol, BigInt


const id = Symbol('123')
const anotherId = Symbol('123')
console.table([id, anotherId]);
console.log(id === anotherId);

const bigNumber = 2133333332323333333333333111113333333333333n // BigInt(2131231);
console.table([bigNumber, typeof bigNumber])

const normalNumber = 2133333332323333333333333111113333333333333
console.table([normalNumber, typeof normalNumber])
// Reference Type (Non-primitive)
// Arrays, Objects, Functions