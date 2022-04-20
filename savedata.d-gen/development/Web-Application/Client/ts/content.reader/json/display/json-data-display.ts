import { IFieldFile } from "../../../lib/i-field-file.js"

export class JsonDataDisplay {
    DisplayJson(EData: IFieldFile) {
        console.log("DISPLAY JSON");
        
        var pre = document.createElement("pre");
        pre.className = "output-code";
        var obj = {} as { [x: string]: any }
        EData.items.forEach(k => {
        //    if (k.type == "number") { obj[k.name] = 999; return; }
            obj[k.name] = k.type;
        })
        pre.textContent = JSON.stringify(obj, null, " ");

        this.container.appendChild(pre)

        var pre = document.createElement("pre");
        pre.className = "output-code";
        
        pre.textContent = JSON.stringify(EData, null, " ");

        this.container.appendChild(pre)
    }

    preview: HTMLElement;
    container: HTMLElement;
    constructor() {
        this.preview = document.querySelector("#json-preview") as HTMLElement;
        this.preview.classList.remove("hide")

        this.container = document.querySelector("#json-preview-container") as HTMLElement;
        this.container.innerHTML = "";
    }
}
