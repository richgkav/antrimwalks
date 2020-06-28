import "./index.css";
import * as Generate from './walk-content';
import * as Render from './render-html';

function main() {
    const banner = document.getElementById('banner');
    banner.innerHTML = 'Great Walks in County Antrim<br>Northern Ireland';
    Generate.walks();
    Render.walks();

}

window.onload = main;