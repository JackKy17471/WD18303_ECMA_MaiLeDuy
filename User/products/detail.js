let id = localStorage.getItem('id_sp');
const API_URL = 'http://localhost:3000/'
fetch(API_URL +'products')
    .then(response => {
        response.json().then(data => {
            data.forEach(element => {
                if (element.id == id) {
                    document.getElementById("right-detail").innerHTML =
                    
                        `

                        
                        <div class="border rounded">
                            <a href="#">
                                <img src="img/${element.image}" class="img-fluid rounded" alt="Image">
                            </a>
                        </div>
                         
            `
                }
            });
        })
    })


fetch(API_URL +'products')
    .then(response => {
        response.json().then(data => {
            data.forEach(element => {
                if (element.id == id) {
                    document.getElementById("left-detail").innerHTML =
                    
                        `

                <h4 class="fw-bold mb-3">${element.name}</h4>
                <h5 class="fw-bold mb-3">${element.price} /đ</h5>
                
                <p class="mb-4">${element.detail}</p>

                
                <button type="button" class="btn btn-outline-success" onclick="addToCart('${element.id}','${element.name}','${element.price}','${element.image}')">Add to cart</button>
                            
            `
                }
            });
        })
    })


    fetch(API_URL +'products')
    .then(response => {
        response.json().then(data => {
            data.forEach(element => {
                if (element.id == id) {
                    document.getElementById("nav-about").innerHTML =
                    
                        `

                
                <p class="mb-4">${element.detail}</p>

                
               
                            
            `
                }
            });
        })
    })


    function addToCart(id, name,price ,img ) {
        if (localStorage.getItem('myCart') == null) {
          let myCart = [
            { 
              id: id,
              name: name,
              
              price: price,
              img: img,
              quantity: 1
            }
          ];
          localStorage.setItem("myCart", JSON.stringify(myCart));
        } else {
          let cartArray = JSON.parse(localStorage.getItem("myCart"));
          let existingItem = cartArray.find(item => item.id === id);
          if (existingItem) {
            existingItem.quantity += 1;
          } else {
            let myCart = {
              id: id,
              name: name,
              
              price: price,
              img: img,
              quantity: 1
            };
            cartArray.push(myCart);
            console.log (cartArray)
          }
          localStorage.setItem("myCart", JSON.stringify(cartArray));
        }
        window.location = 'cart.html';
      }
    