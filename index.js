#! /usr/bin/env node
import inquirer from "inquirer";
// dfgdgdf
let myBalance = 50000; // Dollars
let myPin = 23456;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter you pin",
        type: "number",
    },
]);
//23456
if (pinAnswer.pin === myPin) {
    console.log("Correct pin code !");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["fast cash", "withdraw", "check balance"],
        },
    ]);
    console.log(operationAns);
    if (operationAns.operation === "withdraw") {
        let amountAnswer = await inquirer.prompt([
            {
                type: "number",
                name: "amount",
                message: "Enter amount",
            },
        ]);
        if (amountAnswer.amount > myBalance) {
            console.log("Insufficient Balace");
        }
        else {
            console.log(`your withdraw amount is ${amountAnswer.amount}`);
            myBalance -= amountAnswer.amount;
            console.log(`your remaining balance is ${myBalance}`);
        }
    }
    else if (operationAns.operation === "check balance") {
        console.log(`your balance is " ${myBalance}`);
    }
    else if (operationAns.operation === "fast cash") {
        let fastCashAnswer = await inquirer.prompt([
            {
                type: "list",
                name: "fastCash",
                message: "select amount",
                choices: ["5000", "10000", "2000", "30000", "40000", "50000"],
            },
        ]);
        console.log(`your fast cash amount is ${fastCashAnswer.fastCash}`);
        myBalance -= fastCashAnswer.fastCash;
        console.log(`your remainig balance is ${myBalance}`);
    }
}
else {
    console.log("Incorrect pin code");
}
