import { HtmlFormat } from "../../content.reader/html/format/html-format.js";
import { HtmlCodeProvider } from "./provider/html-code-provider.js";
export class ExportForHtmlRaw {
    constructor(EData) {
        this.EData = EData;
    }
    ExportForHtml() {
        var preview = new HtmlCodeProvider(this.EData).GetHtmlData(null);
        var rawtext = preview.split("\n").map(p => p.trimStart()).join("\n");
        rawtext = new HtmlFormat().format(rawtext);
        return rawtext;
    }
}
//# sourceMappingURL=export-for-html-raw.js.map