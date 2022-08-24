var str = "AEDFHR"
var str1 = "ABCDGH"

var temp  = {}
for(var i = 0; i < str.length; i++){
    var item = str[i]
    if(temp[item] === undefined){
        temp[item] = 1
    }
    else{
        var prev = temp[item]
        temp[item]+= prev
    }
}
// console.log(temp)
var count = 0;
for(key in temp){
    // for(key in temp1){
    // console.log(temp[key],temp1[key])
    for(var j = 0; j < str1.length; j++){
    if(key === str1[j]){
        count++
    }
    }
}

    console.log(count)