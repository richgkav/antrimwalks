import * as ClDef from './classes';

import glenarmHarbour from './images/glenarm-harbour.jpg';
import glenarmOffice from './images/glenarm-estate.jpg';
import glenarmView1s from './images/glenarm-view1.jpg';
import slemish from './images/slemish.jpg';
import slemishSmall from './images/slemish-1.jpg';
import lloydImage from './images/lloyd.jpg';

export const allWalks = [];

export function generateWalks() {
	console.log('generateWalks called');
	
	allWalks.push(
		new ClDef.Walk('About Antrim Walks', slemishSmall, 'null description', walk0, 
		[
			lloydImage,
			'Lloyd placeholder text',
			'Temporary Image'
		])
	);

    allWalks.push(
		new ClDef.Walk('Glenarm - Layde and Straidkilly', glenarmView1s, 'A view of Glenarm fron a distance', walk1,
		[
            glenarmHarbour,
			'Glenarm\'s small marina full of boats in the afternoon sun.',
			'Glenarm marina',
            glenarmOffice,
			'Glenarm\'s estate office built 1739 and closed in the 1930s.',
			'The old estate office'
        ])
    );

    allWalks.push(
		new ClDef.Walk('Another walk', glenarmView1s, 'test alt text for thumbnail image', walk2, 
		[
			slemish, 
			'alt text',
			'title 1',
			slemish,
			'alt text',
			'title 2'
        ])
    );

}

const walk0 = `
<h2>Some Description</h2>
<h3>Sub heading</h3>
<p>Click on the links on the left to display each walk description.</p>`;

const walk1 =`
<h2>Glenarm 1</h2>
<h3>Layde Walk, Straidkilly Nature Reserve and Bachelors Walk</h3>

<p>This is a circular walk around Glemarm that has great views of the village. 
You will visit the harbour, the village center and the neighbouring nature reserve.</p>

<h4>Parking and public transport</h4>
<p>The main carpark is on the seafront next to St Patricks church.</p>

<h4>Amenities</h4>
<p>Glenarm has two pubs (conveniently next to each other), a shop and there is 
usually a food van in the carpark. There are toilets next to the carpark.</p>

<h4>Directions</h4>

<p>Starting from the car park take the eastern corner path by the playground and
 cross the footbridge to Eglington Yard. Bear left to follow the path until you 
 reach the marina office then walk by it heading for the road. Cross over and bear 
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
left to head down Toberwine Street passing the shop and two pubs, then turn left 
onto The Cloney and head over the bridge.</p>

<p>Bear left at the fork following the castle walls to walk up Straidkilly road 
passing the cemetary to reach some houses on the right. Shortly after you will 
see the entrance to a path that leads to Straidkilly  nature reserve. This is a 
fairly new path having been created in 2017 on land recently unleased from the 
present quarry owners, and there are clear marking posts to guide you through.</p>

<p>Follow the path through the trees and when you reach some steps go up them 
and continue to follow the winding path. Eventually you will reach a style over 
an old farm fence. Once over that you are in the nature reserve and from here on
 the path can be steep and may be slippy in wet weather so take care. Eventually 
 you come to a clearing with a picnic bench and good views over 
to Carnlough and the hills behind [[ get the name ]].</p>

<p>Continue through the clearing down the path taking a right and walk along the 
Straidkilly road for about a third of a mile until you reach another path on the 
left. This path is known as Bachelors Walk but is not signposted so can easily be 
 missed. If you can see a fence on the left and a field while still on Straidkilly 
 Road then  you have probably gone too far!</p>

<p>Follow Bachelors Walk down the winding path, past rocks and a bench eventually 
to reach the Coast Road. This can be a busy road so take care crossing over. 
Head back to Glenarm either along the road or the beach to reach the starting 
point in the carpark.</p>
`;

const walk2 =
    `<h2>TEST Walk 2</h2>
<h3>test heading 2</h3>
<p>bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla 
bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla 
bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla 
bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla 
bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla </p>`;