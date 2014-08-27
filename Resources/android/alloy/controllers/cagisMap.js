function Controller() {
    function __alloyId7() {
        $.__views.cagisMap.removeEventListener("open", __alloyId7);
        if ($.__views.cagisMap.activity) $.__views.cagisMap.activity.onCreateOptionsMenu = function(e) {
            var __alloyId5 = {
                showAsAction: Ti.Android.SHOW_AS_ACTION_ALWAYS,
                icon: Ti.Android.R.drawable.ic_menu_preferences,
                id: "item1",
                title: "Settings"
            };
            $.__views.item1 = e.menu.add(_.pick(__alloyId5, Alloy.Android.menuItemCreateArgs));
            $.__views.item1.applyProperties(_.omit(__alloyId5, Alloy.Android.menuItemCreateArgs));
            var __alloyId6 = {
                showAsAction: Ti.Android.SHOW_AS_ACTION_ALWAYS,
                icon: Ti.Android.R.drawable.ic_menu_search,
                id: "item2",
                title: "Search"
            };
            $.__views.item2 = e.menu.add(_.pick(__alloyId6, Alloy.Android.menuItemCreateArgs));
            $.__views.item2.applyProperties(_.omit(__alloyId6, Alloy.Android.menuItemCreateArgs));
        }; else {
            Ti.API.warn("You attempted to attach an Android Menu to a lightweight Window");
            Ti.API.warn("or other UI component which does not have an Android activity.");
            Ti.API.warn("Android Menus can only be opened on TabGroups and heavyweight Windows.");
        }
    }
    function closeKeyboard(e) {
        e.source.blur();
        LocationFromString();
    }
    function LocationFromString() {
        var locationString = $.locField.value;
        if ("" == locationString) return;
        locSearchCalls.getLocationFromString(locationString);
    }
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
    var __defers = {};
    $.__views.cagisMap = Ti.UI.createWindow({
        backgroundColor: "#000",
        layout: "vertical",
        navBarHidden: "false",
        title: "CAGIS Map",
        backButtonTitle: "",
        id: "cagisMap"
    });
    $.__views.cagisMap && $.addTopLevelView($.__views.cagisMap);
    $.__views.cagisMap.addEventListener("open", __alloyId7);
    $.__views.locField = Ti.UI.Android.createSearchView({
        height: "43dp",
        showCancel: "true",
        width: "75%",
        id: "locField",
        ns: Ti.UI.Android,
        hintText: "Enter Location"
    });
    $.__views.cagisMap.add($.__views.locField);
    closeKeyboard ? $.__views.locField.addEventListener("submit", closeKeyboard) : __defers["$.__views.locField!submit!closeKeyboard"] = true;
    $.__views.cagMapWebView = Ti.UI.createWebView({
        height: Ti.UI.FILL,
        width: Ti.UI.FILL,
        borderRadius: "1",
        id: "cagMapWebView",
        url: "/webViews/local_webview.html",
        touchEnabled: "false",
        willHandleTouches: "false"
    });
    $.__views.cagisMap.add($.__views.cagMapWebView);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var locSearchCalls = require("locationSearchProcessing");
    locSearchCalls.parentController = $;
    if (true && Ti.Platform.Android.API_LEVEL >= 11) {
        var search = Alloy.createController("searchView").getView();
        $.cagisMap.addEventListener("open", function() {
            $.cagisMap.activity.onCreateOptionsMenu = function(e) {
                e.menu.add({
                    title: "Table Search",
                    icon: Ti.Android.R.drawable.ic_menu_search ? Ti.Android.R.drawable.ic_menu_search : "my_search.png",
                    actionView: search,
                    showAsAction: Ti.Android.SHOW_AS_ACTION_ALWAYS | Ti.Android.SHOW_AS_ACTION_COLLAPSE_ACTION_VIEW
                });
            };
            $.cagisMap.activity.invalidateOptionsMenu();
        });
    }
    Ti.App.addEventListener("locselected", onLocationSelection);
    $.on("close", function() {
        Ti.App.removeEventListener("locselected", onLocationSelection);
    });
    __defers["$.__views.locField!submit!closeKeyboard"] && $.__views.locField.addEventListener("submit", closeKeyboard);
    __defers["$.__views.locField!return!closeKeyboard"] && $.__views.locField.addEventListener("return", closeKeyboard);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;