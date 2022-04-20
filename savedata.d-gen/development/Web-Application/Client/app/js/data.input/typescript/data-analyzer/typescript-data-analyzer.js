import { IFieldRow } from "../../../lib/i-field-data.js";
import { IFieldFile } from "../../../lib/i-field-file.js";
export class TypeScriptDataAnalyzer {
    constructor() {
        this.Edata = new IFieldFile();
    }
    GetData(value) {
        console.log("a");
        var lines = value.split(/,|;|{|}/);
        lines.forEach(dta => {
            if (dta.trim().startsWith("interface")) {
                var locald = dta.TextAfter("interface").trim();
                if (locald.startsWith("I"))
                    locald = locald.substring(1);
                window.ReqParameters["project.title"] = locald;
            }
            if (dta.indexOf(":") > 0) {
                var k = dta.split(":").map(o => o.trim());
                var h = new IFieldRow();
                h.mode = "field";
                h.name = k[0];
                h.type = k[1];
                this.Edata.items.push(h);
            }
        });
    }
}
//# sourceMappingURL=typescript-data-analyzer.js.map