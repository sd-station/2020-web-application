import { IFieldFile } from "../../lib/i-field-file";
export class ReqParametersClass {
    constructor() {
        this["project.title"] = "";
        this["server.controller.name"] = "";
        this["server.localsave.filename"] = "";
    }
}
export class ActionClass {
    constructor() {
        this.InvokeList = {};
    }
    Invoke() {
        Object.values(this.InvokeList).forEach(FN => FN());
    }
}
export class ActionCollection {
    constructor() {
        this.OnDocumentChange = new ActionClass();
    }
}
export function SetupWindow() {
    window.ReqParameters = new ReqParametersClass();
    window.EData = new IFieldFile();
    window.Actions = new ActionCollection();
}
//# sourceMappingURL=data.api.js.map