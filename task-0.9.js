function vowels(strng){
    var vowelList = "aeiou";
    var vowelHolder = [];
    
    for(var i = 0; i < strng.length; i++){
        for(var j = 0; j < vowelList.length; j++){
            if(strng[i] == vowelList[j] || strng[i] == vowelList[j].toUpperCase()){
                vowelHolder.push(strng[i]);
            }
        }
       
    }

    for(var x = 0; x < vowelHolder.length; x++){
        var char = vowelHolder[x];
        var count = 0;

        if(char == vowelHolder[x] && count > 1){
            vowelHolder.splice(x, 1);
            }
        }
        return vowelHolder;

    
}

console.log(vowels("Umuzi"));