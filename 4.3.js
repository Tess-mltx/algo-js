let arr = [];

function rand10() {
    let min = Math.ceil(1); //arrondi supérieur maximum 1
    let max = Math.floor(10); //arondi inféieur maximum 10
    let result = Math.floor(Math.random()*(max-min) + min); //arrondi inférieur de décimal random multiplié par 9, le tout plus 1
    return result
}
rand10();


function multiRand(){
    n = rand10();
    for (i = 0; i <= n; i ++) {
        arr.push(Math.floor(Math.random()*(10)))
    console.log(n)
    };
    
    alert(arr);
}
multiRand();
