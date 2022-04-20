import { JsonDataDisplay } from "../json/display/json-data-display.js";
import { TypeScriptDataAnalyzer } from "./data-analyzer/typescript-data-analyzer.js";
import { ServerStoreLocal } from "./local-server/display/api.js";
import { ServerDataDisplay } from "./local-server/display/server-data.display.js";
import { ServerDataProvider } from "./local-server/provider/server-data.provider.js";
export class TSIndex {
    Analyze(doc) {
        //>> Analyzing Data
        var TSS = new TypeScriptDataAnalyzer();
        TSS.GetData(doc);
        let EData = TSS.Edata;
        //>> Display Json
        new JsonDataDisplay().DisplayJson(EData);
        //>> Provide Server
        var Sdp = new ServerDataProvider();
        Sdp.ITS = EData;
        //>> Display Server Api
        new ServerStoreLocal().show(Sdp.RenderApi());
        //>> Display Server Controller
        var k = new ServerDataDisplay();
        k.DisplayServer(Sdp.render());
    }
}
//# sourceMappingURL=ts-index.js.map