// let fs = require('fs')
// let axios = require('axios')

// fs.readFile(
//     './data.json',
//     {encoding: 'utf8'},
//     function(err, data) {
//         console.log('Data loaded from disk', data);

//         axios.get('https://659fe61b5023b02bfe8abf11.mockapi.io/api/v1/as')
//         .then(function(res) {
//         console.log('data downloaded form url', res.data);
//         })
//     }
// )

const fs = require('fs');
const axios = require('axios');

async function loadData() {
    try {
        // Đọc dữ liệu từ tệp data.json
        const data = await fs.readFile('db.json', { encoding: 'utf8' });
        console.log('Data loaded from disk', data);

        // Gọi API sử dụng axios
        const response = await axios.get('http://localhost:3000/posts');
        console.log('Data downloaded from url', response.data);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

// Gọi hàm loadData
loadData();
