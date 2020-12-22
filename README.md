# javascript-challenge
## Javascript, HTML, CSS

Level 1: Automatic Table and Date Search (Required)


Create a basic HTML web page <UFO-level-1/index.html>

Using the UFO dataset <static/js/data.js> provided in the form of an array of JavaScript objects, write code that appends a table to your web page and then adds new rows of data for each UFO sighting. <static/js/app.js>
```
tableData.forEach((report) => {
    console.log(report);
    var row = tbody.append('tr');

    Object.entries(report).forEach(([key, value]) => {
        console.log(key, value);
        var cell = row.append('td');
        cell.text(value);
    });
    });
 ```


Use a date form in your HTML document and write JavaScript code that will listen for events and search through the date/time column to find rows that match user input.
```
// Filter reports
var filteredData = tableData.filter(record => record.datetime === dateTime);
console.log(filteredData);

// Display the filtered data
filteredData.forEach((report) => {
    var row = tbody.append('tr');

    Object.entries(report).forEach(([key, value]) => {
        console.log(key, value);
        var cell = row.append('td');
        cell.text(value);
    });
```
