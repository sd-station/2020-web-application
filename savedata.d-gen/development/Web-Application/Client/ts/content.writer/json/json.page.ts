import { ComponentLoader } from "../../main-window/ComponentLoader.js";
import { JsonDataDisplay } from "../../content.reader/json/display/json-data-display.js"

export class JsonPage {
    async Initialize_Component() {
        let mainarticle = document.querySelector("#main-article") as HTMLElement;
        mainarticle.innerHTML = "";
        await new ComponentLoader(`workspace-json`).AsContentFor(mainarticle);

        
        new JsonDataDisplay().DisplayJson(window.EData);
    }
}
