function getPivotArray(dataArray, rowIndex, colIndex, dataIndex) {
			var result = {}, ret = [];
            var newCols = [];
            for (var i = 0; i < dataArray.length; i++) {

                if (!result[dataArray[i][rowIndex]]) {
                    result[dataArray[i][rowIndex]] = {};
                }
                result[dataArray[i][rowIndex]][dataArray[i][colIndex]] = dataArray[i][dataIndex];

                //To get column names
                if (newCols.indexOf(dataArray[i][colIndex]) == -1) {
                    newCols.push(dataArray[i][colIndex]);
                }
            }

            newCols.sort();
            var item = [];

            //Add Header Row
            item.push('Item');
            item.push.apply(item, newCols);
            ret.push(item);

            //Add content 
            for (var key in result) {
                item = [];
                item.push(key);
                for (var i = 0; i < newCols.length; i++) {
                    item.push(result[key][newCols[i]] || "-");
                }
                ret.push(item);
            }
            return ret;
        }

function arrayToHTMLTable(myArray) {
            var result = "<table border='1' cellpadding='7' cellspacing='0'>";
            for (var i = 0; i < myArray.length; i++) {
                result += "<tr>";
                for (var j = 0; j < myArray[i].length; j++) {
                    result += "<td>" + myArray[i][j] + "</td>";
                }
                result += "</tr>";
            }
            result += "</table>";

            return result;
        }

function csvToArray(csv_url){
  var csvAray = []
  $.ajax({
    url:csv_url,
    dataType:"text",
    success:function(data) {
      var csvData = data.split(/\r?\n|\r/)
      for(var i = 0; i < csvData.length; i++){
        let tempArray = csvData[i].split(",")
        csvAray.push(tempArray)
      }
      //document.getElementById("txt").innerHTML = csvAray[0][0]
    }
  })
  return csvAray
}


function arrayToDictionary(arr) {
  
  //Headers
  let headers = []
  for(var i=0;i<arr[0].length;i++){
    headers.push(arr[0][i])
  }

  //Body
  let body = []
  for(var i=1;i<arr.length;i++){
    let dictAry = []
    for(var j=0;j<arr[0].length;j++){
      dictAry.push(
        [
          headers[j], 
          arr[i][j]
        ]
      )
    }
    
    const obj = Object.fromEntries(
      dictAry.map(
       ([k, v]) => [k, v])
       )
 
    body.push(obj)
  }
  return body
};
