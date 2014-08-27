function Controller() {
    function onLocationSelection(_e) {
        Ti.API.info("onLocationSelection" + JSON.stringify(_e));
        var SelLocObj = _e.data;
        Ti.API.info("The current location object: " + JSON.stringify(SelLocObj));
        setAddressInMap(SelLocObj);
        locSearchCalls.storeLocationMRU(SelLocObj);
    }
    function setAddressInMap(addrSelLocObj) {
        var xCoord = 0;
        var yCoord = 0;
        void 0 !== addrSelLocObj.IntersectionX && (xCoord = addrSelLocObj.IntersectionX);
        void 0 !== addrSelLocObj.IntersectionY && (yCoord = addrSelLocObj.IntersectionY);
        void 0 !== addrSelLocObj.x_coord && (xCoord = addrSelLocObj.x_coord);
        void 0 !== addrSelLocObj.y_coord && (yCoord = addrSelLocObj.y_coord);
        Ti.API.info("setAddressInMap: " + JSON.stringify({
            toX: xCoord,
            toY: yCoord,
            mapContext: Alloy.Globals.mapContext,
            zoom: true
        }));
        Ti.App.fireEvent("map.centerAndZoom", {
            toX: xCoord,
            toY: yCoord,
            mapContext: Alloy.Globals.mapContext,
            zoom: true
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "cagisMap";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.cagisMap = Ti.UI.createWindow({
        backgroundColor: "#fff",
        layout: "vertical",
        title: "CAGIS Map",
        modal: "true",
        backButtonTitle: "",
        id: "cagisMap"
    });
    $.__views.cagisMap && $.addTopLevelView($.__views.cagisMap);
    $.__views.cagMapWebView = Ti.UI.createWebView({
        id: "cagMapWebView",
        url: "/webViews/local_webview.html",
        willHandleTouches: "false"
    });
    $.__views.cagisMap.add($.__views.cagMapWebView);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var locSearchCalls = require("locationSearchProcessing");
    locSearchCalls.parentController = $;
    Ti.App.addEventListener("locselected", onLocationSelection);
    $.on("close", function() {
        Ti.App.removeEventListener("locselected", onLocationSelection);
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;