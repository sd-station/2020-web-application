import { ComponentLoader } from "../../main-window/ComponentLoader.js";
import { ExportForHtmlRaw } from "../html/export-for-html-raw.js";
import { PrismHighlighter } from "../../theme/prism-Highlighter.js";
import { display_typescript_interface } from "../../display-data/ts-client/ts-client.display.js";
import { RawFormProvider } from "./rawform.provider.js";
export class TSClientPage {
    async Initialize_Component() {
        //>> Clear Main Frame
        window.ui.mainframe.innerHTML = "";
        //>> Load Interface
        await new ComponentLoader(`workspace-typescript`).AsContentFor(window.ui.mainframe);
        var tsinfo = new display_typescript_interface().show(window.EData);
        var htmlData = new ExportForHtmlRaw(window.EData).ExportForHtml();
        var HtmlFRM = document.querySelector("#export-ts-form-provider");
        var Fprovider = document.createElement("pre");
        Fprovider.className = "output-code";
        var m = new RawFormProvider();
        m.formname = tsinfo.formname;
        m.rawtext = htmlData;
        Fprovider.innerHTML = new PrismHighlighter().HighlightTypescript(m.GetProvider());
        HtmlFRM.appendChild(Fprovider);
    }
}
//# sourceMappingURL=ts.client.page.js.map