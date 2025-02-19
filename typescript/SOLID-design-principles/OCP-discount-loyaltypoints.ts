// class Discount {
//   giveDiscount(customerType: "premium" | "regular"): number {
//     if (customerType === "regular") {
//       return 10;
//     } else if (customerType === "premium") {
//       return 20;
//     } else {
//       return 30;
//     }
//   }
// }

interface Customer {
  giveDiscount(): number;
  addLoyaltyPoints(amountSpent: number): number;
}

class RegularCustomer implements Customer {
  giveDiscount(): number {
    return 10;
  }
  addLoyaltyPoints(amountSpent: number): number {
    return amountSpent;
  }
}

class PremiumCustomer implements Customer {
  giveDiscount(): number {
    return 20;
  }
  addLoyaltyPoints(amountSpent: number): number {
    return amountSpent * 2;
  }
}

class GoldCustomer implements Customer {
  giveDiscount(): number {
    return 30;
  }
  addLoyaltyPoints(amountSpent: number): number {
    return amountSpent * 3;
  }
}

class Discount {
  giveDiscount(customer: Customer): number {
    return customer.giveDiscount();
  }
}
class LoyaltyPoints {
  addLoyaltyPoints(customer: Customer, amountSpent: number): number {
    return customer.addLoyaltyPoints(amountSpent);
  }
}

// let premiumCustomer: PremiumCustomer = new PremiumCustomer();
let goldCustomer: GoldCustomer = new GoldCustomer();

let discount: Discount = new Discount();
let loyaltyPoints: LoyaltyPoints = new LoyaltyPoints();

// let finalValue = discount.giveDiscount(premiumCustomer);
let finalValue = discount.giveDiscount(goldCustomer);
let loyaltyPointsEarned = loyaltyPoints.addLoyaltyPoints(goldCustomer, 10);

console.log("Final value after discount:", finalValue, "%");
console.log("Loyalty points earned:", loyaltyPointsEarned);
