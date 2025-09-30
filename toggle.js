document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("basket_icon");
  const basket = document.getElementById("basket");

  btn.addEventListener("click", () => {
    basket.style.display = basket.style.display === "none" ? "block" : "none";
  });
});