import { spaceItems } from '../products/data.js';
import { findById } from '../utils.js';
// import { getSpaceItemTotal } from '../utils';

export function renderLineItems(cartItem) {
    const spaceItem = findById(cartItem.id, spaceItems);
    const quantity = cartItem.quantity;
    
    
    const tr = document.createElement('tr');

    const productTd = document.createElement('td');
    productTd.textContent = spaceItem.name;
    tr.append(productTd);
    
    const quantityTd = document.createElement('td');
    quantityTd.textContent = quantity;
    tr.append(quantityTd);

    const priceTd = document.createElement('td');
    priceTd.textContent = `$${quantity * spaceItem.price}`;
    tr.append(priceTd);
    
    return tr;
}




