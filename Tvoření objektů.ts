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