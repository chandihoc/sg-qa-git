//Dùng vòng lặp for, tính tổng của dãy sau: S(n) = 1 + 4 + 9 + 16 + 25 + ... + n^2

function sum(n) {
    let sum = 0;
    for(i = 1; i <= n; i++) {
        sum = sum + i**2;
    }
    return sum;
}
console.log(sum(5));