// 4. Xây dựng chức năng xem danh sách posts
// -Hiển thị danh sách các posts, mỗi post bao gồm ID, title, ngày tạo, họ và tên người tạo.
const $tbody = document.getElementById('tbody');
function rederInfoPosts(data){
    if (data === undefined){
        data = posts;
    }
    let htmlPosts= '';
    for(let i = 0; i < data.length; i++){
        const newPosts= data[i];
        htmlPosts += `
         <tr>
                    <td>${newPosts.id}</td>
                    <td>${newPosts.title}</td>
                    <td>${newPosts.created_at}</td>
                    <td>${newPosts.name}</td>
        </tr>
        `;

    }
    $tbody.innerHTML=htmlPosts;


}
rederInfoPosts(posts);