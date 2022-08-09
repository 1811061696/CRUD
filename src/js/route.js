const main = document.getElementById("main");
const product = document.getElementById("product");
const user = document.getElementById("user");
const order = document.getElementById("order");
const iconMain = document.querySelector(".fa-square-poll-vertical");
const iconList = document.querySelector(".fa-database");
const iconUser = document.querySelector(".fa-user");
const iconOrder = document.querySelector(".fa-file-lines");

const route = (event) => {
  event = event || window.event;
  event.preventDefault();
  window.history.pushState({}, "", event.target.href);
  handleLocation();
};

const routes = {
  404: "/src/pages/404.html",
  main: "/src/pages/index.html",
  product: "/src/pages/product.html",
  addProduct: "/src/pages/addProduct.html",
  updateProduct: "/src/pages/updateProduct.html",
  "/": "/src/pages/index.html",
  user: "/src/pages/user.html",
  order: "/src/pages/order.html",
};

const handleLocation = async () => {
  const path = window.location.hash.replace("#", "");
  switch (path) {
    case "main":
      main.classList.add("active");
      iconMain.classList.add("active");
      break;
    case "product":
      product.classList.add("active");
      iconList.classList.add("active");
      break;
    case "addProduct":
      product.classList.add("active");
      iconList.classList.add("active");
      break;
    case "updateProduct":
      product.classList.add("active");
      iconList.classList.add("active");
      break;
    case "user":
      user.classList.add("active");
      iconUser.classList.add("active");
      break;
    case "order":
      order.classList.add("active");
      iconOrder.classList.add("active");
      break;
  }
  if (path.length == 0) path = main;
  const route = routes[path] || routes[404];
  const html = await fetch(route).then((data) => data.text());
  document.getElementById("main-page").innerHTML = html;
};

// console.log(window.location.href)
const renderPage = () => {
  handleLocation();
  window.location.href.reload();
};

window.addEventListener("hashchange", renderPage);

handleLocation();
