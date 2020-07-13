//Variables
selections = new Array
calories = new Array
var calCount = 0
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


function updateCalCount(){
  var calCount = 0
  for (i = 0; i < itemsToAdd.length; i++){
    for (j = 0; j < itemsToAdd.length; j++){
      if (itemsToAdd[i][0] == selections[j]){
        calCount += calories[j]
      }
    }
  }
}

function addToList(){

  if (document.getElementById('grams').value == 0 || document.getElementById('servings').value == 0 ) {alert("Please input the quantity of grams and servings.")
} else{
    document.getElementById("servings").disabled = true;
    var txt
    var cmp
    var qty = document.getElementById('grams').value
    var cal
    var gms
    var serv = document.getElementById('servings').value;
    var totCal
    for (i = 0; i < itemsToAdd.length; i++){
      txt = document.getElementById('itemSelect').value;
      cmp = itemsToAdd[i][0]


      if (txt == cmp){
        cal = itemsToAdd[i][3]
        gms = itemsToAdd[i][2]
        totCal = (cal/gms)*qty/serv
        document.getElementById('selectedItems').innerHTML +=`
          <tr>
            <td>${itemsToAdd[i][0]}</td>
            <td>${totCal.toFixed(1)}</td>
          </tr>
        `
        calCount += totCal
        document.getElementById('caloriesCount').innerHTML = `<b>Calories: </b>${calCount.toFixed(1)}`
        selections.push(itemsToAdd[i][0])
        selections.push(totCal)
        document.getElementById('grams').value = ""
      }
    }
  }
}

function clearList(){
  document.getElementById('selectedItems').innerHTML = "<tr><th>Food</th><th>Calories</th></tr>"
  calCount = 0
  document.getElementById("servings").disabled = false;
  document.getElementById("caloriesCount").innerHTML = `<b>Calories:</b> 0`

}

function itemDataToPage(){
  var cal
  var gms
  var totCal
  for (i = 0; i < itemsToAdd.length; i++){
    cal = itemsToAdd[i][3]
    gms = itemsToAdd[i][2]
    totCal = (cal/gms) * 100
    document.getElementById('itemData').innerHTML +=`
    <div class="item" style="width:380px;margin-top:-25px">
      <h5><b>Food:</b> ${itemsToAdd[i][0]}</h5>
      <h5><b>Calories:</b> ${totCal.toFixed(0)} per 100g</h5>
    </div>
    `
  }
}

function loadPageData(){
loadItems()
itemDataToPage()
document.body.style.zoom=2.0;this.blur();
}
