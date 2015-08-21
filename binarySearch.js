/**
*二分查找
**/
function binarySearch(arr, target) {
    function binary(arr, start, end, target) {
        var mid = Math.floor((start + end)/2);
        if (arr[mid] === target) {
            return mid;
        }
        else if (arr[mid] < target) {
            return mid < end ? binary(arr, mid + 1, end, target) : mid;
        }
        else {
            return mid > start ? binary(arr, start, mid - 1, target) : mid;
        }
    }
    return binary(arr, 0, arr.length - 1, target);
}