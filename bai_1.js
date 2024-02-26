//Dùng vòng lặp for, tính tổng của dãy sau: S(n) = 1 + 2 + 3 + ... + n

function sum(n) {
    let sum = 0;

    for (i = 1; i <= n; i++) {
        sum = sum + i;
    }
    return sum;
}
console.log(sum(5));



