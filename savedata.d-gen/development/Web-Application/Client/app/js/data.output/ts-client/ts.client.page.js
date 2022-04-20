import { ComponentLoader } from "../../main-window/ComponentLoader.js";
import { ExportForHtmlRaw } from "../html/export-for-html-raw.js";
import { PrismHighlighter } from "../../theme/prism-Highlighter.js";
import { display_typescript_interface } from "../../content.reader/typescript/client-handler/display/typescript-interface.js";
export class TSClientPage {
    async Initialize_Component() {
        //>> Clear Main Frame
        window.ui.mainframe.innerHTML = "";
        //>> Load Interface
        await new ComponentLoader(`workspace-typescript`).AsContentFor(window.ui.mainframe);
        var tsinfo = new display_typescript_interface(window.EData).show();
        var htmlData = new ExportForHtmlRaw(window.EData).ExportForHtml();
        var HtmlFRM = document.querySelector("#export-ts-form-provider");
        var Fprovider = document.createElement("pre");
        Fprovider.className = "output-code";
        Fprovider.innerHTML = new PrismHighlighter().HighlightTypescript(tsinfo.GetProvider(htmlData));
        HtmlFRM.appendChild(Fprovider);
    }
}
//# sourceMappingURL=ts.client.page.js.map