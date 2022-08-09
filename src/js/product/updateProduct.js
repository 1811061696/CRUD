function start() {
  getProuct(function (product) {
    renderProduct(product);
  });
  handleUpdateProduct();
}

start();

// var productApi = "http://localhost:3000/product";
// API

function getProuct(callback) {
  const id = localStorage.getItem("Id");
  console.log(id);
  fetch(productApi + "/" + id)
    .then(function (response) {
      return response.json("");
    })
    .then(callback);
}

var nameProduct = document.getElementById("newName");
var amount = document.getElementById("newAmount");
var type = document.getElementById("newType");
var statusProduct = document.getElementById("newStatus");
var date = document.getElementById("newDate");
var price = document.getElementById("newPrice");

// render data Product cũ
function renderProduct(product) {
  nameProduct.value = product.name;
  amount.value = product.amount;
  type.value = product.type;
  statusProduct.value = product.status;
  date.value = product.create_date;


  // kiểm tra giá value ban đầu
  if(nameProduct.value){
    nameProduct.classList.add("is-valid");
  }

  if(amount.value){
    amount.classList.add("is-valid");
  }
}


// valid các thẻ input


nameProduct.onclick = () => {
  nameProduct.parentElement.classList.remove("invalid");
};

// bắt sự kiện blur khỏi thẻ input
nameProduct.onblur = function () {
  var errorMessage = checkname(nameProduct.value);
  var errorElement = nameProduct.parentElement.querySelector(".form-message");
  // kiểm tra lỗi
  if (errorMessage) {
    nameProduct.parentElement.classList.add("invalid");
    nameProduct.classList.add("is-valid");
    errorElement.innerText = errorMessage;
  } else {
    nameProduct.parentElement.classList.remove("invalid");
    errorElement.innerText = "";
  }

  nameProduct.oninput = () => {
    errorElement.innerText = "";
  };
};

amount.onblur = function () {
  var errorMessage = checkAmount(amount.value);
  var errorElement = amount.parentElement.querySelector(".form-message");
  // kiểm tra lỗi
  if (errorMessage) {
    amount.parentElement.classList.add("invalid");
    amount.classList.add("is-valid");
    errorElement.innerText = errorMessage;
  } else {
    amount.parentElement.classList.remove("invalid");
    errorElement.innerText = "";
  }

  amount.oninput = () => {
    errorElement.innerText = "";
  };
};

price.onblur = function () {
  var errorMessage = checkPrice(price.value);
  var errorElement = price.parentElement.querySelector(".form-message");
  // kiểm tra lỗi
  if (errorMessage) {
    price.parentElement.classList.add("invalid");
    price.classList.add("is-valid");
    errorElement.innerText = errorMessage;
  } else {
    price.parentElement.classList.remove("invalid");
    errorElement.innerText = "";
  }

  price.oninput = () => {
    errorElement.innerText = "";
  };
};


date.onblur = function () {
  var errorMessage = checkDate(date.value);
  var errorElement = date.parentElement.querySelector(".form-message");
  // kiểm tra lỗi
  if (errorMessage) {
    date.parentElement.classList.add("invalid");
    date.classList.add("is-valid");
    errorElement.innerText = errorMessage;
  } else {
    date.parentElement.classList.remove("invalid");
    errorElement.innerText = "";
  }

  date.oninput = () => {
    errorElement.innerText = "";
  };
};


type.onclick = () => {
  type.parentElement.classList.remove("invalid");
};
// bắt sự kiện blur khỏi thẻ input
type.onblur = function () {
  var errorMessage = checkType(type.value);
  var errorElement = type.parentElement.querySelector(".form-message");
  // kiểm tra lỗi
  if (errorMessage) {
    type.parentElement.classList.add("invalid");
    type.classList.add("is-valid");
    errorElement.innerText = errorMessage;
  } else {
    type.parentElement.classList.remove("invalid");
    errorElement.innerText = "";
  }
};


statusProduct.onclick = () => {
  statusProduct.parentElement.classList.remove("invalid");
};
// bắt sự kiện blur khỏi thẻ input
statusProduct.onblur = function () {
  var errorMessage = checkStatus(statusProduct.value);
  var errorElement = statusProduct.parentElement.querySelector(".form-message");
  // kiểm tra lỗi
  if (errorMessage) {
    statusProduct.parentElement.classList.add("invalid");
    statusProduct.classList.add("is-valid");
    errorElement.innerText = errorMessage;
  } else {
    statusProduct.parentElement.classList.remove("invalid");
    errorElement.innerText = "";
  }
};


function checkname(value) {
  value
    ? nameProduct.classList.add("is-valid")
    : nameProduct.classList.remove("is-valid");
  return value.trim() ? undefined : "Vui lòng nhập trường này";
}

// hàm check input amount
function checkAmount(value) {
  value
    ? amount.classList.add("is-valid")
    : amount.classList.remove("is-valid");
  return value.trim() ? undefined : "Vui lòng nhập trường này";
}

// hàm check input price
function checkPrice(value) {
  value
    ? price.classList.add("is-valid")
    : price.classList.remove("is-valid");
  return value.trim() ? undefined : "Vui lòng nhập trường này";
}

// hàm check input date
function checkDate(value) {
  value
    ? date.classList.add("is-valid")
    : date.classList.remove("is-valid");
  return value.trim() ? undefined : "Vui lòng nhập trường này";
}

// hàm check input type
function checkType(value) {
  value
    ? type.classList.add("is-valid")
    : type.classList.remove("is-valid");
  return value.trim() ? undefined : "Vui lòng nhập trường này";
}

// hàm check input status
function checkStatus(value) {
  value
    ? statusProduct.classList.add("is-valid")
    : statusProduct.classList.remove("is-valid");
  return value.trim() ? undefined : "Vui lòng nhập trường này";
}


function handleUpdateProduct() {
  var saveNewBtn = document.getElementById("save");
  console.log(saveNewBtn);
  saveNewBtn.addEventListener("click", () => {
    var id = localStorage.getItem("Id");

    if (
      nameProduct.value === "" ||
      amount.value === "" ||
      type.value === "" ||
      statusProduct.value === "" ||
      date.value === "" ||
      price.value === ""
    ) {
      alert("Chưa nhập đủ thông tin");
      if (nameProduct.value === "") {
        document
          .getElementById("newName")
          .parentElement.classList.add("invalid");
      }
      if (amount.value === "") {
        document
          .getElementById("newAmount")
          .parentElement.classList.add("invalid");
      }
      if (type.value === "") {
        document
          .getElementById("newType")
          .parentElement.classList.add("invalid");
      }
      if (statusProduct === "") {
        document
          .getElementById("newStatus")
          .parentElement.classList.add("invalid");
      }
      if (date.value === "") {
        document
          .getElementById("newDate")
          .parentElement.classList.add("invalid");
      }
      if (price.value === "") {
        document
          .getElementById("newPrice")
          .parentElement.classList.add("invalid");
      }
      saveBtn.preventDefault();
    } else {
      const data = {
        name: nameProduct.value,
        amount: amount.value,
        type: type.value,
        status: statusProduct.value,
        create_date: date.value,
        price: Number(price.value).toLocaleString("vi", { style: "currency", currency: "VND" }),
      };

      var option = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };
      fetch(productApi + "/" + id, option).then((res) => {
        return res.json;
      });
      localStorage.clear();
      alert("Sửa thành công");
    }
  });
}
