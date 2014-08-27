var args = arguments[0] || {};
//fetch MRU data
Alloy.Collections.LocationMRU && Alloy.Collections.LocationMRU.fetch();

function addTestMRU(){
	var testItem=Alloy.Collections.LocationMRU.get('testMRU');
	if(!testItem){
		testItem=Alloy.createModel('LocationMRU',{'id':'testMRU','DESCRIPTION':'Test MRU Item by RC','json_obj':'{x:1,y:2,z:3}'});
		testItem.save();
	}
	
}
//addTestMRU();
// Free model-view data binding resources when this view-controller closes
$.locatorLocalList.addEventListener('close', function() {
    $.destroy();
});