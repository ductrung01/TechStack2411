const listStudent = [
    {
        id: 1,
        name: 'Trần Văn A',
        birthday: '1/1/1998',
        gender: 'boy',
        math_score: 9,
        english_score: 5,
        literature_score: 7,
    },
    {
        id: 2,
        name: 'Lung Thị Linh',
        birthday: '05/09/1995',
        gender: 'girl',
        math_score: 10,
        english_score: 10,
        literature_score: 5,
    },
];

function saveToLocalStorage() {
    localStorage.setItem('students', JSON.stringify(listStudent));
}

// Tải dữ liệu từ Local Storage
function loadFromLocalStorage() {
    const data = localStorage.getItem('students');
    return data ? JSON.parse(data) : [];
}

const $tbody = document.getElementById('tbody');

function renderInfoStudent(data) {
    if (data === undefined || data.length === 0) {
        data = loadFromLocalStorage();
    }
    
    let htmlStudent = '';
    for (let i = 0; i < data.length; i++) {
        const studentCurrent = data[i];
        const averageScore = ((studentCurrent.math_score + studentCurrent.english_score + studentCurrent.literature_score) / 3);
        
        htmlStudent += `
            <tr>
                <th scope="row">${studentCurrent.id}</th>
                <td>${studentCurrent.name}</td>
                <td>${studentCurrent.birthday}</td>
                <td>${studentCurrent.gender === 'boy' ? 'Nam' : 'Nữ'}</td>
                <td>${studentCurrent.math_score}</td>
                <td>${studentCurrent.english_score}</td>
                <td>${studentCurrent.literature_score}</td>
                <td>${averageScore}</td>
                <td>
                    <button onclick="getAndShowInfoStudent(${studentCurrent.id})" class="btn btn-success" style="margin-right: 4px">Cập nhật</button>
                    <button onclick="deleteStudent(${studentCurrent.id})" class="btn btn-danger" style="margin-left: 4px">Xóa</button>
                </td>
            </tr>
        `;
    }

    $tbody.innerHTML = htmlStudent;
}


saveToLocalStorage();


renderInfoStudent();
