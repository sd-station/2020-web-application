import { ComponentLoader } from "../../main-window/ComponentLoader.js";
export class HelpPage {
    async Initialize_Component() {
        let mainarticle = document.querySelector("#main-article");
        mainarticle.innerHTML = "";
        await new ComponentLoader(`help`).AsContentFor(mainarticle);
    }
}
//# sourceMappingURL=help.page.js.map