let arr = [];

function rand10() {
    let min = Math.ceil(1);
    let max = Math.floor(10);
    let result = Math.floor(Math.random()*(max-min) + min);
    return result
}
rand10();


function multiRand(){
    n = rand10();
    for (i = 0; i <= parseInt(n); i ++) 
        arr.push(Math.floor(Math.random()*(10)))
    console.log(n)
    
    alert(arr);
}
multiRand();
