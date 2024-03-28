#! /usr/bin/env node
import inquirer from "inquirer";
const randomNum = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt([
    {
        name: "usernumber",
        type: "number",
        message: "please guess any number from 1-6",
    },
]);
if (answer.usernumber === randomNum) {
    console.log("congratulation you guessed right number");
}
else {
    console.log("you guessed wrong number");
}
