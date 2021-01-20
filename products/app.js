// This is where the functions will import and the for loop is at
import { spaceItems } from './data.js';
import { renderSpaceItems } from './renderSpaceItems.js';

// an empty div to inject stuff into
const itemList = document.getElementById('space-list-products');

// loop through the space items array
// loop means do something to every item in an array
for (let spaceItem of spaceItems) {
    // for each space item in space items array

    // feed it into the renderSpaceItems  function
    // it returns a DOM element called spaceElement
    const spaceElement = renderSpaceItems(spaceItem);

    // append it to our empty list
    itemList.append(spaceElement);
  
}

