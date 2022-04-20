import { IFieldRow } from "../../../lib/i-field-data.js";
import { IFieldFile } from "../../../lib/i-field-file.js";
export class HtmlDataAnalyzer {
    constructor() {
        this.Edata = new IFieldFile();
    }
    GetFromHtml(linesR) {
        var doc = new DOMParser().parseFromString(linesR, "text/html");
        var frm = doc.querySelector("form");
        if (frm) {
            var ifr = new IFieldRow();
            ifr.html.Tag = "form";
            if (frm.id)
                ifr.html.id = frm.id;
            var legend = doc.querySelector("legend");
            if (legend)
                ifr.html.content = legend.textContent;
            if (ifr.html.id.length == 0)
                ifr.html.id = ifr.html.content.toLowerCase().replace(/\ /g, "-");
            this.Edata.items;
            this.Edata.items.push(ifr);
        }
        doc.querySelectorAll("input").forEach(el => {
            var ifr = new IFieldRow();
            ifr.html.Tag = "input";
            if (el.id)
                ifr.html.id = el.id;
            this.Edata.items.push(ifr);
            return;
        });
    }
}
//# sourceMappingURL=html-data-analyzer.js.map