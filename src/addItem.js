const addItem = (type, item, info) => {
    const newEl = document.createElement("div");
    newEl.classList.add(type);

    const newItem = document.createElement("div");
    newItem.classList.add(type);
    newItem.classList.add("item");
    newItem.textContent = item;
    newEl.appendChild(newItem);

    const newInfo = document.createElement("div");
    newInfo.classList.add(type);
    newInfo.classList.add("info");
    newInfo.textContent = info;
    newEl.appendChild(newInfo);

    return newEl;
}

export default addItem;