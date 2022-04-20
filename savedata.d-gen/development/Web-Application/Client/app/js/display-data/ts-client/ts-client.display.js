import { TypeScriptForClient } from "../../content.writer/ts-client/typescript-for-client.js";
import { CodeBlock } from "../lib/code-block.js";
export class display_typescript_interface {
    show(EData) {
        var tsprovider = new TypeScriptForClient();
        tsprovider.GetTypescript(EData);
        document.querySelector("#export-ts-form-handler")
            .appendChild(new CodeBlock(tsprovider.HandlerText, "typescript").element);
        document.querySelector("#export-ts-form-usage")
            .appendChild(new CodeBlock(tsprovider.UsageText, "typescript").element);
        return tsprovider;
    }
}
//# sourceMappingURL=ts-client.display.js.map