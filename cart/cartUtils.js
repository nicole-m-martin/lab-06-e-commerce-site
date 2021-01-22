export function findById(id, array) {
    for (let item of array) {
        if (item.id === id) {
            return item;
        }
    }
}

export function getSpaceItemTotal(cartItem, spaceItems) {

    return cartItem.quantity * spaceItems.price;
}



export function calOrderTotal(cart, spaceItems) {

    let total = 0;
    for (let item of cart){
        const spaceItem = findById(item.id, spaceItems);
        const totalForOneItem = getSpaceItemTotal(item, spaceItem);

        total = total + totalForOneItem;      
    }
    return total;
}








