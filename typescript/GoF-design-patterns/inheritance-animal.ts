class Animal {
  constructor(public name: string) {}
  move(distance: number): void {
    console.log(`${this.name} moved ${distance}m.`);
  }
}

class Dog extends Animal {
  constructor(name: string = "Dog") {
    super(name);
  }
}

let myDog: Dog = new Dog("Wally");
myDog.move(10);
