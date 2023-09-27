let ctx = document.getElementById("myChart").getContext("2d");

// Define your chart data
let data = {
  labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri"],
  datasets: [
    {
      label: "Monthly Sales",
      borderColor: "#FF5733",
      data: [150, 250, 300, 100, 200, 500],
    },
  ],
};

// Create and render the chart
let myChart = new Chart(ctx, {
  type: "line",
  data: data,
  options: {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
    scales: {
      x: {
        grid: {
          display: false, // Hide X-axis grid lines
        },
      },
      y: {
        grid: {
          display: true, // Show Y-axis grid lines
        },
      },
    },
  },
});