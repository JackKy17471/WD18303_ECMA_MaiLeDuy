fetch("https://api.publicapis.org/entries")
    .then(function (response) {
        response.json().then(function (data) {
            console.log(data);
            let array = data.entries;

            let html = document.getElementById('PC05755');

            let child_html = `<table class="table">
            <thead>
            <tr>
            <th scope="col">API</th>
            <th scope="col">Description</th>
            <th scope="col">Auth</th>
            <th scope="col">HTTPS</th>
            <th scope="col">Cors</th>
            <th scope="col">Link</th>
             <th scope="col">Category</th>
            </tr>
            </thead>
            `

            array.forEach(element => {
                console.log(element);
                child_html += `<tbody>
                <tr>
                <td>${element.API}</td>
                <td>${element.Description}</td>
                <td>${element.Auth}</td>
                <td>${element.HTTPS}</td>
                <td>${element.Cors}</td>
                <td>${element.Link}</td>
                <td>${element.Category}</td>
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

