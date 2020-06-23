import "./index.css";
//import imageBack from './images/whitepark-bay.jpg';

function main() {
    const menu = document.getElementById('menu');

    const menuWalks = newDiv(null, 'menu-item', 'Walks');
    addLink(menuWalks, '#walks-content');
    menu.append(menuWalks);

    menu.append(newDiv(null, 'menu-item', 'About Us'));

    const logo = document.getElementById('logo');
    logo.append(newDiv(null, 'logo-item', 'Stick logo here'));

    const banner = document.getElementById('banner');
    banner.innerHTML = 'Great Walks in the County of Antrim<br>Northern Ireland';
}

const newDiv = function _newDiv(idName, className, innerHTML) {
    const newDiv = document.createElement('div');
    if (idName) newDiv.id = idName;
    if (className) newDiv.classList.add(className);
    newDiv.classList.add('items-design');
    if (innerHTML) newDiv.innerHTML = innerHTML;
    return newDiv;
}

const addLink = function _addIDLink(element, id) {
    const newA = document.createElement('a');
    newA.setAttribute('href', id);
    element.append(newA);
}

window.onload = main;