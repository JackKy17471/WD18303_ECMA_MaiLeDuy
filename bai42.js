fetch("https://65929f4fbb129707198fe18e.mockapi.io/tinhpv10/students")
    .then(function (response) {
        response.json().then(function (data) {
            console.log(data);
            let array = data;

            let html = document.getElementById('PC05755');

            let child_html = `<table class="table">
            <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">Ảnh đại diện</th>
            <th scope="col">Họ và tên</th>
            <th scope="col">Ngày tạo</th>
            </tr>
            </thead>
            `

            array.forEach(element => {
                console.log(element);
                child_html += `<tbody>
                <tr>
                <td>${element.id}</td>
                <td><img src="${element.avatar}"></td>
                <td>${element.name}</td>
                <td>${element.createdAt}</td>
                </tr>
                
                </tbody>`
            })

            child_html += `</table>`;
            html.innerHTML = child_html;
        })

    })

    .catch(function (err) {
        console.log(err);
    })

