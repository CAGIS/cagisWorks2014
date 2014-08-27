// The contents of this file will be executed before any of
// your view controllers are ever executed, including the index.
// You have access to all functionality on the `Alloy` namespace.
//
// This is a great place to do any initialization for your app
// or create any global variables/functions that you'd like to
// make available throughout your app. You can easily make things
// accessible globally by attaching them to the `Alloy.Globals`
// object. For example:
//
// Alloy.Globals.someGlobalFunction = function(){};
if (OS_IOS || OS_ANDROID) {
	
	Alloy.Globals.top = 0;
	Alloy.Globals.tableTop = '50dp';
	try {
		// check for iOS7
		if (OS_IOS && parseInt(Titanium.Platform.version.split(".")[0], 10) >= 7) {
			Alloy.Globals.top = '20dp';
			Alloy.Globals.tableTop = '70dp';
		}
	} catch(e) {
		// catch and ignore
	}
}
//-////////////////////////////////////////////////////////////////////////////////
Alloy.Globals.mapContext='location'; //'property'||'location'
Alloy.Globals.cagapp = {
	webMapURL:'http://cagisonline.hamilton-co.org/CagisOnline/maps/mobilemap.html',
	geoDomain:'https://cagismaps.hamilton-co.org/',
	geoVirtualDir:'CagisGeoWebServicesV2010/',
	csrDomain:'https://cagismaps.hamilton-co.org/',
	csrVirtualDir:'CSRWebServices/',
	csrRecordDomain:'http://cagisperm.hamilton-co.org/',
	csrRecordDir:'cincsr/search/'
	
};
//-////////////////////////////////////////////////////////////////////////////////
// This will create a singleton collection object if it has not been previously created,
// or retrieves the singleton if it already exists.
Alloy.Collections.instance('LocationMRU');  //accessed thru Alloy.Collections.LocationMRU
