// Define the Rectangle class
class Rectangle {
  constructor(width, height) {
    this._width = width;
    this._height = height;
  }

  // Getter for width
  get width() {
    return this._width;
  }

  // Getter for height
  get height() {
    return this._height;
  }

  // Method to calculate the area of the rectangle
  getArea() {
    return this._width * this._height;
  }
}

// Define the Square class that extends the Rectangle class
class Square extends Rectangle {
  constructor(side) {
    // Call the constructor of the parent class (Rectangle) with side for both width and height
    super(side, side);
  }

  // Method to calculate the perimeter of the square
  getPerimeter() {
    return 4 * this._width;
  }
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
