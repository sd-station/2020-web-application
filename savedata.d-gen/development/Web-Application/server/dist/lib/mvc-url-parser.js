"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.webrequest = exports.UrlParser = void 0;
class UrlParser {
    constructor(urlstring, method = "GET") {
        this.Item = {};
        this.Assign(urlstring, method);
    }
    get idsupported() {
        if (this.Item.ID)
            return (this.Item.ID != "0");
        return false;
    }
    get id() {
        return this.Item.ID;
    }
    get Action() {
        return this.Item.Action;
    }
    get Controller() {
        return this.Item.Controller;
    }
    Assign(urlstring, method = "GET") {
        if (urlstring.startsWith("/"))
            urlstring = urlstring.substring(1);
        var urls = urlstring.toLowerCase().split("/");
        urls.forEach((p, i) => {
            switch (i) {
                case 0:
                    if (p.length == 0)
                        this.Item.Controller = "home";
                    this.Item.Controller = p;
                    return;
                case 1:
                    if (p.length == 0)
                        this.Item.Action = "index";
                    this.Item.Action = p;
                    return;
                case 2:
                    if (p.length == 0)
                        this.Item.ID = "0";
                    this.Item.ID = p;
                    return;
                default:
                    break;
            }
        });
        if (method == "POST")
            this.Item.Method = webrequest.POST;
        if (method == "GET")
            this.Item.Method = webrequest.GET;
    }
}
exports.UrlParser = UrlParser;
var webrequest;
(function (webrequest) {
    webrequest[webrequest["GET"] = 0] = "GET";
    webrequest[webrequest["POST"] = 1] = "POST";
})(webrequest = exports.webrequest || (exports.webrequest = {}));
//# sourceMappingURL=mvc-url-parser.js.map