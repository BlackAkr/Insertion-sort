"use strict";
function insertionSort(arr) {
    for (var j = 1; j < arr.length; j++) {
        var i = j - 1;
        var key = arr[j];
        while (i >= 0 && arr[i] > key) {
            arr[i + 1] = arr[i];
            i--;
        }
        arr[i + 1] = key;
    }
    return arr;
}
var arr = [1, 3, 5, 2, 0];
window.alert(insertionSort(arr));
