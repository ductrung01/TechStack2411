//Nhập vào số n. Hãy in ra số ước của n.
let n;
n = prompt('Nhập số n : ');
n = Number(n);
for(let i = 1 ;i<=n;i++){
    if(n%n === 0 && n % i === 0){
        console.log('Ước của số ' + n + ' là : ' + i);
    }
}