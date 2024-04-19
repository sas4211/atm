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
let OperationAnswer = await inquirer.prompt([{
        name: "operation",
        message: "Please Select Option",
        type: "list",
        choices: ["WithDraw", "Check Balance"]
    }]);
// console.log(OperationAnswer);
if (OperationAnswer.operation === "WithDraw") {
    let amountAns = await inquirer.prompt([
        {
            name: "amount",
            message: "Enter Your Amount = ",
            type: "number"
        }
    ]);
    /// assignment operators =, -= ,+=
    MyBalance -= amountAns.amount;
    ///console.log(amountAns.amount)
    console.log("Your Remaining Balance Is = " + MyBalance);
}
else if (OperationAnswer.operation === "Check Balance") {
    console.log("Your Balance IS = " + MyBalance);
}
