import { ComponentLoader } from "../../main-window/ComponentLoader.js";
import { ServerStoreLocal } from "../../data.input/typescript/local-server/display/api.js";
import { ServerDataDisplay } from "../../data.input/typescript/local-server/display/server-data.display.js";
import { ServerDataProvider } from "../../data.input/typescript/local-server/provider/server-data.provider.js";
export class TSServerPage {
    async Initialize_Component() {
        let mainarticle = document.querySelector("#main-article");
        mainarticle.innerHTML = "";
        await new ComponentLoader(`workspace-server`).AsContentFor(mainarticle);
        var Sdp = new ServerDataProvider();
        Sdp.ITS = window.EData;
        new ServerStoreLocal().show(Sdp.RenderApi());
        new ServerDataDisplay().DisplayServer(Sdp.render());
    }
}
//# sourceMappingURL=ts.server.page.js.map