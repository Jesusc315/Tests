const cart = [
    { item: "shirt", price: 20 },
    { item: "pants", price: 30 }
];

const total = cart.reduce((sum, item) => sum + item.price, 0);
console.log(total);