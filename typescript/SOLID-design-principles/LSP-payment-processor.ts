abstract class PaymentProcessor {
  abstract processPayment(amount: number): void;
}

class CreditCardProcessor extends PaymentProcessor {
  processPayment(amount: number): void {
    console.log(`Credit Card Payment for $${amount} has been processed`);
  }
}

class DebitCardProcessor extends PaymentProcessor {
  processPayment(amount: number): void {
    console.log(`Debit Card Payment for $${amount} has been processed`);
  }
}

class PaypalProcessor extends PaymentProcessor {
  processPayment(amount: number): void {
    console.log(`Paypal Payment for $${amount} has been processed`);
  }
}

function executePayment(
  paymentProcessor: PaymentProcessor,
  amount: number
): void {
  paymentProcessor.processPayment(amount);
}

//instantiate the classes
let creditCardProcessor = new CreditCardProcessor();
let debitCardProcessor = new DebitCardProcessor();
let paypalProcessor = new PaypalProcessor();

executePayment(creditCardProcessor, 100);
executePayment(debitCardProcessor, 200);
executePayment(paypalProcessor, 300);
