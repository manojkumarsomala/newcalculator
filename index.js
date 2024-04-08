const display = document.getElementById("display");

function appendDisplay(input) {
  display.value += input;
}
function clearDisplay() {
  display.value = null;
}
function caluculate() {
  display.value = eval(display.value);
}

function clearOneItem() {
  let newvalue = display.value;

  console.log(typeof newvalue);

  newvalue = newvalue.slice(0, -1);
  console.log(newvalue);

  display.value = newvalue;
}
