let inputAr = ["alex", "josh","Thom", "Dam", "Robin", "Ottman", "Ugur", "Alice", "Winni"];
let outputAr = [];

function randLength() {
    let min = Math.ceil(2);
    let max = (inputAr.length); //numb of item
    let result = Math.floor(Math.random()*(max-min) + min); //Génère un nombre aléatoire entre 1 et la longueure tu tableau
    return result
}
randLength();


function pickLearner(){
    n = randLength();
    for (i = 0; i <= n; i ++) {
        idx = randLength() - 1; //longueur - 1 = index
        outputAr.push(inputAr.at(idx)) //push dans le tableau la valeur du tableau à l'index donné
    console.log(n)
    console.log(idx)
    }
    
    alert(outputAr);
}
pickLearner();

