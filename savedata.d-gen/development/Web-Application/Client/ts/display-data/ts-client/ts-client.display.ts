import { TypeScriptForClient } from "../../content.writer/ts-client/typescript-for-client.js"
import { IFieldFile } from "../../lib/i-field-file.js"
import { PrismHighlighter } from "../../theme/prism-Highlighter.js";
import { CodeBlock } from "../lib/code-block.js";

export class display_typescript_interface {

    show(EData: IFieldFile) {

        var tsprovider = new TypeScriptForClient();
        tsprovider.GetTypescript(EData);

       
        (document.querySelector("#export-ts-form-handler")as HTMLElement)
        .appendChild(new CodeBlock(tsprovider.HandlerText,"typescript").element);

        (document.querySelector("#export-ts-form-usage")as HTMLElement)
        .appendChild(new CodeBlock(tsprovider.UsageText,"typescript").element);


        return tsprovider;
    }
}
