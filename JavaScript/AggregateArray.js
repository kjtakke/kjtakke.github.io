
function aggArray(data,index,values){
/*This function returns an aggergated Array.

data: 2D Array of text or numbers
index: index column (number >= 0)
values: value columns ("2,3,4")
return: 2D Array

var data = [
  ["Name", "Score", "Time"],
  ["Kris", 20, 100],
  ["Jon", 20, 100],
  ["Ben", 20, 100],
  ["Jon", 20, 100],
  ["Kris", 20, 100]
]

var data = aggArray(data,0,"2,3")

console.log(data)

data = [
  ["Name", "Score", "Time"],
  ["Kris", 40, 200],
  ["Jon", 40, 200],
  ["Ben", 20, 100]
]

*/

  var output = []
  var I = index
  var output = []

  //values to array
  try {
    let v = values.split(",")
  }catch(err) {
    let v = [values]
  }

  //Create Headers
  let header = []
  header.push(data[0][I]
  for(var i=0;i<v.length;i++){
    let H = v[i]
    header.push(data[H])
  }

  //Add headers to output array
  output.push(header)

  //Index Unique Values iV
  var iVal = []
  for(var i=1;i<data.length;i++){
    iVal.push(data[i][I])
  };

  //Unique Index to array
  iVal = jQuery.unique(iVal)

  //Loop through unique index array
  for(var i=0;i<iVal.length;i++){
    var rVal = []

    //Develop and fill Row Array
    rVal.push(iVal[i])
    for(var j=1;j<v.lenght;j++){
      rVal.push(0)
    };

    //Aggregate values
    for(var j=1;j<data.length;j++){
    
      //if index = value's index
      if(data[j][I]==iVal[i]){

        //Add(+) to each value
        for(var k=0;j<v.length;j++){
          rVal[j] += v[j]
        }
      }
    }

    //Add to output array
    output.push(rVal)

  }

  //return an 2D array
  return output

};
