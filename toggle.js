function toggleBasket() {
  const wrap = document.getElementById("basket_wrapper");

  if (wrap.style.display === "none" || wrap.style.display === "") {
    wrap.style.display = "block"; // einblenden
    wrap.style.display = "block"; // einblenden
  } else {
    wrap.style.display = "none"; // ausblenden
  }
}

function closeBasket() {
  const wrap = document.getElementById("basket_wrapper");

  if (wrap.style.display === "none" || wrap.style.display === "") {
    wrap.style.display = "block"; // Vollbild anzeigen
  } else {
    wrap.style.display = "none";  // Ausblenden
  }
}
