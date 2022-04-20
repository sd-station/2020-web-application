import { ExportTs } from "../../content.reader/typescript/client-handler/provider/export-type-script.js";
import { PrismHighlighter } from "../../theme/prism-Highlighter.js";
import { OutputCodeItem } from "../../content.display/lib/output-code-item.js";
export class display_typescript_interface {
    constructor(EData) {
        this.EData = EData;
    }
    show() {
        var tsprovider = new ExportTs();
        tsprovider.GetTypescript(this.EData);
        var tsDEC = new OutputCodeItem();
        tsDEC.Container = document.querySelector(".type-box");
        tsDEC.Content = new PrismHighlighter().HighlightTypescript(tsprovider.DeclareText);
        var tsHand = new OutputCodeItem();
        tsHand.Container = document.querySelector("#export-ts-form-handler");
        tsHand.Content = new PrismHighlighter().HighlightTypescript(tsprovider.HandlerText);
        return tsprovider;
    }
}
//# sourceMappingURL=typescript-interface.js.map