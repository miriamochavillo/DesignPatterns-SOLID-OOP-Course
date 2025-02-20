interface Builder {
  setPartA(): void;
  setPartB(): void;
  setPartC(): void;
}

class Product {
  private parts: string[] = [];

  public add(part: string): void {
    this.parts.push(part);
  }

  public list(): void {
    console.log(`Product parts: ${this.parts.join(", ")}`);
  }
}

// Concrete Builder Class
class ConcreteBuilder implements Builder {
  private product!: Product;
  constructor() {
    this.reset();
  }
  public reset(): void {
    this.product = new Product();
  }

  public setPartA(): void {
    this.product.add("PartA");
  }
  public setPartB(): void {
    this.product.add("PartB");
  }
  public setPartC(): void {
    this.product.add("PartC");
  }
  public getProduct(): Product {
    const result = this.product;
    this.reset();
    return result;
  }
}

// Director Class
class Director {
  private builder!: Builder;
  public setBuilder(builder: Builder): void {
    this.builder = builder;
  }
  public buildMinimalViableProduct(): void {
    this.builder.setPartA();
  }
  public buildFullFeaturedProduct(): void {
    this.builder.setPartA();
    this.builder.setPartB();
    this.builder.setPartC();
  }
}

const builder = new ConcreteBuilder();
const director = new Director();
director.setBuilder(builder);

director.buildMinimalViableProduct();
let minProduct = builder.getProduct();
console.log(minProduct);

director.buildFullFeaturedProduct();
let fullProduct = builder.getProduct();
console.log(fullProduct);
