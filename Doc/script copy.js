// header
const bar = document.getElementById("bar");
const nav = document.getElementById("nav");

bar.onclick = (e) => {
  const icon = e.target.getAttribute("class");
  if (icon == "fa-solid fa-bars") {
    e.target.setAttribute("class", "fa-solid fa-xmark");
  } else {
    e.target.setAttribute("class", "fa-solid fa-bars");
  }
  nav.classList.toggle("showNav");
};

// carousel
const carouselContainer = document.querySelector(".carouselContainer");
const eachCarousel = document.querySelector(".eachCarousel").clientWidth;
const allEachCarousel = document.querySelectorAll(".eachCarousel");
const allIndicator = document.querySelectorAll(".indicator");

const slideCarousel = (index) => {
  for (let x = 0; x < allEachCarousel.length; x++) {
    if (x === index) {
      allEachCarousel[x].classList.add("eachCarouselBorder");
      allIndicator[x].classList.add("activeIndicator");
    } else {
      allEachCarousel[x].classList.remove("eachCarouselBorder");
      allIndicator[x].classList.remove("activeIndicator");
    }
  }
  carouselContainer.scrollLeft = index * (eachCarousel + 10);
  console.log(carouselContainer.scrollLeft);
};

document.addEventListener("DOMContentLoaded", () => {
  const navItems = document.querySelectorAll(".nav-item");

  navItems.forEach((item) => {
    item.addEventListener("mouseover", () => {
      const activeItem = document.querySelector(".nav-item.active");
      if (activeItem) {
        activeItem.classList.remove("active");
      }
      item.classList.add("active");
    });

    item.addEventListener("mouseout", () => {
      item.classList.remove("active");
    });
  });
});

const ctx = document.getElementById("myChart");
const ctx2 = document.querySelector(".myChart-2");
const ctx3 = document.querySelector(".myChart-3");
const ctx4 = document.querySelector(".myChart-4");
const ctx5 = document.querySelector(".myChart-1");
const ctx6 = document.querySelector(".myChart-6");

new Chart(ctx, {
  type: "line",
  data: {
    labels: ["Jan", "Feb", "March", "April", "May", "June", "july"],
    datasets: [
      {
        label: "$",
        data: [12, 19, 8, 10, 5, 15, 8],
        borderColor: "green",
        borderWidth: 3,
        tension: 0.3,
        fill: true,
        backgroundColor: "#74d747",
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

new Chart(ctx2, {
  type: "line",
  data: {
    labels: ["Jan", "Feb", "March", "April", "May", "June", "july"],
    datasets: [
      {
        label: "$",
        data: [14, 13, 5, 14, 19, 16, 8],
        borderColor: "green",
        borderWidth: 3,
        tension: 0.3,
        fill: true,
        backgroundColor: "#74d747",
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

new Chart(ctx3, {
  type: "line",
  data: {
    labels: ["Jan", "Feb", "March", "April", "May", "June", "july"],
    datasets: [
      {
        label: "$",
        data: [10, 19, 16, 11, 5, 2, 8],
        borderColor: "green",
        borderWidth: 3,
        tension: 0.3,
        fill: true,
        backgroundColor: "#74d747",
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

new Chart(ctx4, {
  type: "line",
  data: {
    labels: ["Jan", "Feb", "March", "April", "May", "June", "july"],
    datasets: [
      {
        label: "$",
        data: [10, 19, 16, 11, 5, 2, 8],
        borderColor: "green",
        borderWidth: 3,
        tension: 0.3,
        fill: true,
        backgroundColor: "#74d747",
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

new Chart(ctx5, {
  type: "line",
  data: {
    labels: ["Jan", "Feb", "March", "April", "May", "June", "july"],
    datasets: [
      {
        label: "$",
        data: [12, 19, 8, 10, 5, 15, 8],
        borderColor: "green",
        borderWidth: 3,
        tension: 0.3,
        fill: true,
        backgroundColor: "#74d747",
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

new Chart(ctx6, {
  type: "line",
  data: {
    labels: ["Jan", "Feb", "March", "April", "May", "June", "july"],
    datasets: [
      {
        label: "$",
        data: [12, 19, 8, 10, 5, 15, 8],
        borderColor: "green",
        borderWidth: 3,
        tension: 0.3,
        fill: true,
        backgroundColor: "#74d747",
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
