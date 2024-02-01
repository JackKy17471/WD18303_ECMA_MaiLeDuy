
const API_URL = 'http://localhost:3000/categories';

function start(){
    getCourses();
    hadleCreateForm()
}
start();

//funtion
function getCourses(callback){
    fetch(API_URL)
    .then(function(response){
        return response.json();
        
    })
    .then (callback);
}



function hadleCreateForm(){
    let createBtn = document.querySelector('#create')

    createBtn.onclick = function(){
       let name = document.querySelector('input[name="id"]').value
       console.log(name);
    }
}