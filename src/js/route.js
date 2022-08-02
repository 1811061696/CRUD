const main = document.getElementById("main")
const product = document.getElementById("product")
const user  = document.getElementById("user")
const order = document.getElementById("order")

const route = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    handleLocation();
};

const routes = {
    404: "/src/pages/404.html",
    "/product": "/src/pages/product.html",
    "/": "/src/pages/index.html",
    "/user": "/src/pages/user.html",
    "/order": "/src/pages/order.html",
    "/addProduct":"/src/pages/addProduct.html"
};

const handleLocation = async () => {
    const path = window.location.pathname;
    switch(path) {
        case "/" :
            main.classList.add("active")
            break;
        case "/product":
            product.classList.add("active")
            main.classList.remove("active")
            user.classList.remove("active")
            order.classList.remove("active")
            break;
        case "/user":
            user.classList.add("active")
            product.classList.remove("active")
            order.classList.remove("active")
            break
        case "/order":
            order.classList.add("active")
            user.classList.remove("active")
            product.classList.remove("active")
            break
    }
    const route = routes[path] || routes[404];
    const html = await fetch(route)
        .then((data) => data.text());
    document.getElementById("main-page").innerHTML = html;
};

export const renderPage = () => {
    handleLocation();
    window.location.reload();
  };

window.onpopstate = handleLocation;
window.route = route;

handleLocation();

