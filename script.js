const lineCanvas = document.getElementById("lineChartCanvas");
const pieCanvas = document.getElementById("pieChartCanvas");

// Sample data for the line chart
const lineChartData = {
  labels: ["19:00", "19:10", "19:20", "19:30", "19:40", "19:50"],
  datasets: [
    {
      label: "Bitcoin/BTC",
      data: [40000, 42000, 35000, 50000, 40000, 35000],
      borderColor: "#4673FB",
      borderWidth: 2,
      fill: false,
      tension: 0.1,
    },
  ],
};

// Config for the line chart
const lineChartConfig = {
  type: "line",
  data: lineChartData,
  options: {
    scales: {
      y: {
        beginAtZero: false,
        grid: {
          color: "#3a3b48",
        },
        ticks: {
          color: "#ffffff",
        },
      },
      x: {
        grid: {
          color: "#3a3b48",
        },
        ticks: {
          color: "#ffffff",
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
    elements: {
      point: {
        radius: 0,
      },
    },
  },
};

// Create the line chart
const lineChart = new Chart(lineCanvas, lineChartConfig);

// Sample data for the pie chart
const pieChartData = {
  labels: ["BTC", "ETH", "XRP"],
  datasets: [
    {
      data: [50, 30, 20],
      backgroundColor: ["#4673FB", "#36A2EB", "#FFCE56"],
      hoverOffset: 4,
    },
  ],
};

// Config for the pie chart
const pieChartConfig = {
  type: "pie",
  data: pieChartData,
  options: {
    plugins: {
      legend: {
        labels: {
          color: "#ffffff",
        },
      },
    },
  },
};

// Create the pie chart
const pieChart = new Chart(pieCanvas, pieChartConfig);
