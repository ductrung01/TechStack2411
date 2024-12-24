//Nhập vào số n. Viết chương trình kiểm tra xem n có phải số nguyên tố không.
let n ;
n = Number(n);
n =Number ( prompt('Nhập vào số n: ')); // Người dùng nhập n
let count = 0; // Biến đếm
for(let i = 1;i<=n ;i++ ){
    if(n%i === 0 ){
       count = count + 1;
       //count++
    }
}
if(count === 2){ // nếu sau khi kết thúc quá trình mà count = 2 thì là số nguyên tố
    console.log(n + ' là số nguyên tố');
}else{
    console.log(n + 'Không phải là số nguyên tố');
}