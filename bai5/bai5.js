fetch("https://65929f4fbb129707198fe18e.mockapi.io/tinhpv10/students")
    .then(function (response){
        response.json().then(function (data){
            const headers = ["#", "Anh dai dien", "Ho va ten", "Ngay tao"];
            const tableHtml = generateTable(headers, data );
            let app  = document.getElementById("app");
            app.innerHTML = tableHtml;
        });
    })
    .catch(function (err) {
        console.log(err);
    });




function TableHeader(headerTitles){
    if(!headerTitles || headerTitles.length === 0){

        return "";
    }    
    let html = '';


    headerTitles.forEach(element => {
        html += `<th>${element}</th>`;
    });
    return `<thead><tr>${html}</tr></thead>`;
}

function TableRowStudent(rowData){
if(!rowData || rowData.length === 0){
    return "";
}
return `
    <tr>
    <td>${rowData.id}</td>
    <td><img src="${rowData.avatar}"></td>
    <td>${rowData.name}</td>
    <td>${rowData.createdAt}</td>
    </tr>

`;
}

function generateTable(headers, data){
    if(!headers || !data || headers.length === 0 || data.length === 0){
        return "";
    }
    let headerRow = TableHeader(headers);
    let html = '';

    
    data.forEach(element => {
        html += TableRowStudent(element);
    })
        return `<table>${headerRow}<tbody>${html}</tbody></table>`;        
    }

    