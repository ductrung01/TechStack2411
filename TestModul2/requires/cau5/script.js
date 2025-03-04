// 5. Xây dựng chức năng xem chi tiết 1 post.
// -Nhập vào ID của post. Hãy hiển thị thông tin của 
//1 post có ID tương ứng: ID, tiêu đề, nội dung, 
//link ảnh, tên người tạo, ngày tạo, 
//ngày sửa đổi.
$inputPostId = document.getElementById('postId');
$btnSearch = document.getElementById('btnSearch');
$postIdDisplay = document.getElementById('postIdDisplay')
$postTitle = document.getElementById('postTitle');
$postContent = document.getElementById('postContent');
$postImageLink = document.getElementById('postImageLink');
$postCreator = document.getElementById('postCreator');
$postCreatedDate = document.getElementById('postCreatedDate');
$postModifiedDate = document.getElementById('postModifiedDate');


function searchInput(){
    let foundPost = null;
    let inputPostId = Number($inputPostId.value.trim());
    let htmlPost= '';
    for(let post of posts){
        if(inputPostId === post.id){
          foundPost = post;
          break; 
        }
    }
    if (foundPost) {
        $postIdDisplay.textContent = foundPost.id; 
        $postTitle.textContent = foundPost.title;
        $postContent.textContent = foundPost.content; 
        $postImageLink.textContent = foundPost.image; 
        $postCreator.textContent = foundPost.user_id; 
        $postCreatedDate.textContent = foundPost.created_at; 
        $postModifiedDate.textContent = foundPost.updated_at; 
    } else {
        alert('Bài viết không tồn tại!');
    }
}
    $btnSearch.onclick = searchInput;