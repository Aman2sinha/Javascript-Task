function addRow(tableID) {
  var table = document.getElementById(tableID);
  var rowCount = table.rows.length;
  var row = table.insertRow(rowCount);
  var colCount = table.rows[0].cells.length;
                                     
  for(var i=0; i<colCount; i++) {     //use loop for manage Counter //
      var newcell = row.insertCell(i);
      if(i==1){
        newcell.innerHTML = (rowCount+1)}
      else{
         newcell.innerHTML = table.rows[0].cells[i].innerHTML;
         }
      switch(newcell.childNodes[0].type) {

          case "checkbox":
                 newcell.childNodes[0].checked = false;
                 break;
        }
      }
    }

function regroup(i,rc,ti)
{
for(j = (i+1);j<rc;j++)
{
  document.getElementById(ti).rows[j].cells[1].innerHTML = j+1;
}
}
// Deleted row 
function deleteRow(tableID) {
  try {
  var table = document.getElementById(tableID);
  var rowCount = table.rows.length;
  var current = '';
  for(var i=0; i<rowCount; i++) {
      var row = table.rows[i];
      var chkbox = row.cells[0].childNodes[0];
     if(null != chkbox && true == chkbox.checked) {
          if(rowCount <= 1) {
              alert("Cannot delete all the rows.");
              break;
          }
        
          table.deleteRow(i);
          rowCount--;
          i--;
        regroup(i,rowCount,tableID);
      }
  }
  } catch(e) {
      alert(e);
  }
}