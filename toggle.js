function toggleBasket() {
  const wrap = document.getElementById("basket_wrapper");

  if (wrap.style.display === "none" || wrap.style.display === "") {
    wrap.style.display = "block"; 
    wrap.style.display = "block"; 
  } else {
    wrap.style.display = "none"; 
  }
}

function closeBasket() {
  const wrap = document.getElementById("basket_wrapper");

  if (wrap.style.display === "none" || wrap.style.display === "") {
    wrap.style.display = "block"; 
  } else {
    wrap.style.display = "none"; 
  }
}

