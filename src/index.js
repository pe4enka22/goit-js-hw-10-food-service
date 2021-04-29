
import template from "./main.hbs";

import testData from "./menu.json";

window.onload = () => {
    const cards = document.querySelector('.js-menu');
    cards.innerHTML = template(testData);
}




const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const switcher = document.querySelector('.theme-switch__toggle');
switcher.addEventListener('change', changeTheme);
function changeTheme(){
    if (switcher.checked) {
        body.classList.add(`${Theme.DARK}`);
        body.classList.remove(`${Theme.LIGHT}`);
    } else {
        body.classList.remove(`${Theme.DARK}`);
        body.classList.add(`${Theme.LIGHT}`);
    }
}
