let tvSerieObject = {
    "Name": "",
    "Production year": "",
    "Casting members": []
};
let newArr = [];

function askTvSerie() {
    let askName = prompt("What's the name of your favorite serie ?");
    let askYear = prompt("What's the production year of this ?");
    let askCasting = "";

    tvSerieObject["Name"] = askName;
    tvSerieObject["Production year"] = askYear;
    
    do {
        askCasting = prompt("Who can we see in this serie ? (to stop the list clic to 'anuler')");
        tvSerieObject["Casting members"].push(askCasting);
        console.log(askCasting)
    } while(askCasting !== null); // tant que c'est différent

}
askTvSerie();

function randLength() {
    let min = Math.ceil(1);
    let max = (tvSerieObject["Casting members"].length)-1; //numb of item
    let result = Math.floor(Math.random()*(max-min) + min); //Génère un nombre aléatoire entre 1 et la longueure tu tableau
    return result
}
randLength();

// ARRAY DON4T DISPLAY ALL MEMBERS, JUST THE SAME NUMB OF ITEMS
function randomizeCast(){
    n = tvSerieObject["Casting members"].length;
    console.log(n)
    for (i = 0; i <= n; i ++) {

        idx = (randLength())-1; //longueur - 1 = index
        newArr.push(tvSerieObject["Casting members"].at(idx)) //push dans le tableau la valeur du tableau à l'index donné
    console.log(idx)
    }
    
}
randomizeCast();

alert (JSON.stringify(newArr));