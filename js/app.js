      // Initialize the echarts instance based on the prepared dom
      var myChart = echarts.init(document.getElementById('main2'));

      // Specify the configuration items and data for the chart
      var option = {
        title: {
          text: 'ECharts Getting Started Example',
          left: "left",
          top: "0px"
        },
        tooltip: {},
        legend: {
          data: ['sales']
        },
        xAxis: {
          data: ['Shirts', 'Cardigans', 'Chiffons', 'Pants', 'Heels', 'Socks']
        },
        yAxis: {},
        series: [
          {
            name: 'sales',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      };

      // Display the chart using the configuration items and data just specified.
      myChart.setOption(option);
  