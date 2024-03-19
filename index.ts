#! urs/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter first nummber", type: "number", name: "fisrtNumber" },
  { message: "Enter second number", type: "number", name: "secondNumber" },
  {
    message: "Select one of the operators to perform action",
    type: "list",
    name: "operator",
    choices: ["Addition", "Substraction", "Multiplication", "Division"],
  },
]);

// condition statement

if (answer.operator === "Addition") {
    console.log(answer.fisrtNumber + answer.secondNumber);
} else if (answer.operator === "Substraction") {
    console.log(answer.fisrtNumber - answer.secondNumber);
}

else if (answer.operator === "Multiplication") {
    console.log(answer.fisrtNumber * answer.secondNumber);
}

else if (answer.operator === "Division") {
    console.log(answer.fisrtNumber / answer.secondNumber);
}
else { console.log("Please select valid operator")}

// Calculator Made by Jawad Nasir
// Sat 7 - 10 pm
// Sir Faisal 
