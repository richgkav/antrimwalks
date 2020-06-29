import * as Content from './content';

export function allWalks() {}

export function oneWalk(index) {

    const allWalks = Content.allWalks;
    const walkDescription = document.getElementById('walk-description');
    const walkObject = allWalks[index];

    walkDescription.innerHTML = walkObject.description;

    const walkImages = document.getElementById('walk-images');
    
    for (let i = 0; i != walkObject.images.length; i++) {
        const singleImage = document.createElement('div');
        singleImage.classList.add('one-image');
        singleImage.innerText = walkObject.images[i];
        walkImages.appendChild(singleImage);
    }
}
