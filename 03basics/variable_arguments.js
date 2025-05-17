function calculateCartPrice(...items){
    let sum = 0
    items.forEach((value)=> {
        sum += value
    })
    console.log(sum);
    
}

calculateCartPrice(200, 300, 400)

function sum(num1, ...others){
    let s = num1
    others.forEach((value)=>{
        s += value
    })
    return s
}

console.log(sum(3, 5, 7, 9, 10));


//Wrong declarations
// function dumb(val1, ...val3, val2){
// }
// function dumb(val1, ...val2, ...val3){
// }

