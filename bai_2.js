//Dùng vòng lặp for, tính tổng của dãy sau: S(n) = 1 + 1/2 + 1/3 + 1/4 + ... + 1/n

function sum(n) {
    let sum = 0;
    for (i = 1; i <= n; i++) {
        sum = sum + 1/i;
    }
    return sum;
}
console.log(sum(1));