import { ExportTs } from "../provider/export-type-script.js";
import { PrismHighlighter } from "../../../../theme/prism-Highlighter.js";
export class display_typescript_interface {
    constructor(EData) {
        this.EData = EData;
    }
    show() {
        var TSDeclare = document.querySelector(".type-box");
        var TSHandler = document.querySelector("#export-ts-form-handler");
        [TSDeclare, TSHandler].forEach(bx => {
            bx.innerHTML = "";
            bx.classList.remove("hide");
        });
        var tsprovider = new ExportTs();
        tsprovider.GetTypescript(this.EData);
        var tsDEC = document.createElement("pre");
        tsDEC.className = "output-code";
        tsDEC.innerHTML = new PrismHighlighter().HighlightTypescript(tsprovider.DeclareText);
        TSDeclare.appendChild(tsDEC);
        var tsHand = document.createElement("pre");
        tsHand.className = "output-code";
        tsHand.innerHTML += new PrismHighlighter().HighlightTypescript(tsprovider.HandlerText);
        TSHandler.appendChild(tsHand);
        return tsprovider;
    }
}
//# sourceMappingURL=typescript-interface.js.map