// axios.get('http://localhost:3000/categories')
//     .then(response => {
//         response.data.forEach(element => {
//             document.getElementById('categorySelect').innerHTML += `
//                 <option value='${element.id}'>
//                     ${element.name}
//                 </option>
//             `;
//         });
//     })
//     .catch(error => {
//         console.error(error);
//     });

// const id = localStorage.getItem('id-sp');
// const API_URL = 'http://localhost:3000/products/';
// let image = '';

// axios.get(API_URL + id)
//     .then(response => {
//         const data = response.data;
//         document.getElementById("idInput").value = data.id;
//         document.getElementById("nameInput").value = data.name;
//         document.getElementById("priceInput").value = data.price;
//         document.getElementById("detailInput").value = data.detail;
//         document.getElementById('anh').src = `img/${data.image}`
//     })
//     .catch(error => {
//         console.error(error);
//     });


// function update() {
//     console.log(anh);
//     if (document.getElementById("anh").value == '') {
//         data = {
//             "id": document.getElementById("idInput").value,
//             "name": document.getElementById("nameInput").value,
//             "price": document.getElementById("priceInput").value,
//             "detail": document.getElementById("detailInput").value,
//             "image": image,
            
//         };
//     } else {
//         data = {
//             "id": document.getElementById("idInput").value,
//             "name": document.getElementById("nameInput").value,
//             "price": document.getElementById("priceInput").value,
//             "detail": document.getElementById("detailInput").value,
//             "image": document.getElementById('anh').value.slice(12),
//         };
//     }

    
//     let id = document.getElementById("idInput").value;
//     let name = document.getElementById("nameInput").value;
//     let price = document.getElementById("priceInput").value;
//     let detail =document.getElementById("detailInput").value;
//     let image = document.getElementById("anh").value;
    

//     if (id === "") {
//         document.getElementById("idError").innerHTML = "Please fill in product id.";
//         return;
//     } else {
//         document.getElementById("idError").innerHTML = "";
//     }

//     if (name === "") {
//         document.getElementById("nameError").innerHTML = "Please fill in product name.";
//         return;
//     } else {
//         document.getElementById("nameError").innerHTML = "";
//     }
//     if (price === "") {
//         document.getElementById("priceError").innerHTML = "Please fill in product price.";
//         return;
//     } else {
//         document.getElementById("priceError").innerHTML = "";
//     }
//     if (detail === "") {
//         document.getElementById("detailError").innerHTML = "Please fill in product detail.";
//         return;
//     } else {
//         document.getElementById("detailError").innerHTML = "";
//     }
//     if (image === "") {
//         document.getElementById("imageError").innerHTML = "Please select the image.";
//         return;
//     } else {
//         document.getElementById("imageError").innerHTML = "";
//     }
    
    
    

//     axios.put(API_URL + id, data)
//         .then(response => {
            
//             console.log(response.data);
            
//             window.location = "../products.html";
//         })
//         .catch(error => {
//             console.error(error);
           
//         });
// }

axios.get('http://localhost:3000/categories')
    .then(response => {
        const categorySelect = document.getElementById('categorySelect');
        categorySelect.innerHTML = response.data.map(element => `
            <option value='${element.id}'>${element.name}</option>`
        ).join('');
    })
    .catch(error => console.error(error));

const id = localStorage.getItem('id-sp');
const API_URL = 'http://localhost:3000/products/';

axios.get(API_URL + id)
    .then(response => {
        const data = response.data;
        document.getElementById("idInput").value = data.id;
        document.getElementById("nameInput").value = data.name;
        document.getElementById("priceInput").value = data.price;
        document.getElementById("detailInput").value = data.detail;
        document.getElementById('anh').src = `img/${data.image}`;
    })
    .catch(error => console.error(error));

function update() {
    const getInputValue = (id) => document.getElementById(id).value;
    const setError = (id, message) => document.getElementById(`${id}Error`).innerHTML = message;

    const idValue = getInputValue("idInput");
    const nameValue = getInputValue("nameInput");
    const priceValue = getInputValue("priceInput");
    const detailValue = getInputValue("detailInput");
    const imageValue = document.getElementById("anh").value;

    if (!idValue || !nameValue || !priceValue || !detailValue || !imageValue) {
        setError("id", "Please fill in all fields.");
        return;
    } else {
        setError("id", "");
    }

    const data = {
        "id": idValue,
        "name": nameValue,
        "price": priceValue,
        "detail": detailValue,
        "image": imageValue ? imageValue.slice(12) : image,
    };

    axios.put(API_URL + idValue, data)
        .then(response => {
            console.log(response.data);
            window.location = "../products.html";
        })
        .catch(error => console.error(error));
}

