//Nhập vào chuỗi s (chỉ gồm chữ số) và số l. Hãy thêm vào đầu chuỗi s ký tự ‘0’ cho đến khi độ dài chuỗi s >= l.
let s = prompt('Nhập s: ');
let l = prompt('Nhập l: ');
while(s.length < l){
    s = "0" + s;
} 
console.log(s);