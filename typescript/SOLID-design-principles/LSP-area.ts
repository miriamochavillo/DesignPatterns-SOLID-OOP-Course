// Parent Class
abstract class Shape {
  abstract calculateArea(): number;
}

//Sub-class 1
class RectangleShape extends Shape {
  constructor(public width: number, public height: number) {
    super();
  }
  public calculateArea(): number {
    return this.width * this.height;
  }
}

//Sub-class 2
class SquareShape extends Shape {
  constructor(public side: number) {
    super();
  }

  public calculateArea(): number {
    return this.side * this.side;
  }
}

// === Client Code
function area(shape: Shape) {
  return shape.calculateArea();
}

let rectangleShape = new RectangleShape(10, 48);
let squareShape = new SquareShape(69);

area(rectangleShape);
area(squareShape);

console.log("Rectangle Area: ", area(rectangleShape));
console.log("Square Area: ", area(squareShape));
