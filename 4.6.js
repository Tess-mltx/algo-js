// let min = Math.ceil(1);
// let max = Math.floor(10);
// let value = (Math.floor(Math.random()*(max-min) + min));

let result = factorial(5)
function factorial(n){
console.log(n)
    if (n === 0) {
        return "The cake is a lie";
    } else  {
        let nbr = factorial(n - 1)
        return n * nbr;
    }
    

}


alert("The factorial of 5 is " + result)