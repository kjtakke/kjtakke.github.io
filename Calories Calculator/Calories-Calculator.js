//Variables
selections = new Array
//https://www.calories.info/food/vegetables
//itemSelect
//selectedItems
var itm = document.getElementById('itemSelect').innerHTML
var sitm = document.getElementById('selectedItems')


function loadItems(){
  for (i = 0; i < itemsToAdd.length; i++){
    let txt = ""
    document.getElementById('itemSelect').innerHTML +=  `
      <option>${itemsToAdd[i][0]}</option>
    `
  }

}

//var res = str.replace("Microsoft", "W3Schools");

function addToList(){
  var txt
  var cmp
  for (i = 0; i < itemsToAdd.length; i++){
    txt = document.getElementById('itemSelect').innerHTML;
    txt = txt.replace(/<option>/g, "");
    txt = txt.replace(/option/g, "");
    txt = txt.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g,'');
    txt = txt.trim(txt);
    cmp = itemsToAdd[i][0]
    console.log(txt + " : " + cmp)
    
    if (txt == cmp){
      document.getElementById('selectedItems').innerHTML +=`
        <tr>
          <td>${itemsToAdd[i][0]}</td>
        </tr>
      `
      selections.push(itemsToAdd[i][0])
    }
  }
}

function clearList(){
  document.getElementById('selectedItems').innerHTML =""
}
function loadPageData(){
loadItems()

}
