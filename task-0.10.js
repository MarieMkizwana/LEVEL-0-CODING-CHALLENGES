function common(strng1, strng2){
    var newStrng1 = strng1.toLowerCase().split('');
    var newStrng2 = strng2.toLowerCase().split('');
    var commonArr = [];

    for(var i = 0; i < newStrng1.length; i++){
        if(newStrng2.indexOf(newStrng1[i]) >= 0){
            commonArr.push(newStrng1[i]);
        }
    }
    return commonArr.join(', ');
}
console.log(common("reaserching", "earth"));