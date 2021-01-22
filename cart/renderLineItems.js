import { getSpaceItemTotal } from '../cart/cartUtils.js';


export function renderLineItems(cartItem, spaceItems) {
    const tr = document.createElement('tr');
    

    const quantity = cartItem.quantity;
    
    const nameTd = document.createElement('td');
    nameTd.textContent = spaceItems.name;
    
    
    const quantityTd = document.createElement('td');
    quantityTd.textContent = quantity;
    
    const priceTd = document.createElement('td');
    priceTd.textContent = `$${getSpaceItemTotal(cartItem, spaceItems)}`;
    
    tr.append(nameTd);
    tr.append(quantityTd);
    tr.append(priceTd);
    
    return tr;
}





