import { StandardName } from "../../../standard/standard-name";
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
        const ns = new StandardName();
        return [
            `import { existsSync, readFileSync, writeFileSync } from "fs";`,
            `import { ServerResponse } from "http";`,
            `import { ISendData } from "send-date-api";`,
            `import { Controller } from "../lib/controller";`,
            `import { ${ns.IItemBase}, ${ns.IStoreItem} } from "${ns.ModuleName}";`,
            "",
            `export class  ${this.defaultControllerName} extends Controller {`,
            "",
            `     Data = {} as ${ns.IStoreItem};`,
            "",
            "    constructor(res: ServerResponse) {",
            "        super(res);",
            `        this.FileName = "${this.filename}"; `,
            "    }",
            "",
            "    Get(url: string) {",
            `        this.LoadData(url);`,
            "        if (existsSync(this.FullName)) this.Result.StringResult(readFileSync(this.FullName).toString());",
            `        else{`,
            "            var datafile  = {} as  IStoresite_setting;",
            `            ${this.DefaultAssignment("            ", "datafile")}`,
            "            datafile.generate = new Date().getTime();",
            "            this.Result.StringResult(datafile);",
            "        }",
            "    }",
            "",
            `    Edit(id: number,data: ISendData) {`,
            `        var Sended = this.Decode(data.data) as ${ns.IStoreItem};`,
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
//# sourceMappingURL=controller.item.provider.js.map