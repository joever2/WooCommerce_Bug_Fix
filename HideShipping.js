

var Different_Address = document.getElementById("ship-to-different-address-checkbox");

Different_Address.onchange = function(e) {
  if(Different_Address.checked === true) {
    document.getElementsByClassName("shipping_address")[0].style.display = "block";
  } else {
    document.getElementsByClassName("shipping_address")[0].style.display = "none";
  }
}
