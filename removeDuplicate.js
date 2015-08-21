/**排序数组去重
*整体思路是：
*保留一个旧数组指针和一个新数组指针，旧数组指针一直往前遍历
*新数组指针在遇到想要的之后才向前移一位并把需要的值拿过来
*这样在数组本身实现了重构造，不需要额外的空间
**/
function removeDuplicate(arr) {
    var oldPoniter = 1;
    var newPointer = 0;
    while(oldPoniter < arr.length) {
        if(arr[oldPoniter] === arr[newPointer]) {
            oldPoniter++;
        }
        else {
            newPointer++;
            arr[newPointer] = arr[oldPoniter];
            oldPoniter++;
        }
    }
    arr.splice(newPointer+1, arr.length - newPointer + 1);
}
var arr = [1, 1, 2, 2, 3, 3,3];
removeDuplicates(arr);
console.log(arr);

//如果是每个数组最多保留两个的话，同样的思路，只不过指针前进的条件不同了
function removeDuplicates(arr){
    var oldPoniter = 2;
    var newPointer = 1;
    while(oldPoniter < arr.length) {
        if(arr[oldPoniter] === arr[newPointer] && arr[newPointer] === arr[newPointer-1]) {
            oldPoniter++;
        }
        else {
            newPointer++;
            arr[newPointer] = arr[oldPoniter];
            oldPoniter++;
        }
    }
    arr.splice(newPointer+1, arr.length - newPointer + 3);
}