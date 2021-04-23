// (30°C x 1.8) + 32 = 86°F
function celsius(degrees){
    var fahValue = (degrees * 1.8) + 32;
    return fahValue;

}

function farenheit(farenheitValue){
    var celsius = (farenheitValue - 32) / 1.8;
    return celsius;
}

console.log(celsius(30));
console.log(farenheit(107));

