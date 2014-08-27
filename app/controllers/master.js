var args = arguments[0] || {};
//fetch MRU data
Alloy.Collections.LocationMRU && Alloy.Collections.LocationMRU.fetch();

function doClick(e) {
    alert($.labeltop.text);
};

function openReportCSRWindow(){
	alert('openReportCSRWindow');
};
function openServiceDatesWindow(){
	var win=Alloy.createController("serviceDates").getView();
	addWinToNavGroup(win);	
};

function openExploreMapWindow(){
	var win=Alloy.createController("cagisMap").getView();
	addWinToNavGroup(win);		
};

function openLocatorLocalListWindow(){
	var win=Alloy.createController("locatorLocalList").getView();
	addWinToNavGroup(win);	
};

function openLatestTweetsWindow(){
	alert('openLatestTweetsWindow');
};
function openApplicationInfoWindow(){
	alert('openApplicationInfoWindow');
};
function openCityFAQsWindow(){
	alert('openCityFAQsWindow');
};

function addWinToNavGroup(win){
	if (Alloy.Globals.usesNavGroup) {
		if (OS_MOBILEWEB) {
			Alloy.Globals.navgroup.open(win);
		} else {
			Alloy.Globals.navgroup.openWindow(win);
		}
	} else if (OS_ANDROID) {
		win.open();
	}			
}
// Free model-view data binding resources when this view-controller closes
$.master.addEventListener('close', function() {
    $.destroy();
});