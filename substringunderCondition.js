var str = "abcab"

var count = 0
for(var i = 0; i < input.length; i++){
    for(var j = i; j < input.length;j++){
        var out = ""
        for(var k = i; k <= j; k++){
            out+=input[k]
        }
        // console.log(out)
        if(out[0] === out[out.length-1]){
            count++
        }
    }
}
console.log(count)