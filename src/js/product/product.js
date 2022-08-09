// API
var productApi = "http://localhost:3000/product";

// khi bắt đầu chạy trương trình
function start() {
  getProuct(function (product) {
    renderProduct(product);
  });
}

start();

// lấy dữ liệu từ API
function getProuct(callback) {
  fetch(productApi)
    .then(function (response) {
      return response.json("");
    })
    .then(callback);
}

// phương thức xóa
function handleDeleteProduct(id) {
  const option = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  };
  // gọi API
  fetch(productApi + "/" + id, option) // gọi tới api và truyển theo id của product muốn xóa
    .then(function (response) {
      response.json("");
    })
    .then(function () {
      // render lại giao diện
      getProuct(renderProduct);
    });
}

// render product
function renderProduct(products) {
  // phân trang
  var numberPage = document.querySelector("#numberPage");
  var currentPage = 1; // trang ban đầu
  let perPage = Number(numberPage.value); //  số item trong 1 trang
  let totalPage = 0; // tổng số trang
  let perProduct = []; // mảng chứa các item được render

  // lấy các giá trị được render ra trong một tráng
  perProduct = products.slice(
    (currentPage - 1) * perPage,
    (currentPage - 1) * perPage + perPage
  );

  // render số item theo mong muốn
  numberPage.onchange = () => {
    perPage = numberPage.value;
    getProuct(renderProduct);
  };

  totalPage = products.length / perPage;
  console.log(totalPage)

  // sử lý next right
  const nextRight = document.getElementById("next-right");
  nextRight.addEventListener("click", () => {
    if (currentPage === Math.ceil(totalPage)) {
      nextRight.removeEventListener("click");
    } else {
      currentPage += 1;
      perProduct = products.slice(
        (currentPage - 1) * perPage,
        (currentPage - 1) * perPage + perPage
      );
      render();
    }
  });

 

  // sử lý next left
  const nextLeft = document.getElementById("next-left");
  nextLeft.addEventListener("click", () => {
    if (currentPage !== 1) {
      currentPage -= 1;
      console.log(currentPage);
      perProduct = products.slice(
        (currentPage - 1) * perPage,
        (currentPage - 1) * perPage + perPage
      );
      render();
    } else {
      nextLeft.removeEventListener("click");
    }
  });

  // render product ra UI
  const productTable = document.querySelector(".table_list");
  function render() {
    var html = perProduct.map(function (item, index) {
      if (index % 2 === 0) {
        if (item.status === "Còn hàng") {
          return `
        <tr class="">
            <td class="text_color">${item.name}</td>
            <td class="text_color">${item.type}</td>
            <td>${item.create_date}</td>
            <td class="text_color">${item.amount} cái</td>
            <td class="text_color">${item.price} </td>
            <td><p class="label-success">${item.status}</p></td>
            <td class="table__option">
              <i class="fa-solid fa-pencil"><a href="#updateProduct" onclick="route()"></a></i>
              <i class="fa-solid fa-trash-can" onclick = "handleDeleteProduct(${item.id})"></i>
            </td>
          </tr>
        `;
        } else {
          return `
        <tr class="">
            <td class="text_color">${item.name}</td>
            <td class="text_color">${item.type}</td>
            <td>${item.create_date}</td>
            <td class="text_color">${item.amount} cái</td>
            <td class="text_color">${item.price} </td>
            <td><p class="label-danger">${item.status}</p></td>
            <td class="table__option">
              <i class="fa-solid fa-pencil"><a href="#updateProduct" onclick="route()"></a></i>
              <i class="fa-solid fa-trash-can" onclick = "handleDeleteProduct(${item.id})"></i>
            </td>
          </tr>
        `;
        }
      } else {
        if (item.status === "Còn hàng") {
          return `
        <tr class="background__table">
            <td class="text_color">${item.name}</td>
            <td class="text_color">${item.type}</td>
            <td>${item.create_date}</td>
            <td class="text_color">${item.amount} cái</td>
            <td class="text_color">${item.price} </td>
            <td><p class="label-success">${item.status}</p></td>
            <td class="table__option">
              <i class="fa-solid fa-pencil"><a href="#updateProduct" onclick="route()"></a></i>
              <i class="fa-solid fa-trash-can" onclick = "handleDeleteProduct(${item.id})"></i>
            </td>
          </tr>
        `;
        } else {
          return `
        <tr class="background__table">
            <td class="text_color">${item.name}</td>
            <td class="text_color">${item.type}</td>
            <td>${item.create_date}</td>
            <td class="text_color">${item.amount} cái</td>
            <td class="text_color">${item.price} </td>
            <td><p class="label-danger">${item.status}</p></td>
            <td class="table__option">
              <i class="fa-solid fa-pencil"><a href="#updateProduct" onclick="route()"></a></i>
              <i class="fa-solid fa-trash-can"  onclick = "handleDeleteProduct(${item.id})"></i>
            </td>
          </tr>
        `;
        }
      }
    });
    productTable.innerHTML = html.join("");
  }
  render();
}
