import { getSpaceItemTotal } from '../cart/cartUtils.js';


export function renderLineItems(cartItem, spaceItems) {
    const tr = document.createElement('tr');
       
    const nameTd = document.createElement('td');
    nameTd.textContent = spaceItems.name;
     
    const quantityTd = document.createElement('td');
    quantityTd.textContent = cartItem.quantity;
    
    const priceTd = document.createElement('td');
    priceTd.textContent = `$${getSpaceItemTotal(cartItem.quantity, spaceItems.price)}`;
    
    tr.append(nameTd);
    tr.append(quantityTd);
    tr.append(priceTd);
    
    return tr;
}





