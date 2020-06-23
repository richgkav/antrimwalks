import "./index.css";
//import imageBack from './images/whitepark-bay.jpg';

function main() {
    const menu = document.getElementById('menu');
    menu.append(newDiv(null, 'menu-item', 'Walks'));
    menu.append(newDiv(null, 'menu-item', 'About Us'));

    const logo = document.getElementById('logo');
    logo.append(newDiv(null, 'logo-item', 'Antrim Walks'));
}

const newDiv = function _newDiv(idName, className, innerHTML) {
    const newDiv = document.createElement('div');
    if (idName) newDiv.id = idName;
    if (className) newDiv.classList.add(className);
    newDiv.classList.add('items-design');
    if (innerHTML) newDiv.innerHTML = innerHTML;
    return newDiv;
}

window.onload = main;