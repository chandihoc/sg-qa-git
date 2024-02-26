//Tìm số lớn nhất trong mảng arr = [10, 11, 12, 13, 14, 15]

let arr = [10, 11, 12, 13, 14, 15];
let n = arr[0];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > n) {
        n = arr[i];
    }
}
console.log(n);