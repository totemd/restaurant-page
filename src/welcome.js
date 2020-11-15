const appendWelcome = (container) => {
    const welcomeContainer = document.createElement("div");
    welcomeContainer.id = "welcome";

    let elements = []
    let c;

    c = document.createElement("h1");
    c.textContent = "Le Chalet";
    elements.push(c);

    c = document.createElement("p");
    c.textContent = "Welcome to le Chalet, the heart of the Swiss Alps in your mouth.";
    elements.push(c);

    c = document.createElement("p");
    c.textContent = "If you don't like cheese, well... you can still enjoy the magnificent view on the surrounding moutains.";
    elements.push(c);

    elements.forEach(el => {
        welcomeContainer.appendChild(el);
    });

    container.appendChild(welcomeContainer);

    const contactContainer = document.createElement("div");
    contactContainer.id = "contact";

    elements = [];

    c = document.createElement("h2");
    c.textContent = "Contact Info";
    elements.push(c);

    c = document.createElement("p");
    c.textContent = "Feel free to contact us to book a table or get more information!";
    elements.push(c);

    c = document.createElement("p");
    c.textContent = "Do not forget, this place does not exist, so if you actually try to contact us you may reach a random stranger. Sorry to them if that would happen.";
    elements.push(c);

    c = document.createElement("adress");
    let d = document.createElement("p");
    d.textContent = "Le Chalet";
    c.appendChild(d);
    d = document.createElement("p");
    d.textContent = "2190 Nowhere";
    c.appendChild(d);
    d = document.createElement("p");
    d.textContent = "Inexistant Path";
    c.appendChild(d);
    d = document.createElement("p");
    d.textContent = "Switzerdont";
    c.appendChild(d);
    d = document.createElement("p");
    d.textContent = "++41 00 000 00 00";
    c.appendChild(d);
    elements.push(c);

    elements.forEach(el => {
        welcomeContainer.appendChild(el);
    });

    container.appendChild(welcomeContainer);
}

export default appendWelcome;