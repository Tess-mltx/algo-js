let n = parseInt(prompt("Choose a small number"));
let answer = 0;
let y = 0 ;


for (i = 1; i <= n; i += 1){
    answer = parseInt(prompt("An a other !"));
    y = y + answer;
}

alert("The somme is " + y);