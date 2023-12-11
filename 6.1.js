class Circle {
    constructor(xPos, yPos, radius){
    this.xPos = xPos;
    this.yPos = yPos;
    this.radius = radius;
    }

    move(xOffset, yOffset){
        this.xPos += xOffset;
        this.yPos += yOffset;
    }

    get surface() {
        return Math.PI * (this.radius * this.radius);
    }
}

// test class
let Circle1 = new Circle(8, 7, 2);
console.log("The set value of the circle 1 is " + Circle1.xPos + " , " + Circle1.yPos);

// test move
Circle1.move(4, -3);
console.log("The new position of the circle is " + Circle1.xPos + " , " + Circle1.yPos);

// test calc surface
console.log("The surface of the circle = " + Circle1.surface)