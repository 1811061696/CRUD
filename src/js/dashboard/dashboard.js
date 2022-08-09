import { menuItems, newUser, productSelling, dataTable } from "./data.js";

// click menuIcon(mobile)
const meniIcon = document.querySelector(".menu_icon");
const navbar = document.querySelector(".navbar");
meniIcon.addEventListener("click", (e) => {
  if (meniIcon.classList.toggle("a")) {
    navbar.style.display = "none";
  } else {
    navbar.style.display = "block";
  }
});

// hiển thị menuItem
// const menuListItem = document.querySelector(".navbar__list")
// menuItems.forEach((item) => {
//   menuListItem.innerHTML += `
//     <li  class="navbar__list__item">
//           <i class="${item.class}"></i>
//           <a id="${item.id}" href="${item.path}" onclick="route()">
//               ${item.title}
//           </a>
//       </li>
//   `
// })

// render newUser
const newUserList = document.querySelector(".content__infomation__user__list");
if(newUserList){
  newUser.forEach((item) => {
    newUserList.innerHTML += `
        <li class="user__list-item">
            <img src="${item.img}" alt="${item.userName}">
            <div class="user__item-infomation">
                <h2>${item.userName}</h2>
                <p>${item.email}</p>
            </div>
        </li>
    `;
  });
}

// render product
const productList = document.querySelector(".product__list");
if(productList){
  productSelling.forEach((item) => {
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
    `;
  });
}

// render tabler
const listTabel = document.querySelector(".list__table");
if(listTabel){
  dataTable.forEach((item) => {
    listTabel.innerHTML += `
      <tr class="${item.background}">
            <td class="text_color">${item.name}</td>
            <td>${item.date}</td>
            <td class="text_color">${item.price}</td>
            <td ><p class="${item.Class}">${item.status}</p></td>
      </tr>
    `;
  });
}


const LABELS = [
  "01 June",
  "02 June",
  "03 June",
  "04 June",
  "05 June",
  "06 June",
  "07 June",
];
const yearCurrent = new Date().getFullYear();
var ctx = document.getElementById("myChart");
const datapoints = [400, 1300, 800, 1500, 300, 1200, 600, 2400];
const data = {
  labels: LABELS,
  datasets: [
    {
      data: datapoints,
      borderColor: "#0e9f6e",
      fill: false,
      cubicInterpolationMode: "monotone",
      pointStyle: "line",
      tension: 0.4,
      pointStyle: "circle",
      pointRadius: 1,
    },
  ],
};
const config = {
  type: "line",
  data: data,
  options: {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      intersect: false,
    },

    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: { maxTicksLimit: 10 },
      },
      y: {
        grid: {
          drawBorder: false,
          tickLength: 40,
        },

        ticks: {
          max: 2400,
          min: 0,
          stepSize: 400,
          callback: (context, index) => {
            return context + "k";
          },
        },
      },
    },
    //----------- custom tooltip ------------
    plugins: {
      tooltip: {
        // Disable the on-canvas tooltip
        enabled: false,
        external: function (context) {
          // Tooltip Element
          let tooltipEl = document.getElementById("chartjs-tooltip");

          // Create element on first render
          if (!tooltipEl) {
            tooltipEl = document.createElement("div");
            tooltipEl.id = "chartjs-tooltip";
            tooltipEl.innerHTML = "<table></table>";
            document.body.appendChild(tooltipEl);
          }

          // Hide if no tooltip
          const tooltipModel = context.tooltip;
          if (tooltipModel.opacity === 0) {
            tooltipEl.style.opacity = 0;
            return;
          }

          // Set caret Position
          tooltipEl.classList.remove("above", "below", "no-transform");
          if (tooltipModel.yAlign) {
            tooltipEl.classList.add(tooltipModel.yAlign);
          } else {
            tooltipEl.classList.add("no-transform");
          }

          function getBody(bodyItem) {
            return bodyItem.lines;
          }

          // Set Text
          if (tooltipModel.body) {
            const titleLines = tooltipModel.title || [];
            const bodyLines = tooltipModel.body.map(getBody);

            let innerHtml = "<thead>";

            titleLines.forEach(function (title) {
              innerHtml +=
                '<tr><th><div class = "tooltip--title" style = "font-family:Inter; font-weight: 500; font-size: 12px; line-height: 150%;color: #4B5563; ">' +
                title +
                ", " +
                yearCurrent +
                "</div></th></tr>";
            });
            innerHtml += "</thead>";

            bodyLines.forEach(function (body, i) {
              innerHtml +=
                '<tr><th><div class = "tooltip--body" style = "display: flex; align-items: center">' +
                '<div class ="tooltip--body--icon" style = "width:12px; height: 12px; boder; border-radius: 6px; background: #0E9F6E; "></div>' +
                '<span class = "tooltip--body--tilte" style="font-family:Inter; font-weight: 400; font-size: 16px; line-height: 150%;color: #6B7280; margin: 0 7px;"> Sales: </span> ' +
                '<span class ="tooltip--body--value" style="line-height: 150%; font-size: 16px; font-weight: 600; color: $gray900;"> ' +
                body +
                "k" +
                "&nbsp" +
                "VND" +
                " </span></div></th></tr>";
            });

            let tableRoot = tooltipEl.querySelector("table");
            tableRoot.innerHTML = innerHtml;
          }

          const position = context.chart.canvas.getBoundingClientRect();
          const bodyFont = Chart.helpers.toFont(tooltipModel.options.bodyFont);
          // Display, position, and set styles for font
          tooltipEl.style.opacity = 1;
          tooltipEl.style.position = "absolute";
          tooltipEl.style.left =
            position.left -
            94 +
            window.pageXOffset +
            tooltipModel.caretX +
            "px";
          tooltipEl.style.top =
            position.top -
            130 +
            window.pageYOffset +
            tooltipModel.caretY +
            "px";
          tooltipEl.style.font = bodyFont.string;
          tooltipEl.style.padding =
            tooltipModel.padding + "px " + tooltipModel.padding + "px";
          tooltipEl.style.pointerEvents = "none";
        },
      },

      legend: {
        display: false,
      },
    },
  },
  //add line onhover
  plugins: [
    {
      afterDraw: (chart) => {
        if (chart.tooltip?._active?.length) {
          let x = chart.tooltip._active[0].element.x;
          let yAxis = chart.scales.y;
          let ctx = chart.ctx;
          ctx.save();
          ctx.beginPath();
          ctx.setLineDash([5, 6]);
          ctx.moveTo(x, yAxis.top);
          ctx.lineTo(x, yAxis.bottom);
          ctx.lineWidth = 1;
          ctx.strokeStyle = "#e5e7eb";
          ctx.stroke();
          ctx.restore();
        }
      },
    },
  ],
};
const myChart = new Chart(document.getElementById("myChart"), config);
