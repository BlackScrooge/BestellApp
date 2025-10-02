function orderBasket() {
  if (!basket.length) {
    showOverlay("Dein Warenkorb ist leer.");
    return;
  }
  
  basket = [];
  saveBasket();
  renderBasket();

  showOverlay("Danke! Deine Testbestellung wurde erfasst.");
}

function showOverlay(message) {
  const overlay = document.getElementById('orderOverlay');
  overlay.querySelector("p").textContent = message;
  overlay.style.display = "flex"; 
}

function closeOverlay() {
  document.getElementById('orderOverlay').style.display = "none";
}