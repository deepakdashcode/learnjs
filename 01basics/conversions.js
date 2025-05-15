const print = (variable)=> {
    console.table([variable, typeof variable])
}
let score = "33"
print(score)

let valInNum = Number(score)
print(valInNum)

let test1 = Number('33abc')
print(test1)
console.log(isNaN(test1))

let test2 = Number(null) // Converts it to 0
print(test2)

let test3 = Number(undefined)
print(test3)

let test4 = Number(true)
print(test4)

