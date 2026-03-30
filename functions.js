function add(a, b) {
    return a + b;
} function subtract(a, b) {
    return a - b;
}
const multiply = (a, b) => a * b;
const division = (a, b) => a / b;
let a = 10;
let b = 4;
console.log(add(a, b));
console.log(subtract(a, b));
console.log(multiply(a, b));
console.log(division(a, b));

function Grade(marks) {
    if (marks >= 90) return "O";
    else if (marks >= 80) return "A";
    else if (marks >= 70) return "B";
    else if (marks >= 60) return "C";
    else return "Fail";

}

console.log(Grade(75));
console.log(Grade(80)); 

const splitBill=(totalBill,numberOfFriends)=>totalBill/numberOfFriends;
console.log(splitBill(1000,5));
console.log(splitBill(1000,3));