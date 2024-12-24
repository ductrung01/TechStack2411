//Tính tổng các số chẵn trong đoạn [-30, 50].
sum = 0;
for(let i = -30 ;i <=50;i++){
    if(i%2 === 0){
        sum = sum + i;

    }
   
}
console.log('Tổng các số chẵn trong đoạn [-30, 50] là: ' + sum);