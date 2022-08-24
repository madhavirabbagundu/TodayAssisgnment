var n = 5
var dp = [];
dp.length = 10;
dp.fill(0);
 dp[0] = dp[1] = dp[2] = 1;
dp[3] = 2;

for(var i = 4; i <= n; i++)
    dp[i] = dp[i - 1] + dp[i - 3] +
            dp[i - 4];

console.log(dp[n]);