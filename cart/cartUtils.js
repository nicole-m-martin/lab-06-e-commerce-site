import { findById } from '../utils.js';
import { cart } from './cartData.js';
import { renderLineItems } from './renderLineItems.js';
import { spaceItems } from '../products/data.js';

const table = document.querySelector('table');

let total = 0;

for (let item of cart) {
    const spaceItem = findById(item.id, spaceItems);
    const totalForOneItem = item.quantity * spaceItem.price;

    total = total + totalForOneItem;
    
    const tableRow = renderLineItems(item);
    table.append(tableRow);
}

const tRow = document.createElement('tr');
const tData1 = document.createElement('td');
const tData2 = document.createElement('td');
const tData3 = document.createElement('td');

tData3.textContent = `Order Total: $${total}`;

tRow.append(tData1);
tRow.append(tData2);
tRow.append(tData3);
table.append(tRow);



