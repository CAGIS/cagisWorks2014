function Controller() {
    function __alloyId16(e) {
        if (e && e.fromAdapter) return;
        __alloyId16.opts || {};
        var models = __alloyId15.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId10 = models[i];
            __alloyId10.__transform = {};
            var __alloyId12 = Ti.UI.createTableViewRow({});
            rows.push(__alloyId12);
            var __alloyId14 = Ti.UI.createLabel({
                width: Ti.UI.SIZE,
                height: Ti.UI.SIZE,
                color: "#000",
                font: {
                    fontSize: "18dp"
                },
                text: "undefined" != typeof __alloyId10.__transform["DESCRIPTION"] ? __alloyId10.__transform["DESCRIPTION"] : __alloyId10.get("DESCRIPTION")
            });
            __alloyId12.add(__alloyId14);
        }
        $.__views.TV_LocationMRU.setData(rows);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "locatorLocalList";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.locatorLocalList = Ti.UI.createWindow({
        backgroundColor: "#fff",
        layout: "vertical",
        navBarHidden: true,
        title: "My Locations",
        id: "locatorLocalList"
    });
    $.__views.locatorLocalList && $.addTopLevelView($.__views.locatorLocalList);
    $.__views.TV_LocationMRU = Ti.UI.createTableView({
        id: "TV_LocationMRU"
    });
    $.__views.locatorLocalList.add($.__views.TV_LocationMRU);
    var __alloyId15 = Alloy.Collections["LocationMRU"] || LocationMRU;
    __alloyId15.on("fetch destroy change add remove reset", __alloyId16);
    exports.destroy = function() {
        __alloyId15.off("fetch destroy change add remove reset", __alloyId16);
    };
    _.extend($, $.__views);
    arguments[0] || {};
    Alloy.Collections.LocationMRU && Alloy.Collections.LocationMRU.fetch();
    $.locatorLocalList.addEventListener("close", function() {
        $.destroy();
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;