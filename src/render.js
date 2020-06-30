import * as Content from './content';

export function allWalks() {

}

export function oneWalk(index) {


    const allWalks = Content.allWalks;
    const dnodes = document.getElementsByClassName('walk-description');
	const walkDescription = dnodes[0];
	const walkObject = allWalks[index];

    walkDescription.innerHTML = walkObject.description;

	const wnodes = document.getElementsByClassName('walk-images');
	const walkImages = wnodes[0];

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
}

function clearWalks() {
	const node = document.getElementById('walks-content');
	clearChildElements(node);
}

function clearChildElements(node) {
	// clears all child elements under the specified node
	while (node.firstChild) {
		node.removeChild(node.lastChild);
	}
}

function hideElement(node) {
	node.classList.add('hide-element');
}

function showElement(node) {
	node.classList.remove('hide-element');
}