import './index.css';
import * as Content from './content';
import * as Render from './render';

function main() {
    const banner = document.getElementById('banner');
    banner.innerHTML = 'Great Walks in County Antrim<br>Northern Ireland';
    Content.generateWalks();
    Render.oneWalk(0);

}

window.onload = main;