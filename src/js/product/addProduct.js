// API
var productApi = "http://localhost:3000/product"

// khi bắt đầu chạy trương trình
function start() {
  handleCreateProduct()
}

start()


//sử lý lấy value của product mới
function handleCreateProduct() {
    const saveBtn = document.querySelector(".save")
    saveBtn.onclick = function() {
        const name = document.getElementById("name").value;
        const amount = document.getElementById("amount").value;
        const type = document.getElementById("type").value;
        const status = document.getElementById("status").value;
        const time = document.getElementById("date").value;
        const stringPrice = document.getElementById("price").value;
        var price = Number(stringPrice)
        price = price.toLocaleString('vi', {style : 'currency', currency : 'VND'}); // định dạng giá theo kiểu VND

        // data truyền đi   
        var formData = {
            name: name,
            amount: amount,
            type: type,
            status: status,
            create_date: time,
            price: price
        }

        
        createProduct(formData)
    }
}


// tạo mới product
function createProduct(data, callBack) {
    // khai báo phương thức và data truyền đi
    const option = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        },
    }
    // gọi API
    fetch(productApi, option)
        .then(function(response) {
            response.json("")
            console.log(response)
        })
        .then(callBack)
}





