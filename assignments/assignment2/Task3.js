// Analyze the given function to determine whether it is pure.
// If it is impure, refactor it into a pure function. If it is already pure, retain its original form.
// In either case, you will need to create the function under the "TODO" comment.


let cart = [
    { id: 1, name: "Laptop", price: 1000, quantity: 1 },
    { id: 2, name: "Phone", price: 500, quantity: 2 }
];

let discountPercentage = 15;

function applyDiscountAndUpdateCart(cart, discountPercentage) {
    for (let item of cart) {
        item.price -= item.price * (discountPercentage / 100);
    }
}

const applyDiscountAndUpdateCart = (cart, discountPercentage) => cart.map(item => (
    {id: item.id, name: item.name, price: item.price - item.price * (discountPercentage / 100), quantity: item.quantity}
));
