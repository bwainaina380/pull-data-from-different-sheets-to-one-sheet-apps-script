function getSheetNames() {
    var sheetArray = new Array();
    var sheets = SpreadsheetApp.getActiveSpreadsheet().getSheets();
  
    for (var i=0; i<sheets.length; i++) {
      sheetArray.push(sheets[i].getName());
    }
  
    return sheetArray;
  }