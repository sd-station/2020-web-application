"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerEnv = void 0;
const http_1 = require("http");
const url_standard_1 = require("./lib/url-standard");
const env_reader_1 = require("./lib/env-reader");
const static_content_handler_1 = require("./lib/static-content-handler");
exports.ServerEnv = env_reader_1.EnvReader();
http_1.createServer(function (req, res) {
    var url = url_standard_1.UrlPath(decodeURIComponent(req.url));
    if (url.startsWith("/ts/") || url.startsWith("/less/")) {
        url = "../../" + url;
    }
    // Customize Url Proccesing
    if (url.endsWith("/"))
        url += "index.html";
    if (url.endsWith(".html"))
        url = `/html${url}`;
    //>> Last Try
    new static_content_handler_1.StaticContentHandler(req, res).SendFile(exports.ServerEnv.dir + url);
}).listen(process.env.PORT || exports.ServerEnv.port);
//# sourceMappingURL=server.js.map