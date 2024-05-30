#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var myBalance = 30000;
var myPin = 2525;
var pinAnswer = await inquirer_1.default.prompt([{ name: "pin", message: "enter your pin", type: "number" }]);
if (pinAnswer.pin === myPin) {
    console.log("correct pin code!!!");
}
;
var operationAnswers = await inquirer_1.default.prompt([{ name: "operation", message: "please select transaction", type: "list",
        choices: ["withdraw", "check balance"] }]);
if (operationAnswers.operation === "withdraw") {
    var amountAns = await inquirer_1.default.prompt([{ name: "amount", message: "enter your amount", type: "number" }]);
    myBalance -= amountAns.amount;
    console.log("your remaining balance is" + myBalance);
}
else if (operationAnswers.operation === "check balance") {
    console.log("your balance is" + myBalance);
}
else {
    console.log;
}
("incorrect pinNumber");
