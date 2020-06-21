import "./index.css";

function main() {
    const menu = document.getElementById('menu');
    menu.append(newDiv(null, 'menu-item', 'Walks'));
    menu.append(newDiv(null, 'menu-item', 'About Us'));
}

const newDiv = function _newDiv(idName, className, innerHTML) {
    const newDiv = document.createElement('div');
    if (idName) newDiv.id = idName;
    if (className) newDiv.classList.add(className);
    if (innerHTML) newDiv.innerHTML = innerHTML;
    return newDiv;
}

window.onload = main;