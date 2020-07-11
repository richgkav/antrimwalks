import * as ClDef from './classes';

import glenarmHarbour from './images/glenarm-harbour.jpg';
import glenarmOffice from './images/glenarm-estate.jpg';
import glenarmView1s from './images/glenarm-view1.jpg';
import slemish from './images/slemish.jpg';
import slemishSmall from './images/slemish-1.jpg';
import glenarmHills from './images/glenarm-hills.jpg';

export const allWalks = [];

export function generateWalks() {
	console.log('generateWalks called');
	
	allWalks.push(
		new ClDef.Walk('About Antrim Walks', slemishSmall, 'null description', walk0, 
		[
			glenarmHills,
			'Glenarm hills',
			'Test view image'
		])
	);

    allWalks.push(
		new ClDef.Walk(
			'Glenarm and Straidkilly', 
			glenarmView1s, 
			'A view of Glenarm fron a distance', 
			walk1,
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
		new ClDef.Walk(
			'Another walk', 
			glenarmView1s, 
			'test alt text for thumbnail image',
			walk2, 
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
<h2>Welcome to Antrim Walks</h2>
<p>County Antrim has a good selection of destinations to visit and walk. Locations 
such as The Giants Causway and The Glens of Antrim are well known but here I will 
show you some other places to see.</p>
<p>The walks can be selected on the left and each one has photos to select on the
 right. I have tried to provide a lot of information about the state of each walk
  so that it's going to be easy to follow the route and also what kind of footwear
 will make sense.</p>
 <p>The Antrim Hills vary grately with ease of access and terrain 
 but you will not go wrong with walking boots. Also I recommend a stick to test 
 boggy areas for depth as you honestly cannot tell if you are about to step in 
 1 inch or 2 foot of water sometimes (and so I have had to walk in wet feet often).
 Some hills boast a nice path all the way up while on others you'll be climbing 
 through 5 foot peat hags (picture on the right). On the bright side however is 
 that you'll often have the hills to yourself and hundreds of sheep, and the views
  are extremely worth it.</p>`;

const walk1 =`
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
usually a food van in the carpark. You can find toilets in the carpark.</p>

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
    `<h2>TEST Walk 2</h2>
<h3>test heading 2</h3>
<p>bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla 
bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla 
bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla 
bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla 
bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla </p>`;