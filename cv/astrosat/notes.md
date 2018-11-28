## Why did I apply?
* When learning ES6 and react built a raster mapping tool on top of Google maps - reignited passion for that
* "You will work on projects that focus on mapping and the visualisation of satellite data."
* Geowise pivoted towards reporting tools
* Future uncertain - pay stagnant - though comfortable working conditions
* Wanted to move back towards GIS and mapping
* Edinburgh based and non corporate 

## Academic
* School in St Helens
* Undergraduate geography degree in Glasgow
* Exchange in Canada - first experienced computers, email, internet, computers and GIS.
* Msc in GIS at Leicester - inclination towards the programming side of things
* Dissertation - build dashboards using Tcl/Tk to map and chart indicators

## Career
* Mapix technologies - Built company website. Wrote Avenue scripts in ArcView 3.0 to process and package large hydrographic datasets as shapefiles
* Scottish Wildlife Trust - GIS Support Officer for mapping of wildlife sites, set up system using ArcView 3.0 for entering and storing wildlife sites in ArcView
* Forest Research - Created an ArcView 3.0 extension for the Ecological Site Classification - Inputs temperature, moisture deficit, continentality, windiness rasters, generated a suitablilty raster for different tree species. Created a protype Java Applet to do the same - technology wasnt mature enough to roll out - no champion with Forestry Commission to implement in FC GIS System

## Geowise

#### Early
* Initially hired as GIS Support / Consultant
* General support and consultancy work for bids that we'd won - Scottish Enterprise
* Gradually evolved into develpoment role
* Built mapping sites using ESRI ArcIMS - ASP and JSP flavours
* Designed first dashboards for clients using SVG on an ad hoc basis. Lots of functions - no modules - data stored in something very similar to JSON
* More and more dashboards being created - greater difficulty in winning bids - decided to build product.

#### InstantAtlas Desktop
* InstantAtlas Desktop created so clients could create and customize their own dashboards using our templates. Clients use excel to create their attribute data and select the shapefiles they wish to use as map layers. They then use desktop tols to design and style their dashboards. Desktop software pumps out XML data and configuration files (no JSON at this time) and a stylesheet - this is picked up by client side app template built on JavaScript and SVG.
* Flash - more mature technology - faster than SVG
* Contractor brought on board - lacked domain knowledge - ended up with templates none of the inhouse develpers could use
* Redeveloped templates with actionscript within the FLEX framework (object oriented)
* IPAD released - doesnt support Flash
* Redevelop templates using JavaScript (JavaScript prototypal inheritance pattern), JQuery and HTML5 Canvas / SVG. Switched to JSON for data files.
* Support for thematics being overlayed over google maps
* Lots of custom work required by clients so code evolved to allow customisation through an API: ECDC, Vodafone, NHS, Data Observatories, Many government agencies
* Aquired by ESRI.

#### Online Dashboard Builder - move to the cloud
* Started hearing about Node and package management
* Tie in with ESRI software - Data Storage using ArcGis Online
* Online version of IA Desktop. Enable clients to configure, style and save their dashboards online. 
* Data stored as feature services in ArcGIS Online.
* Package management, Node, NPM, JavaScript (JavaScript Module pattern), LESS, GRUNT, HANDLEBARS.
* Integrate legacy dashboard code.

#### Reporting Tools
* Combined all reporting tools into Online Offering
* Clients have trouble sourcing and storing their data
* Combine reporting tools and webapps behind a wordpress front end allowing clients to configure at the wordpress level
* Clients build their own data catalogues (stored as feature services in ArcGIS Online) using our reporting tools

#### InstantAtlas desktop (electron)
https://online.instantatlas.com/designer/
* Desktop reimagined
* Electron, Modular JavaScript Design, JQuery, Grunt, Handlebars, LESS
* Got binned after pivot away from supporting desktop
* Complicated getting off the ground - lots idiosyncracies and wrinkles still need iron out.

#### Map Explorer
https://www.suffolkobservatory.info/economy-employment/map/
* Easy to use, responsive mapping app allowing the end users to view the indicators in their data catalogue as maps
* Allows the end user to select an indicator from the catalogue and map it at the different available geographies
* Features - Time series, classification, smart mapping
* Configurable as an ArcGIS Online App
* Can be launched from URL with data model passed in as params or programmatically with a json data model passed in
* Embeddable in wordpress website
* ArcGIS JavaScript API + Modular JavaScript + Grunt + NPM

#### Data Catalogue Explorer
https://hubtest.instantatlas.com/datastore2/?appid=42ec835a6ff04a9d9566d29795c7843a
* Responsive app for viewing information about indicators stored in data catalogue
* Configurable as an ArcGIS Online App
* Embeddable in wordpress website
* React, Redux, React Router, SASS, Responsive Design
* Just started Travis CI and testing with JEST

## Case study: ECDC Surveillance Atlas of Infectious Diseases
https://atlas.ecdc.europa.eu/public/index.aspx
* ECDC were looking for ways to improve the availability and accessibility of their data. I spent several months consulting with a group from ECDC to create a bespoke version of our software for their Surveillance Atlas of Infectious Diseases. The work involved customizing and integrating InstantAtlas Destop with backend GIS and REST API services hosted by ECDC, plus training of their in-house developers.
* Data REST Api and GIS services were evolving at the same time as the App
* Problems gaining access to services as everything was evolving in-house, sensitivity of data
* Build relationships with in-house DEVELOPERS - they didnt feel they had ownership of the tool
* Build relationships with in-house GIS developers and analysts - they werent happy about not building on ESRI tools.
* Weekly meetings
* Exacting specifications
* Dealing with politics within the organisation
* Couple of on site visits to Stockholm
* Multiple Stakeholders
* Meetings with individual stakeholders to reassure them
* In-house developers had to be able to understand and make cahanges to end product
* Product still in use years later - has since been heavily modified by in-house developers

## Side projects

#### Raspbery Pi
* Built a Rover (For Alex)
* Learnt Python to commicate with Pi and built a REST API served using Flask
* Built front end using JavaScript - remote control interface
* Rover controlled from phone over WIFI using calls to REST API.

#### Google Maps Raster
https://jonathanclare.github.io/react-map/
* Waiting for JavaScript framework winner - plumped for react
* Built in order to learn React / ES6
* Generate DEMs using googles ElevationService - store points as raster class and render using HTML5 Canvas - add canvas as new layer to Google maps
* Add algorithms for deriving new layers from Raster Class - aspect, slope, hillshade

#### Quinta de Vodra
http://quintadevodra.com/
* My partners parents Farm in Portugal
* Minimalist responsive site that could be updated with basic knowledge of HTML 
* Set up google account and redirect of URLs and Email, plus masses of documentation so they could update everything themselves

#### Snow scotland
http://jonathanclare.github.io/ski.html
* I wanted all the information about skiing in scotland in one place
* Had to be responsive and lightweight - as would be used mostly on mobile
* Added page for each ski area
* Added twitter and facebook feeds
* Links to weather and avalanche conditions info

## Coding

#### Front end evolution
* HTML, CSS, JavaScript (simple functions)
* ASP, JSP, SVG
* Actionscript, FLEX
* JavaScript (prototypal inheritence pattern)
* JavaScript (modular pattern, immediately invoked functions) 
* JQuery, JSON, LESS, HTML5 Canvas, Responsive Design
* Packaging, Node, NPM, Grunt
* ES6, React, Redux, React Router, SASS, Travis CI, Testing (Jest)

#### JavaScript Common Errors
* undefined | 0 | null | "undefined" | "null" 
* if (myVariable) {} // 0 doesnt pass - always use if (myVariable !== undefined) {}
* Use of "==" comparator instead of "===" comparator
* Mutating Variables / Arrays - trying to track where array/variable values have been changed
* Data Binding issues
* No central data store - no Immutability
* Css selector names clashes when using multiple libraries
* Variables name collision when using multiple libraries
* Numbers passed in as strings end up up being concatenated as strings 2.10 + 3.10 = 5.2  "2.10" + 3.10 = 2.103.10
* Confusion over what "this" refer to inside a class - function or class?
* In early object oriented design was declaring variables using this.prototype._myPrivateVariable instead of this._myPrivateVariable which meant the varisble for set for all objects
* javascript prototypal inheritance - clunky workaround - mostly solved by ES6
* Weakly typed - Not catching strings being passed in as numbers - leads to numbers being concatednated strings

#### Visual Studio Issues
* Visual Studio builds - works on one computer not on another
* Forgetting to add new files to solution leading to broken builds
* Not full confidence in deployment
* Slow, clunky check in / out process - have to open VS to check out from TFS - takes too long
* Password confusion - having to contact HQ for new password too often
* Confusion over Microsoft accounts - personal vs work email

## Notes App Comments

#### Why I used React / Redux
* I was developing a react app at the time and being in that mode already enabled me to generate a rapid prototype using alot of the ideas and code that I had available to me
* Plain old JavaScript would have been nigh on impossible to develop something not bug ridden in the time available
* One way binding + central data store + routing = godsend

#### Improvements
https://jonathanclare.github.io/astrosat-notes-app/
* Fix the routing 404 issue
* Add support for older browsers?
* Refactor css
* Implement sass
* Notes.js might be better split in NotesView.js and NotesEdit.js
* State in Notes.js probably became overly complex - would probably refactor - maybe just pass around a prop thats a copy of the current note
* Default strings should be placeholders instead
* Formatting of text from textarea to maintain paragraphs
* Add Travis CI for automated building and testing and to set up gh-pages branch for viewing in same repo as source code at - might have saved time spent manually rebuilding and deploying
* The note id should be autogenerated in the redux store when the note is created
* A selector should be added to the store to get a new note or an existing note

In Notes.js

```javascript
// The note id prop has changed.
onNoteIdChange()
{ 
    // Default new note.
    const s4 = Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    let note = {id:s4, title:'Add A Title', content:'Add Some Content', date:new Date().toISOString()};

    // Does the note exist already?
    const arrNotes = this.props.notes.filter(note => note.id === this.props.id);
    if (arrNotes.length > 0) note = arrNotes[0]; // Note found!
    this.setState({id:note.id, title:note.title, content:note.content, date:note.date});
}

import {addNote, removeNote, updateNote, getNote, createNote} from '../store/store';

 // The note id prop has changed.
onNoteIdChange()
{ 
    // Default new note.
    let note = this.props.getNote(this.props.id);
    if (note === undefined) note = this.props.creatNote();
    this.setState({id:note.id, title:note.title, content:note.content, date:note.date});
}

const mapStateToProps = state => 
{
    return {
    	getNote: getNote(state, state.id);
    	creatNote: creatNote();
        notes: state.notes
    }
};
```

In store.js

```javascript
export const addNote = state =>
{
    // new note.
    const s4 = Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    return {id:s4, title:'', content:'', date:new Date().toISOString()};
}
export const getNote = (state , id) =>
{
    const arrNotes = state.notes.filter(note => note.id === id);
    if (arrNotes.length > 0) return arrNotes[0];
}
```

## Weaknesses
* Testing - light bulb moment - instead of throwing away debugging turn them into tests - realised I was already testing but throwing away the tests
* Never did a CS degree so still get the occassional "Should I know that" moment
* Very front end / creative leaning - like to create things with the tools given to me - weaker on system administration side of things
* Domain knowledge - can be learned

## Hobbies
* What little time left spend it with family and friends
* Cycling + Mountain Biking
* Kitesurfing in warmer months 
* Snowboard in Winter
* Walking

## Dev Questions
* Could you tell me more about the makeup of the development team and my role in it
* Do you have any examples of recent projects youve worked on
* Besides onboarding what would I be working on
* Id like to push forward with ES6, HTML5 Canvas, SVG and React - do you use that in-house

## Admin Questions
* Looking for a secure long term position - future plans for the business - what is the direction?
* Pension contributions
* Showering facilities