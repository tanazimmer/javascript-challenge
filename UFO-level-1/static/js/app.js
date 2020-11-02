//call on data
var tabledata = data;
console.log(tabledata)

// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the UFO data from data.js
console.log(data);

// // Step 1: Loop Through `data` and console.log each object
data.forEach(function(UFOsightings) {
    console.log(UFOsightings);
});

// // Step 2:  Use d3 to append one table row `tr` for each object
// // Don't worry about adding cells or text yet, just try appending the `tr` elements.
data.forEach(function(UFOsightings) {
    console.log(UFOsightings);
    var row = tbody.append("tr");
});

// // Step 3:  Use `Object.entries` to console.log each value

//   Object.entries(weatherReport).forEach(function([key, value]) {
//     console.log(key, value);
//   });
// });

// // Step 4: Use d3 to append 1 cell per weather report value (weekday, date, high, low)
// data.forEach(function(weatherReport) {
//   console.log(weatherReport);
//   var row = tbody.append("tr");

//   Object.entries(weatherReport).forEach(function([key, value]) {
//     console.log(key, value);
//     // Append a cell to the row for each value
//     // in the weather report object
//     var cell = row.append("td");
//   });
// });

// // Step 5: Use d3 to update each cell's text with
// // weather report values (weekday, date, high, low)
// data.forEach(function(weatherReport) {
//   console.log(weatherReport);
//   var row = tbody.append("tr");
//   Object.entries(weatherReport).forEach(function([key, value]) {
//     console.log(key, value);
//     // Append a cell to the row for each value
//     // in the weather report object
//     var cell = row.append("td");
//     cell.text(value);
//   });
// });