export class ServerControllerProvider {
    Assignment(space, left, right) {
        const FillData = [];
        window.EData.items.filter(k => k.mode == "field").forEach(info => {
            if (info.name == "generate")
                return;
            if (info.name == "update")
                return;
            FillData.push(`${space}${left}.${info.name} = ${right}.${info.name};`);
        });
        return FillData.join("\n");
    }
    DefaultAssignment(space, left) {
        const FillData = [];
        window.EData.items.filter(k => k.mode == "field").forEach(info => {
            if (info.name == "generate")
                return;
            if (info.name == "update")
                return;
            FillData.push(`${left}.${info.name} = "";`);
        });
        return FillData.join(`\n${space}`);
    }
    GetProvider() {
        const apinamespace = `${window.ReqParameters["project.title"]}-api`;
        const IItem = `I` + window.ReqParameters["project.title"].replace(/\-/g, "_");
        const IStoreItem = `IStore` + window.ReqParameters["project.title"].replace(/\-/g, "_");
        return [
            `import { existsSync, readFileSync, writeFileSync } from "fs";`,
            `import { ServerResponse } from "http";`,
            `import { join } from "path";`,
            `import { ISendData } from "send-date-api";`,
            `import { Controller } from "../lib/controller";`,
            `import { Directory } from "../lib/directory";`,
            `import { ServerEnv } from "../server";`,
            `import { ${IItem}, ${IStoreItem} } from "${apinamespace}";`,
            "",
            `export class  ${this.defaultControllerName} extends Controller {`,
            "",
            `     Data = {} as ${IStoreItem};`,
            "",
            "    constructor(res: ServerResponse) {",
            "        super(res);",
            `        this.FileName = "${this.filename}"; `,
            "    }",
            "",
            "    LoadData(path: string) {",
            `        this.FullName = join(ServerEnv.data, ...path.split("/").filter(i => i.length > 0), this.FileName).replace(/\//g, "\\");`,
            "        if (existsSync(FullName)) this.Data = JSON.parse(readFileSync(FullName).toString());",
            "    }",
            "",
            "    SaveData() {",
            "        if (!existsSync(this.FullName)) new Directory().MakeExist(this.FullName);",
            "        writeFileSync(this.FullName, JSON.stringify(this.Data));",
            "    }",
            "",
            "    Get(url: string) {",
            `        var path = join(ServerEnv.data, ...url.split("/").filter(i => i.length > 0), this.FileName);`,
            "        if (existsSync(path)) this.Result.StringResult(readFileSync(path).toString());",
            `        else{`,
            "            var datafile  = {} as  IStoresite_setting;",
            `            ${this.DefaultAssignment("            ", "datafile")}`,
            "            datafile.generate = new Date().getTime();",
            "            this.Result.StringResult(datafile);",
            "        }",
            "    }",
            "",
            `    Edit(id: number,data: ISendData) {`,
            `        var Sended = this.Decode(data.data) as ${IStoreItem};`,
            `        this.LoadData(data.path);`,
            `        //> System Assignment `,
            `        this.Data.update = new Date().getTime();`,
            `        //> User Assignment `,
            `${this.Assignment("        ", "this.Data", "Sended")}`,
            `    `,
            `        this.SaveData();`,
            `        return true;`,
            `    }`,
            "",
            "}"
        ].join("\n");
    }
}
//# sourceMappingURL=controller.list.provider.js.map