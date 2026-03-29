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
