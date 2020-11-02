function farhenheitTilCelsius(fahrenheit){
    //console.log((fahrenheit - 32) / 1.8);
    if((fahrenheit - 32) / 1.8 > 18){
        console.log("Det var varmt!");
    }
}
// Alternativ løsnning
function  farhenheitTilCelsius2(fahrenheit){
    let celsius = (fahrenheit - 32) / 1.8 > 18;
    console.log(celsius);
    
    if(celsius > 18){
        console.log("Det var varmt!");
    }
}