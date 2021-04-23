function vowels(strng){
    var vowelList = "aeiouAEIOU";
    var vowelHolder = "";
    
    for(var i = 0; i < strng.length; i++){
        if(vowelList.indexOf(strng[i]) >= 0){
            vowelHolder = vowelHolder + strng[i];
        }
    }
    return vowelHolder;

}
console.log(vowels("Umuzi"));