export function findById(id, array) {
    for (let item of array) {
        if (item.id === id) {
            return item;
        }
    }
}

export function getSpaceItemTotal(cartItem, spaceItem) {
    return cartItem.quantity * spaceItem.price;
}