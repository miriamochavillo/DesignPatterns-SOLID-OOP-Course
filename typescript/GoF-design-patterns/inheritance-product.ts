class Product {
  constructor(
    public id: string,
    public price: number,
    public description: string
  ) {}
  display(): void {
    console.log(
      `ID: ${this.id}, Price: ${this.price}, Description: ${this.description}`
    );
  }
}

class Book extends Product {
  constructor(
    public id: string,
    public price: number,
    public description: string,
    public title: string,
    public author: string
  ) {
    super(id, price, description);
  }
  display(): void {
    super.display();
    console.log(`Book Author: ${this.author}, Book Title: ${this.title}`);
  }
}

class Electronic extends Product {
  constructor(
    public id: string,
    public price: number,
    public description: string,
    public brand: string,
    public model: string
  ) {
    super(id, price, description);
  }
  display(): void {
    super.display();
    console.log(
      `Electronic Brand: ${this.brand}, Electronic Model: ${this.model}`
    );
  }
}

let book = new Book(
  "1",
  20,
  "Horror Book",
  "Castle in the Woods",
  "Wally William"
);
book.display();

let electronic = new Electronic("2", 100, "Smartphone", "Apple", "iPhone 12");
electronic.display();
