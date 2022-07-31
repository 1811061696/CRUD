import { menuItems, chartData, chartLabels, newUser, product, dataTable } from "./data.js";

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

// render Chart
const lineChart = document.getElementById("chart");
const myChart = new Chart(lineChart, {
  type: "line",
  data: {
    labels: chartLabels,
    datasets: [
      {
        label: "Sales",
        data: chartData,
        fill: false,
        tension: 0.5,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: "#0E9F6E",
        borderWidth: 2,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      tooltip: {
        // create tooltip
        callbacks: {
          label: function (context) {
            let label = context.dataset.label || "";

            if (label) {
              label += ": ";
            }
            if (context.parsed.y !== null) {
              label += new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "VND",
              }).format(context.parsed.y);
            }
            return label;
          },
        },
        position: "average",
        padding: "18.06px",
        yAlign: "bottom",
        backgroundColor: "#F9FAFB",
        titleColor: "#4B5563",
        titleFont: {
          family: "Inter, sans-serif",
          size: "12",
          weight: "500",
          lineHeight: "150%",
        },
        bodyColor: "#6B7280",
        bodyFont: {
          family: "Inter, sans-serif",
          size: "16",
          weight: "400",
          lineHeight: "150%",
        },
      },
    },
  },
});



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
                            