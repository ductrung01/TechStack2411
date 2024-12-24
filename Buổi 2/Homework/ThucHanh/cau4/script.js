//Nhập vào số n. Tính giai thừa của số n.
let n = prompt('Nhập số n : ');
n = Number(n);
let gt = 1;
for(let i = 1 ;i <=n;i++){
    gt = gt * i;
}
console.log('Giai thừa của số n là : '+gt);