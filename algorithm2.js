var arr1 = [3, 1, 7, 9];
var arr2 = [2, 4, 1, 9, 3];
function findSum(arr1, arr2) {
    var sum = 0;
    for (var i = 0; i < arr1.length; i++) {
        for (var j = 0; j < arr2.length; j++) {
            if (arr1[i] == arr2[j]) {
                sum += arr1[i];
            }
        }
    }
    return sum;
}
console.log(findSum(arr1, arr2));

//