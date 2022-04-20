import { DataStandard } from "../../../standard/data-standard.js";
import { IFieldFile } from "../../../lib/i-field-file.js";
import { DeclareProvider } from "./define.provider.js";
import { ServerControllerProvider } from "./controller.list.provider.js";



export class TSServerLocal_ListProvider {
    ITS!: IFieldFile;


    public get FileName(): string {

        console.log("BUG", window.ReqParameters["project.title"]);

        let title = window.ReqParameters["project.title"].split("").map((chk, i) => {
            if (chk.toLowerCase() == chk) return chk;
            if (i == 0) return chk.toLowerCase();
            return "-" + chk.toLowerCase();
        }).join("")
        return title
    }


    RenderApi() {

        new DataStandard().FixAllData();
        let R = new DeclareProvider()
        R.RowDifinitions = this.ITS.items.filter(k => k.mode == "field").map(k => `${k.name}:${k.type};`).join("\n       ");
        R.ModuleName = window.ReqParameters["project.title"];
        return R.GetProvider();
    }

    render() {

        var defaultControllerName = `${window.ReqParameters["project.title"]}Controller`;
        defaultControllerName = window.ReqParameters["server.controller.name"].trim();
        if (!defaultControllerName.endsWith("Controller")) defaultControllerName += "Controller";


        var filename = window.ReqParameters["server.localsave.filename"];
        if (filename.length == 0) filename = `${this.FileName}.json`
        if (!filename.endsWith(".json")) filename += ".json";


        var SXP = new ServerControllerProvider();
        SXP.defaultControllerName = defaultControllerName;
        SXP.filename = filename;
        SXP.UserAssignment = this.UserAssignment("        ", "nr", "Sended");
 
        return SXP.GetProvider();

    }
    UserAssignment(space: string, left: string, right: string) {
        const FillData: string[] = [];
        this.ITS.items.filter(k => k.mode == "field").forEach(info => {
            if (info.name == "row") return;
            if (info.name == "register") return;
            FillData.push(`${space}${left}.${info.name} = ${right}.${info.name};`)
        })

        return FillData.join("\n")
    }
}
