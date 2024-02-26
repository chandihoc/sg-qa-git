//Đếm số lượng các số âm trong mảng arr = [10, 11, 12, -10, -11, -12]

let arr = [10, 11, 12, 12, -10, -10, -11, -12, -12];
let newArr = [];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
        newArr.push(arr[i])
        console.log(newArr)
    } 
}
console.log(newArr.length)