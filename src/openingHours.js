import addItem from "./addItem";

const appendOpeningHours = (container) => {
    const openingHoursContainer = document.createElement("div");
    openingHoursContainer.id = "opening";

    const elements = []
    let c;

    c = document.createElement("h2");
    c.textContent = "Opening Hours";
    elements.push(c);

    const openingHours = {
        "Monday": "Closed",
        "Tuesday": "Closed",
        "Wednesday": "5pm-12pm",
        "Thursday": "5pm-12pm",
        "Friday": "5pm-12pm",
        "Saturday": "10am-12pm",
        "Sunday": "10am-12pm",
    };

    for(const [key, value] of Object.entries(openingHours)) {
        c = addItem("day", key, value);
        elements.push(c);
    }

    elements.forEach(el => {
        openingHoursContainer.appendChild(el);
    });

    container.appendChild(openingHoursContainer);
}

export default appendOpeningHours;