//Looped through each object in the array
function buildTable(data){
    //clear out any existing data
   tbody.html(""); 
   //Next, loop through each object in the data Appended a row and cells for each value in the row
   data.forEach((dataRow) => { 
    //append a row to the table body
    let row = tbody.append("tr");
    //Loop through each field in the dataRow and add each value as a table cell(td)
    Object.values(dataRow).forEach((val) => {
        //Added each value from the object into a cell
        let cell = row.append("td");
        cell.text(val);
        }
    );
   });

//create a button to filter the table by date
function handleClick(){
    //look for date values and grab info and hold in the date variable.
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;
    //check to see if a date was entered and filter the data using that date.
    if (date){
        //apply 'filter' method that will match the datetime value to the filtered date value
        filteredData = filteredData.filter(row => row.datetime === date);
    }
//rebuild the table using the filtered data @note if no date was entered, then filteredData will just be the original tableData.
    buildTable(filteredData);
}
//Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);
//buildTable(tableData)
buildTable(tableData);
