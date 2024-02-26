//Đếm số lượng các số chẵn trong mảng arr = [10, 11, 12, 13, 14, 15]

let arr = [10, 11, 12, 13, 14, 15];
let newArr = [];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
        newArr.push(arr[i])
        console.log(newArr)
    } 
}
console.log(newArr.length)