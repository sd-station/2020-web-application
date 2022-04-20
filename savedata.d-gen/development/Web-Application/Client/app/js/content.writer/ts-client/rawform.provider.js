export class RawFormProvider {
    GetProvider() {
        return [
            `export class frm${this.formname}Provider {`,
            "    render() {",
            "        return \`",
            this.rawtext.replace(/ \>/g, ">"),
            "        \`",
            "    }",
            "}"
        ].join("\n");
    }
}
//# sourceMappingURL=rawform.provider.js.map