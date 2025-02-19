class Singleton {
  private static instance: Singleton;
  private static _value: number;

  private constructor() {}

  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }
  set value(value: number) {
    Singleton._value = value;
  }
  get value(): number {
    return Singleton._value;
  }
}

let instance1 = Singleton.getInstance();
let instance2 = Singleton.getInstance();
instance1.value = 10;

console.log("Value of instance1:", instance1.value);
console.log("Value of instance2:", instance2.value);
console.log("instance1 === instance2:", instance1 === instance2);
