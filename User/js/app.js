const API_URL = 'http://localhost:3000/';


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

// shop
    
fetch(API_URL + 'products')
.then(function (response) {
    response.json().then(function (data) {
        console.log(data);
        let array = data;

        let html = document.getElementById('tab-1');
        
        let child_html = ` <div class="row g-4 justify-content-center">
        `

        array.forEach(element => {
            console.log(element);
            child_html += ` <div class="col-md-6 col-lg-6 col-xl-4">
            <div class="rounded position-relative fruite-item">
                <div class="fruite-img">
                    <img src="${element.image}" class="img-fluid w-100 rounded-top" alt="">
                </div>
                <div class="text-white bg-secondary px-3 py-1 rounded position-absolute" style="top: 10px; left: 10px;">Fruits</div>
                <div class="p-4 border border-secondary border-top-0 rounded-bottom">
                    <h4>${element.name}</h4>
                    
                    <div class="d-flex justify-content-between flex-lg-wrap">
                        <p class="text-dark fs-5 fw-bold mb-0">${element.price}</p>
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
   

// categories
fetch(API_URL + 'categories')
.then(function (response) {
    response.json().then(function (data) {
        console.log(data);
        let array = data;

        let html = document.getElementById('cate-shop');
        
        let child_html = ` <ul class="list-unstyled fruite-categorie">
        `

        array.forEach(element => {
            console.log(element);
            child_html += ` <li>
            <div class="d-flex justify-content-between fruite-name">
                <a href="#"><i class="fas fa-apple-alt me-2"></i>${element.name}</a>
            </div>
        </li>
        `
        })
    
        
        child_html += `  </ul>`;
        html.innerHTML = child_html;
    })

})

.catch(function (err) {
    console.log(err);
})
   