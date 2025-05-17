const user = {
    username: "deepak",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username} Welcome to website`);
        //console.log(this);
    }
}
user.welcomeMessage()
user.username = "Dk"
user.welcomeMessage()


// function chai(){
//     let username = "deepak dash"
//     console.log(this.username); // undefined
// }
// chai()

// const newChai = function(){
//     let username = "deepak dash"
//     console.log(this.username); // undefined   
// }
// newChai()

this.mytest = "hello"
const arrowFun = ()=> {
    let username = "Deepak"
    console.log('inside arrow', this);
}


arrowFun()


// implicit return
const implicitReturn = (num1, num2) => num1 + num2;
console.log(implicitReturn(3, 7));

// Immediately invoked function
(
()=>{
    console.log('Immediate');
}
)();


(
    (name)=>{
        console.log(`name is ${name}`);
    }
)('Deepak');