const myCart = JSON.parse (localStorage.getItem ("myCart"))

myCart.forEach(element => {
    document.getElementById("cart").innerHTML += `
     <li><h4>${(element.name).slice(12) + '...'} <span class="middle">x${element.quantity}</span> <span class="last">${element.price * element.quantity} VND</span></h4></li>  
    `
}); 