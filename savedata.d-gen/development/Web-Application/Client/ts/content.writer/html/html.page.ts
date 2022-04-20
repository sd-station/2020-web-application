import { ComponentLoader } from "../../main-window/ComponentLoader.js";
import { DisplayHtmlRaw } from "../../display-data/html/html-raw.js"
import { ExportForHtmlRaw } from "./export-for-html-raw.js"
import { JsonDataDisplay } from "../../content.reader/json/display/json-data-display.js"

export class HtmlPage {
    async Initialize_Component() {
        if (window.EData.items.length == 0) return;

        let mainarticle = document.querySelector("#main-article") as HTMLElement;
        mainarticle.innerHTML = "";
        await new ComponentLoader(`workspace-html`).AsContentFor(mainarticle);

        console.log("HTML PAGE CALL");

        var htmlData = new ExportForHtmlRaw(window.EData).ExportForHtml();
        new DisplayHtmlRaw().show(htmlData)

    }
}
