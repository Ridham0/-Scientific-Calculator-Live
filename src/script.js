function clearDisplay() {
  document.getElementById("display").value = "";
}

function deleteLast() {
  let display = document.getElementById("display");
  display.value = display.value.slice(0, -1);
}

function appendNumber(number) {
  let display = document.getElementById("display");
  display.value += number;
}

function appendOperator(operator) {
  let display = document.getElementById("display");
  display.value += operator;
}

function calculate() {
  let display = document.getElementById("display").value;
  
  // Replace power operator (^) with JavaScript power function
  display = display.replace(/\^/g, "**");

  try {
      let result = eval(display);
      document.getElementById("display").value = result;
  } catch (error) {
      document.getElementById("display").value = "Error!";
  }
}
