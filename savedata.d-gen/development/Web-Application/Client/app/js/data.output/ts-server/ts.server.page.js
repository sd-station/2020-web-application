import { ComponentLoader } from "../../main-window/ComponentLoader.js";
import { ServerStoreLocal } from "../../content.reader/typescript/local-server/display/api.js";
import { ServerDataDisplay } from "../../content.reader/typescript/local-server/display/server-data.display.js";
import { ServerDataProvider } from "../../content.reader/typescript/local-server/provider/server-data.provider.js";
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