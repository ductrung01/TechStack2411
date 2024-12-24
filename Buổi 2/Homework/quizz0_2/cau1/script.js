// Quizz 0. Hãy tính tổng các số từ 1 đến 50.

// Hãy tính tổng các số chẵn từ -10 đến 50.
// Hãy in ra màn hình console các số chia hết cho 9 trong đoạn [-100; 100]
// Hãy dùng while để in ra dãy số từ 1 đến 200.
// Hãy nhập vào 1 chuỗi s và 1 số l. Hãy thêm vào cuối chuỗi s ký tự ‘a’ cho đến khi độ dài chuỗi s >= l.
// Nhập vào 2 số 0 <= x < y <= 100. Hãy tăng dần giá trị của x, giảm dần giá trị của y và in ra các giá trị của x và y trong mỗi lần lặp cho đến khi x >= y.

// Bài làm
// quizz 0: Hãy tính tổng các số từ 1 đến 50.
let sum =0;
for(let i = 1 ; i<=50 ;i++){
    sum += i;
}
console.log('Tổng các số từ 1 đến 50 là: '+sum);

// 1 Hãy tính tổng các số chẵn từ -10 đến 50.
let sum1 = 0;
for (let number1 = -10; number1 <=50 ; number1++){
        if(number1 % 2 === 0){
            sum1 = sum1 + number1;
        }
}
console.log('tổng các số chẵn từ -10 đến 50 là: ' +sum1);

// 2 Hãy in ra màn hình console các số chia hết cho 9 trong đoạn [-100; 100]
for(let number2 = -100 ; number2 <= 100 ;number2++){
    if(number2 % 9 ===0){
        console.log('các số chia hết cho 9 trong đoạn [-100; 100]: ' + number2);
    }
}
// 3 Hãy dùng while để in ra dãy số từ 1 đến 200.
let number3 = 1;
while(number3 <= 200){
    console.log(number3);
    number3++;
}
//4 Hãy nhập vào 1 chuỗi s và 1 số l. Hãy thêm vào cuối chuỗi s ký tự ‘a’ cho đến khi độ dài chuỗi s >= l.
let s = prompt('Nhap s :');
let l =prompt ('Nhap l: ');
while(s.length <= l){
   s = s+'a';
}
console.log(s);

// 5 Nhập vào 2 số 0 <= x < y <= 100. Hãy tăng dần giá trị của x, giảm dần giá trị của y và in ra các giá trị của x và y trong mỗi lần lặp cho đến khi x >= y.
let x ,y;
do{
    x = prompt('Nhập x : ');
    y = prompt('Nhập y : ');
}while(x < 0 || x > y || y > 100);

while(x<=y){
    x++;
    y--;
}
console.log('x : ' ,x);
console.log('y :',y);
