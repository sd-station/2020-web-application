export class DeclareProvider {
    GetProvider() {
        return [
            "/**" + " USE: Recieve Data From Client For Creating */",
            `declare module "${this.ModuleName}-api" {`,
            `   export interface I${window.ReqParameters["project.title"].replace(/\-/g, "_")}{`,
            `       ${this.RowDifinitions}`,
            "   }",
            "",
            "   /**" + " USE: Store Data And Return Answer */",
            `   export interface IStore${window.ReqParameters["project.title"].replace(/\-/g, "_")} extends I${window.ReqParameters["project.title"].replace(/\-/g, "_")}{`,
            "       irn:number;",
            "       rtm:number;",
            "       utm?:number;",
            "   }",
            "}",
        ].join("\n");
    }
}
//# sourceMappingURL=define.provider.js.map