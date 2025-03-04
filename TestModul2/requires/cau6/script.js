const $userEmailInput = document.getElementById('userEmail');
const $btnSearchUser = document.getElementById('btnSearchUser');
const $postItems = document.getElementById('postItems');
const $postList = document.getElementById('postList');

$btnSearchUser.addEventListener('click', searchEmail);

function searchEmail() {
    const userEmailInput = $userEmailInput.value.trim();
    $postItems.innerHTML = ''; 
    let foundPosts = []; 

    if (!Array.isArray(posts) || posts.length === 0) {
        alert('Không có bài viết nào để tìm kiếm.');
        return; 
    }

    for (const post of posts) {
        if (post.email && post.email.toLowerCase() === userEmailInput.toLowerCase()) {
            foundPosts.push(post);
        }
    }

    if (foundPosts.length > 0) {
        $postList.style.display = 'block'; 
        foundPosts.forEach((post) => {
            const li = document.createElement('li');
            li.className = 'list-group-item';
            li.innerHTML = `
                <h5>${post.title}</h5>
                <p>${post.content}</p>
                <small><strong>Ngày Tạo:</strong> ${post.created_at} | <strong>Ngày Sửa Đổi:</strong> ${post.updated_at}</small>
            `;
            $postItems.appendChild(li);
        });
    } else {
        $postList.style.display = 'none'; 
        alert('Không tìm thấy bài viết nào cho email này.');
    }
}
