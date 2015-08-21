/**
*String to Int方法
*这个问题主要考察可能的情况考虑的是否全面
*可能出现的情况：
*1，字符串为空或null
*2,字符串中包含空格
*3，字符串前有+/-号
*4，转换后数字超出整形表示的范围怎么办
**/
//看到一个很奇怪的方法，如果字符串中没有除数字以外的其他字符是可以这样做的
//程1的时候字符串自己转换成了数字或NaN
//或0的时候去掉了小数点
//但是这个方法肯定是有问题的
function stringToInt(str) {
    return str*1|0||0;
}
//另外一种方法遍历数组是知道的吧