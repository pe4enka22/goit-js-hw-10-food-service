
import template from "./main.hbs";

import testData from "./menu.json";

window.onload = () => {
    const cards = document.querySelector('.js-menu');
    cards.innerHTML = template(testData);
}
