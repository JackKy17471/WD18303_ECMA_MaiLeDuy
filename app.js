const API_URL = "https://onthiecma-default-rtdb.asia-southeast1.firebasedatabase.app/";

let getUsers = async () => {
    let response = await fetch(API_URL+'Users.json');

    return await response.json();
}

console.log(getUsers());

getUsers()
 .then((users) =>{
    let html = '';
    let tbody = document.getElementById('list')
    let id = 1;

    Object.entries(users).forEach(([key,element]) => {
        html +=`
    <tr class="">
        
        <td>${id++}</td>
        <td>${element.username}</td>
        <td>${element.password}</td>
        <td>${element.fullname}</td>
        <td>${element.email}</td>
        <td>${element.gender}</td>
        <td>${element.birthday}</td>
        <td>${element.schoolfee}</td>
        <td>${element.marks}</td>
        <td><button class="btn btn-primary" onclick="userEdit('${key}')">sua</button></td>
        <td><button class="btn btn-danger" onclick="userDelete('${key}')">xoa</button></td>
    </tr>
    `;
       
    });
    tbody.innerHTML = html;
 }).catch((error) =>{

 })


//  let createUser = (form) => {
   
//     let data = new FormData(form)

//     let object = {
//         "username" : data.get('username'),
//         "password" : data.get('password'),
//         "fullname" : data.get('fullname'),
//         "email" : data.get('email'),
//         "gender" : data.get('gender'),
//         "birthday" : data.get('birthday'),
//         "schoolfee" : data.get('schoolfee'),
//         "marks" : data.get('marks')
        
        
//     };
//     fetch(API_URL +"Users.json" ,{
//         method: 'POST',
//         body : JSON.stringify(object)
//     })
//  }

 let userDelete = (userId) => {
    // Display a confirmation prompt
    if (confirm("Are you sure you want to delete this user?")) {
        // If user confirms, send the delete request
        fetch(API_URL + `Users/${userId}.json`, {
            method: 'DELETE'
        })
        .then(response => {
            if (response.ok) {
                console.log(`User with ID ${userId} deleted successfully.`);
                location.reload();
            } else {
                console.error(`Error deleting user with ID ${userId}.`);
            }
        })
        .catch(error => {
            console.error(`Error deleting user with ID ${userId}: ${error.message}`);
        });
    } else {
        // If user cancels, do nothing
        console.log("User deletion canceled.");
    }
}



// // Function to update a user
// let updateUser = (userId, form) => {
//     let data = new FormData(form);

//     let object = {
//         "username": data.get('username'),
//         "password": data.get('password'),
//         "fullname": data.get('fullname'),
//         "email": data.get('email'),
//         "gender": data.get('gender'),
//         "birthday": data.get('birthday'),
//         "schoolfee": data.get('schoolfee'),
//         "marks": data.get('marks')
//     };

//     fetch(API_URL + `Users/${userId}.json`, {
//         method: 'PATCH', // Use PATCH for partial updates
//         body: JSON.stringify(object)
//     })
//         .then(response => {
//             if (response.ok) {
//                 console.log(`User with ID ${userId} updated successfully.`);
//                 // Reset the form
//                 form.reset();
//             } else {
//                 console.error(`Error updating user with ID ${userId}.`);
//             }
//         })
//         .catch(error => {
//             console.error(`Error updating user with ID ${userId}: ${error.message}`);
//         });

//     // Change form submit function back to create after the update
//     document.getElementById('list').onsubmit = function (event) {
//         event.preventDefault();
//         createUser(this);
//     };
// }

    

let userEdit = async (userID) => {
    try {
        let response = await fetch(API_URL + `Users/${userID}.json`);
        let userData = await response.json();

        // Populate form fields with user data
        document.getElementById('id').value = userID; // Use userID instead of undefined variable id
        document.getElementById('username').value = userData.username;
        document.getElementById('password').value = userData.password;
        document.getElementById('fullname').value = userData.fullname;
        document.getElementById('email').value = userData.email;
        document.getElementById('gender').value = userData.gender;
        document.getElementById('birthday').value = userData.birthday;
        document.getElementById('schoolfee').value = userData.schoolfee;
        document.getElementById('marks').value = userData.marks;
    } catch (error) {
        console.error(`Error loading user with ID ${userID}: ${error.message}`);
    }
}


// Function to create or update user data
let createOrUpdateUser = (event) => {
    event.preventDefault();

    let form = event.target;
    let data = new FormData(form);
    let object = {
        username: data.get("username"),
        password: data.get("password"),
        fullname: data.get("fullname"),
        email: data.get("email"),
        gender: data.get("gender"),
        birthday: data.get("birthday"),
        schoolfee: data.get("schoolfee"),
        marks: data.get("marks")
    };

    let userId = document.getElementById('id').value;
    let method = userId ? 'PUT' : 'POST';

    fetch(API_URL + `Users/${userId || ''}.json`, {
        method: method,
        body: JSON.stringify(object),
    })
    .then(response => {
        if(response.ok) {
            location.reload();
        } else {
            throw new Error('Error saving user');
        }
    })
    .catch(error => {
        console.error('Error saving user:', error);
    });
}




//json-server
// let getUsers = async () => {
//     let response = await fetch(API_URL);
//     return await response.json();
// }
// let userDelete = (userId) => {
//     // Display a confirmation prompt
//     if (confirm("Are you sure you want to delete this user?")) {
//         // If user confirms, send the delete request
//         fetch(`${API_URL}/${userId}`, {
//             method: 'DELETE'
//         })
//         .then(response => {
//             if (response.ok) {
//                 console.log(`User with ID ${userId} deleted successfully.`);
//                 location.reload();
//             } else {
//                 console.error(`Error deleting user with ID ${userId}.`);
//             }
//         })
//         .catch(error => {
//             console.error(`Error deleting user with ID ${userId}: ${error.message}`);
//         });
//     } else {
//         // If user cancels, do nothing
//         console.log("User deletion canceled.");
//     }
// }

// let createOrUpdateUser = (event) => {
//     event.preventDefault();

//     let form = event.target;
//     let data = new FormData(form);
//     let object = {
//         username: data.get("username"),
//         password: data.get("password"),
//         fullname: data.get("fullname"),
//         email: data.get("email"),
//         gender: data.get("gender"),
//         birthday: data.get("birthday"),
//         schoolfee: data.get("schoolfee"),
//         marks: data.get("marks")
//     };

//     let userId = document.getElementById('id').value;
//     let method = userId ? 'PUT' : 'POST';
//     let url = userId ? `${API_URL}/${userId}` : API_URL;

//     fetch(url, {
//         method: method,
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(object),
//     })
//     .then(response => {
//         if(response.ok) {
//             location.reload();
//         } else {
//             throw new Error('Error saving user');
//         }
//     })
//     .catch(error => {
//         console.error('Error saving user:', error);
//     });
// }
