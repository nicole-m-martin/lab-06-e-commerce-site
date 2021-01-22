import { findById, calOrderTotal } from './cartUtils.js';
// import { cart } from '../cart/cartData.js';
import { spaceItems } from '../products/data.js';
import { renderLineItems } from '../cart/renderLineItems.js';
import { getCart, clearCart } from '../cart/cartApi.js';

const cart = getCart();


const table = document.querySelector('table');

for (let item of cart) {
    const spaceItem = findById(item.id, spaceItems);
    const tableRow = renderLineItems(item, spaceItem);

    table.append(tableRow);
}

const total = calOrderTotal(cart, spaceItems);

const tRow = document.createElement('tr');
const tData1 = document.createElement('td');
const tData2 = document.createElement('td');
const tTotal = document.createElement('td');


tTotal.textContent = `Order Total: $${total}`;

tRow.append(tData1);
tRow.append(tData2);
tRow.append(tTotal);

table.append(tRow);


// add event listener button
const button = document.querySelector('button');

button.addEventListener('click', () => {
    alert(JSON.stringify(cart, true, 2));
    clearCart();

});



