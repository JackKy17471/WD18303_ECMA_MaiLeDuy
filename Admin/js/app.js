const API_URL = 'http://localhost:3000/';
// danh muc 
fetch(API_URL + 'categories')
    .then(function (response) {
        response.json().then(function (data) {
            console.log(data);
            let array = data;

            let html = document.getElementById('dataTable');
            
            let child_html = ` <table class="table">
            <thead>
            <tr>
            <th scope="col">id</th>
            <th scope="col">name</th>
            <th scope="col">action</th>
            </tr>
            </thead>
             `

            array.forEach(element => {
                console.log(element);
                child_html += `<tbody>
                <tr>
                <td>${element.id}</td>
                <td>${element.name}</td>
                <td>
                <a href="#" class="btn btn-info btn-circle">
                <i class="fas fa-info-circle"></i>
                </a>
                <a href="#" class="btn btn-danger btn-circle">
                <i class="fas fa-trash"></i>
                </a>
                </td>
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


    // oderdt
    fetch(API_URL + 'order_details')
    .then(function (response) {
        response.json().then(function (data) {
            console.log(data);
            let array = data;

            let html = document.getElementById('oderdt');
            
            let child_html = ` <table class="table">
            <thead>
            <tr>
            <th scope="col">id</th>
            <th scope="col">Product id</th>
            <th scope="col">Quantity</th>
            <th scope="col">Unit price</th>
            <th scope="col">action</th>
            </tr>
            </thead>
             `

            array.forEach(element => {
                console.log(element);
                child_html += `<tbody>
                <tr>
                <td>${element.order_id}</td>
                <td>${element.product_id}</td>
                <td>${element.quantity}</td>
                <td>${element.unit_price}</td>
                <td>
                <a href="#" class="btn btn-info btn-circle">
                <i class="fas fa-info-circle"></i>
                </a>
                <a href="#" class="btn btn-danger btn-circle">
                <i class="fas fa-trash"></i>
                </a>
                </td>
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

     // oders

     fetch(API_URL + 'orders')
    .then(function (response) {
        response.json().then(function (data) {
            console.log(data);
            let array = data;

            let html = document.getElementById('oder-customer');
            
            let child_html = ` <table class="table">
            <thead>
            <tr>
            <th scope="col">id</th>
             <th scope="col">Custumer name</th>
             <th scope="col">customer_address</th>
             <th scope="col">customer_email</th>
             <th scope="col">customer_phone_number</th>
             <th scope="col">created_date</th>
             <th scope="col">status</th>
             <th scope="col">action</th>
             
            </tr>
            </thead>
             `

            array.forEach(element => {
                console.log(element);
                child_html += `<tbody>
                <tr>
                <td>${element.id}</td>
                <td>${element.customer_name}</td>
                <td>${element.customer_address}</td>
                <td>${element.customer_email}</td>
                <td>${element.customer_phone_number}</td>
                <td>${element.created_date}</td>
                <td>${element.status}</td>
                <td>
                <a href="#" class="btn btn-info btn-circle">
                <i class="fas fa-info-circle"></i>
                </a>
                <a href="#" class="btn btn-danger btn-circle">
                <i class="fas fa-trash"></i>
                </a>
                </td>
                </tr>
                
                </tbody>`
            })
        
            
            child_html += `</table>`;
            html.innerHTML = child_html;
        })

    })

   
   