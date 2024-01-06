//lab2
let name = "duy";
let birthday = "1/7/2004";
//arrow function
let sayHello =  () => {
    console.log(`i'm ${name}, ${birthday}`);
};

// goi funtion
sayHello();

function tinhTuoi(ngaySinh) {
    const ngaySinhDate = new Date(ngaySinh);
    const ngayHienTai = new Date();

    let tuoi = ngayHienTai.getFullYear() - ngaySinhDate.getFullYear();

    // Kiểm tra xem người đó đã chưa qua ngày sinh trong năm này chưa
    if (
      ngayHienTai.getMonth() < ngaySinhDate.getMonth() ||
      (ngayHienTai.getMonth() === ngaySinhDate.getMonth() && ngayHienTai.getDate() < ngaySinhDate.getDate())
    ) {
      tuoi--;
    }

    return tuoi;
  }

  // Sử dụng hàm để tính tuổi
  const ngaySinh = '2004/07/01'; // Định dạng ngày tháng năm (YYYY-MM-DD)
  const tuoiHienTai = tinhTuoi(ngaySinh);

  console.log(`Tuổi hiện tại: ${tuoiHienTai} tuổi`);



  function tinhThoiGianTonTai(ngayBatDau, ngayKetThuc) {
    const batDau = new Date(ngayBatDau);
    const ketThuc = new Date(ngayKetThuc);

    // Tính hiệu giữa hai đối tượng Date
    const thoiGianTonTai = ketThuc - batDau;

    // Chuyển đổi kết quả từ milliseconds sang ngày, giờ, phút, giây
    const ngay = Math.floor(thoiGianTonTai / (24 * 60 * 60 * 1000));
    const gio = Math.floor((thoiGianTonTai % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
    const phut = Math.floor((thoiGianTonTai % (60 * 60 * 1000)) / (60 * 1000));
    const giay = Math.floor((thoiGianTonTai % (60 * 1000)) / 1000);

    return {
      ngay,
      gio,
      phut,
      giay,
    };
  }

  // Sử dụng hàm để tính thời gian tồn tại
  const ngayBatDau = '2004-07-01T00:00:00Z'; // Định dạng ISO
  const ngayKetThuc = '2024-01-01T00:00:00Z';

  const ketQua = tinhThoiGianTonTai(ngayBatDau, ngayKetThuc);

  console.log(`Thời gian tồn tại: ${ketQua.ngay} ngày, ${ketQua.gio} giờ, ${ketQua.phut} phút, ${ketQua.giay} giây`);



// lab3
fetch("https://api.publicapis.org/entries")
    .then(function (response) {
        response.json().then(function (data) {
            console.log(data);
            let array = data.entries;

            //phân tích dữ liệu
            let child_html = `<ul> <li> <strong>COUNT: </strong> ${data.count} </li>`
            let html = document.getElementById('PC05755');
            html.innerHTML = data.count;
            

            array.forEach(element => {
                console.log(element.Description);
                child_html += `<li> ${element.Description}</li>`;
                
            });
            child_html += '</ul>';
            html.innerHTML = child_html;
        })
        
    })

    .catch(function (err) {
        console.log(err);
    })

