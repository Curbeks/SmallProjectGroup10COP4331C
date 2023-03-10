var idNum;
var dataTable;

function displayData(dataFromTable)
{
        dataTable =  $('#dataTable').DataTable({
        columnDefs: [{
                "defaultContent": "-",
                "targets": "_all"
                 }],
        columns: [
                { 'data': 'firstName' },
                { 'data': 'lastName' },
                { 'data': 'phone' },
                { 'data': 'email' },
               ],
        data: dataFromTable, // Populates with data from table
        "bLengthChange": false, // Hides changing # of entries shown
        "sDom": 'lrtip', // Hides default search box
        "bInfo": false }); // Hides # of entries currently shown
      
        // Allows for clicking on rows
        dataTable = $('#dataTable').DataTable();
        dataTable.on('click', 'tbody tr', function() {
        console.log('API row values : ', dataTable.row(this).data());
        idNum = dataTable.row(this).data().ID;
      })
      // Allows for use of our own search input field
      $("#searchContact").keyup(function() {
          dataTable.fnFilter(this.value);
      });
}