//Trò chơi đoán số: Máy tính tự động tạo ra 1 số correct bất kỳ từ 1 đến 20.
// Người dùng nhập vào 1 số answer. Nếu answer bằng correct → in ra “Đoán đúng”. 
//Ngược lại → in ra “Đoán sai” và yêu cầu nhập lại answer.
// Nếu nhập sai answer quá 5 lần → in ra “Bạn đã thua cuộc”.

// Bước 1 : Tạo ra 1 biến randomNumber
let correct = Math.random();
correct = correct * 10 * 2 + 1 ;
correct = Math.floor(correct);
let numberOfTimes;
let maxNumberOfTimes = 5;
for ( numberOfTimes = 0 ; numberOfTimes < maxNumberOfTimes ; numberOfTimes++){
    let answer = Number(prompt('Nhập 1 số trong khoảng 1 đến 20 : '));
    if(answer === correct){
        console.log('Đoán đúng');
        break;
    }
    else{
        console.log('Đoán sai');
       
    }
   
}
if(numberOfTimes == maxNumberOfTimes){
    console.log('Bạn đã thua cuộc ');
}
