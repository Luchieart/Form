/* console.log(Math.PI);
console.log(Math.pow(5,3);
console.log(Math.floor(2.4);
console.log(Math.min(2.4,3,4);
console.log(Math.floor(Math.random() * 10) +1);
console.log(Math.floor(Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * 10) + 1);
console.log(Math.random();
 */
const anyName = "Jonathan"
console.log(anyName.charAt(Math.floor(Math.random() * anyName.length)))
let testScore = 89;
let collegeStudent
let grade;
if (testScore >= 90) {
    grade = "A"
}
if (testScore >= 80) {
    grade = "B";
}
else if (testScore >= 70) {
    grade = "C"
}
else {
    if (collegeStudent) {
        grade = "U";
    }
}
console.log(grade)
//Ternary operator
let soup = "Chicken Noodle Soup";
let isCustomerBanned = false;
let soupAccess = isCustomerBanned ? "Sorry, no soup for you!"
    : soup
        ? "Yes, we have soup today"
        : "Sorry no soup today"
console.log(soupAccess)
        
let score = 40;
let myGrade = score > 89 ? "A"
    : score > 79 ? "B"
        : score > 69 ? "C"
            : score > 59 ? "D"
                : "F";
console.log(myGrade)
  
let playerOne = "rock";
let computer = "scissors";
let result = playerOne === computer ? "Tie game!"
    : playerOne === "scissors" && computer === "rock" ? "computer wins!"
    : playerOne === "paper" && computer === "scissors" ? "computer wins!"
    : playerOne === "rock" && computer === "paper" ? "computer wins!"
                : "playerOne wins!"
console.log(result)
    //User Input
let myBoolean = confirm("Ok === True\nCancel === False");
console.log(myBoolean);
//types of popup we can use:alert,confirm and name.
let name = prompt("Please enter your name.");      
console.log();  












