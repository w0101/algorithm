/**
*一个动态规划算法
*找出再字符串S的子字符串中与字符串T相同的个数
*如s='aabbcc' t='abc' 不同子串的个数是8
*算法思路：
*状态w(i,j)表示从S的子串（0到长度为i）中包含的T的子串（0到长度为j）的个数
*状态转移方程if(s[i]===t[j]) w(i,j)=w(i-1,j) + w(i-1,j-1)
*            else w(i,j)=w(i-1,j)
**/
function numDistinct(s,t) {
    var w = [];
    for (var i = 0; i <= s.length; i++) {
        w[i] = [];
        w[i][0] = 1;
     }

     for (var i = 1; i <= s.length; i++) {
        for (var j = 1; j <= t.length; j++) {
            if (s[i-1] === t[j-1]) {
                w[i][j] = (w[i-1][j]?w[i-1][j]:0) + (w[i-1][j-1]?w[i-1][j-1]:0);
            }
            else{
                w[i][j] = w[i-1][j]?w[i-1][j]:0;
            }
        }
     }
     return w[s.length][t.length];
}
console.log(numDistinct('aabbcc', 'abc'));