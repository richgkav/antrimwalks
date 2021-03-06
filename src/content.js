import * as ClDef from './classes';

import glenarmHarbour from './images/glenarm-harbour.jpg';
import glenarmOffice from './images/glenarm-estate.jpg';
import glenarmView1s from './images/glenarm-view1.jpg';
import glenarmMap from './images/glenarm1-map.jpg';

import carnloughMap from './images/carnlough1-map.jpg';

export const allWalks = [];

export function generateWalks() {
	console.log('generateWalks called');

	/* format to create a new walk
	allWalks.push(
		new ClDef.Walk(
			'walk title',
			image-for-walk-selector,
			'alt text for image',
			walk-description-html-string,
			[
				image1,
				'image 1 alt text',
				'image 1 title',
				// keep adding images
			]
		)
	)


	*/

	allWalks.push(
		new ClDef.Walk(
			'Glenarm and Straidkilly',
			glenarmView1s,
			'A view of Glenarm fron a distance',
			walk1,
			[
				glenarmMap,
				'A map of the route around Glenarm',
				'Map',
				glenarmHarbour,
				'Glenarm\'s small marina full of boats in the afternoon sun.',
				'Glenarm marina',
				glenarmOffice,
				'Glenarm\'s estate office built 1739 and closed in the 1930s.',
				'The old estate office'
			])
	);

	allWalks.push(
		new ClDef.Walk(
			'Carnlough Cranny Falls and Gortin Quarry',
			glenarmView1s,
			'test alt text for thumbnail image',
			walk2,
			[
				carnloughMap,
				'A map of the route around Carnlough',
				'Map',
			])
	);

}

const walk0 = `
<h2>Welcome to Antrim Walks</h2>
<p>County Antrim has a good selection of places to visit and here you can find 
a collection of walks that are great to do when visiting each place.</p>
<p>Select walks on the left and you can view photos from each walk on the right.
I have provided information so that it's easy to follow the route and suggest 
what footwear is needed.</p>
<p></p>`;

const walk1 = `
<h2>Glenarm Village and Straidkilly Nature Reserve</h2>

<p>This is a circular walk from the harbour area up to the Layde Walk, to 
the center of the village and from there out to Straidkilly nature reserve and back. 
There are great views of the village and surrounding hills along the way. The 
Straidkilly section can be quite muddy at times and there are some steep sections
 so wear appropriate footwear and take care.
</p>

<h4>Parking and public transport</h4>
<p>You can park in several places in Glenarm. The main carpark is on the 
seafront and there is further parking around the village. There are buses from Larne 
(162) and Ballymena (128). For further information
 <a href="https://www.translink.co.uk//">www.translink.co.uk</a></p>

<h4>Amenities</h4>
<p>Glenarm has two pubs (conveniently next to each other), a shop and there is 
usually a food van in the carpark. There are also toilets in the carpark.</p>

<h4>Directions</h4>

<p>Starting from the car park take the eastern corner path by the playground and
 cross the footbridge to Eglington Yard. Bear left to follow the path until you 
 reach the marina office then alongside it heading for the road. Cross over and bear 
 left at the Glenarm tourist information car park.</p>

<p>On the opposite side of the road there is a flowerbed area with an old tunnel and 
to the side of that is the Plate Road path. Go up the path and turn right to 
walk up Dickeystown Road past the site of the old quarry on yor left. Head up 
the Layde Walk which was originally part of a 3 Mile canal that used to 
power the limestone crushing mill at the old quarry.</p>

<p>Follow the path to Spring Hill road where you will turn right and follow the road
down taking the left fork at which point Spring Hill becomes The Vennel. Continue 
down this short road to reach the center of the village with Castle Street 
opposite. If you want to have a look at the old estate buldings built in 1739 
take a left here and you will find them next to the forest gates.</p>

<p>Head back to the crossroads and turn left down Castle Street passing The Old 
Schoolhouse (now a home) to reach the bridge to the Barbican entrance to the 
castle. Here there are good views up and down the Glenarm river to the sea. 
Again turn back to head up to the crossroads and at the end of the road take a 
left to head down Toberwine Street passing the shop and the pubs, then turn left 
onto The Cloney and head over the bridge.</p>

<p>Bear left at the fork following the castle walls to walk up Straidkilly Road 
passing the cemetary to reach some houses on the right. Shortly after you will 
see the entrance to a path that leads to Straidkilly nature reserve. This is a 
fairly new path having been created in 2017 on land recently returned to the 
council from the previous quarry owners.</p>

<p>Follow the path through the trees guided by walk markers and go up several 
flights of steps after which the trail now gets more undulating. Go over two foot 
bridges and climb over a style which marks the original boundary of the nature 
reserve. Straidkilly is 9 hectares in size with a couple of main paths and has a 
number of rare animal species despite it's small size such as Irish Hare and 
Irish Stoat.</p>

<p>Drop down a short bank and at a post that says to go right, take a left! From 
now on you are walking the nature reserve route in reverse. The path from hereon 
can be slippy and is quite steep in places so take care. Eventually you come to 
a clearing with a picnic bench and good views through the trees over to 
Carnlough backed by White Hill and over to the right Big Trosk & Little Trosk.</p>

<p>Continue through the clearing down the path and take a right to reach 
Straidkilly road again. Walk for about a third of a mile past trees with views 
over Glenarm Bay to Ladies Hill becoming visible. Shortly after you reach a walk 
marker that indicates Bachelors Walk.</p>

<p>Follow Bachelors Walk down the winding path, past rocks and a bench to reach 
the Coast Road. This can be a busy road so take care crossing over. Head back to 
Glenarm either along the road or the beach to reach the starting 
point in the carpark.</p>
`;

const walk2 =
`<h2>Carnlough Cranny Falls and Gortin Quarry</h2>
<p>intro</p>
<h4>Parking and public transport</h4>
<p></p>
<h4>Amenities</h4>
<p></p>
<h4>Directions</h4>
<p></p>
`;