import { menuItems, newUser, product, dataTable } from "./data.js";

// click menuIcon(mobile)
const meniIcon = document.querySelector(".menu_icon")
const navbar = document.querySelector(".navbar");
meniIcon.addEventListener("click", (e) => {
  if(meniIcon.classList.toggle('a')) {
    navbar.style.display = "none"
  }
  else{
    navbar.style.display = "block"
  }
})



// hiển thị menuItem
const menuListItem = document.querySelector(".navbar__list")
menuItems.forEach((item) => {
  menuListItem.innerHTML += `
    <li class="navbar__list__item">
          <i class="${item.class}"></i>
          <a href="/">
              <p>${item.title}</p>
          </a>
      </li>
  `
})





// render newUser
const newUserList = document.querySelector(".content__infomation__user__list")
newUser.forEach((item) => {
  newUserList.innerHTML += `
      <li class="user__list-item">
          <img src="${item.img}" alt="${item.userName}">
          <div class="user__item-infomation">
              <h2>${item.userName}</h2>
              <p>${item.email}</p>
          </div>
      </li>
  `
})


// render product

const productList= document.querySelector(".product__list")
product.forEach((item) => {
  productList.innerHTML += `
      <li>
        <h2>${item.productName}</h2>
        <div class="produce">
            <p class="produce_id">
                ${item.productId}
            </p>
            <div class="produce_share">
                <h6>${item.sales}</h6>
                <p>sales</p>
            </div>
        </div>
      </li>
  `
})


// render tabler
const listTabel =  document.querySelector(".list__table")
dataTable.forEach((item) => {
  listTabel.innerHTML += `
    <tr class="${item.background}">
          <td class="text_color">${item.name}</td>
          <td>${item.date}</td>
          <td class="text_color">${item.price}</td>
          <td ><p class="${item.Class}">${item.status}</p></td>
    </tr>
  `
})
                            