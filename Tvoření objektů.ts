let book: {
    title: string; pages: number; isHardcover: boolean;
} = {
    title: "The Great Gatsby",
    pages: 180,
    isHardcover: false
};

console.log(book.title); // Output: The Great Gatsby
console.log(book.pages); // Output: 180
console.log(book.isHardcover); // Output: false

book.pages = 200; // Updating the number of pages
book.isHardcover = true; // Updating the hardcover status

console.log(book.pages); // Output: 200
console.log(book.isHardcover); // Output: true

let movie: {
    title: string; duration: number; isSequel: boolean; director: string; // Optional property for the director's name
} = {
    title: "Matrix",
    duration: 136,
    isSequel: false,
    director: "The Wachowskis" // Adding a new property to the movie object
};

console.log(movie.title); // Output: Matrix
console.log(movie.duration); // Output: 136
console.log(movie.isSequel); // Output: true
console.log(movie.director); // Output: The Wachowskis

movie.duration = 150; // Updating the duration
movie.isSequel = true; // Updating the sequel status
movie.director = "Lana Wachowski"; // Adding a new property to the movie object

console.log(movie.duration); // Output: 150
console.log(movie.isSequel); // Output: true
console.log(movie.director); // Output: Lana Wachowski

let song: {
    title: string; artist: string; duration: number; album?: string; // Optional property for the album name 
} = {
    title: "Imagine",
    artist: "John Lennon",
    duration: 183
};

console.log(song.title); // Output: Imagine
console.log(song.artist); // Output: John Lennon
console.log(song.duration); // Output: 183
console.log(song.album); // Output: undefined

song.duration = 185; // Updating the duration
song.album = "Imagine"; // Adding a new property to the song object

console.log(song.duration); // Output: 185
console.log(song.album); // Output: Imagine

console.log(song.title.length); // Output: 7
console.log(song.title.toUpperCase()); // Output: IMAGINE
console.log(Math.random()); // Output: A random number between 0 and 1


let fruits = ["apple", "banana", "cherry"];

console.log(fruits.length); // 3
console.log(fruits[0]);     // apple
console.log(fruits[1]);     // banana
console.log(fruits[2]);     // cherry
fruits.push("date"); // Adding a new fruit to the array
console.log(fruits.length);

fruits.pop(); // Removing the last fruit from the array
console.log(fruits.length); // 3


let student: {
    name: string; age: number; isActive: boolean; course?: string; // Optional property for the list of courses
} = { name: "Iva",
    age: 30,
    isActive: true
};

console.log(student.name); // Output: Iva
console.log(student.age); // Output: 30
console.log(student.isActive); // Output: true
console.log(student.course); // Output: undefined

student.age = 31; // Updating the age
student.course = "TypeScript"; // Adding a new property to the student object
student.isActive = false; // Updating the active status

console.log(student.name.length); // Output: 3
console.log(student.name.toUpperCase()); // Output: IVA
console.log(student.name.includes("v")); // Output: true
console.log(Math.random()); // Output: A random number between 0 and 1

console.log(student.age); // Output: 31
console.log(student.course); // Output: TypeScript
console.log(student.isActive); // Output: false


let product: {
    name: string;
    price: number;
    inStock: boolean;
    category?: string; // Optional property for the product category
} = {
    name: "Notebook",
    price: 25000,
    inStock: true
};

console.log(product.name); // Output: Notebook
console.log(product.price); // Output: 25000
console.log(product.inStock); // Output: true
console.log(product.category); // Output: undefined

product.price = 23000; // Updating the price
product.category = "Electronics"; // Adding a new property to the product object
product.inStock = false; // Updating the stock status

console.log(product.name.length); // Output: 8
console.log(product.name.toLowerCase()); // Output: notebook
console.log(product.name.includes("book")); // Output: true

console.log(product.price); // Output: 23000
console.log(product.category); // Output: Electronics
console.log(product.inStock); // Output: false
console.log(product.price > 20000); // Output: true

product.name = "Laptop"; // Updating the product name
console.log(product.name.toLocaleUpperCase()); // Output: LAPTOP