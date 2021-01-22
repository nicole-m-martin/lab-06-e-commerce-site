// import addCartFunction
import { addToCart } from '../cart/cartApi.js';

export function renderSpaceItems(spaceItem) {
    const li = document.createElement('li');
    li.classList.add('space-items');
    
    const h3 = document.createElement('h3');
    h3.classList.add('item-name');
    h3.textContent = spaceItem.name;
    li.append(h3);

    const img = document.createElement('img');
    img.classList.add('item-img');
    li.append(img);
    img.src = `../assets/${spaceItem.image}`;
    
    const pItemDescription = document.createElement('p');
    pItemDescription.classList.add('item-description');
    pItemDescription.textContent = spaceItem.description;
    li.append(pItemDescription);

    const pItemCategory = document.createElement('p');
    pItemCategory.classList.add('item-category');
    pItemCategory.textContent = spaceItem.category;
    li.append(pItemCategory);

    const pPrice = document.createElement('p');
    pPrice.classList.add('item-price');
    pPrice.textContent = `$${spaceItem.price}`;
    li.append(pPrice);

    // const button = document.createElement('button');
    // button.classList.add('btn');
    // button.textContent = 'Add To Cart';
    // li.append(button);

// Add to cart event listener
    const addToCartBtn = document.createElement('button');
    addToCartBtn.classList.add('add-button');
    addToCartBtn.addEventListener('click', () => {
        addToCart(spaceItem.id);
    });

    addToCartBtn.textContent = 'Want! Get in my cart!';
    li.append(addToCartBtn);

    return li;

}




