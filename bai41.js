fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population")
    .then(function (response){
        response.json().then(function (data){
            console.log(data);
            let array = data.data;

            let html = document.getElementById('PC05755');
            let index =1;

            let child_html = `<table class="table">
                    <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nation</th>
                    <th scope="col">Year</th>
                    <th scope="col">Population</th>
                    </tr>
                    </thead>
                    `

            array.forEach(element => {
                console.log(element);
                child_html += `<tbody>
                        <tr>
                    <td>${index++}</td>
                    <td>${element.Nation}</td>
                    <td>${element.Year}</td>
                    <td>${element.Population}</td>
                        </tr>
                        
                        </tbody>`
            })

            child_html += `</table>`;
            html.innerHTML = child_html;
        })
    })