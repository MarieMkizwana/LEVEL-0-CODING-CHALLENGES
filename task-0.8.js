function time(number){
    var hr = Math.floor(number / 60);
    var min = number % 60;
    return hr + ":" + min;
}
console.log(time(133));
