//Viết chương trình in ra hình chữ nhật có cạnh a, b Ví dụ:
// a = 3, b = 5
// * * * * *
// * * * * *
// * * * * *

function rectangle(a,b) {
    for (let i = 0; i < a; i++) {
        console.log(tinh(b))
    }
}
console.log(rectangle(3,5))

function tinh(b) {
    let chieu_dai = "";
    for (let i = 0; i < b; i++) {
        if (i == 0) {
            chieu_dai = "*"
        } else {
            chieu_dai += " *"
        }
    }
    return chieu_dai;
}