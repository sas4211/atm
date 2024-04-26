#! /usr/bin/env node
import inquirer from "inquirer";
let MyBalance = 10000; //dollars
let MyPinCode = 1234;
///console.log("My Current Balance = $ " + MyBalance);
let PinAnswer = await inquirer.prompt([{
        name: "pin",
        message: "Enter Your Pin Number",
        type: "number"
    }]);
if (PinAnswer.pin === MyPinCode) {
    console.log("Correct Pin Number");
}
else {
    console.log("Incorrect Pin Number");
}
;
if (PinAnswer.pin === MyPinCode) {
    let atmQuestion = await inquirer.prompt([
        {
            name: "AccountType",
            type: 'list',
            message: "Select Your Account Type",
            choices: [
                "Current Account",
                "Saving Account"
            ]
        },
        {
            name: "transactionMethod",
            type: "list",
            message: "Select Your Tansaction Method",
            choices: [
                "Cash-Withdrawal",
                "Fast-Cash",
                "Check-Balance"
            ]
        }
    ]);
    if (atmQuestion.transactionMethod == "Cash-Withdrawal") {
        let amountAns = await inquirer.prompt([
            {
                name: "withdrawalamount",
                message: "Enter Your Amount = ",
                type: "number"
            }
        ]);
        if (MyBalance >= amountAns.withdrawalamount) {
            /// assignment operators =, -= ,+=
            MyBalance -= amountAns.amount;
            ///console.log(amountAns.amount)
            console.log("Your Remaining Balance Is = " + MyBalance);
        }
        else {
            console.log("Insuffiecent Amount");
        }
    }
    else if (atmQuestion.transactionMethod == "Check-Balance") {
        console.log("Your Balance IS = " + MyBalance);
    }
    else {
        let fastCashAmount = await inquirer.prompt([
            {
                name: 'fastcash',
                message: 'Select the amount you want to withdraw',
                type: 'list',
                choices: [
                    "1000",
                    "3000",
                    "5000"
                ]
            }
        ]);
        if (MyBalance >= fastCashAmount.fastcash) {
            MyBalance -= fastCashAmount.fastcash;
            console.log("Your Remaining Balance Is = " + MyBalance);
        }
        else {
            console.log("Insuffiecent Amount");
        }
    }
}
else {
    console.log("Incorrect pin");
}
