/* function largeNum(arr){
    let maxNum = arr[0];

    for (let i = 1; i < arr.lenght; i++) {
        if (arr[i] > maxNum); {
            maxNum = arr[i];
        }
    }
    return maxNum;
}

const numbers = [80, 40, 35, 201, 340, 221, 281];
console.log(largeNum(numbers)); */

function maxNum(arr){
    return Math.max(...arr);
}

console.log(maxNum([100, 240, 433, 23, 1467, 1002]));