import inquirer from "inquirer";

//Initialize user balance and pin code 
let myBalance = 5000;
let myPin = 1234;

//Print welcome message
console.log("Welcome to my channel - ATM Machine"); 

let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type:"number",
        message:"Enter your pin code: "
    }
])
if (pinAnswer.pin === myPin){
    console.log("Pin is Correct, Login Sucessfully!");
    console.log('Current Account Balance is ${myBalance}')

    let operationAns = await inquirer.prompt([
        {
            name:"operation",
            type:"list",
            message:"Select an operation:",
            choices:["Withdraw Amount" , "Check Balance"]
        }
    ])

    if(operationAns.operation=== "Withdraw Amount"){
       let amount = await inquirer.prompt([
        {
        name:"amount",
        type:"number",
        message:"Enter the amount to withdraw:"
          }
        ])
        if(amountAns.amount > myBalance){
         console.log("Insufficient Balance");
        }
        else {
           myBalance -=amountAns.amount;
           console.log('${amountAns.amount} Withdraw Sucessfully');
           console.log('Your Remaining Balance is:${myBalance}');
        }
    }
    else if (operationAns.operation === "Check Balance"){
        console.log('Your Current Balance is: $(myBalance)');
    }
}
else{
     console.log("Pin is Incorrect, Try Again!");
}
