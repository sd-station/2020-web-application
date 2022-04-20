"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetMimeType = void 0;
function GetMimeType(url) {
    if (url.endsWith(".txt"))
        return "text/plain";
    if (url.endsWith(".css"))
        return "text/css";
    if (url.endsWith(".js"))
        return "text/javascript";
    if (url.endsWith(".svg"))
        return "image/svg+xml";
    if (url.endsWith(".html"))
        return "text/html";
    if (url.endsWith(".less"))
        return "text/less";
    if (url.endsWith(".html"))
        return "text/html";
    if (url.endsWith(".ico"))
        return "image/x-icon";
    return "text/plain";
}
exports.GetMimeType = GetMimeType;
//# sourceMappingURL=mimetype.js.map