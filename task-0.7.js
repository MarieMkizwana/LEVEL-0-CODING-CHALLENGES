// (30°C x 1.8) + 32 = 86°F
function celsiusToFarenheit(degrees){
    var fahValue = (degrees * 1.8) + 32;
    return fahValue;

}

function farenheitToCelsius(farenheitValue){
    var celsius = (farenheitValue - 32) / 1.8;
    return celsius;
}

console.log(celsiusToFarenheit(30));
console.log(farenheitToCelsius(107));

