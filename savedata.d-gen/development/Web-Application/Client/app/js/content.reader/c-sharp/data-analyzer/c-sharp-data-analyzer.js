import { IFieldRow } from "../../../lib/i-field-data.js";
import { IFieldFile } from "../../../lib/i-field-file.js";
export class CsharpDataAnalyzer {
    constructor() {
        this.Edata = new IFieldFile();
    }
    GetFromCSharp(linesR) {
        linesR.forEach(ln => {
            var h = new IFieldRow();
            h.name = ln;
            var types = ["int", "string"];
            types.forEach(tp => {
                if (ln.indexOf(tp) >= 0) {
                    h.name = ln.substring(ln.indexOf(tp) + tp.length).trim().split(" ")[0];
                    h.html.id = h.name;
                    h.type = tp;
                    if (tp == "int")
                        h.html.tag = "number";
                }
            });
            this.Edata.items.push(h);
        });
        return this;
    }
}
//# sourceMappingURL=c-sharp-data-analyzer.js.map