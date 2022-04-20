import { ComponentLoader } from "../../main-window/ComponentLoader.js";
import { PrismHighlighter } from "../../theme/prism-Highlighter.js";
export class NavLibraryPage {
    async Initialize_Component() {
        let mainarticle = document.querySelector("#main-article");
        mainarticle.innerHTML = "";
        await new ComponentLoader(`lib-typescript`).AsContentFor(mainarticle);
        mainarticle.querySelectorAll("pre").forEach((pre, i) => {
            var converted = new PrismHighlighter().HighlightTypescript(pre.innerHTML);
            pre.innerHTML = converted.replace(/\&amp;/g, "&");
        });
    }
}
//# sourceMappingURL=help.page.js.map