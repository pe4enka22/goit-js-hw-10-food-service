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
function changeTheme() {
    
    if (switcher.checked) {
        document.body.classList.add(`${Theme.DARK}`);
        document.body.classList.remove(`${Theme.LIGHT}`);
        localStorage.setItem("theme", `${Theme.DARK}`);
    } else {
        document.body.classList.remove(`${Theme.DARK}`);
        document.body.classList.add(`${Theme.LIGHT}`);
        localStorage.setItem("theme", `${Theme.LIGHT}`);
    }
}

const currentTheme = saveTheme();
function saveTheme() {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
        document.body.classList.add(savedTheme);
        if (savedTheme=== `${Theme.DARK}`) {
       switcher.checked = true;
    }
    }

}

