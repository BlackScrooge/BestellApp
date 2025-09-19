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
        "name": "20 Garlic Pepper Chicken Nuggets",
        "price": 12.99,
        "descripton": "Unsere 20 Garlic Pepper Chicken Nuggets bringen knusprigen Genuss im großen Stil: zartes Hähnchenfilet, umhüllt von einer goldbraunen Panade mit feiner Knoblauch-Pfeffer-Würzung. Außen herrlich crunchy, innen saftig und aromatisch – perfekt zum Teilen oder selbst genießen.",
    },
     {
        "name": "Hamburger Royal Cheese",
        "price": 7.79,
        "descripton": "Der Hamburger Royal Cheese steht für puren Burger-Genuss: 100% saftiges Rindfleisch, frisch vom Grill, belegt mit zwei Scheiben zartschmelzendem Käse, knackigen Zwiebeln, Gurken und würziger Sauce. Eingebettet in einem goldbraun gerösteten Sesam-Bun wird jeder Biss zu einem königlichen Geschmackserlebnis",
    },
     {
        "name": "Cheeseburger",
        "price": 2.89,
        "descripton": "Jetzt noch leckerer, saftiger und voller Genuss: der heißgeliebte Cheeseburger mit dem besonderen Etwas! Zartschmelzender Käse, saftiges Rindfleisch, frische Zwiebeln, knackige Gurken, würziger Ketchup, feiner Senf und ein extra weiches Bun, eine Kombination, die einfach glücklich macht.",

    },
     {
        "name": "Hamburger Bacon",
        "price": 2.49,
         "descripton": "Ein echter Klassiker: Unser Hamburger überzeugt mit einem saftigen Rindfleisch-Patty, frisch gegrillt und perfekt gewürzt. Dazu kommen knackiger Salat, aromatische Tomaten, frische Zwiebeln, Gurken und unsere spezielle Burgersoße, eingebettet in einem goldbraun gerösteten, fluffigen Bun. Einfach purer Genuss in jedem Biss",
    },
]

document.getElementById("meal_name").textContent = JSON.stringify(myDishes, null, 2);