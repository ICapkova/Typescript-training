let user = {
    name: "Iva",
    age: 30,
    isOnline: true
};

console.log(user.name); // Output: Iva
console.log(user.age); // Output: 30
console.log(user.isOnline); // Output: true

function printUser(user: { name: string; age: number; isOnline: boolean }): void {
    console.log(`Name: ${user.name}`);
    console.log(`Age: ${user.age}`);
    console.log(`Online: ${user.isOnline}`);
}

function getUserMessage(user: { name: string; age: number; isOnline: boolean }): string {
    if (user.isOnline) {
        return user.name + " je online.";
    } else {
        return user.name + " není online.";
    }
}

let message2 = getUserMessage(user);
console.log(message2); // Output: Iva je online.

user.isOnline = false;
message2= getUserMessage(user);
console.log(message2); // Output: Iva není online.


function displayMessage(message: string): void {
    console.log(message);
}
let message = getUserMessage(user);
displayMessage(message2); // Output: Iva není online.


let user2: { name: string; age: number; isOnline: boolean } = {
    name: "Jan",
    age: 25,
    isOnline: true
}; 

function getUser2Status(user: { name: string; isOnline: boolean }): string {
    if (user.isOnline) {
        return user.name + " je online.";
    } else {
        return user.name + " není online.";
    }
}

function displayMessage2(message: string): void {
    console.log(message);
}
let message3 = getUser2Status(user2);
displayMessage2(message3); // Output: Jan je online.

getUser2Status(user2);
console.log(getUser2Status(user2)); // Output: Jan je online.   


let user3: { name: string; age: number; isOnline: boolean } = {
    name: "Petr",
    age: 40,
    isOnline: true
};

function getUser3Status(user: { name: string; isOnline: boolean }): string {
    if (user.isOnline) {
        return user.name + " je online.";
    } else {
        return user.name + " není online.";
    }
}
function displayMessage3(message: string): void {
    console.log(message);
}   
let message4 = getUser3Status(user3);
displayMessage3(message4); // Output: Petr je online.

user3.isOnline = false;
let message5 = getUser3Status(user3);
displayMessage3(message5); // Output: Petr není online.


let person: { name: string; age: number; isOnline: boolean } = {
    name: "Eva",
    age: 28,
    isOnline: true
};

function getPersonStatus(person: { name: string; isOnline: boolean }): string {
    if (person.isOnline) {
        return person.name + " je online.";
    } else {
        return person.name + " není online.";
    }
}
function displayPersonMessage(message: string): void {
    console.log(message);
}

getPersonStatus(person);
let message6 = getPersonStatus(person);
console
displayPersonMessage(message6); // Output: Eva je online.

person.isOnline = false;
let message7 = getPersonStatus(person);
displayPersonMessage(message7); // Output: Eva není online.