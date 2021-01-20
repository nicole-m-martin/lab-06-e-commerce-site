// IMPORT MODULES under test here:
import { renderSpaceItems } from '../products/renderSpaceItems.js';


const test = QUnit.test;

test('should take in a space item and return an li', (expect) => {
    const billy = {
        id: 1,
        name: 'Billy',
        image: 'alien.png',
        description: 'A nice, fun, alien friend to guide you in your space adventures.',
        category: 'Alien',
        price: 45.00

    };


    //Arrange
    // Set up your arguments and expectations
    const expected = `<li class="space-items"><h3 class="item-name">Billy</h3><img class="item-img" src="../assets/alien.png"><p class="item-description">A nice, fun, alien friend to guide you in your space adventures.</p><p class="item-category">Alien</p><p class="item-price">$45</p><button class="btn">Add To Cart</button></li>`;         

    
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderSpaceItems(billy);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
