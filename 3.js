// Without array — messy
let student1 = "Manav";
let student2 = "Rahul";
let student3 = "Priya";

// With array — clean
let students = ["Manav", "Rahul", "Priya"];
console.log(students);        // whole list
console.log(students[0]);     // "Manav" — index starts at 0
console.log(students[students.length-1]);     // "Rahul"
console.log(students.length); // 3 — how many items
let marks = [85, 90, 72, 88, 95];

// Add to end
marks.push(100);
marks.push(100);
console.log(marks); // [85, 90, 72, 88, 95, 100]

// Remove from end
let a=marks.pop();
console.log(a); // [85, 90, 72, 88, 95]
console.log(marks); // [85, 90, 72, 88, 95]

// Add to beginning
marks.unshift(70);
console.log(marks); // [70, 85, 90, 72, 88, 95]

// Remove from beginning
marks.shift();
console.log(marks); // [85, 90, 72, 88, 95]

// Find index of a value
console.log(marks.indexOf(90)); // 1

// Does array include a value?
console.log(marks.includes(72)); // true
console.log(marks.includes(50)); // false

//assignment

let no=[1,6,7,3,5,3];
function findMin(arr) {
    let max = arr[0]; 
    for (let num of no) {
        if (num <max) {
            max = num;
        }
    }
    return max;
}
console.log(findMax(no)); 
let b=[45, 78, 90, 55, 62, 38, 88];

function greaterth60(b){
    let count=0;
    for(let i of b){
        if(i>=60){
            count++;
        }
    }
    return count;
}
console.log(greaterth60(b));
let dupl=[1, 2, 2, 3, 3, 3, 4];
let remo=[];
function duplicateremove(a,remo){
    for(let i of a){
        if(a.include(i)===false){
            remo.push(i);
        }
    }
}