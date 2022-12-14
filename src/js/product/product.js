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


// lấy id của product muốn sửa 
function addIdLocalStorage(id){
  localStorage.setItem("Id", id)
}
var idEdit = localStorage.getItem("Id")



// phương thức xóa
function handleDeleteProduct(id) {
  alert("Bạn có muốn xóa sản phẩm này không")
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
  
    if(id == idEdit){
      localStorage.clear()
    }
}



// render product
function renderProduct(products) {
  
  // phân trang
  var numberPage = document.querySelector("#numberPage");
  var currentPage = 1; // trang ban đầu
  let perPage = Number(numberPage.value); //  số item trong 1 trang
  let totalPage = 0; // tổng số trang
  let perProduct = []; // mảng chứa các item được render
  let arrProductFilter = []

  // lấy các giá trị được render ra trong một tráng
  perProduct = products.reverse().slice(
    (currentPage - 1) * perPage,
    (currentPage - 1) * perPage + perPage
  );

  // render số item theo mong muốn
  numberPage.onchange = () => {
    perPage = numberPage.value;
    getProuct(renderProduct);
  };

  totalPage = products.length / perPage;

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
      perProduct = products.slice(
        (currentPage - 1) * perPage,
        (currentPage - 1) * perPage + perPage
      );
      render();
    } else {
      nextLeft.removeEventListener("click");
    }
  });

  // lọc product
  const productFilter = document.querySelector(".Product__filter")
  const productBack = document.querySelector(".back")
  const formFilter = document.querySelector(".filter")
  const nameProductFilter = document.getElementById("name")
  const amountFilter = document.getElementById("amount")
  const typeFilter = document.getElementById("type")
  const statusFilter = document.getElementById("status")
  productFilter.addEventListener("click", ()=> {
    productFilter.classList.add("display")
    productBack.classList.remove("display")
    formFilter.classList.remove("display")

     filterProduct()
 
  })
 
  productBack.addEventListener("click", ()=> {
    productBack.classList.add("display")
    formFilter.classList.add("display")
    productFilter.classList.remove("display")
  })

function filterProduct(){
  statusFilter.onblur = () => {
    if(statusFilter.value.length > 0){
      for(let i = 0; i < products.length; i++){
        if(products[i].status === statusFilter.value){
          arrProductFilter.push(products[i])
          perProduct = arrProductFilter
        }
      }
      if(arrProductFilter.length === 0){
        alert("Không có trạng thái phù hợp")
      }
      render()
      arrProductFilter = [] 
      statusFilter.value = ""
    }
  }

  typeFilter.onblur = ()=> {
    if(typeFilter.value.length > 0){
      for(let i = 0; i < products.length; i++){
        if(products[i].type === typeFilter.value){
          arrProductFilter.push(products[i])
          perProduct = arrProductFilter
        }
      }
      if(arrProductFilter.length === 0){
        alert("Không có loại sản phẩm phù hợp")
      }
      render()
      arrProductFilter = [] 
      typeFilter.value = ""
    }
  }

  amountFilter.onblur = ()=> {
    if(amountFilter.value.length > 0){
      for(let i = 0; i < products.length; i++){
        if(products[i].amount === amountFilter.value){
          arrProductFilter.push(products[i])
          perProduct = arrProductFilter
        }
      }
      if(arrProductFilter.length === 0){
        alert("Không có sản phẩm có số lượng phù hợp")
      }
      render()
      arrProductFilter = [] 
      amountFilter.value = ""
    }
  }

  nameProductFilter.onblur = ()=> {
    if(nameProductFilter.value.length > 0){
      for(let i = 0; i < products.length; i++){
        if(products[i].name === nameProductFilter.value){
          arrProductFilter.push(products[i])
          perProduct = arrProductFilter
        }
      }
      if(arrProductFilter.length === 0){
        alert("Không có sản phẩm phù hợp")
      }
      render()
      arrProductFilter = [] 
      nameProductFilter.value = ""
    }
  }
}


 


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
              <i class="fa-solid fa-pencil" onclick = "addIdLocalStorage(${item.id})"><a href="#updateProduct" onclick"alert("test")"></a></i>
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
              <i class="fa-solid fa-pencil" onclick = "addIdLocalStorage(${item.id})"><a href="#updateProduct" onclick="route() "></a></i>
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
              <i class="fa-solid fa-pencil" onclick = "addIdLocalStorage(${item.id})" ><a href="#updateProduct" onclick="route() "></a></i>
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
              <i class="fa-solid fa-pencil" onclick = "addIdLocalStorage(${item.id})" ><a href="#updateProduct" onclick="route()"></a></i>
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
