export class StandardName {
    constructor() {
        this.ModuleName = `${window.ReqParameters["project.title"]}-api`;
        var SN = this.CreateName();
        this.IItemBase = `IF${SN}`;
        this.IStoreItem = `I` + SN;
        this.EditorFileName = `${window.ReqParameters["project.title"]}.edit`;
        this.Editor = `${SN}Editor`;
        this.EditorHandlerFileName = `${window.ReqParameters["project.title"]}.edit.handler`;
        this.EditorHandler = `${SN}EditorHandler`;
    }
    CreateName() {
        this.namespace = window.ReqParameters["project.title"]; //.replace(/\-/g, "_")
        if (!this.namespace || this.namespace.length == 0)
            return "UnNamed";
        var inpg = this.namespace;
        return inpg.split("-").map(h => {
            if (h.length > 1)
                return h[0].toUpperCase() + h.substring(1);
            return h.toUpperCase();
        }).join("");
    }
}
//# sourceMappingURL=standard-name.js.map