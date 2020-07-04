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
		const img = showImage(
			walkObject.thumbnail,
			170,
			170,
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
	//const walksContent = document.getElementById('walks-content');
	//clearChildElements(walksContent);

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
        singleImage.classList.add('one-image');

        const img = showImage(
            walkObject.images[i],
            300,
            200,
            walkObject.images[i + 1]
		);

		img.classList.add('border-style');

		const overlayText = document.createElement('div');
		overlayText.classList.add('image-text','small-text-shadow');
		overlayText.innerText = walkObject.images[i + 2];
		
		singleImage.appendChild(img);
		singleImage.appendChild(overlayText);
        divImages.appendChild(singleImage);
	}

	//walksContent.appendChild(divDescription);
	//walksContent.appendChild(divImages);
}

function showImage(src, width, height, alt) {
    var img = document.createElement("img");
    img.src = src;
    img.width = width;
    img.height = height;
    img.alt = alt;
    return img;
}

function clearChildElements(node) {
	// clears all child elements under the specified node
	while (node.firstChild) {
		node.removeChild(node.lastChild);
	}
}
