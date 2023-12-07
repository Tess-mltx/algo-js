let answer1 = prompt("Give me a number");
let answer2 = prompt("them, gime a second");
let answer3 = prompt("To create magick, gime a third number !");

let min = Number(answer1);
let max = Number(answer2);
let current = Number(answer3);

if ((current >= min) && (current <= max)) {
    alert("Your third is bigger than the first but lower than the second ! Tadaaaaa !");
} else if (min > max) {
    alert("You know nothing Jhon Snow !");
} else if (((current > min) && (current > max)) || ((current < min) && (current < max)) ) {
    alert("You're not a wizard Harry !");
}
else {
    alert("FATAL ERROR : BRAIN CRASH");
}