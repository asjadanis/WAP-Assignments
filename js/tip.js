function calcTip() {
  const subTotal = parseFloat(document.getElementById("subtotal").value);
  const tip = parseFloat(document.getElementById("tip").value);
  const total = (subTotal / 100) * tip;
  const totalElement = document.getElementById("total");
  totalElement.innerHTML = `$${total.toFixed(2)}`;
}
