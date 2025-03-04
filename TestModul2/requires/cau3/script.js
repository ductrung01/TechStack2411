// 3. Xây dựng chức năng xem danh sách users
// -Nhập vào keyword. Hãy in ra những users có họ và tên hoặc email chứa keyword. 
// Mỗi users hiển thị id, họ và tên, email.
// +Nếu keyword trống → In ra toàn bộ users
const $keyword   = document.getElementById('keyword');
const $btnSearch = document.getElementById('search');
const $tBody     = document.getElementById('tBody');
function resetInputs(){
    $keyword.value = '';
}
function getFullName(user){
    return user.first_name + ' ' + user.last_name;
}
function renderInfoUser(data){// hiển thị tất cả thông tin các user
    if (data === undefined) {
		data = users;
	}
    let htmlUser ='';
    for(let i = 0 ; i<data.length ; i++){
     
        const userCurrent = data[i];
        const fullName = getFullName(userCurrent);
        console.log(userCurrent.name);
   
    
    htmlUser = htmlUser +`
                 <tr>
                    <td>${userCurrent.id}</td>
                    <td>${fullName}</td>
                    <td>${userCurrent.email}</td>
                </tr>`;
               
            }
            $tBody.innerHTML = htmlUser;
}


function searchUsers(){
    const keyword = $keyword.value;
    const result = [];
    if(!keyword){
        renderInfoUser(users)
        return;
    }
    for(let user of users){
       const fullName = getFullName(user)
        if(fullName.toLowerCase().includes(keyword.toLowerCase()) ||user.email.toLowerCase().includes(keyword.toLowerCase()))  {
            result.push(user);

        }
     

    }
    renderInfoUser(result)
   
}
$btnSearch.onclick = searchUsers;