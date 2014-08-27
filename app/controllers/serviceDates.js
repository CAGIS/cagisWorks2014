var args = arguments[0] || {};
var serviceDatesProcessing=require('serviceDatesProcessing');

var locObj={
 	"cagaddressid":"00010BROAD0601617000",
 	"address":"1617 BROADWAY",
 	"addressWCity":"1617 BROADWAY, CINC",
 	"cagjuris":"CINC",
 	"cagjurisName":"CINCINNATI","cagrecid":"00860002036801617B",
 	"aliasflg":"",
 	"isInterpolatedRecord":false,"I_Parity":"","I_addmastr_X":"","I_addmastr_Y":"","I_addr_RightLeftSide":"","
 	LocatorType":7,"StreetNameID":"BROAD06","StreetSegmentFID":"HAM50903","StreetSegmentID":"3368506153033685351848","USState":"OH",
 	"buildingid":"GJ1536132284","cagaddressstatus":"ASSIGNED","cagaddresstype":"BLD","
 	caggroupparcelid":"008600020368","cagparcelid":"008600020368","cagplace":"",
 	"cagstreetname":"BROADWAY","cagstreetsuffix":"","cityid":"CINC","condoflg":"","countyCode":"HAM",
 	"floor":"","multiunit":"","BLDG_LinkType":"",
 	"originallocation":"","streetdir":"","streetfrac":"","streetno":"1617","streetnoSFX":"",
 	"tanAssetID":"S-HAM50903","unitid":"","usngcode":"GJ1536132284",
 	"x_coord":"1398488.795060","y_coord":"411760.4230",
 	"x_intp":"1398525.9880","y_intp":"411757.626240",
 	
 	"zipcode":"45202"
}
$.lbl_serviceLocation.text='Location: ' + locObj.addressWCity
serviceDatesProcessing.getCombinedServicesfromServer($,locObj.cagaddressid);
