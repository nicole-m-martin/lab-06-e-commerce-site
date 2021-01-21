// IMPORT MODULES under test here:
import { renderLineItems } from '../cart/renderLineItems.js';
import { renderSpaceItems } from '../products/renderSpaceItems.js';
import { findById } from '../utils.js';



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

test('findById should take in a 3 and the space items array and return a Grey Astroid', (expect) => {
    const spaceItems = [
        {
            id: 1,
            name: 'Billy',
            image: 'alien.png',
            description: 'A nice, fun, alien friend to guide you in your space adventures.',
            category: 'Alien',
            price: '45.00'
        },
        {
            id: 2,
            name: 'Rocket Ship',
            image: 'rocketship.png',
            description: 'A fast rocket to get you where you want to go',
            category: 'rocket',
            price: '500.00'
        },
        {
            id: 3,
            name: 'Grey Astroid',
            image: 'astroid.png',
            description: 'A large astroid to keep a piece of space with you always',
            category: 'space rock',
            price: '85.00'
        },
        {
            id: 4,
            name: 'Mars Rover',
            image: 'rover.png',
            description: 'A cool rover for all of your space adventures',
            category: 'equipment',
            price: '450.00'
        },
        {
            id: 5,
            name: 'Space Suit',
            image: 'spacesuit.png',
            description: 'A roomy suit to keep you safe in your space travels',
            category: 'clothing',
            price: '155.00'
        },
        {
            id: 6,
            name: 'Space Satellite',
            image: 'satellite.png',
            description: 'A big satellite to get information for space adventures',
            category: 'equipment',
            price: '345.00'
        },   
    ];


    //Arrange
    // Set up your arguments and expectations
    const expected = {
        id: 3,
        name: 'Grey Astroid',
        image: 'astroid.png',
        description: 'A large astroid to keep a piece of space with you always',
        category: 'space rock',
        price: '85.00'
    };         

    
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = findById(3, spaceItems);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});

test('should take in a space item and return an <tr>', (expect) => {
    const rover = {
        id: 4,
        name: 'Mars Rover',
        image: 'rover.png',
        description: 'A cool rover for all of your space adventures',
        category: 'equipment',
        price: '450.00'
    };

    //Arrange
    // Set up your arguments and expectations
    const expected = `<tr><td>Mars Rover</td><td>2</td><td>$900</td></tr>`;         

    
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderLineItems(rover);

    //Expect       
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
