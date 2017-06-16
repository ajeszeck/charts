// Load the Visualization API and the corechart package.
google.charts.load('current', {'packages':['corechart']});

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawChart);

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawChart() {

  // Create the data table.
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Topping'); //adds column with a string of "topping"
  data.addColumn('number', 'Number of Fans'); //adds column with a number for slice.
  data.addRows([//each item in array lists a topping and a slice number.
    //each row should have the same number of elements as columns you have added.
    ['Tomato', 6],
    ['Pepperoni', 7],
    ['Peppers', 4],
    ['Pineapple', 6],
    ['Fried Shrimp', 1]
  ]);

  // Set chart options
  var options = {'title':'Favorite Toppings in the HTML 300 Class',
                 'width':400,
                 'height':300};

  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
  chart.draw(data, options);
}
