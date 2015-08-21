/**
*取得字符串中的最长回文子字符串
*如absbsb,最长子字符串是bsbsb
*算法如下：
*1.构造一个二进制数组table[n][n]记录每个子字符串是否是回文字符串
*2.每个长度为一的子字符串都是回文:table[i][i]=1
*3.相邻两个字符相同的子字符串是回文:if(str[i] == str[i+1]) table[i][i+1]=1
*4.长度为3及以上的子字符串，如果table[i+1][j-1]=1并且str[i]=str[j],则table[i][j]=1
*/
function fondLongestPalindromic(str) {
    var table = new Array();
    var longestPalindromic = '';
    var maxLength = 0;

    if (!str || str === '') {
        return null;
    }
    if (str.length === 1) {
        return str;
    }

    //注释第二步
    for (var i = 0; i < str.length; i++) {
        table[i] = new Array();
        table[i][i] = 1;
        //第三步
        if ((i < str.length - 1) && (str[i] === str[i + 1])) {
            table[i][i+1] = 1;
        }
    }
    //第四步
    //子字符串长度从3到n遍历
    for (var l = 3; l <= str.length; l++) {
        for(var i = 0; i < str.length - l; i++) {
            var j = i + l - 1;
            if(str[i] === str[j]) {
                table[i][j] = table[i+1][j-1];
                if (table[i][j] ===1 && l > maxLength) {
                    maxLength = l;
                    longestPalindromic = str.slice(i, j + 1);
                }
                
            }
            else {
                table[i][j] = 0;
            }
        }
    }
    console.log(table);
    return longestPalindromic;
}

//但是有个更简单的方法。。。
/**
*只需要一次遍历，找到以每一个或每相邻的两个为中心点的最长回文串
**/
function findMaxPalindromic (str, i, j) {
    while (i >= 0 && j < str.length && str[i] === str[j]) {
        i--;
        j++;
    }
    return str.slice(i + 1, j);
}
function fondLongestPalindromic1(str) {
    if (!str || str === '') {
        return null;
    }
    if (str.length === 1) {
        return str;
    }
    var longest = '';
    for (var i = 0; i < str.length; i++) {
        var temp = findMaxPalindromic(str, i, i);
        if (temp.length > longest.length) {
            longest = temp;
        }
        if (str[i] === str[i + 1]) {
            temp = findMaxPalindromic(str, i, i + 1);
            if (temp.length > longest.length) {
                longest = temp;
            }
        }
    }
    return longest;
}

/**
*判断一个字符串是否是回文字符串
**/
function validPalindrome(str) {
    var i = 0;
    var j = str.length - 1;
    while (i < j) {
        while (/[^0-9a-zA-z]/.test(str[i])) {
            i++;
        }
        while (/[^0-9a-zA-Z]/.test(str[j])) {
            j--;
        }
        if (str[i].toLowerCase() !== str[j].toLowerCase()) {
            return false;
        }
        else {
            i++;
            j--;
        }
    }
    return true;
}