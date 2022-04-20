import { DataStandard } from "../../../data/data-standard.js";
import { DeclareProvider } from "./define.provider.js";
import { ServerControllerProvider } from "./server-controller.provider.js";
export class TS_Server_Local_Item {
    get FileName() {
        console.log("BUG", window.ReqParameters["project.title"]);
        let title = window.ReqParameters["project.title"].split("").map((chk, i) => {
            if (chk.toLowerCase() == chk)
                return chk;
            if (i == 0)
                return chk.toLowerCase();
            return "-" + chk.toLowerCase();
        }).join("");
        return title;
    }
    RenderApi() {
        new DataStandard().FixAllData();
        let R = new DeclareProvider();
        R.RowDifinitions = this.ITS.items.filter(k => k.mode == "field").map(k => `${k.name}:${k.type};`).join("\n       ");
        R.ModuleName = window.ReqParameters["project.title"];
        return R.GetProvider();
    }
    render() {
        var defaultControllerName = `${window.ReqParameters["project.title"]}Controller`;
        defaultControllerName = window.ReqParameters["server.controller.name"].trim();
        if (!defaultControllerName.endsWith("Controller"))
            defaultControllerName += "Controller";
        var filename = window.ReqParameters["server.localsave.filename"];
        if (filename.length == 0)
            filename = `${this.FileName}.json`;
        if (!filename.endsWith(".json"))
            filename += ".json";
        var SXP = new ServerControllerProvider();
        SXP.defaultControllerName = defaultControllerName;
        SXP.filename = filename;
        SXP.UserAssignment = this.UserAssignment("        ", "nr", "Sended");
        return SXP.GetProvider();
    }
    UserAssignment(space, left, right) {
        const FillData = [];
        this.ITS.items.filter(k => k.mode == "field").forEach(info => {
            if (info.name == "generate")
                return;
            if (info.name == "update")
                return;
            FillData.push(`${space}${left}.${info.name} = ${right}.${info.name};`);
        });
        return FillData.join("\n");
    }
}
//# sourceMappingURL=ts-server-local-item.js.map