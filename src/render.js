import * as Content from './content';

export function allWalks() {
	const walksContent = document.getElementById('walks-content');
	clearChildElements(walksContent);
	// Get array containing all the Walk objects
	const allWalks = Content.allWalks;
	for (let i = 0; i != allWalks.length; i++) {
		const divWalkSelector = document.createElement('div');
		divWalkSelector.classList.add('walk-selector');
		const walkObject = allWalks[i];
		const img = showImage(
			walkObject.thumbnail,
			200,
			200,
			walkObject.thumbalt
		);

		const walkSelectTitle = document.createElement('div');
		walkSelectTitle.classList.add('walk-selector-title');
		walkSelectTitle.innerText = walkObject.title;

		divWalkSelector.appendChild(walkSelectTitle);
		divWalkSelector.appendChild(img);

		walksContent.appendChild(divWalkSelector);
	}
}

export function oneWalk(index) {

	const walksContent = document.getElementById('walks-content');
	clearChildElements(walksContent);

	const divDescription = document.createElement('div');
	divDescription.classList.add('walk-description');
	const divImages = document.createElement('div');
	divImages.classList.add('walk-images');

	// Get array containing all the Walk objects
	const allWalks = Content.allWalks;
	const walkObject = allWalks[index];

    divDescription.innerHTML = walkObject.description;

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
        divImages.appendChild(singleImage);
	}

	walksContent.appendChild(divDescription);
	walksContent.appendChild(divImages);

}

function showImage(src, width, height, alt) {
    var img = document.createElement("img");
    img.src = src;
    img.width = width;
    img.height = height;
    img.alt = alt;
    return img;
}

/*
function clearWalks() {
	const node = document.getElementById('walks-content');
	clearChildElements(node);
}
*/

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