interface ShapeProperties {
  color: string;
  x: number;
  y: number;
}

abstract class Shape {
  constructor(public properties: ShapeProperties) {}
  abstract clone(): Shape;
}

class RectangleShape extends Shape {
  constructor(
    properties: ShapeProperties,
    public width: number,
    public height: number
  ) {
    super(properties);
  }
  public clone(): Shape {
    let clonedProperties: ShapeProperties = {
      color: this.properties.color,
      x: this.properties.x,
      y: this.properties.y,
    };
    return new RectangleShape(clonedProperties, this.width, this.height);
  }
}

class CircleShape extends Shape {
  constructor(properties: ShapeProperties, public radius: number) {
    super(properties);
  }
  public clone(): Shape {
    let clonedProperties: ShapeProperties = {
      color: this.properties.color,
      x: this.properties.x,
      y: this.properties.y,
    };
    return new CircleShape(clonedProperties, this.radius);
  }
}

let redRectangle: RectangleShape = new RectangleShape(
  { color: "red", x: 10, y: 20 },
  100,
  200
);
let anotherRectangle: Shape = redRectangle.clone();
anotherRectangle.properties.color = "blue"; //changing the color of anotherRectangle will affect redRectangle
console.log("Rectangle color: ", redRectangle.properties.color);
console.log("Rectangle color: ", anotherRectangle.properties.color);
