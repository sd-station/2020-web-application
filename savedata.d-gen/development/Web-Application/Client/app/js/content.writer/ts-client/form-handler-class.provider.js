export class FormUsageProvider {
    GetProvider() {
        return [
            `export class Formhandler extends FormhandlerBase {`,
            `   constructor() {`,
            `       super();`,
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
//# sourceMappingURL=form-handler-class.provider.js.map