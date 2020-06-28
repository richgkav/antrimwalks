import * as Content from './content';

export function allWalks() {



}

export function oneWalk() {

    const allWalks = Content.allWalks;

    const content = document.getElementById('walk-description');
    content.innerHTML = allWalks[0].description; // works here

    const images = document.getElementById('walk-images');

    console.log(allWalks.length); // 2
    console.log(allWalks); // __proto__ = Array

    for (let i = 0; i != allWalks.length; i++) {
        const newDiv = document.createElement('div');
        newDiv.classList.add('one-image');
        images.appendChild(newDiv);
    }


}
