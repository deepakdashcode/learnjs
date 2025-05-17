const shoppingCart = [
    {
        item: "Mouse",
        price: 299
    },
    {
        item: "Keyboard",
        price: 400
    },
    {
        item: "Mousepad",
        price: 200
    },
    {
        item: "Bag",
        price: 700
    }
]

const totalPrices = shoppingCart.reduce((previous, current)=>(previous + current.price), 0)
console.log(totalPrices);
