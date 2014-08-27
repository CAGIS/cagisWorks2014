function Controller() {
    function doClick() {
        alert($.labeltop.text);
    }
    function openReportCSRWindow() {
        alert("openReportCSRWindow");
    }
    function openServiceDatesWindow() {
        var win = Alloy.createController("serviceDates").getView();
        addWinToNavGroup(win);
    }
    function openExploreMapWindow() {
        var win = Alloy.createController("cagisMap").getView();
        addWinToNavGroup(win);
    }
    function openLocatorLocalListWindow() {
        var win = Alloy.createController("locatorLocalList").getView();
        addWinToNavGroup(win);
    }
    function openLatestTweetsWindow() {
        alert("openLatestTweetsWindow");
    }
    function openApplicationInfoWindow() {
        alert("openApplicationInfoWindow");
    }
    function openCityFAQsWindow() {
        alert("openCityFAQsWindow");
    }
    function addWinToNavGroup(win) {
        Alloy.Globals.usesNavGroup && Alloy.Globals.navgroup.openWindow(win);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "master";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.master = Ti.UI.createWindow({
        backgroundColor: "#fff",
        layout: "vertical",
        title: "City Hall",
        id: "master"
    });
    $.__views.master && $.addTopLevelView($.__views.master);
    $.__views.labeltop = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "Hello, World",
        id: "labeltop"
    });
    $.__views.master.add($.__views.labeltop);
    doClick ? $.__views.labeltop.addEventListener("click", doClick) : __defers["$.__views.labeltop!click!doClick"] = true;
    $.__views.openReportCSRWindow = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "Request Services",
        id: "openReportCSRWindow"
    });
    $.__views.master.add($.__views.openReportCSRWindow);
    openReportCSRWindow ? $.__views.openReportCSRWindow.addEventListener("click", openReportCSRWindow) : __defers["$.__views.openReportCSRWindow!click!openReportCSRWindow"] = true;
    $.__views.openServiceDatesWindow = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "Service Dates",
        id: "openServiceDatesWindow"
    });
    $.__views.master.add($.__views.openServiceDatesWindow);
    openServiceDatesWindow ? $.__views.openServiceDatesWindow.addEventListener("click", openServiceDatesWindow) : __defers["$.__views.openServiceDatesWindow!click!openServiceDatesWindow"] = true;
    $.__views.openExploreMapWindow = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "Explore Map",
        id: "openExploreMapWindow"
    });
    $.__views.master.add($.__views.openExploreMapWindow);
    openExploreMapWindow ? $.__views.openExploreMapWindow.addEventListener("click", openExploreMapWindow) : __defers["$.__views.openExploreMapWindow!click!openExploreMapWindow"] = true;
    $.__views.openLatestTweetsWindow = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "Latest Tweets",
        id: "openLatestTweetsWindow"
    });
    $.__views.master.add($.__views.openLatestTweetsWindow);
    openLatestTweetsWindow ? $.__views.openLatestTweetsWindow.addEventListener("click", openLatestTweetsWindow) : __defers["$.__views.openLatestTweetsWindow!click!openLatestTweetsWindow"] = true;
    $.__views.openApplicationInfoWindow = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "My Info",
        id: "openApplicationInfoWindow"
    });
    $.__views.master.add($.__views.openApplicationInfoWindow);
    openApplicationInfoWindow ? $.__views.openApplicationInfoWindow.addEventListener("click", openApplicationInfoWindow) : __defers["$.__views.openApplicationInfoWindow!click!openApplicationInfoWindow"] = true;
    $.__views.openCityFAQsWindow = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "City FAQs",
        id: "openCityFAQsWindow"
    });
    $.__views.master.add($.__views.openCityFAQsWindow);
    openCityFAQsWindow ? $.__views.openCityFAQsWindow.addEventListener("click", openCityFAQsWindow) : __defers["$.__views.openCityFAQsWindow!click!openCityFAQsWindow"] = true;
    $.__views.openLocatorLocalListWindow = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "Local Stored Locator List",
        id: "openLocatorLocalListWindow"
    });
    $.__views.master.add($.__views.openLocatorLocalListWindow);
    openLocatorLocalListWindow ? $.__views.openLocatorLocalListWindow.addEventListener("click", openLocatorLocalListWindow) : __defers["$.__views.openLocatorLocalListWindow!click!openLocatorLocalListWindow"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    Alloy.Collections.LocationMRU && Alloy.Collections.LocationMRU.fetch();
    $.master.addEventListener("close", function() {
        $.destroy();
    });
    __defers["$.__views.labeltop!click!doClick"] && $.__views.labeltop.addEventListener("click", doClick);
    __defers["$.__views.openReportCSRWindow!click!openReportCSRWindow"] && $.__views.openReportCSRWindow.addEventListener("click", openReportCSRWindow);
    __defers["$.__views.openServiceDatesWindow!click!openServiceDatesWindow"] && $.__views.openServiceDatesWindow.addEventListener("click", openServiceDatesWindow);
    __defers["$.__views.openExploreMapWindow!click!openExploreMapWindow"] && $.__views.openExploreMapWindow.addEventListener("click", openExploreMapWindow);
    __defers["$.__views.openLatestTweetsWindow!click!openLatestTweetsWindow"] && $.__views.openLatestTweetsWindow.addEventListener("click", openLatestTweetsWindow);
    __defers["$.__views.openApplicationInfoWindow!click!openApplicationInfoWindow"] && $.__views.openApplicationInfoWindow.addEventListener("click", openApplicationInfoWindow);
    __defers["$.__views.openCityFAQsWindow!click!openCityFAQsWindow"] && $.__views.openCityFAQsWindow.addEventListener("click", openCityFAQsWindow);
    __defers["$.__views.openLocatorLocalListWindow!click!openLocatorLocalListWindow"] && $.__views.openLocatorLocalListWindow.addEventListener("click", openLocatorLocalListWindow);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;