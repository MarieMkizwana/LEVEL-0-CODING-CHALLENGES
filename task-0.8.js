function time(number){
    var hr = Math.floor(number / 60);
    var min = number % 60;
    return hr + " hours " + min + " minutes ";
}
console.log(time(133));
