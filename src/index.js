import appendWelcome from "./welcome";
import appendMenu from "./menu";
import appendOpeningHours from "./openingHours";
import appendIncomingEvents from "./incomingEvents";
import appendBooking from "./booking";

const container = document.querySelector(".content");
const tabButtons = document.querySelector(".tabs-container").querySelectorAll("input");
let activeTab = "welcome-tab";

tabButtons.forEach(el => {
    el.addEventListener("click", e => clickOnTab(e.target.id));
});

appendWelcome(container);

const clickOnTab = (id) => {
    if (id !== activeTab) {
        container.innerHTML = "";
        switch (id) {
            case "welcome-tab":
                appendWelcome(container);
                break;
            case "menu-tab":
                appendMenu(container);
                break;
            case "opening-tab":
                appendOpeningHours(container);
                break;
            case "incoming-tab":
                appendIncomingEvents(container);
                break;
            case "booking-tab":
                appendBooking(container);
                break;
        }
        activeTab = id;
    }
}