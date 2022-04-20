import { PrismHighlighter } from "../../../../theme/prism-Highlighter.js";
export class ServerDataDisplay {
    constructor() {
        this.preview = document.querySelector("#server-preview");
        this.preview.classList.remove("hide");
        this.container = document.querySelector("#server-preview-container");
        this.container.innerHTML = "";
    }
    DisplayServer(arg0) {
        console.log("DISPLAY SERVER");
        var pre = document.createElement("pre");
        pre.className = "output-code";
        pre.innerHTML = new PrismHighlighter().HighlightJavascript(arg0);
        this.container.appendChild(pre);
    }
    DisplayJson(EData) {
        console.log("DISPLAY JSON");
        var pre = document.createElement("pre");
        pre.className = "output-code";
        var obj = {};
        EData.items.forEach(k => {
            //    if (k.type == "number") { obj[k.name] = 999; return; }
            obj[k.name] = k.type;
        });
        pre.textContent = new PrismHighlighter().HighlightJavascript(JSON.stringify(obj, null, " "));
        this.container.appendChild(pre);
    }
}
//# sourceMappingURL=server-data.display.js.map