axios.get('http://localhost:3000/categories')
    .then(response => {
        response.data.forEach(element => {
            document.getElementById('categorySelect').innerHTML += `
                <option value='${element.id}'>
                                ${element.name}
                </option>
            `;
        });
    });

let addproducts = document.getElementById('add');

function add() {
    //INPUT
    let idInput = document.getElementById("idInput");
    let nameInput = document.getElementById("nameInput");
    let priceInput = document.getElementById("priceInput");
    let DetailInput = document.getElementById("DetailInput");
    let imageInput = document.getElementById('anh').value;
    // ERROR
    let nameError = document.getElementById("nameError");
    let priceError = document.getElementById("priceError");
    let DetailError = document.getElementById("DetailError");
    var imageError = document.getElementById('imageError');

    var isValid = true;
    if (idInput.value == "") {
        nameError.innerHTML = "Please fill in product id.";
        isValid = false;
    } else {
        nameError.innerHTML = "";
    }

    if (nameInput.value.trim() == "") {
        nameError.innerHTML = "Please fill in product name.";
        isValid = false;
    } else {
        nameError.innerHTML = "";
    }

    if (priceInput.value.trim() == "") {
        priceError.innerHTML = "Please fill in product price.";
        isValid = false;
    } else {
        priceError.innerHTML = "";
    }

    if (DetailInput.value == "") {
        DetailError.innerHTML = "Please fill in product details.";
        isValid = false;
    } else {
        DetailError.innerHTML = "";
    }

    if (imageInput == "") {
        imageError.innerHTML = "Please select the image.";
        isValid = false;
    } else {
        imageError.innerHTML = "";
    }
    if (!isValid) {
        return;
    }

    const API_URL = "http://localhost:3000/";
    const products = {
        id: idInput.value,
        name: nameInput.value,
        cate_id: document.getElementById("categorySelect").value, 
        price: priceInput.value,     
        detail: DetailInput.value,
        image: document.getElementById("anh").value.slice(12)
    };

    axios.post(API_URL + `products`, products)
        .then((response) => {
            console.log(response);
            window.location = '../products.html'; 
        })
        .catch((error) => {
            console.error('Error adding product:', error.message);
        });
}
