function getSheetNames() {
  var sheetArray = new Array();
  var sheets = SpreadsheetApp.getActiveSpreadsheet().getSheets();

  for (var i = 0; i < sheets.length; i++) {
    sheetArray.push(sheets[i].getName());
  }

  return sheetArray;
}

function collectKeywordsFromMonthlySheets() {
  var keywordList = new Array();
  var sheetNames = getSheetNames();

  for (var i = 0; i < sheetNames.length; i++) {
    if (sheetNames[i] === "Keyword Tracking Sheet") {
      sheetNames.splice(i, 1);
    }
  }

  for (var i = 0; i < sheetNames.length; i++) {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(
      sheetNames[i]
    );
    keywordList.push(sheet.getRange("A2:A").getValues());
  }

  allKeywords = [].concat.apply([], keywordList);

  return allKeywords;
}
