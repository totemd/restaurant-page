const addFormInput = (input, label, type) => {
    let c = document.createElement("div");
    c.classList.add("form");
    c.classList.add("item");
    let labelContainer = document.createElement("label");
    labelContainer.for = input;
    labelContainer.textContent = label;
    c.appendChild(labelContainer);
    let inputContainer = document.createElement("input");
    inputContainer.type = type;
    c.appendChild(inputContainer);
    return c;
}

const appendBooking = (container) => {
    const bookingContainer = document.createElement("div");
    bookingContainer.id = "booking";

    const elements = []
    let c;

    c = document.createElement("h2");
    c.textContent = "Book a table";
    elements.push(c);

    c = document.createElement("form");
    c.action = "";
    c.classList.add("contact-form");
    c.appendChild(addFormInput("name", "Your name:", "text"));
    c.appendChild(addFormInput("email", "Your email adress:", "email"));
    c.appendChild(addFormInput("date", "Day of your visit:", "date"));
    c.appendChild(addFormInput("hour", "Time of your visit:", "time"));
    c.appendChild(addFormInput("number", "Number of visitors:", "number"));
    c.appendChild(addFormInput("submit", "", "submit"));


    elements.push(c);

    elements.forEach(el => {
        bookingContainer.appendChild(el);
    });

    container.appendChild(bookingContainer);
}

export default appendBooking;