const $firstName = document.getElementById('first_name');
const $lastName = document.getElementById('last_name');
const $email = document.getElementById('email');
const $password = document.getElementById('password');
const $btnRegister = document.getElementById('btnRegister');



function resetInput() {
    $firstName.value = '';
    $lastName.value = '';
    $email.value = '';
    $password.value = '';
}

function register() {
    const firstName = $firstName.value.trim();
    const lastName = $lastName.value.trim();
    const email = $email.value.trim();
    const password = $password.value.trim();

    if (firstName === '' || lastName === '' || email === '' || password === '') {
        alert('Hãy nhập đầy đủ thông tin');
        return;
    }

    for (let user of users) {
        if (user.email === email) {
            alert('Email này đã có tài khoản');
            return;
        }
    }

    let newUserId = users.length ;
    
    const newUser = {
        id: ++newUserId,
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password,
    };

    users.push(newUser);
    
    localStorage.setItem('users', JSON.stringify(users));
    
    console.log(users);
    resetInput();

    window.location.href = "./../cau1/index.html";
}

$btnRegister.onclick = register;
