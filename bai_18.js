//Tính tổng các số dương trong mảng arr = [10, 11, 12, -10, -11, -12]

let arr = [10, 11, 12, -10, -11, -12];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
        sum += arr[i]
    }
}
console.log(sum)