import addItem from "./addItem";

const appendIncomingEvents = (container) => {
    const incomingEventsContainer = document.createElement("div");
    incomingEventsContainer.id = "incoming";

    const elements = []
    let c;

    c = document.createElement("h2");
    c.textContent = "Incoming Events";
    elements.push(c);

    c = document.createElement("p");
    c.textContent = "Unfortunately, due to the Covid-19 pandemic, all events are postponed until further notice.";
    elements.push(c);

    const incomingEvents = {
        "Roasting of a full pork": "Dec 13th",
        "Candlelight night": "Dec 23rd",
        "Vegan extravaganza": "Jan 30th",
    };

    for(const [key, value] of Object.entries(incomingEvents)) {
        c = addItem("event", key, value);
        elements.push(c);
    }

    elements.forEach(el => {
        incomingEventsContainer.appendChild(el);
    });

    container.appendChild(incomingEventsContainer);
}

export default appendIncomingEvents;