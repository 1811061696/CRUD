var saveBtn = document.querySelector(".save");

// API
var productApi = "http://localhost:3000/product";

// khi bắt đầu chạy trương trình
function start() {
  handleCreateProduct();
}

start();

// const nameInput =  document.getElementById("name")
// nameInput.addEventListener("change", (e) => {
//     if(e.target.value > 0){
//         nameInput.classList.add("is-valid")
//     }
//     else{
//         nameInput.classList.remove("is-valid")
//     }
// })

//sử lý lấy value của product mới
function handleCreateProduct() {
    console.log(saveBtn)
  saveBtn.onclick = function () {
    const name = document.getElementById("name").value;
    const amount = document.getElementById("amount").value;
    const type = document.getElementById("type").value;
    const status = document.getElementById("status").value;
    const time = document.getElementById("date").value;
    const stringPrice = document.getElementById("price").value;
    var price = Number(stringPrice);
    price = price.toLocaleString("vi", { style: "currency", currency: "VND" }); // định dạng giá theo kiểu VND

    // data truyền đi
    var formData = {
      name: name,
      amount: amount,
      type: type,
      status: status,
      create_date: time,
      price: price,
    };

    createProduct(formData);
  };
}

// tạo mới product
function createProduct(data, callBack) {
  // khai báo phương thức và data truyền đi
  const option = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  };
  // gọi API
  fetch(productApi, option)
    .then(function (response) {
      response.json("");
    })
    .then(callBack);
}
