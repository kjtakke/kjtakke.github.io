function loadProducts(){
  var x = document.getElementById('productList')
  var i

for (i = 0; i < productsItems.length; i++){
    x.innerHTML += `
    <div class="item">
      <h2 calss="item-title2"><a href="${productsItems[i].url}" target="none" class="productLinks">${productsItems[i].name}</a> - $${productsItems[i].price.toFixed(2)}</h2>
      <h4 calss="item-title">${productsItems[i].category}</h4>

      <table>
        <tr>
        <td align="top" style="width:250px">
          <img src="${productsItems[i].image}" style="width:250px">
        </td>
        <td align="top" style="text-align:left;vertical-align: text-top;">
          <p class="alt-text"  style="text-align:left;width=80%;padding-left:25px;">${productsItems[i].description}</p>
        </td>
        </tr>
      </table>
    </div>
    `
  }






}
document.addEventListener('DOMContentLoaded', function() {
    loadProducts();
}, false);
