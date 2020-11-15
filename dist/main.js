(()=>{"use strict";const e=e=>{const t=document.createElement("div");t.id="welcome";let n,o=[];n=document.createElement("h1"),n.textContent="Le Chalet",o.push(n),n=document.createElement("p"),n.textContent="Welcome to le Chalet, the heart of the Swiss Alps in your mouth.",o.push(n),n=document.createElement("p"),n.textContent="If you don't like cheese, well... you can still enjoy the magnificent view on the surrounding moutains.",o.push(n),o.forEach((e=>{t.appendChild(e)})),e.appendChild(t),document.createElement("div").id="contact",o=[],n=document.createElement("h2"),n.textContent="Contact Info",o.push(n),n=document.createElement("p"),n.textContent="Feel free to contact us to book a table or get more information!",o.push(n),n=document.createElement("p"),n.textContent="Do not forget, this place does not exist, so if you actually try to contact us you may reach a random stranger. Sorry to them if that would happen.",o.push(n),n=document.createElement("adress");let a=document.createElement("p");a.textContent="Le Chalet",n.appendChild(a),a=document.createElement("p"),a.textContent="2190 Nowhere",n.appendChild(a),a=document.createElement("p"),a.textContent="Inexistant Path",n.appendChild(a),a=document.createElement("p"),a.textContent="Switzerdont",n.appendChild(a),a=document.createElement("p"),a.textContent="++41 00 000 00 00",n.appendChild(a),o.push(n),o.forEach((e=>{t.appendChild(e)})),e.appendChild(t)},t=(e,t,n)=>{const o=document.createElement("div");o.classList.add(e);const a=document.createElement("div");a.classList.add(e),a.classList.add("item"),a.textContent=t,o.appendChild(a);const c=document.createElement("div");return c.classList.add(e),c.classList.add("info"),c.textContent=n,o.appendChild(c),o},n=(e,t,n)=>{let o=document.createElement("div");o.classList.add("form"),o.classList.add("item");let a=document.createElement("label");a.for=e,a.textContent=t,o.appendChild(a);let c=document.createElement("input");return c.type=n,o.appendChild(c),o},o=document.querySelector(".content"),a=document.querySelector(".tabs-container").querySelectorAll("input");let c="welcome-tab";a.forEach((e=>{e.addEventListener("click",(e=>d(e.target.id)))})),e(o);const d=a=>{if(a!==c){switch(o.innerHTML="",a){case"welcome-tab":e(o);break;case"menu-tab":(e=>{const n=document.createElement("div");n.id="menu";const o=[];let a;a=document.createElement("h2"),a.textContent="Menu",o.push(a),a=document.createElement("h3"),a.textContent="Starters",o.push(a);const c={"Platter of cured meats":"16","Platter of cheeses":"13","Small salad":"8"};for(const[e,n]of Object.entries(c))a=t("dish",e,n),o.push(a);a=document.createElement("h3"),a.textContent="Fondues",o.push(a);const d={"Half gruyère, half vacherin":"24","With boletes":"27","With tomatoes":"27","Full vacherin":"24"};for(const[e,n]of Object.entries(d))a=t("dish",e,n),o.push(a);a=document.createElement("h3"),a.textContent="Chesse Croûtes",o.push(a);const s={"Cheese croûte":"22","Extra egg":"+ 2","Extra ham":"+ 2"};for(const[e,n]of Object.entries(s))a=t("dish",e,n),o.push(a);a=document.createElement("h3"),a.textContent="Röstis",o.push(a);const r={"Röstis with vacherin":"18","Röstis with gruyère":"18","Extra egg":"+ 2","Extra tomatoes":"+ 2","Extra diced bacon":"+ 3"};for(const[e,n]of Object.entries(r))a=t("dish",e,n),o.push(a);a=document.createElement("h3"),a.textContent="Sweets",o.push(a);const i={"Meringue (small)":"7","Meringue (large)":"11","Grape jelly pie":"12","Scoop of ice cream (per piece)":"5","Extra Gruyère double cream":"+ 4","Extra red berries":"+ 5","Extra whipped cream":"+ 3"};for(const[e,n]of Object.entries(i))a=t("dish",e,n),o.push(a);o.forEach((e=>{n.appendChild(e)})),e.appendChild(n)})(o);break;case"opening-tab":(e=>{const n=document.createElement("div");n.id="opening";const o=[];let a;a=document.createElement("h2"),a.textContent="Opening Hours",o.push(a);const c={Monday:"Closed",Tuesday:"Closed",Wednesday:"5pm-12pm",Thursday:"5pm-12pm",Friday:"5pm-12pm",Saturday:"10am-12pm",Sunday:"10am-12pm"};for(const[e,n]of Object.entries(c))a=t("day",e,n),o.push(a);o.forEach((e=>{n.appendChild(e)})),e.appendChild(n)})(o);break;case"incoming-tab":(e=>{const n=document.createElement("div");n.id="incoming";const o=[];let a;a=document.createElement("h2"),a.textContent="Incoming Events",o.push(a),a=document.createElement("p"),a.textContent="Unfortunately, due to the Covid-19 pandemic, all events are postponed until further notice.",o.push(a);const c={"Roasting of a full pork":"Dec 13th","Candlelight night":"Dec 23rd","Vegan extravaganza":"Jan 30th"};for(const[e,n]of Object.entries(c))a=t("event",e,n),o.push(a);o.forEach((e=>{n.appendChild(e)})),e.appendChild(n)})(o);break;case"booking-tab":(e=>{const t=document.createElement("div");t.id="booking";const o=[];let a;a=document.createElement("h2"),a.textContent="Book a table",o.push(a),a=document.createElement("form"),a.action="",a.classList.add("contact-form"),a.appendChild(n("name","Your name:","text")),a.appendChild(n("email","Your email adress:","email")),a.appendChild(n("date","Day of your visit:","date")),a.appendChild(n("hour","Time of your visit:","time")),a.appendChild(n("number","Number of visitors:","number")),a.appendChild(n("submit","","submit")),o.push(a),o.forEach((e=>{t.appendChild(e)})),e.appendChild(t)})(o)}c=a}}})();