import * as Content from './content';

export function allWalks() {

	console.log('allWalks() called');
	const divAllWalks = document.getElementById('all-walks');
	clearChildElements(divAllWalks);
	// Get array containing all the Walk objects

	//const divWalkSelector = document.getElementById('walk-selector');

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
		walkSelectTitle.classList.add('walk-selector-title','small-text-shadow');
		walkSelectTitle.innerText = walkObject.title;

		divWalkSelector.appendChild(walkSelectTitle);
		divWalkSelector.appendChild(img);

		divAllWalks.appendChild(divWalkSelector);
	}

	// clicking All Walks calls this function. note to self the arrow function
	// is needed so that this refers to the scope the arrow was called in
	const theWalksLogo = document.getElementById('the-walks-logo');
	theWalksLogo.addEventListener('click', () => {
		this.allWalks();
	});

	// render the first walk
	oneWalk(0);
}


export function oneWalk(index) {
	console.log(`oneWalk(${index}) called`);
	
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
		overlayText.classList.add('image-text','small-text-shadow');
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
	
	//walksContent.appendChild(divDescription);
	//walksContent.appendChild(divImages);
}

function displayImage(src) {
	console.log(`displayImage ${src} called`);
	const displayImageDiv = document.getElementById('image-viewer');
	clearChildElements(displayImageDiv);
	const image = addImg(src);
	image.classList.add('border-style');
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
