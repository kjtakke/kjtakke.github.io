function getPivotArray(dataArray, rowIndex, colIndex, dataIndex) {
            //Code from https://techbrij.com
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
