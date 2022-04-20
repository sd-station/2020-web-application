import { JsonDataDisplay } from "../json/display/json-data-display.js";
import { TypeScriptDataAnalyzer } from "./data-analyzer/typescript-data-analyzer.js";
import { ServerDataDisplay } from "./local-server/display/server-data.display.js";
import { TSServerLocal_ListProvider } from "../../content.writer/ts-server/local-list/ts-server-local-list.provider.js";
import { CodeBlock } from "../../display-data/lib/code-block.js";
export class TSIndex {
    Analyze(doc) {
        console.log("Analyze");
        //>> Analyzing Data
        var TSS = new TypeScriptDataAnalyzer();
        TSS.GetData(doc);
        let EData = TSS.Edata;
        //>> Display Json
        new JsonDataDisplay().DisplayJson(EData);
        //>> Provide Server
        var Sdp = new TSServerLocal_ListProvider();
        Sdp.ITS = EData;
        //>> Display Server Api
        document.querySelector("#localstore-server-api")
            .appendChild(new CodeBlock(Sdp.RenderApi(), "typescript").element);
        //>> Display Server Controller
        var k = new ServerDataDisplay();
        k.DisplayServer(Sdp.render());
    }
}
//# sourceMappingURL=ts-index.js.map