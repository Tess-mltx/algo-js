class Rectangle {
    constructor(topLeftXPos, topLeftYPos, length, width){
        this.topLeftXPos = topLeftXPos;
        this.topLeftYPos = topLeftYPos;
        this.width = width;
        this.length = length;
    };
    
    collides(otherRectangle){
        return (
            this.topLeftXPos <= (otherRectangle.topLeftXPos + otherRectangle.length) && // SI la Xpos du rect1 est plus petit que la Xpos du 2 + sa longueure ET
            (this.topLeftXPos + this.length) >= otherRectangle.topLeftXPos && // SI la Xpos du 1 + sa longeur soit plus grande que la Xpos du 2 ET
            this.topLeftYPos <= (otherRectangle.topLeftYPos + otherRectangle.width) && // SI idem que calc1 pour la largeur ET
            (this.topLeftYPos + this.width) >= otherRectangle.topLeftYPos // SI idem calc 2 pour largeur
        );
    };
}

// test cases
let rect1 = new Rectangle (0, 0, 5, 3);
let rect2 = new Rectangle (2, 2, 5, 3);
let rect3 = new Rectangle (12, 12, 5, 3);

console.log("Is there collide between 1 and 2 ? " + rect1.collides(rect2));
console.log("Is there collide between 1 and 3 ? " + rect1.collides(rect3));