var csvAray = []
$(document).ready(function(){
  $.ajax({
   url:"data.csv",
   dataType:"text",
   success:function(data)
   {
    var employee_data = data.split(/\r?\n|\r/);

    //Array
    for(var i = 0; i < employee_data.length; i++){
      let tempArray = employee_data[i].split(",")
      csvAray.push(tempArray)
    }
    document.getElementById("txt").innerHTML = csvAray[0][0];
  }
});
});
