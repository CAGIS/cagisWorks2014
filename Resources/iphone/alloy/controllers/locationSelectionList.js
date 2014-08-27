function Controller() {
    function onLocationSelected(e) {
        Ti.API.info("triggering .locselected" + JSON.stringify(e.row));
        var addrSelLocObj = JSON.parse(JSON.stringify(e.row));
        Ti.App.fireEvent("locselected", {
            data: addrSelLocObj
        });
        $.locationSelectionList.close();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "locationSelectionList";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.locationSelectionList = Ti.UI.createWindow({
        backgroundColor: "#fff",
        layout: "vertical",
        id: "locationSelectionList"
    });
    $.__views.locationSelectionList && $.addTopLevelView($.__views.locationSelectionList);
    $.__views.locListTableView = Ti.UI.createTableView({
        top: Alloy.Globals.top,
        id: "locListTableView"
    });
    $.__views.locationSelectionList.add($.__views.locListTableView);
    onLocationSelected ? $.__views.locListTableView.addEventListener("click", onLocationSelected) : __defers["$.__views.locListTableView!click!onLocationSelected"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    exports.setTableViewData = function(_tableData) {
        $.locListTableView.setData(_tableData);
        Ti.API.info("exports.setTableViewData");
    };
    __defers["$.__views.locListTableView!click!onLocationSelected"] && $.__views.locListTableView.addEventListener("click", onLocationSelected);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;