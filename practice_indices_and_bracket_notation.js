// Library System - 2D Array Management
// Task 1: Create a multi-dimensional array with nine books and/or movies
let library = [
    ["Me Talk Pretty One Day", "When You Are Engulfed In Flames", "Squirrel Seeks Chipmunk"],        // Shelf 1 - Humor Books
    ["The Life Aquatic With Steve Zissou", "Airplane", "Spinal Tap"],                               // Shelf 2 - Classic Comedy Movies
    ["Beyond Good and Evil", "The Twilight of The Idols", "On The Genealogy Of Morals"]             // Shelf 3 - Classic Books
];

console.log('Library system created with 9 items on 3 shelves');

// Task 2: Access and log all elements using bracket notation with numbers
console.log('Shelf 1, Item 1:', library[0][0]);
console.log('Shelf 1, Item 2:', library[0][1]);
console.log('Shelf 1, Item 3:', library[0][2]);

console.log('Shelf 2, Item 1:', library[1][0]);
console.log('Shelf 2, Item 2:', library[1][1]);
console.log('Shelf 2, Item 3:', library[1][2]);

console.log('Shelf 3, Item 1:', library[2][0]);
console.log('Shelf 3, Item 2:', library[2][1]);
console.log('Shelf 3, Item 3:', library[2][2]);

// Task 3: Access and log all elements using bracket notation with variables
let row = 0;
let item = 0;

// First shelf
row = 0;
item = 0;
console.log('Shelf 1, Item 1:', library[row][item]);
item = 1;
console.log('Shelf 1, Item 2:', library[row][item]);
item = 2;
console.log('Shelf 1, Item 3:', library[row][item]);

// Second shelf
row = 1;
item = 0;
console.log('Shelf 2, Item 1:', library[row][item]);
item = 1;
console.log('Shelf 2, Item 2:', library[row][item]);
item = 2;
console.log('Shelf 2, Item 3:', library[row][item]);

// Third shelf
row = 2;
item = 0;
console.log('Shelf 3, Item 1:', library[row][item]);
item = 1;
console.log('Shelf 3, Item 2:', library[row][item]);
item = 2;
console.log('Shelf 3, Item 3:', library[row][item]);

// Task 4: Write a loop that prints all items on the second shelf
console.log('All items on the second shelf:');
for (let i = 0; i < library[1].length; i++) {
    console.log('Item ' + (i + 1) + ':', library[1][i]);
}