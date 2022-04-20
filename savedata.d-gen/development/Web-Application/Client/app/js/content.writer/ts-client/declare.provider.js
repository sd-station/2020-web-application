export class DeclareProvider {
    GetProvider() {
        return [
            `//> ${this.formID}.api.d.ts`,
            `/* Lowercase for Send to Use In json */`,
            `declare module "${this.formID}-api"{`,
            `    export interface I${this.formname}{`,
            `        ${this.DataContent.join("\n    ")}`,
            `    }`,
            `}     `,
        ].join("\n");
    }
}
//# sourceMappingURL=declare.provider.js.map