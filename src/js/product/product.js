
// API
var productApi = "http://localhost:3000/product"

// khi bắt đầu chạy trương trình
function start() {
  getProuct(function(produce) {
    renderProduct(produce)
  })
}

start()


// lấy dữ liệu từ API
function getProuct(callback) {
  fetch(productApi)
    .then(function(response) {
        return response.json()
    })
    .then(callback)
}


// render product
function renderProduct(produces) {
  const productTable = document.querySelector(".table_list");

  var html = produces.map(function(item, index) {
    if(index %2 === 0){
      if(item.status === "Còn hàng"){
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
              <i class="fa-solid fa-trash-can"></i>
            </td>
          </tr>
        `
      }
      else{
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
              <i class="fa-solid fa-trash-can"></i>
            </td>
          </tr>
        `
      }
    }
    else{
      if(item.status === "Còn hàng"){
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
              <i class="fa-solid fa-trash-can"></i>
            </td>
          </tr>
        `
      }
      else{
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
              <i class="fa-solid fa-trash-can"></i>
            </td>
          </tr>
        `
      }
      }
  })

  productTable.innerHTML = html.join('')
}




