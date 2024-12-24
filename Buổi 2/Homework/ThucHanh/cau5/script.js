//Nhập vào 3 số a, b, x (a < b). Tìm trong khoảng a, b số nhỏ nhất mà chia hết cho x.
let a, b, c;
do{
     a = prompt('Nhập a: ');
     b = prompt('Nhập b: ');
     x = prompt('Nhập x: ');
    a = Number(a);
    b = Number(b);
    x = Number (x);
}while( a >= b)

    for(let i = a; i<=b;i++){
        if(i % x === 0){
            console.log('Trong khoảng '+ a +' , ' + b+ ' số nhỏ nhất mà chia hết cho '+x+ ' là: '+i);
            break;
        }
    }
   