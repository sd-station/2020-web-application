import { IFieldFile } from "../../../../lib/i-field-file.js"
import { PrismHighlighter } from "../../../../theme/prism-Highlighter.js"

 
export class ServerDataDisplay {
    DisplayServer(arg0: string) {
        console.log("DISPLAY SERVER");
        var pre = document.createElement("pre");
        pre.className = "output-code";
        pre.innerHTML = new PrismHighlighter().HighlightJavascript(arg0);
        this.container.appendChild(pre)
    }
    DisplayJson(EData: IFieldFile) {
        console.log("DISPLAY JSON");

        var pre = document.createElement("pre");
        pre.className = "output-code";
        var obj = {} as { [x: string]: any }
        EData.items.forEach(k => {
            //    if (k.type == "number") { obj[k.name] = 999; return; }
            obj[k.name] = k.type;
        })
        pre.textContent =  new PrismHighlighter().HighlightJavascript(JSON.stringify(obj, null, " "));  

        this.container.appendChild(pre)
     }

    preview: HTMLElement;
    container: HTMLElement;
    constructor() {
        this.preview = document.querySelector("#server-preview") as HTMLElement;
        this.preview.classList.remove("hide")

        this.container = document.querySelector("#server-preview-container") as HTMLElement;
        this.container.innerHTML = "";
    }
}
