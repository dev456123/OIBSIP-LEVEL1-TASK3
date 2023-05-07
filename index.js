
const tempi = document.getElementById("temp");
const units = document.getElementById("unit");
const cB = document.getElementById("convert");
const rD = document.getElementById("output");

function CeToFa(tC) {
  const tF = (tC * 9/5) + 32;
  return tF;
}
function FaToCe(tF) {
  const tC = (tF - 32) * 5/9;
  return tC;
}
function displayResult(temp, unit) {
  let cT = 0;
  if (unit === "Celsius") {
    cT = CeToFa(temp).toFixed(2) + " °F";
  } 
  else {
    cT = FaToCe(temp).toFixed(2) + " °C";
  }
  rD.innerHTML = "Converted temperature will be: " + cT;
}
cB.addEventListener("click", function() {
  const temp = parseFloat(tempi.value);
  if (isNaN(temp)) {
    rD.innerHTML = "Enter a valid temperature";
    return;
  }
  const unit = units.value;
  displayResult(temp, unit);
});
