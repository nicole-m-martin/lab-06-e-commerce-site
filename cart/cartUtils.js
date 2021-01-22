
export function findById(id, array) {
    for (let item of array) {
        if (item.id === id) {
            return item;
        }
    }
}


export function getSpaceItemTotal(quantity, price) {
    const itemTotal = quantity * price;
    return itemTotal;
}



export function calOrderTotal(cart, spaceItems) {

    let total = 0;
    for (let item of cart) {
        const spaceItem = findById(Number(item.id), spaceItems);
        const totalForOneItem = getSpaceItemTotal(item.quantity, spaceItem.price);

        total = total + totalForOneItem;      
    }
    return total;
}








