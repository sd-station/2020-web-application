import { StandardName } from "../../standard/standard-name";
export class FormUsageProvider {
    GetProvider() {
        const ns = new StandardName();
        return [
            `import { ${ns.EditorHandler} } from "./${ns.EditorHandlerFileName}";`,
            `export class ${ns.Editor} extends ${ns.EditorHandler} {`,
            `   constructor() {`,
            `       super();`,
            `       this.config.method = "POST"`,
            `       this.config.mvc = "/api/v1/${ns.namespace}/edit"`,
            `       this.config.path = "1/1"`,
            `   }`,
            "",
            `   //** Override */`,
            `   checkvalidation(){`,
            `       return false;`,
            `   }`,
            "",
            `}`,
        ].join("\n");
    }
}
//# sourceMappingURL=form-usage.provider.js.map