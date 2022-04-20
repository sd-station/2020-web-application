export class DeclareProvider {
    GetProvider() {
        return [
            "/**" + " USE: Recieve Data From Client For Creating */",
            `declare module "${this.ModuleName}-api" {`,
            `   export interface I${window.ReqParameters["project.title"]}{`,
            `       ${this.RowDifinitions}`,
            "   }",
            "",
            "   /**" + " USE: Store Data And Return Answer */",
            `   export interface IStore${window.ReqParameters["project.title"]} extends I${window.ReqParameters["project.title"]}{`,
            "       irn:number;",
            "       rtm:number;",
            "       utm?:number;",
            "   }",
            "}",
        ].join("\n");
    }
}
//# sourceMappingURL=define.provider.1.js.map