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


function Random(min, max){
    return (Math.floor(Math.random()*(max-min) + min));
};

let rectanglesList = [];
let rectanglesCollide = [];

function generate1000Rect(){
    let i = 0
    for(let i = 0; i = 1000; i++){
        let x = Random(0, 100);
        let y = Random(0, 100);
        let widthRect = Random(1, 10);
        let lengthRect = Random(1, 10); 
        let rectangleAdv = new Rectangle(x, y, widthRect, lengthRect);
        rectanglesList.push(rectangleAdv); // stock dans un tableau les nouvelles instances
    };
}

function warZone() {
    for (let i = 1; i <= rectanglesList.length; i++){ //parcourir le tableau et incrémenter
        let rect1 = rectanglesList[0];
        let rect2 = rectanglesList[i];
        rect2.collides(rect1); // la collision est évaluée entre le 1 et les autres
        if (rect2.collides(rect1)){
            rectanglesCollide.push(rect2);
        };
    }
    return(rectanglesCollide)
}

// test
generate1000Rect();
warZone();
console.log(rectanglesCollide);
