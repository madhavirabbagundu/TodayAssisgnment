var arr = [1,2,3,4,5,6,7,8,9]
var sum = 5


var res = "no"
for(var i = 0; i < n; i++){
    for(var j = i; j < n; j++){
        var out = []
            var sum = 0;

        for(var k = i; k<=j; k++){
            out.push(arr[k])
            sum+=arr[k]
        }
        // console.log(sum)
        if(sum1 <= sum){
            res = "yes"
        }
       
    }
}
console.log(res)