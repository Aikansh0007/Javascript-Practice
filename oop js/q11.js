class BankAccount{
    constructor(accountNumber,accountHolderName,accountBalance){
        this.accountNumber = accountNumber;
        this.accountHolderName = accountHolderName;
        this.accountBalance=accountBalance;
    }
    deposit(amount){
        this.accountBalance += amount;
        console.log(`Amount ${amount} Deposited into the Account ${this.accountNumber}`);
    }
    withdraw(amount){
        if(this.accountBalance >= amount){
            this.accountBalance -= amount;
            console.log(`Amount ${amount} Withdrawn from the Account ${this.accountNumber}`);
            }
            else{
                console.log("Insufficient Balance");
                }    
    }
    transfer(amount,recipientAccount){
        if(this.accountBalance >= amount){
            this.accountBalance -= amount;
            recipientAccount.deposit(amount);
            console.log(`Amount ${amount} Transferred from the Account ${this.accountNumber} to the Account ${recipientAccount.accountNumber}`);
    }
}
displayBalance(){
    console.log(`Account Number: ${this.accountNumber}, Account Holder Name: ${this.accountHolderName}, Remaining Balance: ${this.accountBalance}`);
}
}
const account1 = new BankAccount('0987654321', 'Aikansh', 2000);
const account2 = new BankAccount('1234567890', 'Kartik', 3000);


account1.displayBalance(); 
account2.displayBalance(); 

account1.deposit(500); 
account1.displayBalance(); 

account1.withdraw(200); 
account1.displayBalance(); 

account1.transfer(700, account2);
account1.displayBalance(); 
account2.displayBalance(); 

