"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnvReader = void 0;
const fs_1 = require("fs");
function EnvReader() {
    var c = {
        dir: ".",
        port: 8182,
        runtime: new Date().getTime(),
        data: "../data"
    };
    if (fs_1.existsSync("server.json")) {
        var lc = JSON.parse(fs_1.readFileSync("server.json").toString());
        var ckeys = Object.keys(c);
        Object.keys(lc).forEach(lckey => {
            if (ckeys.indexOf(lckey) >= 0)
                c[lckey] = lc[lckey];
        });
    }
    return c;
}
exports.EnvReader = EnvReader;
//# sourceMappingURL=env-reader.js.map