export class ServerDataProvider {
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
        let R = [
            "/** USE: Recieve Data From Client For Creating */",
            `export interface I${window.ReqParameters["project.title"]}{`,
            `${this.ITS.items.filter(k => k.mode == "field").map(k => `    ${k.name}:${k.type};`).join("\n")}`,
            "}",
            "",
            "/** USE: Store Data And Return Answer */",
            `export interface IStore${window.ReqParameters["project.title"]} extends I${window.ReqParameters["project.title"]}{`,
            "    irn:number;",
            "    rtm:number;",
            "    utm?:number;",
            "}",
        ].join("\n");
        return R;
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
        return [
            "",
            `export class  ${defaultControllerName} implements IController {`,
            "",
            `    FileName = "${filename}"; `,
            `    Data: IStore${window.ReqParameters["project.title"]}[] = [];`,
            "    FullPath!: string;",
            "",
            "    GetNewRowNumber(): number {",
            "        return 1 + (this.Data.length > 0 ? this.Data[this.Data.length - 1].irn : 0);",
            "    }",
            "",
            "    LoadData(FullPath: string) {",
            `        this.FullPath = FullPath.replace(/\\//g, "\\\\");`,
            "        if (existsSync(FullPath)) this.Data = JSON.parse(readFileSync(FullPath).toString());",
            "    }",
            "",
            "    SaveData() {",
            "        if (!existsSync(this.FullPath)) {",
            "           new Directory().MakeExist(this.FullPath);",
            "        }",
            "        writeFileSync(this.FullPath, JSON.stringify(this.Data));",
            "    }",
            "",
            "    Get(url: string) {",
            `        var path = join(ServerEnv.data, ...url.split("/").filter(i => i.length > 0), this.FileName);`,
            "        if (existsSync(path)) new Result().SendText(readFileSync(path).toString());",
            `        else new Result().SendText("[]");`,
            "    }",
            "",
            "    Create(data: ISendData) {",
            `        var decodetext = Buffer.from(data.data, 'base64').toString();`,
            `        var Sended = JSON.parse(decodetext) as I${window.ReqParameters["project.title"]};`,
            "        this.LoadData(join(ServerEnv.data, data.path, this.FileName));",
            `        var nr = {} as IStore${window.ReqParameters["project.title"]};`,
            "        //> System Assignment ",
            "        nr.irn = this.GetNewRowNumber();",
            "        nr.rtm = new Date().getTime();",
            "        //> User Assignment ",
            `${this.UserAssignment("        ", "nr", "Sended")}`,
            "        this.Data.push(nr);",
            "        this.SaveData();",
            `        new Result().SendText("ok");`,
            "    }",
            "",
            `    Edit(id: number,data: ISendData) {`,
            `        var decodetext = Buffer.from(data.data, 'base64').toString();`,
            `        var Sended = JSON.parse(decodetext) as ITaskItem;`,
            `        this.LoadData(join(ServerEnv.data, data.path, this.FileName));`,
            `        var nr = this.Data.find(h => h.irn == id);`,
            `        if (!nr) return false;`,
            `        //> System Assignment `,
            `        nr.utm = new Date().getTime();`,
            `        //> User Assignment `,
            `${this.UserAssignment("        ", "nr", "Sended")}`,
            `    `,
            `        this.SaveData();`,
            `        return true;`,
            `    }`,
            "",
            "    OnPost(command: string, data: ISendData) {",
            `        if (command.startsWith("create")) this.Create(data);`,
            `        if (command.startsWith("edit")) {`,
            `             var mvc = data.request.split("/").filter(u => u.trim().length > 0);`,
            "            if (mvc.length < 3) { new Result().StatusResult(HTTPStatus.BAD_REQUEST); return; }",
            `            if (this.Edit(parseInt(mvc[2]), data)) new Result().SendText("ok"); else new Result().StatusResult(HTTPStatus.BAD_REQUEST)`,
            "        }",
            "    }",
            "",
            "    OnGet(command: string,) {",
            "        this.Get(command);",
            "    }",
            "}",
        ].join("\n");
    }
    UserAssignment(space, left, right) {
        const FillData = [];
        this.ITS.items.filter(k => k.mode == "field").forEach(info => {
            if (info.name == "irn")
                return;
            if (info.name == "rtm")
                return;
            FillData.push(`${space}${left}.${info.name} = ${right}.${info.name};`);
        });
        return FillData.join("\n");
    }
}
//# sourceMappingURL=server-data.provider.js.map