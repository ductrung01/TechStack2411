//Nhập vào số n (2 <= n <= 10). Hãy in ra bảng cửu chương của số n.
let n;
do{
     n = Number(prompt('Nhập vào số n : '));
}while(n<2 || n> 20);
let result = 0;
for(let i = 1; i <= 10 ; i++){
    result = n * i;
    console.log(result);
}