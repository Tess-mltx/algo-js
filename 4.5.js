let a = [1, 2];
let b = [2, 5];

function calcDistance() {
    let calcX = (b[0] - a[0])
    let calcY = (b[1] - a [1])
    let dist = Math.sqrt(Math.pow(calcX, 2) + Math.pow(calcY, 2))
    // racine carrée de (calcX exposant 2 + calcY exposant 2)
    alert("The distance between A ans B is " + dist )
}
calcDistance()