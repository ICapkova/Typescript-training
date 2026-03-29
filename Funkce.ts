function sayHello(name: string): string {
    return "Ahoj, " + name + "!";
}

function nazdar(name: string): void {
    console.log("Ahoj " + name + "!");
}

nazdar("Ivo"); // Output: Ahoj Ivo!
nazdar("Lumíre"); // Output: Ahoj Lumír!

function getGreeting(name: string): string {
    return "Ahoj, " + name + "!";
}   

console.log(getGreeting("Ivo")); // Output: Ahoj, Ivo!

let message = getGreeting("Lumíre");

let student: {
    name: string; 
    age: number; 
    isActive: boolean
 } = { 
    name: "Iva",
    age: 30,
    isActive: true
};

function printStudentInfo(student: { name: string; age: number; isActive: boolean }): void {
    console.log("Jméno: " + student.name);
    console.log("Věk: " + student.age);
    console.log("Aktivní: " + student.isActive);
}

function getStudentStatus(student: { name: string; age: number; isActive: boolean }): string {
    return "Student " + student.name + " je " + (student.isActive ? "aktivní" : "neaktivní");
}
let status = getStudentStatus(student);
console.log(status); // Output: Student Iva je aktivní


let student2: {
    name: string; 
    age: number;
    isActive: boolean
    course?: string; // Optional property for the list of courses
 } = {
    name: "Eva",
    age: 25,
    isActive: true
};

function printStudentSummary(student2: { name: string; age: number; isActive: boolean; course?: string }): void {
    console.log("Jméno: " + student2.name);
    console.log("Věk: " + student2.age);
    console.log("Aktivní: " + student2.isActive)
    console.log("Kurz: " + (student2.course ? student2.course : "žádný"));
}

function updateStudentCourse(student2: { name: string; age: number; isActive: boolean; course?: string }, newCourse: string)
: string {
    student2.course = newCourse;
    return "Student " + student2.name + " je nyní zapsán do kurzu: " + newCourse;
}

let student2 = {
    name: "Eva",
    age: 25,
    isActive: true
};

let message = updateStudentCourse(student2, "TypeScript");
console

printStudentSummary(student2); // Output: Jméno: Eva, Věk: 25, Aktivní: true, Kurz: TypeScript


let user: {
    name: string;
    age: number;
    isOnline: boolean;
} = {
    name: "Iva",
    age: 30,
    isOnline: true
};

function printUser(user: { name: string; age: number; isOnline: boolean }): void {
    console.log("Jméno: " + user.name);
    console.log("Věk: " + user.age);
    console.log("Online: " + user.isOnline);
}

function getUserMessage(user: { name: string; age: number; isOnline: boolean }): string {
    if (user.isOnline) {
        return user.name + " je online.";
    } else {
        return user.name + " je offline.";
    }
}

printUser(user); // Output: Jméno: Iva, Věk: 30, Online: true
console.log(message); // Output: Iva je online.

getUserMessage(user); // Output: Iva je online.

user.isOnline = false;
console.log(getUserMessage(user)); // Output: Iva je offline.
printUser(user); // Output: Jméno: Iva, Věk: 30, Online: false
getUserMessage(user); // Output: Iva je offline.


let result = printUser(user);
let result2 = getUserMessage(user);
console.log(result); // Output: undefined
console.log(result2); // Output: Iva je offline.


function getUserMessage(user: { name: string; isOnline: boolean }): string {
    if (user.isOnline) {
        return user.name + " je online";
    } else {
        return user.name + " je offline";
    }
}

function displayMessage(message: string): void {
    console.log("Zpráva: " + message);
}

let user = {
    name: "Iva",
    isOnline: true
};

let message = getUserMessage(user);
console.log(message); // Output: Iva je online
displayMessage(message); // Output: Zpráva: Iva je online

