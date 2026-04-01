// Array — just values, no labels
let student1 = ["Manav", 18, "IIIT Sonepat", true];
// How do you know which is which? You can't.

// Object — values WITH labels (called keys)
let student = {
    name: "Manav",
    age: 18,
    college: "IIIT Sonepat",
    isActive: true
};

console.log(student);             // whole object
console.log(student.name);        // "Manav" — dot notation
console.log(student["age"]);      // 18 — bracket notation, same thing
console.log(student.college);     // "IIIT Sonepat"

let phone = {
    brand: "OnePlus",
    price: 25000,
    color: "black"
};

// Change a value
phone.price = 22000;
console.log(phone.price);     // 22000

// Add a new key
phone.storage = "128GB";
console.log(phone);           // now has 4 keys

// Delete a key
delete phone.color;
console.log(phone);           // color is gone

// Check if a key exists
console.log("brand" in phone);   // true
console.log("color" in phone);   // false
// Array of objects — a list where each item has multiple properties
let students = [
    { name: "Manav", marks: 88, passed: true },
    { name: "Rahul", marks: 55, passed: false },
    { name: "Priya", marks: 92, passed: true },
    { name: "Arjun", marks: 48, passed: false }
];

// Access one student
console.log(students[0].name);    // "Manav"
console.log(students[2].marks);   // 92

// Loop through all students
for (let student of students) {
    console.log(`${student.name} scored ${student.marks}`);
}

// Find only passed students
for (let student of students) {
    if (student.passed) {
        console.log(student.name + " passed");
    }
}

let user = {
    name: "Manav",
    age: 18,
    college: "IIIT Sonepat",
    skills: ["JavaScript", "React", "Git"]  // array inside object
};

// Function that takes an object and uses its properties
function printProfile(person) {
    console.log(`Name: ${person.name}`);
    console.log(`Age: ${person.age}`);
    console.log(`College: ${person.college}`);
    console.log(`Skills: ${person.skills.join(", ")}`);
}

printProfile(user);


//assignment
// Task 1
// Create an array of 3 objects — each object is a cricket player
// Each player has: name, runs, wickets, isActive (boolean)
// Loop through and print a summary line for each player
// Example: "Rohit Sharma — 500 runs, 2 wickets"

// Task 2
// Write a function called findTopScorer
// It takes an array of player objects
// Returns the name of the player with the highest runs
// (similar logic to findMax from Day 3 — but now with objects)

// Task 3
// Write a function called getActiveCount
// It takes an array of player objects
// Returns how many players have isActive: true
let cricket=[
    {name:"manav",runs:200,wickets:19,isactive:true}
    ,{name:"ram",runs:880,wickets:1,isactive:true}
    ,{name:"poki",runs:2220,wickets:39,isactive:false}
    ,{name:"rohit",runs:34440,wickets:99,isactive:true}
    ,{name:"manu",runs:8470,wickets:19,isactive:false}
];
for(i of cricket){
    console.log(`${i.name}--${i.runs}runs , ${i.wickets} wickets`);
}

//2 question 
function findTopScorer(cricket){
    let max = cricket[0]; 
    for (let num of cricket) {   // use arr, not no
        if (num.runs > max.runs) {
            max = num;
        }
    }
    return max.name;
}
console.log(findTopScorer(cricket));
//3 question 

function getActiveCount(cricket){
    let count=0;
for(i of cricket){
if(i.isactive==true){
    count++;
}
}
return count;
}
console.log(getActiveCount(cricket));