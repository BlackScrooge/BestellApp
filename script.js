let basket = [];

const norm = s => String(s ?? "").trim().toLowerCase();
const find = name => basket.findIndex(i => norm(i.name) === norm(name));
const sync  = () => { saveBasket(); renderBasket(); };

function addMeal(name, price) {
  const i = find(name);
  i > -1 ? basket[i].quantity++ : basket.push({ name, price: +price, quantity: 1 });
  sync();
}

function removeMeal(name) {
  const i = find(name);
  if (i < 0) return;
  basket[i].quantity > 1 ? basket[i].quantity-- : basket.splice(i, 1);
  sync();
}

function deleteMeal(name) {
  const prev = basket.length;
  basket = basket.filter(i => norm(i.name) !== norm(name));
  if (basket.length !== prev) sync();
}

const renderBasket = () => {
  const list = document.querySelector("#basket"), total = document.querySelector("#total");
  if (!list || !total) return;
  let sum = 0, count = 0;
  list.innerHTML = basket.reduce((html, i) => {
    sum += i.price * i.quantity; count += i.quantity;
    return html + `<li>${i.name} (${i.quantity}x) - ${(i.price*i.quantity).toFixed(2)} €
      <button data-act="minus" data-name="${i.name}">-</button>
      <button data-act="plus"  data-name="${i.name}">+</button>
      <button data-act="del"   data-name="${i.name}">X</button>
    </li>`;
  }, "");
  total.textContent = `Summe: ${sum.toFixed(2)} €`;
  updateCartCount(count);
};

function updateCartCount(n) {
  const item = document.getElementById("cart-count");
  if (item) item.textContent = n;
}

function saveBasket() { localStorage.setItem("basket", JSON.stringify(basket)); }
function loadBasket() {
  try { basket = JSON.parse(localStorage.getItem("basket")) || []; }
  catch { basket = []; }
  renderBasket();
}

document.addEventListener("DOMContentLoaded", () => {
  loadBasket();
  const list = document.getElementById("basket");
  list?.addEventListener("click", item => {
    const basket = item.target.closest("button");
    if (!basket) return;
    const name = basket.dataset.name;
    if (basket.dataset.act === "minus") removeMeal(name);
    if (basket.dataset.act === "plus") addMeal(name);
    if (basket.dataset.act === "del")   deleteMeal(name);
  });
});
