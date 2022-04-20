import { StandardName } from "../../../standard/standard-name";

export class DeclareProvider {
    RowDifinitions!: string;
    ModuleName!: string;

    GetProvider(): string {
        const ns = new StandardName();
        return [
            "/**" + " USE: Recieve Data From Client For Creating */",
            `declare module "${ns.ModuleName}" {`,
            `   export interface ${ns.IItemBase} {`,
            `       ${this.RowDifinitions}`,
            "   }",
            "",
            "   /**" + " USE: Store Data And Return Answer */",
            `   export interface ${ns.IStoreItem} extends ${ns.IItemBase} {`,
            "       generate:number;",
            "       update:number;",
            "   }",
            "}",
        ].join("\n")




    }
}