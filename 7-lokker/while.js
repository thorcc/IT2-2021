console.log("Scriptet er lastet!");


// --- while-løkker ---

let n = 5;
while (n > 0){
    console.log(n);
    n -= 1;
}
console.log("Lift off!");

let tall = 0;
while (tall < 10){
    console.log(tall);
    tall += 1;
}

let ganger = 1;
while(ganger < 11){
    console.log(ganger * 5);
    ganger += 1;
}

function spill () {
    let sum = Math.floor(Math.random()*10) + 1;

    while(sum < 50){
        console.log("Du vant ikke!");
        sum = Math.floor(Math.random()*10) + 1;
        sum += 1;
    }
    console.log("Du vant!");
}

minKnapp.onclick = spill;
