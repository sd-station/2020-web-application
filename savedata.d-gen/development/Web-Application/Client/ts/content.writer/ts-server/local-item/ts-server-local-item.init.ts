import { DataStandard } from "../../../standard/data-standard.js";
import { IFieldFile } from "../../../lib/i-field-file.js";
import { DeclareProvider } from "./define.provider.js";
import { ServerControllerProvider } from "./controller.item.provider.js";



export class TS_Server_Local_Item {
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
   

        return SXP.GetProvider();

    }
    
}
