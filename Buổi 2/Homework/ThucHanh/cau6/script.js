//Nhập vào số n (n >= 2). Hãy tính giá trị biểu thức sau: S = 1/(1.2) + 1/(2.3) + ... + 1/n(n+1)
let n;
do{
    n = prompt('Nhập sô n: ');
    n =Number(n);
}while(n < 2);
let S = 0;
for(let i = 1;i<=n;i++ ){
   
    S = S + 1/(i*(i +1));
    
}
console.log(S);