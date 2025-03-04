// 1. Xây dựng chức năng đăng nhập
// -Nhập vào email, password từ bàn phím. 
//Nếu không nhập đủ thông tin → In ra “Hãy nhập đầy đủ thông tin”.
//Tìm trong dữ liệu users có user thỏa mãn email, password.
//+Nếu có user, in ra màn hình “Xin chào” + <tên đầy đủ của user đó>
//+Nếu không có user, in ra màn hình “Thông tin tài khoản không chính xác”.

document.addEventListener('DOMContentLoaded', function() {
    const $email = document.getElementById('email');
    const $password = document.getElementById('password');
    const $btnlogin = document.getElementById('btnlogin');

     users = JSON.parse(localStorage.getItem('users')) || [];
     console.log(users);

    function login() {
        let testUser = false;
        const email = $email.value.trim();
        const password = $password.value.trim();

        if (email === '' || password === '') {
            alert('Hãy nhập đầy đủ thông tin');
            return;
        }

        for (let user of users) {
            if (user.email === email && user.password === password) {
                let fullname = user.first_name + ' ' + user.last_name;
                testUser = true;
                alert('Xin chào ' + fullname);
                window.location.href = './../index.html';
              
                break;
            }
        }

        if (!testUser) {
            alert('Thông tin tài khoản không chính xác');
        }
    }

    $btnlogin.onclick = login;
});
