import * as Content from './content';

export function allWalks() {

	console.log('allWalks() called');
	const divAllWalks = document.getElementById('all-walks');
	clearChildElements(divAllWalks);
	const arrayAllWalks = Content.allWalks;

	for (let i = 0; i != arrayAllWalks.length; i++) {
		const divWalkSelector = document.createElement('div');
		divWalkSelector.classList.add('walk-selector');
		const walkObject = arrayAllWalks[i];

		const img = addImg(
			walkObject.thumbnail,
			walkObject.thumbalt
		);

		img.id = 'ws' + i;
		img.addEventListener('click', function(event) {
			oneWalk(event.target.id.substring(2));
		});

		img.classList.add('border-style');

		const walkSelectTitle = document.createElement('div');
		walkSelectTitle.classList.add('walk-selector-title');
		walkSelectTitle.innerText = walkObject.title;

		divWalkSelector.appendChild(walkSelectTitle);
		divWalkSelector.appendChild(img);

		divAllWalks.appendChild(divWalkSelector);
	}

}


export function oneWalk(index) {
	console.log(`oneWalk(${index}) called`);
	
	document.getElementById('walk-div').style.display = 'grid';
	const divDescription = document.getElementById('walk-description');
	const divImages = document.getElementById('all-walk-images');

	clearChildElements(divDescription);
	clearChildElements(divImages);

	// Get array containing all the Walk objects
	const allWalks = Content.allWalks;
	const walkObject = allWalks[index];

    divDescription.innerHTML = walkObject.description;

    for (let i = 0; i != walkObject.images.length; i += 3) {
		const singleImage = document.createElement('div');
		singleImage.classList.add('single-walk-image');

        const img = addImg(
            walkObject.images[i],
            walkObject.images[i + 1]
		);

		img.classList.add('border-style');

		const overlayText = document.createElement('div');
		overlayText.classList.add('image-text');
		overlayText.innerText = walkObject.images[i + 2];

		img.addEventListener('click', (event) => {
			const src = event.target.getAttribute('src');
			console.log(src);
			displayImage(src);
		});
		
		singleImage.appendChild(overlayText);
		singleImage.appendChild(img);
    divImages.appendChild(singleImage);
	}

}

function displayImage(src) {
	console.log(`displayImage ${src} called`);
	const displayImageDiv = document.getElementById('image-viewer');
	clearChildElements(displayImageDiv);
	const image = addImg(src);
	image.classList.add('border-style','fade-image-in');
	image.addEventListener('click', () => {
		clearChildElements(displayImageDiv);
	});

	displayImageDiv.appendChild(image);
}

function addImg(src, alt) {
    var img = document.createElement("img");
    img.src = src;
    img.alt = alt;
    return img;
}

function clearChildElements(node) {
	// clears all child elements under the specified node
	while (node.firstChild) {
		node.removeChild(node.lastChild);
	}
}
