"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Result = void 0;
class ResponseResult {
    constructor(res) {
        this.Res = res;
    }
    DevelopmentMode() {
        if (__dirname.indexOf("\\dist") > 0) {
            this.Res.setHeader("Access-Control-Allow-Origin", "*");
            this.Res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
            this.Res.setHeader("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
        }
    }
    RedirectResult(newlink) {
        if (this.Res.writableEnded)
            return;
        this.Res.statusCode = 302;
        this.Res.setHeader('Location', newlink);
        this.Res.end();
        return;
    }
    StringResult(arg) {
        if (this.Res.writableEnded)
            return;
        if (typeof arg != "string") {
            arg = JSON.stringify(arg, null, " ");
        }
        this.Res.setHeader('Content-Type', "text/plain");
        this.Res.end(arg);
        return;
    }
    Origin() {
        this.Res.setHeader("Access-Control-Allow-Origin", "*");
        return this;
    }
    Status(code) {
        this.Res.statusCode = code.status;
        this.Res.statusMessage = code.msg;
        return this;
    }
}
exports.Result = ResponseResult;
//# sourceMappingURL=result.js.map