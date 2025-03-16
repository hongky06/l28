let cart = [
    { name: "Mèn mén", price: 30000, quantity: 2 },
    { name: "Mì tôm", price: 5000, quantity: 1 },
    { name: "Bánh bao", price: 15000, quantity: 3 }
    
];

function tinhtong(cart) {
    let total = cart.reduce(function(acc , cur){
        return acc + cur.price * cur.quantity;
    }, 0 );
   return total;
}
console.log("Tổng tiền:", tinhtong(cart));