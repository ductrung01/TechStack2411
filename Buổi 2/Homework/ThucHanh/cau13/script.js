//Nhập vào số n (n >= 2). Hãy in ra màn hình hình vuông có độ dài cạnh = n. VD: n = 3
let n;
do{
     n = Number(prompt('Nhập vào số n: '));
}while(n < 2);
let output = '';
for(let i =1 ; i<=n; i++){
    output = output + ' * '.repeat(n)+ '\n';
  
}
console.log(output);


