/**
*正则表达式.和*的实现
**/
function isMatch(src, pattern) {
    var i = 0;
    var j = 0;
    while (i < src.length && j < pattern.length) {
        if (src[i] !== pattern[j] && pattern[j] !== '.' && pattern[j + 1] !== '*' ) {
            return false;
        }
        else if(pattern[j + 1] === '*') {
            if (src[i] === pattern[j] || pattern[j] === '.') {
                i++;
            }
            else {
                j += 2;
            }
        }
        else {
            i++;
            j++;
        }
    }
    if (j !== pattern.length) {
        j += 2;
    }
    if (i === src.length && j === pattern.length) {
        return true;
    }
    else {
        return false;
    }
}
