function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "CopycagisMap";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.CopycagisMap = Ti.UI.createWindow({
        backgroundColor: "#fff",
        layout: "vertical",
        title: "CAGIS Map",
        modal: "true",
        backButtonTitle: "",
        id: "CopycagisMap"
    });
    $.__views.CopycagisMap && $.addTopLevelView($.__views.CopycagisMap);
    $.__views.header = Ti.UI.createView({
        id: "header"
    });
    $.__views.CopycagisMap.add($.__views.header);
    var __alloyId2 = [];
    $.__views.send = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        id: "send",
        title: "Address Goes Here"
    });
    __alloyId2.push($.__views.send);
    $.__views.__alloyId3 = Ti.UI.createButton({
        systemButton: Ti.UI.iPhone.SystemButton.FLEXIBLE_SPACE
    });
    __alloyId2.push($.__views.__alloyId3);
    $.__views.Favorites = Ti.UI.createButton({
        id: "Favorites",
        systemButton: Ti.UI.iPhone.SystemButton.BOOKMARKS
    });
    __alloyId2.push($.__views.Favorites);
    $.__views.__alloyId4 = Ti.UI.createButton({
        systemButton: Ti.UI.iPhone.SystemButton.FLEXIBLE_SPACE
    });
    __alloyId2.push($.__views.__alloyId4);
    $.__views.Choose = Ti.UI.createButton({
        id: "Choose",
        systemButton: Ti.UI.iPhone.SystemButton.DONE
    });
    __alloyId2.push($.__views.Choose);
    $.__views.__alloyId0 = Ti.UI.iOS.createToolbar({
        items: __alloyId2,
        bottom: "0",
        borderTop: "true",
        borderBottom: "false",
        id: "__alloyId0"
    });
    $.__views.header.add($.__views.__alloyId0);
    $.__views.locField = Ti.UI.createSearchBar({
        id: "locField",
        value: "1617 b",
        hintText: "Enter Location"
    });
    $.__views.CopycagisMap.add($.__views.locField);
    closeKeyboard ? $.__views.locField.addEventListener("return", closeKeyboard) : __defers["$.__views.locField!return!closeKeyboard"] = true;
    $.__views.cagMapWebView = Ti.UI.createWebView({
        id: "cagMapWebView",
        url: "/webViews/local_webview.html",
        willHandleTouches: "false"
    });
    $.__views.CopycagisMap.add($.__views.cagMapWebView);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.locField!return!closeKeyboard"] && $.__views.locField.addEventListener("return", closeKeyboard);
    __defers["$.__views.locField!submit!closeKeyboard"] && $.__views.locField.addEventListener("submit", closeKeyboard);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;