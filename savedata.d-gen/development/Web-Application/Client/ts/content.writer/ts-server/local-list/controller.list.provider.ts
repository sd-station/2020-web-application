import { StandardName } from "../../../standard/standard-name";

export class ServerControllerProvider {

    defaultControllerName!: string;
    filename !: string;
    UserAssignment!: string;

    GetProvider(): string {

        const ns = new StandardName();

        return [

            `import { existsSync, readFileSync  } from "fs";`,
            `import { ServerResponse } from "http";`,
            `import { ISendData } from "send-date-api";`,
            `import { EnumerableItemController } from "../lib/controller";`,
            `import { HTTPStatus } from "../lib/http-status";`,

            `import { ${ns.IItemBase}, ${ns.IStoreItem} } from "${ns.ModuleName}";`,
            "",
            `export class  ${this.defaultControllerName} extends Controller {`,
            "",

            `    Data = [] as ${ns.IStoreItem}[];`,
            "",

            // "    GetNewIdentityNumber(): number {",
            // "        return 1 + (this.Data.length > 0 ? this.Data[this.Data.length - 1].sid : 0);",
            // "    }",
            // "",

            "    constructor(res: ServerResponse) {",
            "        super(res);",
            `        this.FileName = "${this.filename}"; `,
            "    }",
            "",


            "    Index(url: string) {",
            `        this.LoadData(url);`,
            "        if (existsSync(this.FullName)) this.Result.StringResult(readFileSync(this.FullName).toString());",
            `        else this.Result.StringResult("[]");`,
            "    }",
            "",
            "    Create(data: ISendData) {",
            "        this.LoadData(data.path);",

            `        var decodetext = Buffer.from(data.data, 'base64').toString();`,
            `        var Sended = JSON.parse(decodetext) as ${ns.IItemBase};`,

            `        var nr = {} as ${ns.IStoreItem};`,
            "        //> System Assignment ",
            "        nr.sid = this.GetNewIdentityNumber();",
            "        nr.sct = new Date().getTime();",
            "        //> User Assignment ",
            `${this.UserAssignment}`,
            "        this.Data.push(nr);",
            "        this.SaveData();",
            `        this.Result.StringResult("ok");`,
            "    }",
            "",
            `    Edit(id: number,data: ISendData) {`,
            `        this.LoadData(data.path);`,
            `        var decodetext = Buffer.from(data.data, 'base64').toString();`,
            `        var Sended = JSON.parse(decodetext) as ${ns.IStoreItem}`,
            `        var nr = this.Data.find(h => h.sid == id);`,
            `        if (!nr) return false;`,
            `        //> System Assignment `,
            `        nr.sut = new Date().getTime();`,
            `        //> User Assignment `,
            `${this.UserAssignment}`,
            `    `,
            `        this.SaveData();`,
            `        return true;`,
            `    }`,
            "",
            `    Delete(id: number, data: ISendData) {`,
            `        this.LoadData(data.path);`,
            `        var nr = this.Data.findIndex(h => h.sid == id);`,
            `        if (nr < 0) return false;`,
            `        this.Data.splice(nr,1);`,
            `        this.SaveData();`,
            `        return true;`,
            `    }`,

            // "    GET(command: string,) {",
            // "        this.Get(command);",
            // "    }",
            // "    POST(data: ISendData) {",
            // `        if (data.request.startsWith("create")) this.Create(data);`,
            // `        if (data.request.startsWith("edit")) {`,
            // `            var mvc = data.request.split("/").filter(u => u.trim().length > 0);`,
            // `            if (mvc.length < 2) {`,
            // `                this.Result.Status(HTTPStatus.BAD_REQUEST).StringResult("Bad Request");`,
            // `                return; `,
            // `            }`,
            // `            if (this.Edit(parseInt(mvc[1]), data))`,
            // `                this.Result.StringResult("ok");`,
            // `            else`,
            // `                this.Result.Status(HTTPStatus.BAD_REQUEST).StringResult("Bad Request");`,
            // "        }",
            // "    }",
            // "",
            // `    DELETE(data: ISendData) {`,
            // `        if (this.Delete(parseInt(data.data), data))`,
            // `            this.Result.StringResult("ok");`,
            // `        else`,
            // `            this.Result.Status(HTTPStatus.BAD_REQUEST).StringResult("Bad Request");`,
            // `    }`,


            "}"
        ].join("\n")




    }
}