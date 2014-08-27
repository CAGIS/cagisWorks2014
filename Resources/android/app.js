var Alloy = require("alloy"), _ = Alloy._, Backbone = Alloy.Backbone;

Alloy.Globals.top = 0;

Alloy.Globals.tableTop = "50dp";

try {} catch (e) {}

Alloy.Globals.mapContext = "location";

Alloy.Globals.cagapp = {
    webMapURL: "http://cagisonline.hamilton-co.org/CagisOnline/maps/mobilemap.html",
    geoDomain: "https://cagismaps.hamilton-co.org/",
    geoVirtualDir: "CagisGeoWebServicesV2010/",
    csrDomain: "https://cagismaps.hamilton-co.org/",
    csrVirtualDir: "CSRWebServices/",
    csrRecordDomain: "http://cagisperm.hamilton-co.org/",
    csrRecordDir: "cincsr/search/"
};

Alloy.Collections.instance("LocationMRU");

Alloy.createController("index");