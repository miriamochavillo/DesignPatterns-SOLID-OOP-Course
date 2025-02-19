interface Shape {
  area(): number;
  perimeter(): number;
}

class Circle implements Shape {
  constructor(private radius: number) {}
  area(): number {
    return Math.PI * this.radius * this.radius;
  }
  perimeter(): number {
    return 2 * Math.PI * this.radius;
  }
}

class Rectangle implements Shape {
  constructor(private length: number, private width: number) {}
  area(): number {
    return this.length * this.width;
  }
  perimeter(): number {
    return 2 * (this.length + this.width);
  }
}
let circle: Circle = new Circle(5);
let rectangle: Rectangle = new Rectangle(4, 6);

function calculateTotalArea(shape: Shape) {
  return shape.area();
}
function calculateTotalPerimeter(shape: Shape) {
  return shape.perimeter();
}

console.log("Area of Circle:", calculateTotalArea(circle));
console.log("Area of Rectangle:", calculateTotalArea(rectangle));

console.log("Perimeter of Circle:", calculateTotalPerimeter(circle));
console.log("Perimeter of Rectangle:", calculateTotalPerimeter(rectangle));
