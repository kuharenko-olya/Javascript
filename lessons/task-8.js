let user = null;
// add backend response
// user = {
//     cart: [
//         {
//             price: '200'
//         }
//     ]
// }

//1.
try {
    let price = user.cart[0].price;
    console.log(`price ${price}`);
} catch (e) {
    console.log(`No data`);
}

//2.

if (user && user?.cart && user?.cart[0]?.price) {
    console.log('price', user.cart[0].price);
} else {
    console.log('No data')
}


//3.
if (user && user.cart && user.cart.length > 0 && user.cart[0] && user.cart[0].price) {
    console.log('price', user.cart[0].price);
} else {
    console.log('No data');
}
