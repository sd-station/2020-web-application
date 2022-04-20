import { ComponentLoader } from "../../main-window/ComponentLoader.js";
import { JsonDataDisplay } from "../../data.input/json/display/json-data-display.js";
export class JsonPage {
    async Initialize_Component() {
        let mainarticle = document.querySelector("#main-article");
        mainarticle.innerHTML = "";
        await new ComponentLoader(`workspace-json`).AsContentFor(mainarticle);
        new JsonDataDisplay().DisplayJson(window.EData);
    }
}
//# sourceMappingURL=json.page.js.map