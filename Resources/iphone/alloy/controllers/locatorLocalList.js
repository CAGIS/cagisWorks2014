function Controller() {
    function __alloyId14(e) {
        if (e && e.fromAdapter) return;
        __alloyId14.opts || {};
        var models = __alloyId13.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId8 = models[i];
            __alloyId8.__transform = {};
            var __alloyId10 = Ti.UI.createTableViewRow({});
            rows.push(__alloyId10);
            var __alloyId12 = Ti.UI.createLabel({
                width: Ti.UI.SIZE,
                height: Ti.UI.SIZE,
                color: "#000",
                text: "undefined" != typeof __alloyId8.__transform["DESCRIPTION"] ? __alloyId8.__transform["DESCRIPTION"] : __alloyId8.get("DESCRIPTION")
            });
            __alloyId10.add(__alloyId12);
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
        title: "My Locations",
        id: "locatorLocalList"
    });
    $.__views.locatorLocalList && $.addTopLevelView($.__views.locatorLocalList);
    $.__views.TV_LocationMRU = Ti.UI.createTableView({
        id: "TV_LocationMRU"
    });
    $.__views.locatorLocalList.add($.__views.TV_LocationMRU);
    var __alloyId13 = Alloy.Collections["LocationMRU"] || LocationMRU;
    __alloyId13.on("fetch destroy change add remove reset", __alloyId14);
    exports.destroy = function() {
        __alloyId13.off("fetch destroy change add remove reset", __alloyId14);
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