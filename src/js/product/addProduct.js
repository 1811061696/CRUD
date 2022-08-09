var saveBtn = document.querySelector(".save");

// API
var productApi = "http://localhost:3000/product";

// khi bắt đầu chạy trương trình
function start() {
  handleCreateProduct();
}

start();

// sử lý valid thẻ input name
const nameInput = document.getElementById("name");

nameInput.onclick = () => {
  nameInput.parentElement.classList.remove("invalid");
};

// bắt sự kiện blur khỏi thẻ input
nameInput.onblur = function () {
  var errorMessage = checkname(nameInput.value);
  var errorElement = nameInput.parentElement.querySelector(".form-message");
  // kiểm tra lỗi
  if (errorMessage) {
    nameInput.parentElement.classList.add("invalid");
    nameInput.classList.add("is-valid");
    errorElement.innerText = errorMessage;
  } else {
    nameInput.parentElement.classList.remove("invalid");
    errorElement.innerText = "";
  }

  nameInput.oninput = () => {
    errorElement.innerText = "";
  };
};

// sử lý valid thẻ input amount
const amountInput = document.getElementById("amount");

amountInput.onclick = () => {
  amountInput.parentElement.classList.remove("invalid");
};

// bắt sự kiện blur khỏi thẻ input
amountInput.onblur = function () {
  var errorMessage = checkAmount(amountInput.value);
  var errorElement = amountInput.parentElement.querySelector(".form-message");
  // kiểm tra lỗi
  if (errorMessage) {
    amountInput.parentElement.classList.add("invalid");
    amountInput.classList.add("is-valid");
    errorElement.innerText = errorMessage;
  } else {
    amountInput.parentElement.classList.remove("invalid");
    errorElement.innerText = "";
  }

  // bắt sự kiện khi người dùng nhập value
  amountInput.oninput = () => {
    errorElement.innerText = "";
  };
};

// sử lý valid thẻ input price
const priceInput = document.getElementById("price");

priceInput.onclick = () => {
  priceInput.parentElement.classList.remove("invalid");
};

// bắt sự kiện blur khỏi thẻ input
priceInput.onblur = function () {
  var errorMessage = checkPrice(priceInput.value);
  var errorElement = priceInput.parentElement.querySelector(".form-message");
  // kiểm tra lỗi
  if (errorMessage) {
    priceInput.parentElement.classList.add("invalid");
    priceInput.classList.add("is-valid");
    errorElement.innerText = errorMessage;
  } else {
    priceInput.parentElement.classList.remove("invalid");
    errorElement.innerText = "";
  }

  // bắt sự kiện khi người dùng nhập value
  priceInput.oninput = () => {
    errorElement.innerText = "";
  };
};

// sử lý valid thẻ input date
const dateInput = document.getElementById("date");

// bắt sự kiện blur khỏi thẻ input
dateInput.onblur = function () {
  
  dateInput.onclick = () => {
    dateInput.parentElement.classList.remove("invalid");
  };

  var errorMessage = checkDate(dateInput.value);
  var errorElement = dateInput.parentElement.querySelector(".form-message");
  // kiểm tra lỗi
  if (errorMessage) {
    dateInput.parentElement.classList.add("invalid");
    dateInput.classList.add("is-valid");
    errorElement.innerText = errorMessage;
  } else {
    dateInput.parentElement.classList.remove("invalid");
    errorElement.innerText = "";
  }


  // bắt sự kiện khi người dùng nhập value
  dateInput.oninput = () => {
    errorElement.innerText = "";
  };
};

// sử lý valid thẻ input type
const typeInput = document.getElementById("type");
typeInput.onclick = () => {
  typeInput.parentElement.classList.remove("invalid");
};
// bắt sự kiện blur khỏi thẻ input
typeInput.onblur = function () {
  var errorMessage = checkType(typeInput.value);
  var errorElement = typeInput.parentElement.querySelector(".form-message");
  // kiểm tra lỗi
  if (errorMessage) {
    typeInput.parentElement.classList.add("invalid");
    typeInput.classList.add("is-valid");
    errorElement.innerText = errorMessage;
  } else {
    typeInput.parentElement.classList.remove("invalid");
    errorElement.innerText = "";
  }
};

// sử lý valid thẻ input status
const statusInput = document.getElementById("status");
statusInput.onclick = () => {
  statusInput.parentElement.classList.remove("invalid");
};
// bắt sự kiện blur khỏi thẻ input
statusInput.onblur = function () {
  var errorMessage = checkType(statusInput.value);
  var errorElement = statusInput.parentElement.querySelector(".form-message");
  // kiểm tra lỗi
  if (errorMessage) {
    statusInput.parentElement.classList.add("invalid");
    statusInput.classList.add("is-valid");
    errorElement.innerText = errorMessage;
  } else {
    statusInput.parentElement.classList.remove("invalid");
    errorElement.innerText = "";
  }
};

// hàm check value input name
function checkname(value) {
  value
    ? nameInput.classList.add("is-valid")
    : nameInput.classList.remove("is-valid");
  return value.trim() ? undefined : "Vui lòng nhập trường này";
}

// hàm check input amount
function checkAmount(value) {
  value
    ? amountInput.classList.add("is-valid")
    : amountInput.classList.remove("is-valid");
  return value.trim() ? undefined : "Vui lòng nhập trường này";
}

// hàm check input price
function checkPrice(value) {
  value
    ? priceInput.classList.add("is-valid")
    : priceInput.classList.remove("is-valid");
  return value.trim() ? undefined : "Vui lòng nhập trường này";
}

// hàm check input date
function checkDate(value) {
  value
    ? dateInput.classList.add("is-valid")
    : dateInput.classList.remove("is-valid");
  return value.trim() ? undefined : "Vui lòng nhập trường này";
}

// hàm check input type
function checkType(value) {
  value
    ? typeInput.classList.add("is-valid")
    : typeInput.classList.remove("is-valid");
  return value.trim() ? undefined : "Vui lòng nhập trường này";
}

// hàm check input status
function checkStatus(value) {
  value
    ? statusInput.classList.add("is-valid")
    : statusInput.classList.remove("is-valid");
  return value.trim() ? undefined : "Vui lòng nhập trường này";
}

//sử lý lấy value của product mới
function handleCreateProduct() {
  console.log(saveBtn);
  saveBtn.onclick = function () {
    const name = document.getElementById("name").value;
    const amount = document.getElementById("amount").value;
    const type = document.getElementById("type").value;
    const status = document.getElementById("status").value;
    const time = document.getElementById("date").value;
    const stringPrice = document.getElementById("price").value;
    var price = Number(stringPrice);
    price = price.toLocaleString("vi", { style: "currency", currency: "VND" }); // định dạng giá theo kiểu VND

    // kiểm tra thông tin truyền đi
    if (
      name === "" ||
      amount === "" ||
      type === "" ||
      status === "" ||
      time === "" ||
      stringPrice === ""
    ) {
      alert("Chưa nhập đủ thông tin");
      if (name === "") {
        document.getElementById("name").parentElement.classList.add("invalid");
      }
      if (amount === "") {
        document
          .getElementById("amount")
          .parentElement.classList.add("invalid");
      }
      if (type === "") {
        document.getElementById("type").parentElement.classList.add("invalid");
      }
      if (status === "") {
        document
          .getElementById("status")
          .parentElement.classList.add("invalid");
      }
      if (time === "") {
        document.getElementById("date").parentElement.classList.add("invalid");
      }
      if (stringPrice === "") {
        document.getElementById("price").parentElement.classList.add("invalid");
      }
      saveBtn.preventDefault();
    } else {
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
    }
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
