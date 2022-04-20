import { StandardName } from "../../standard/standard-name";

export class FormHandlerProvider {
    formname!: string;
    formID: any;
     
    DIF!: string[];
    InitText!: string[];
    constructorA!: string[];
    LoadDataRows !: string[];
    FillDataRows !: string[];
    GetProvider(): string {
        const ns = new StandardName();
        return [
           
            `//> ${this.formID}.handler.ts`,
            "",
            `import {  ${ns.IStoreItem} } from "${ns.ModuleName}";`,
            //`import { handleFormSubmit } from "./handle-form-data";`,
            "",
            `export class ${ns.EditorHandler} {`,
            "",
            `     config = { method: "POST", mvc: "/home/index/", path: "1" ,  request : "item/create" };`,
            "",
            `    ${this.DIF.join("\n")}`,
            "",
            `    ServerSendItem(item: ${ns.IStoreItem}) {`,
            `       return {`,
            `           path: this.config.path,`,
            `           request: this.config.request,`,
            `           token: "0",`,
            `           data: btoa(unescape(encodeURIComponent(JSON.stringify(item)))),`,
            `       }`,
            `    };`,
            "",
            `    constructor(){`,
            "",
            `    ${this.InitText.join("\n    ")}`,
            "",
            `    ${this.constructorA.join("\n    ")}`,
            `    }`,
            "",
            `    set formitem(passitm:${ns.IStoreItem}){  `,
            `    ${this.LoadDataRows.join("\n    ")}`,
            `    }`,
            "",
            `             `,
            `    get formitem(): ${ns.IStoreItem} {`,
            `       return this.FillItem({} as ${ns.IStoreItem});`,
            `    }`,
            "",
            `    FillItem(itm: ${ns.IStoreItem}) {`,
            `       ${this.FillDataRows.join("\n    ")}`,
            `       return itm;`,
            "    }",
            `   checkvalidation() {`,
            `       return true;`,
            `   }`,
            `                `,
            `   async submit() {`,
            "",
            "       if (!this.checkvalidation()) {",
            "           console.error(\"Validation Rule Error\");",
            "           return;",
            "       }",
            "",
            `      const url = this.config.mvc`,
            "",
            `      const formDataJsonString = JSON.stringify(this.ServerSendItem(this.formitem));`,
            "",
            `      const fetchOptions = {`,
            `          method: this.config.method,`,
            `          headers: {`,
            `              "Content-Type": "application/json",`,
            `              Accept: "application/json",`,
            `          },`,
            `          body: formDataJsonString,`,
            `      };`,
            "",
            `       const response = await fetch(url, fetchOptions);`,
            "",
            `       if (!response.ok) {`,
            `          const errorMessage = await response.text();`,
            `          throw new Error(errorMessage);`,
            `       }`,
            "",
            `       var r = await response.text();`,
            `       console.log(r)`,
            `       return r;`,
            "",
            `    }`,
            "",
            `}`,
        ].join("\n")




    }
}