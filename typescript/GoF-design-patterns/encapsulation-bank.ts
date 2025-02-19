class BankAccount {
  private _balance: number;
  constructor(initialBalance) {
    this._balance = initialBalance;
  }
  //Getter to get the balance since _balance is private
  public get balance(): number {
    return this._balance;
  }

  public deposit(amount: number) {
    if (amount < 0) {
      console.log("Invalid Deposit Amount");
      return;
    }
    this._balance += amount;
  }

  public withdraw(amount: number): void {
    if (amount < 0) {
      console.log("Invalid Withdrawal Amount");
      return;
    }
    if (this._balance - amount < 0) {
      console.log("Insufficient Funds");
      return;
    }
    this._balance -= amount;
  }
}
//Initial Balance of 1000
const myAccount = new BankAccount(1000);
myAccount.deposit(500);
myAccount.withdraw(200);
console.log("Current Balance: ", myAccount.balance);
