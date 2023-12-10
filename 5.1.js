let tvSerieObject = {
    "Name": "",
    "Production year": "",
    "Casting members": []
};

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

alert (JSON.stringify(tvSerieObject));