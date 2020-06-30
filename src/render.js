import * as Content from './content';

export function allWalks() {}

export function oneWalk(index) {

    const allWalks = Content.allWalks;
    const walkDescription = document.getElementById('walk-description');
    const walkObject = allWalks[index];

    walkDescription.innerHTML = walkObject.description;

    const walkImages = document.getElementById('walk-images');

    for (let i = 0; i != walkObject.images.length; i += 3) {
		const singleImage = document.createElement('div');
        singleImage.classList.add('one-image');

        const img = showImage(
            walkObject.images[i],
            300,
            200,
            walkObject.images[i + 1]
		);

		const overlayText = document.createElement('div');
		overlayText.classList.add('overlay-text');
		overlayText.innerText = walkObject.images[i + 2];
		
		singleImage.appendChild(img);
		singleImage.appendChild(overlayText);
        walkImages.appendChild(singleImage);
    }
}

function showImage(src, width, height, alt) {
    var img = document.createElement("img");
    img.src = src;
    img.width = width;
    img.height = height;
    img.alt = alt;
    return img;
    // This next line will just add it to the <body> tag
    //document.body.appendChild(img);
}