//Dùng vòng lặp for, tính tổng của dãy sau: S(n) = 1 + 8 + 27 + ... + n^3

function sum(n) {
    let sum = 0;
    for(i = 1; i <= n; i++) {
        sum = sum + i**3;
    }
    return sum;
}
console.log(sum(5));