export class DeclareProvider {
    GetProvider() {
        return [
            `//> ${this.formID}.api.d.ts`,
            `/* Lowercase for Send to Use In json */`,
            `declare module "${this.formID}-api"{`,
            "/**" + " Use to Create Or Edit And Send Data To Server */",
            `    export interface I${this.formname}{`,
            `        ${this.DataContent.join("\n    ")}`,
            `    }`,
            `}`,
        ].join("\n");
    }
}
//# sourceMappingURL=define.provider.js.map