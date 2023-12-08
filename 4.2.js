function rand10() {
    let min = Math.ceil(1);
    let max = Math.floor(10);

    alert (Math.floor(Math.random()*(max-min) + min));
}
rand10();