function toggleBasket() {
  const wrap = document.getElementById("basket_wrapper");

  if (wrap.style.display === "none" || wrap.style.display === "") {
    wrap.style.display = "block"; // show
    wrap.style.display = "block"; // show
  } else {
    wrap.style.display = "none"; // hide
  }
}

function closeBasket() {
  const wrap = document.getElementById("basket_wrapper");

  if (wrap.style.display === "none" || wrap.style.display === "") {
    wrap.style.display = "block"; // show fullscreen
  } else {
    wrap.style.display = "none";  // hide
  }
}
