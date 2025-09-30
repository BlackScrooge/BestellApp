let myDishes = [
    {
        "name": "Habanero Ranch",
        "price": 7.49,
        "descripton": "Der Habanero Ranch sorgt für würzigen Feuerzauber: Knuspriges Hähnchenfilet oder saftiges Rindfleisch, verfeinert mit cremiger Ranch-Sauce und einem feurigen Habanero-Kick. Dazu frischer Salat, Tomaten und ein fluffiger Bun – die perfekte Mischung aus cremig und scharf für alle, die es intensiv lieben.",
    },
     {
        "name": "Philly Cheese Stack",
        "price": 8.99,
        "descripton": "Der Philly Cheese Stack bringt den legendären Streetfood-Klassiker direkt auf deinen Teller: Saftig gegrilltes Rindfleisch, geschmolzener Käse in reichlicher Portion, gebratene Zwiebeln und Paprika – alles kunstvoll geschichtet in einem soften Bun. Ein herzhafter Genuss, der satt macht und Lust auf mehr weckt.",
    },
     {
        "name": "Chicken Samurai",
        "price": 7.49,
        "descripton": "Der Chicken Samurai vereint feurigen Geschmack mit zartem Biss: Knusprig paniertes Hähnchenfilet trifft auf eine würzig-scharfe Samurai-Sauce, frischen Salat, knackige Gurken und einen soften Bun. Ein Burger, der mit jedem Bissen Mut und Geschmack beweist.",
    },
     {
        "name": "20 Chicken Nuggets",
        "price": 12.99,
        "descripton": "Unsere 20 Chicken Nuggets bringen knusprigen Genuss im großen Stil: zartes Hähnchenfilet, umhüllt von einer goldbraunen Panade mit feiner Knoblauch-Pfeffer-Würzung. Außen herrlich crunchy, innen saftig und aromatisch – perfekt zum Teilen oder selbst genießen.",
    },
     {
        "name": "Hamburger Royal Cheese",
        "price": 7.79,
        "descripton": "Der Hamburger Royal Cheese steht für puren Burger-Genuss: 100% saftiges Rindfleisch, frisch vom Grill, belegt mit zwei Scheiben zartschmelzendem Käse, knackigen Zwiebeln, Gurken und würziger Sauce. Eingebettet in einem goldbraun gerösteten Sesam-Bun wird jeder Biss zu einem königlichen Geschmackserlebnis.",
    },
     {
        "name": "Cheeseburger",
        "price": 2.89,
        "descripton": "Jetzt noch leckerer, saftiger und voller Genuss: der heißgeliebte Cheeseburger mit dem besonderen Etwas! Zartschmelzender Käse, saftiges Rindfleisch, frische Zwiebeln, knackige Gurken, würziger Ketchup, feiner Senf und ein extra weiches Bun, eine Kombination, die einfach glücklich macht.",

    },
     {
        "name": "Hamburger Bacon",
        "price": 2.49,
         "descripton": "Ein echter Klassiker: Unser Hamburger überzeugt mit einem saftigen Rindfleisch-Patty, frisch gegrillt und perfekt gewürzt. Dazu kommen knackiger Salat, aromatische Tomaten, frische Zwiebeln, Gurken und unsere spezielle Burgersoße, eingebettet in einem goldbraun gerösteten, fluffigen Bun. Einfach purer Genuss in jedem Biss.",
    },
]

     // Warenkorb als Array mit Mengen
    let basket = [];

    // Gericht hinzufügen oder Menge erhöhen
    function addMeal(product, price) {
      const index = basket.findIndex(item => item.name === product);
      if (index !== -1) {
        basket[index].quantity++;
      } else {
        basket.push({ name: product, price: Number(price), quantity: 1 });
      }
      saveBasket();
      renderBasket();
    }

    // Gericht entfernen (Menge reduzieren oder komplett löschen)
    function removeMeal(product) {
      const index = basket.findIndex(item => item.name === product);
      if (index !== -1) {
        if (basket[index].quantity > 1) {
          basket[index].quantity--;
        } else {
          basket.splice(index, 1);
        }
        saveBasket();
        renderBasket();
      }
    }

    // Warenkorb anzeigen + Summe berechnen
    function renderBasket() {
      const basketList = document.getElementById("basket");
      const totalEl = document.getElementById("total");
      basketList.innerHTML = "";

      let sum = 0;
      let totalItems = 0;

      // Hilfsfunktion für verlässliche Namensvergleiche
      const norm = s => String(s).trim().toLowerCase();

      // ALLE Vorkommen eines Produkts entfernen (unabhängig von quantity)
      function deleteMeal(product) {
        const key = norm(product);
        const prevLen = basket.length;

        // Entfernt jeden Eintrag mit diesem Produktnamen
        basket = basket.filter(item => norm(item.name) !== key);

        // Optionaler Guard: nur speichern/rendern, wenn sich wirklich etwas geändert hat
        if (basket.length !== prevLen) {
          saveBasket();
          renderBasket();
        }
      }

     basket.forEach(item => {
      const li = document.createElement("li");
      li.textContent = `${item.name} (${item.quantity}x) - ${(item.price * item.quantity).toFixed(2)} €`;

      // Button für -1
      const btnRemove = document.createElement("button");
      btnRemove.textContent = "-";
      btnRemove.onclick = () => removeMeal(item.name);
      li.appendChild(btnRemove);

      // Button für „alles entfernen“
      const btnDelete = document.createElement("button");
      btnDelete.textContent = "X";
      btnDelete.onclick = () => deleteMeal(item.name);
      li.appendChild(btnDelete);

      basketList.appendChild(li);

      sum += item.price * item.quantity;
      totalItems += item.quantity;
     });

      totalEl.textContent = "Summe: " + sum.toFixed(2) + " €";

      // Anzahl der Items im Warenkorb (gesamt)
      updateCartCount(totalItems);
    }

    // Anzahl der Items im Warenkorb anzeigen
    function updateCartCount(count) {
      const countEl = document.getElementById("cart-count");
      countEl.textContent = count;
    }

    // Warenkorb speichern
    function saveBasket() {
      localStorage.setItem("basket", JSON.stringify(basket));
    }

    // Warenkorb laden
    function loadBasket() {
      try {
        const stored = localStorage.getItem("basket");
        basket = stored ? JSON.parse(stored) : [];
      } catch (e) {
        basket = [];
        console.error("Konnte basket nicht laden:", e);
      }
      renderBasket();
    }

    document.addEventListener("DOMContentLoaded", loadBasket);


