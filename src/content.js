import * as ClDef from './classes';

import glenarmHarbour from './images/glenarm-harbour.jpg';
import glenarmOffice from './images/glenarm-estate-office.jpg';
import glenarmView1s from './images/glenarm-view1s.jpg';
import slemish from './images/slemish.jpg';

export const allWalks = [];

export function generateWalks() {
    console.log('generateWalks called');

    allWalks.push(
        new ClDef.Walk('Glenarm - Layde and Straidkilly', glenarmView1s, 'A view of Glenarm fron a distance', walk1, [
            glenarmHarbour,
			'Glenarm\'s small marina full of boats in the afternoon sun.',
			'Glenarm marina',
            glenarmOffice,
			'Glenarm\'s estate office built 1739 and closed in the 1930s.',
			'The old estate office'
        ])
    );

    allWalks.push(
        new ClDef.Walk('Another walk', glenarmView1s, 'test alt text for thumbnail image', walk2, [
			slemish, 
			'alt text',
			'title 1',
			slemish,
			'alt text',
			'title 2'
        ])
    );

}

const walk1 =
    `<h2>Glenarm walk 1</h2>
<h3>Layde Walk and Straidkilly Nature Reserve</h3>
<p>This circular walk around Glemarm takes in the harbour, the village and the 
neighbouring nature reserve.</p>
<p>Starting from the car park take the eastern corner path by the playground and
 cross the footbridge to Eglington Yard (currently used as a carpark).</p>
<p>Bear left and follow the path around to the marina office then head for the
road, crossing it to reach the wall of Steensons jewelers and Glenarm tourist 
information office.</p>
<p>Here turn left and cross over Mark Street, then make for the path that leads 
up by the side of the garden with a tunnel in it, which used to lead to the old 
quarry.</p>
<p>The path leads to Dickeystown Road so take a right to walk up the fairly 
steep hill passing the old limestone querry on the left and later gardens on the 
right. There are excellent views of Glenarm from this road.</p>
<p>After about 300 Meters you will reach the Layde Path which was originally 
part of a 3 Mile canal that used to power the limestone crushing mill at the 
quarry.</p>
<p>Follow the path to Spring Hill where you will turn right and follow the road
down taking the left fork at which point Spring Hill becomes The Vennel.</p>
<p>Continue down this short road to reach the center of the village with Castle
Street just opposite<p>
<p>Here if you want you can take a left and walk up to the forest entrance for a 
quick look at the old estate buildings that date from 1739.</p>
<p>Double back and turn down Castle Street passing The Old Schoolhouse to reach
the bridge to the Barbican entrance to the castle. There are good views
up and down the Glenarm river.</p>
<p>Turn back and at the end of the road take a left to head down Toberwine 
Street then turn left onto The Cloney and head over the bridge.</p>
<p>Follow the castle walls to take Straidkilly road on the left just after St 
Patricks church and follow it up the hill staying on Straidkilly road as it 
passes the cemetary.</p>
<p>You will reach some houses on the left and and shortly after you will see the
 entrance to the nature reserve. This is a fairly new part of the reserve having
  been created in 2017 which leads you to the old reserve.</p>
<p>Follow the path through the trees and keep on the main path until you reach 
some steps. Go up the steps and follow the winding path through the reserve. The 
path gets steep in places and can be slippy in wet weather so take care. 
Eventually you will come to a clearing with a picnic bench and good views over 
to Carnlough.</p>
<p>Continue through the clearing down a path taking a right and walk along the 
Straidkilly road for about a third of a mile until you reach a path on the left 
which is known as Bachelors Walk and is not signposted. If you reach a fence on 
the left then you have gone too far.</p>
<p>Follow the winding path down past rocks and a bench eventually to reach the 
Coast Road. Take care here crossing as traffic can be quick and take the road 
back into Glenarm.</p>
<p>You have a choice now whether to take the steps down to the beach back to the 
car park or follow the road.</p>
`;

const walk2 =
    `<h2>TEST Walk 2</h2>
<h3>test heading 2</h3>
<p>bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla 
bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla 
bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla 
bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla 
bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla </p>`;