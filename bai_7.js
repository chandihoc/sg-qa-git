//Dùng vòng lặp while, in ra tất cả số nguyên âm lẻ > -100

function printer(n) {
    let result = "";
    let i = -1;
    while (i > n) {
        if (i%2 != 0) {
            result += " " + i; 
        }
        i--;
    }
    return result;
}
console.log(printer(-100))