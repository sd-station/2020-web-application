"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StaticContentHandler = void 0;
const fs_1 = require("fs");
const mimetype_1 = require("./mimetype");
const result_1 = require("./result");
class StaticContentHandler {
    constructor(req, res) {
        this.Req = req;
        this.Res = res;
    }
    SendFile(url) {
        if (this.Res.writableEnded)
            return;
        fs_1.readFile(url, (err, data) => {
            //Error Parsing
            if (err) {
                if (fs_1.existsSync(url + ".js")) {
                    new result_1.Result(this.Res).RedirectResult(this.Req.url + ".js");
                    return;
                }
                this.Res.writeHead(404, { "Content-Type": "text/plain" });
                this.Res.write(err + "\n");
                this.Res.end();
                return;
            }
            //File Parsing
            //  this.Res.setHeader('Cache-Control', 'max-age=3600');
            this.Res.writeHead(200, { 'Content-Type': mimetype_1.GetMimeType(url) });
            this.Res.end(data);
            return;
        });
    }
}
exports.StaticContentHandler = StaticContentHandler;
//# sourceMappingURL=static-content-handler.js.map