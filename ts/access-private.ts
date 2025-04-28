class BankAccount {
    private balance: number;
  
    constructor(initialBalance: number) {
      this.balance = initialBalance;
    }
  
    public deposit(amount: number): void {
      this.balance += amount;
    }
  
    public withdraw(amount: number): void {
      if (amount > this.balance) {
        console.log("Insufficient funds");
      } else {
        this.balance -= amount;
      }
    }
  
    public getBalance(): number {
      return this.balance;
    }
  }
  
  const account = new BankAccount(1000);
  account.deposit(500);  
  
  console.log(`Current balance: $${account.getBalance()}`); // Current balance: $1500
  account.withdraw(200); // Withdraw $200
  console.log(`Current balance: $${account.getBalance()}`); // Current balance: $1300