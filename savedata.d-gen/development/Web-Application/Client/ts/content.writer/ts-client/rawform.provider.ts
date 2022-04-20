export class RawFormProvider {
    formname!: string;
    rawtext!: string;
    GetProvider(): string {
        return [
            `export class frm${this.formname}Provider {`,
            "    render() {",
            "        return \`",
            this.rawtext.replace(/ \>/g, ">"),
            "        \`",
            "    }",
            "}"
        ].join("\n")


    }
}