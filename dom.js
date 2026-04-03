// 1. Create the element
let newheading= document.createElement("h1");

// 2. Give it content
newheading.textContent = "My Skill List";

// 3. Style it if you want
newheading.style.color = "blue";

// 4. Add it to the page
document.body.appendChild(newheading);
let skills = ["JavaScript", "React", "Git", "Python", "CSS"];
let counter = 0; // tracks which skill to add next

let btn2 = document.getElementById("btn2");
let skill=document.getElementById("skill");
btn2.addEventListener("click", () => {
    if(counter < skills.length) {
        let li = document.createElement("li");
        li.textContent = skills[counter];
        skill.appendChild(li);
        counter++;

        // check if we just added the last one
        if(counter === skills.length) {
            btn2.textContent = "All skills added!";
        }
    }
});
// document.body.addEventListener("click", (e) => {
//     if(e.target !== document.body) {
//         e.target.parentNode.removeChild(e.target);
//     }
// });