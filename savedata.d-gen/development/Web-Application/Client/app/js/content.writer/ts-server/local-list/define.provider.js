import { StandardName } from "../../../standard/standard-name";
export class DeclareProvider {
    GetProvider() {
        const ns = new StandardName();
        return [
            "/**" + " USE: Recieve Data From Client For Creating */",
            `declare module "${ns.ModuleName}" {`,
            `   export interface ${ns.IStoreItem} extends ${ns.IItemBase} ,IStoreEnumerable{`,
            `       //>> Define Methods And Customize`,
            "",
            "   }",
            `   export interface ${ns.IItemBase}{`,
            `       ${this.RowDifinitions}`,
            "   }",
            "",
            "   /**" + " USE: Store Data And Return Answer */",
            `   export interface IStoreEnumerable{`,
            "       sid:number;",
            "       sct:number;",
            "       sut?:number;",
            "   }",
            "}",
        ].join("\n");
    }
}
//# sourceMappingURL=define.provider.js.map