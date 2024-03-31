class Shape {
  constructor() {
    if (new.target === Shape)
      throw new TypeError(
        "The Shape is an abstract class to be implemented by concrete instances"
      );
  }
  draw() {}
}

class Rectangle extends Shape {
  draw({ length, width }) {
    console.log("Rectangle.draw() is called with ", { width, length });
  }
}

class Circle extends Shape {
  draw({ radius }) {
    console.log(`Circle.draw() is called with a radius = ${radius}`);
  }
}

class Square extends Shape {
  draw({ side }) {
    console.log(`Square.draw() is called with side = ${side}`);
  }
}

class ShapeAbstractFactory {
  static drawShape(type, options) {
    let shape = Rectangle;
    switch (type.toLowerCase()) {
      case "rectangle":
        shape = Rectangle;
        break;
      case "circle":
        shape = Circle;
        break;
      case "square":
        shape = Square;
        break;

      // defaults to Rectangle type
    }

    new shape().draw({ ...options });
  }
}

ShapeAbstractFactory.drawShape("Circle", { radius: 1 });
ShapeAbstractFactory.drawShape("Rectangle", { length: 2, width: 1 });
ShapeAbstractFactory.drawShape("Square", { side: 1 });
