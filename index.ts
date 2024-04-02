#! /usr/bin/env node

import inquirer from "inquirer";
console.log("      -:WELCOME TO IBAD RAZA ATM-MACHINE:-     ");


let myBalance = 250000; // Dollar
let myPin = 27781;

let pinAnswer = await inquirer.prompt(
    [
        {
            name: "pin",
            message: "Enter your 5-Digit Pin: ",
            type: "number",
        }
    ]
)

// console.log(pinAnswer.q1);
if(pinAnswer.pin === myPin){
    console.log("Correct PIN code!!!");
    console.log("How can i assist you today");

    let operationAns = await inquirer.prompt(
        [
            {
                name: "operation",
                message: "Please select an option: ",
                type: "list",
                choices: ["Withdraw","Check balance","Fast Cash"]
            }
        ]
    );
    // console.log(operationAns);
    
    if(operationAns.operation === "Withdraw"){
        let amountAns = await inquirer.prompt(
            [
                {
                    name: "amount",
                    message: "Enter your withdrawal amount: ",
                    type: "number",
                }
            ]
        );
        myBalance -= amountAns.amount;
        if(myBalance > 0){
            console.log("Your remaining balance is "+ myBalance);
        }
        else if(myBalance < 0){
        console.log("Your balance is insufficient.");
        }
    }

    else if(operationAns.operation === "Check balance"){
        console.log("Your current Balance is: " + myBalance);
    }
    else if(operationAns.operation === "Fast Cash"){
        let FastcashAns = await inquirer.prompt(
        [
            {
                name: "Fastcash",
                type: "list",
                choices: ["1000","2500","5000","10000","25000"]
            }
        ]
        );
        myBalance -= FastcashAns.Fastcash;
        console.log("Your current Balance is: " + myBalance);
    }
}

else{
    console.log("Incorrect PIN number");
}
