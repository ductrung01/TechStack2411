//Nhập vào 2 số m, n (m >= 2, n > =2). Hãy in ra màn hình hình chữ nhật có độ chiều rộng là m và chiều cao là n. VD: m = 4, n = 3
let m ;
let n ;
do {
    m = Number(prompt('Nhập m: '));
    n = Number(prompt('Nhập n: '));
}while(m < 2 && n < 2);
let space = '';
for(let i = 1 ; i <= n;i++){
    space = space + ' * '.repeat(m)+ '\n';
}
console.log(space);