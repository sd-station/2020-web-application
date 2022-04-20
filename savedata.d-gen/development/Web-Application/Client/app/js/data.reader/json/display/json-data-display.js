export class JsonDataDisplay {
    constructor() {
        this.preview = document.querySelector("#json-preview");
        this.preview.classList.remove("hide");
        this.container = document.querySelector("#json-preview-container");
        this.container.innerHTML = "";
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
        pre.textContent = JSON.stringify(obj, null, " ");
        this.container.appendChild(pre);
        var pre = document.createElement("pre");
        pre.className = "output-code";
        pre.textContent = JSON.stringify(EData, null, " ");
        this.container.appendChild(pre);
    }
}
//# sourceMappingURL=json-data-display.js.map