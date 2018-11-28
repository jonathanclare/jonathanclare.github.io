
## Career

* Mapix technologies - Built company website. Wrote Avenue scripts in ArcView 3.0 to process and package large hydrographic datasets as shapefiles
* Scottish Wildlife Trust - GIS Support Officer for mapping of wildlife sites, set up system using ArcView 3.0 for entering and storing wildlife sites in ArcView
* Forest Research - Created an ArcView 3.0 extension for the Ecological Site Classification - Inputs temperature, moisture deficit, continentality, windiness rasters, generated a suitablilty raster for different tree species. Created a protype Java Applet to do the same - technology wasnt mature enough to roll out - no champion with Forestry Commission to implement in FC GIS System

## Geowise

### Early
* Initially hired as GIS Support / Consultant
* General support and consultancy work for bids that we'd won - Scottish Enterprise
* Gradually evolved into develpoment role
* Built mapping sites using ESRI ArcIMS - ASP and JSP flavours
* Designed first dashboards for clients using SVG on an ad hoc basis. Lots of functions - no modules - data stored in something very similar to JSON
* More and more dashboards being created - greater difficulty in winning bids - decided to build product.

### InstantAtlas Desktop
* InstantAtlas Desktop created so clients could create and customize their own dashboards using our templates. Clients use excel to create their attribute data and select the shapefiles they wish to use as map layers. They then use desktop tols to design and style their dashboards. Desktop software pumps out XML data and configuration files (no JSON at this time) and a stylesheet - this is picked up by client side app template built on JavaScript and SVG.
* Flash - more mature technology - faster than SVG
* Contractor brought on board - lacked domain knowledge - ended up with templates none of the inhouse develpers could use
* Redeveloped templates with actionscript within the FLEX framework (object oriented)
* IPAD released - doesnt support Flash
* Redevelop templates using JavaScript (JavaScript prototypal inheritance pattern), JQuery and HTML5 Canvas / SVG. Switched to JSON for data files.
* Support for thematics being overlayed over google maps
* Lots of custom work required by clients so code evolved to allow customisation through an API: ECDC, Vodafone, NHS, Data Observatories, Many government agencies
* Aquired by ESRI.

### Online Dashboard Builder - move to the cloud
* Tie in with ESRI software - Data Storage using ArcGis Online
* Online version of IA Desktop. Enable clients to configure, style and save their dashboards online. 
* Data stored as feature services in ArcGIS Online.
* Package management, Node, NPM, JavaScript (JavaScript Module pattern), LESS, GRUNT, HANDLEBARS.
* Integrate legacy dashboard code.

### Reporting Tools
* Company at this time was building more complex reporting tools. 
* Combined all reporting tools into Online Offering
* Clients have trouble sourcing and storing their data
* Build up data catalogue in ArcGIS Online - mastertable stored as feature service. 
* Combine reporting tools and webapps behind a wordpress front end allowing clients to configure at the wordpress level.

### Map Explorer
* https://www.suffolkobservatory.info/economy-employment/map/
* Clients build their own data catalogues in our reporting tools
* Easy to use, responsive mapping app allowing the end users to view their data as maps
* Allows the end user to select an indicator from the catalogue and map it at the different available geographies
* Features - Time series, classification, smart mapping
* ArcGIS JavaScript API + Modular JavaScript + Grunt + NPM
* Configurable as an ArcGIS Online App
* Embeddable in wordpress website

### Data Catalogue Explorer
* https://hubtest.instantatlas.com/datastore2/?appid=42ec835a6ff04a9d9566d29795c7843a
* Responsive app for viewing information about indicators stored in data catalogue
* Configurable as an ArcGIS Online App

### InstantAtlas desktop
* Desktop reimagined



## Coding

### JavaScript Common Errors

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

### Evolution

### NPM | Grunt| Node

### ES6 | React | Redux

### React | Redux

## Work Flow

### Visual Studio Issues

* Visual Studio builds - works on one computer not on another
* Forgetting to add new files to solution leading to broken builds
* Not full confidence in deployment
* Slow, clunky check in / out process - have to open VS to check out from TFS - takes too long
* Password confusion - having to contact HQ for new password too often
* Confusion over Microsoft accounts - personal vs work email



### InstantAtlas Desktop

### InstantAtlas Desktop

### Dashboard Builder

### Vodafone

### ECDC



## Notes App


## Other

### Raster Mapper

## Questions