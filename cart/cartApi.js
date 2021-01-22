// Import findById and cart functions
import { findById } from '../cart/cartUtils.js';


// magic string for CART key
const CART = 'CART'; 
// make an default empty cart
const defaultEmptyCart = [];

// make getCart function
export function getCart() {
    const stringCart = localStorage.getItem(CART);

    // if there is a cart in local storage, parse it in JSON 
    if (stringCart) {
        const parsedCart = JSON.parse(stringCart);
        return parsedCart;
    } else {
      // make a cart, if no cart, stringify default empty cart
        const stringDefaultCart = JSON.stringify(defaultEmptyCart);
      
        // put stringy empty cart in local storage
        localStorage.setItem(CART, stringDefaultCart);
        // 
        return defaultEmptyCart;
    }
}

// make setCart function
export function setCart(cart) {
// Sets the cart with items in it
    const stringCart = JSON.stringify(cart);
    localStorage.setItem(CART, stringCart);

}

// make clearCart function
export function clearCart() {
  // clears the cart after items purchased
    const stringDefaultCart = JSON.stringify(defaultEmptyCart);
    localStorage.setItem(CART, stringDefaultCart);
}

// make addToCart function
export function addToCart(id) {
// get the cart out of local storage
    const cart = getCart();
// check the id to find if item is in the cart already
    const cartItem = findById(id, cart);
// if yes, add to the quantity
    if (cartItem) {
        cartItem.quantity++;  
    } else {
    // if item is not in the cart, put an item in there with a quantity of 1.
        const newItem = {
            id: id,
            quantity: 1
        };
        cart.push(newItem);
    }
    setCart(cart);
             
}
// reload the page
// location.reload();
