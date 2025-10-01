function orderBasket() {
  if (basket.length === 0) {
    alert("Dein Warenkorb ist leer.");
  } else {
    basket = [];       // Warenkorb leeren
    renderBasket();    // neu rendern
    alert("Testbestellung erfolgreich durchgeführt!");
  }
}

