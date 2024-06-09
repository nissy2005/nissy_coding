let salesData;
let maxSales; // Variable to store the maximum sales value

function preload() {
  salesData = loadTable('sales_data.csv', 'csv', 'header');
}

function setup() {
  createCanvas(800, 500); // Create a larger canvas to accommodate more data
  colorMode(HSB, 360, 100, 100, 100); // Set color mode to HSB
  background(0, 0, 100); // Set background color
  noStroke(); // No outline for rectangles

  // Add the heading
  textAlign(CENTER);
  textSize(24);
  fill(0);
  text("Monthly Sales for the Year 2024", width / 2, 40);

  let months = salesData.getColumn('Month'); // Get the 'Month' column from the CSV
  let sales = salesData.getColumn('Sales'); // Get the 'Sales' column from the CSV
  maxSales = max(sales.map(Number)); // Find the maximum sales value

  // Loop through each value in the sales array
  for (let i = 0; i < sales.length; i++) {
    let month = months[i]; // Get the current month
    let salesValue = parseFloat(sales[i]); // Get the current sales value and convert it to a number
    let x = map(i, 0, sales.length, 50, width - 50); // Calculate x position
    let w = (width - 100) / sales.length; // Calculate width of each bar
    let h = map(salesValue, 0, maxSales, 0, height - 100); // Calculate height of current bar
    let y = height - h - 50; // Calculate y position of current bar
    let c = map(salesValue, 0, maxSales, 0, 360); // Map color based on sales value

    fill(c, 100, 100); // Set fill color using HSB color mode
    rect(x, y, w, h); // Draw the rectangle representing the current sales value
    
    // Display the month below each bar
    textAlign(CENTER, CENTER);
    textSize(12);
    fill(0);
    text(month, x + w / 2, height - 30);

    // Display the sales value on top of each bar
    fill(0);
    textSize(14);
    if (h > 20) { // Check if the bar height is tall enough for the text
      text(salesValue, x + w / 2, y - 10); // Display the value above the bar
    } else {
      text(salesValue, x + w / 2, y + h + 15); // Display the value below the bar if it's too short
    }
  }
}
