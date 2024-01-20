const API_URL = 'https://659fe61b5023b02bfe8abf11.mockapi.io/api/v1/';


fetch(API_URL + 'products')
    .then(function (response) {
        response.json().then(function (data) {
            console.log(data);
            let array = data;

            let html = document.getElementById('tab-1');
            
            let child_html = ` <div class="row g-4">
            `

            array.forEach(element => {
                console.log(element);
                child_html += `<div class="col-md-6 col-lg-4 col-xl-3">
                <div class="rounded position-relative fruite-item">
                    <div class="fruite-img">
                        <img src="${element.image}" class="img-fluid w-100 rounded-top" alt="">
                    </div>
                    <div class="p-4 border border-secondary border-top-0 rounded-bottom">
                        <h4>${element.name}</h4>
                        <div class="d-flex justify-content-between flex-lg-wrap">
                            <p class="text-dark fs-5 fw-bold mb-0">${element.price} /dong</p>
                            <a href="#" class="btn border border-secondary rounded-pill px-3 text-primary"><i class="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
                        </div>
                    </div>
                </div>
            </div>`
            })
        
            
            child_html += ` </div>`;
            html.innerHTML = child_html;
        })

    })

    .catch(function (err) {
        console.log(err);
    })