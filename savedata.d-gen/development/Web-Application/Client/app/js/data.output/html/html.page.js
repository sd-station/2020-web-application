import { ComponentLoader } from "../../main-window/ComponentLoader.js";
import { DisplayHtmlRaw } from "../../display-data/html/html-raw.js";
import { ExportForHtmlRaw } from "./export-for-html-raw.js";
export class HtmlPage {
    async Initialize_Component() {
        if (window.EData.items.length == 0)
            return;
        let mainarticle = document.querySelector("#main-article");
        mainarticle.innerHTML = "";
        await new ComponentLoader(`workspace-html`).AsContentFor(mainarticle);
        var htmlData = new ExportForHtmlRaw(window.EData).ExportForHtml();
        new DisplayHtmlRaw().show(htmlData);
    }
}
//# sourceMappingURL=html.page.js.map