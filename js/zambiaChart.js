var zambiaChart = $(function () {
$('#zambiaChart').highcharts({
  chart: {
      type: 'column'
  },
  title: {
      text: 'Sustainable Water per Country'
  },
  subtitle: {
      text: 'In the Zambezi Basin'
  },
  xAxis: {
      categories: [
          'Angola',
          'Botswana',
          'Malawi',
          'Mozambique',
          'Namibia',
          'Tanzania',
          'Zambia',
          'Zimbabwe'

      ]
  },
  yAxis: {
      min: 0,
      title: {
          text: 'Percent'
      }
  },
  tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
          '<td style="padding:0"><b>{point.y} %</b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true
  },
  plotOptions: {
      column: {
          pointPadding: 0.2,
          borderWidth: 0
      }
  },
  series: [{
      name: 'Clean Drinking Water: Urban',
      data: [34,100,95,81,100,90,88,100],
      color: '#000080'

  }, {
      name: 'Clean Drinking Water: Rural',
      data: [40,90,44,41,67,57,48,73],
      color: '#67e6ec'

  }, {
      name: 'Access to Sanitation: Urban',
      data: [70,88,96,68,96,99,99,71],
      color: '#3b5323'

  }, {
      name: 'Access to Sanitation: Rural',
      data: [30,43,70,26,17,86,64,57],
      color:'#699864'

  }]
});
});
