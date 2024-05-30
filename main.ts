#!/usr/bin/env node
import inquirer from "inquirer"

let myBalance=30000
let myPin=2525;
let pinAnswer= await inquirer.prompt

([{name:"pin",message:"enter your pin",type:"number"}])

if(pinAnswer.pin===myPin){console.log("correct pin code!!!")};
    let operationAnswers=await inquirer.prompt

([{name:"operation",message:"please select transaction",type:"list",
choices:["withdraw","check balance"] }])



if(operationAnswers.operation==="withdraw"){let amountAns=await inquirer.prompt
([{name:"amount",message:"enter your amount",type:"number"}])



myBalance-= amountAns.amount;
console.log("your remaining balance is"+ myBalance)

} else if (operationAnswers.operation==="check balance")
    {console.log("your balance is"  + myBalance)}

else{console.log}("incorrect pinNumber");