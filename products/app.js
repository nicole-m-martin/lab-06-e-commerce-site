// This is where the functions will import and the for loop is at
import { spaceItems } from './data.js';
import { renderSpaceItems } from './renderSpaceItems.js';

const itemList = document.getElementById('space-list-products');


for (let spaceItem of spaceItems) {
    
    const spaceElement = renderSpaceItems(spaceItem);

    itemList.append(spaceElement);
  
}

