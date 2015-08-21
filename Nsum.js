/**
*如果一个整数数组是排序的（或者并不是要找数字下标），
*找到数组中和等于给定值的两个数，一般来说是O(n2)的，因为要
*遍历两遍数组，但是有一种方法可以做到o(n),就是用两个指针
*分别从前后遍历
**/
function twoSum(arr， target) {
    arr.sort();//首先进行排序
    var i = 0;
    var j = arr.length - 1;
    var res = [];//解集合
    while (i < j) {
        //三种情况下对指针进行操作
        if (arr[i] + arr[j] === target) {
            res.push([arr[i], arr[j]]);
            i++;
            j--;
            //避免得到重复的解
            while (i < j && arr[i] === arr[i - 1]) {
                i++;
            }
            while (i < j && arr[j] === arr[j + 1]) {
                j--;
            }
        }
        else if (arr[i] + arr[j] < target) {
            i++;
        }
        else {
            j--;
        }
    }
    return res;
}