import { ComponentLoader } from "../../main-window/ComponentLoader.js";
import { TSServerLocal_ListProvider } from "./local-list/ts-server-local-list.provider.js";
import { CodeBlock } from "../../display-data/lib/code-block.js";
import { TS_Server_Local_Item } from "./local-item/ts-server-local-item.init.js";
export class TSServerPage {
    async Initialize_Component(mode) {
        let mainarticle = document.querySelector("#main-article");
        mainarticle.innerHTML = "";
        await new ComponentLoader(`workspace-server`).AsContentFor(mainarticle);
        if (mode == "table-item") {
            var Sdp = new TSServerLocal_ListProvider();
            Sdp.ITS = window.EData;
            document.querySelector("#localstore-server-api")
                .appendChild(new CodeBlock(Sdp.RenderApi(), "typescript").element);
            document.querySelector("#server-preview-container")
                .appendChild(new CodeBlock(Sdp.render(), "typescript").element);
        }
        if (mode == "single-item") {
            var SdpS = new TS_Server_Local_Item();
            SdpS.ITS = window.EData;
            document.querySelector("#localstore-server-api")
                .appendChild(new CodeBlock(SdpS.RenderApi(), "typescript").element);
            document.querySelector("#server-preview-container")
                .appendChild(new CodeBlock(SdpS.render(), "typescript").element);
        }
    }
}
//# sourceMappingURL=ts.server.page.js.map