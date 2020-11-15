import addItem from "./addItem";

const appendMenu = (container) => {
    const menuContainer = document.createElement("div");
    menuContainer.id = "menu";

    const elements = []
    let c;

    c = document.createElement("h2");
    c.textContent = "Menu";
    elements.push(c);

    c = document.createElement("h3");
    c.textContent = "Starters";
    elements.push(c);

    const starters = {
        "Platter of cured meats": "16",
        "Platter of cheeses": "13",
        "Small salad": "8"
    };

    for(const [key, value] of Object.entries(starters)) {
        c = addItem("dish", key, value);
        elements.push(c);
    }

    c = document.createElement("h3");
    c.textContent = "Fondues";
    elements.push(c);

    const fondues = {
        "Half gruyère, half vacherin": "24",
        "With boletes": "27",
        "With tomatoes": "27",
        "Full vacherin": "24"
    }

    for(const [key, value] of Object.entries(fondues)) {
        c = addItem("dish", key, value);
        elements.push(c);
    }

    c = document.createElement("h3");
    c.textContent = "Chesse Croûtes";
    elements.push(c);

    const croutes = {
        "Cheese croûte": "22",
        "Extra egg": "+ 2",
        "Extra ham": "+ 2"
    }

    for(const [key, value] of Object.entries(croutes)) {
        c = addItem("dish", key, value);
        elements.push(c);
    }

    c = document.createElement("h3");
    c.textContent = "Röstis";
    elements.push(c);

    const roestis = {
        "Röstis with vacherin": "18",
        "Röstis with gruyère": "18",
        "Extra egg": "+ 2",
        "Extra tomatoes": "+ 2",
        "Extra diced bacon": "+ 3"
    };

    for(const [key, value] of Object.entries(roestis)) {
        c = addItem("dish", key, value);
        elements.push(c);
    }

    c = document.createElement("h3");
    c.textContent = "Sweets";
    elements.push(c);

    const sweets = {
        "Meringue (small)": "7",
        "Meringue (large)": "11",
        "Grape jelly pie": "12",
        "Scoop of ice cream (per piece)": "5",
        "Extra Gruyère double cream": "+ 4",
        "Extra red berries": "+ 5",
        "Extra whipped cream": "+ 3"
    };

    for(const [key, value] of Object.entries(sweets)) {
        c = addItem("dish", key, value);
        elements.push(c);
    }

    elements.forEach(el => {
        menuContainer.appendChild(el);
    });

    container.appendChild(menuContainer);
}

export default appendMenu;