export class ExportTs {
    constructor() {
        this.keepinmind = "";
        this.formname = "FrmName";
    }
    GetProvider(rawtext) {
        return `
export class frm${this.formname}Provider {

    render() {
        return \`
${rawtext}\`
    }
}`;
    }
    standardName(HI) {
        if (HI.id.length == 0) {
            return "UnNamed";
        }
        var inpg = HI.id;
        if (HI.Tag == "form")
            this.keepinmind = inpg;
        if (HI.Tag == "input" && HI.id.startsWith(this.keepinmind)) {
            inpg = inpg.substring(this.keepinmind.length);
            if (inpg.startsWith("-"))
                inpg = inpg.substring(1);
        }
        return inpg.split("-").map(h => {
            if (h.length > 1)
                return h[0].toUpperCase() + h.substring(1);
            return h.toUpperCase();
        }).join("");
    }
    TagName(name) {
        if (name == "input")
            return "HTMLInputElement";
        if (name == "form")
            return "HTMLFormElement";
        if (name == "textarea")
            return "HTMLTextAreaElement";
        if (name == "select")
            return "HTMLSelectElement";
        return name;
    }
    GetTypescript(Data) {
        var formID = "frm-name";
        var DataContent = ["//>> Define"];
        var DIF = ["//>> Define"];
        var constructor = ["    //>> Initialize Component"];
        var constructorA = ["    //>> Send Data"];
        var FillData = ["    //>> Fill Data"];
        var SaveData = ["    //>> Save Data"];
        Data.items.filter(k => k.html.Tag == "form").forEach(row => {
            formID = row.html.id;
            this.formname = this.standardName(row.html);
            let tsname = `frm${this.formname}`;
            let tstype = `${this.TagName(row.html.Tag)}`;
            DIF.push(`    ${tsname}:${tstype};`);
            constructor.push(`    this.${tsname} = document.querySelector("#${row.html.id}") as ${tstype};`);
            constructorA.push(`
        this.${tsname}.addEventListener("submit", event => {
            event.preventDefault();
            this.submit();
        });
`);
        });
        Data.items.filter(k => ["input", "textarea", "select"].includes(k.html.Tag)).forEach(row => {
            if (row.name.length == 0)
                row.name = this.standardName(row.html).toLowerCase();
            let tsname = `txt${this.standardName(row.html)}`;
            let tstype = `${this.TagName(row.html.Tag)}`;
            DataContent.push(`    ${row.name}:${row.type};`);
            DIF.push(`    ${tsname}:${tstype};`);
            constructor.push(`    this.${tsname} = document.querySelector("#${row.html.id}") as ${tstype};`);
            FillData.push(`    this.${tsname}.value = passitm.${row.name} `);
            SaveData.push(`    frmdta.${row.name} = this.${tsname}.value `);
        });
        this.DeclareText = `
//> ${formID}.api.d.ts
/* Lowercase for Send to Use In json */
declare module "${formID}-api"{
    export interface I${this.formname}{
        ${DataContent.join("\n")}
    }
}    
        `;
        this.HandlerText = `
//> ${formID}.handler.ts
import { I${this.formname} } from "${formID}-api";
import { handleFormSubmit } from "./handle-form-data";
export class Formhandler {
    ${DIF.join("\n")}

    SendData!: ISendData = {
        path: "10/10/10",
        request: "slide/edit/" + slide,
        token: "0",
        data: "",
    };
    Request = { method: "get", url: "/slide" };

    constructor(){
    ${constructor.join("\n    ")}
    
    ${constructorA.join("\n    ")}
    }

    fill(passitm:I${this.formname}){  
    ${FillData.join("\n    ")}
    }

 
    GetData(): I${this.formname} {
        let frmdta = {} as I${this.formname};
        //>> Save Data
        ${SaveData.join("\n    ")}
        return frmdta;
    }

    checkvalidation(){
        
    }
    
    async submit() {


        var dta = this.GetData();
        console.log(JSON.stringify(dta));

        this.SendData.data = btoa(unescape(encodeURIComponent(JSON.stringify(dta))));
        console.log(btoa(unescape(encodeURIComponent(JSON.stringify(dta)))));



        let url = this.Request.url

        const formDataJsonString = JSON.stringify(this.SendData);

        const fetchOptions = {
            method: this.Request.method,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: formDataJsonString,
        };

        const response = await fetch(url, fetchOptions);

        if (!response.ok) {
            const errorMessage = await response.text();
            throw new Error(errorMessage);
        }

        var r = await response.text();
        console.log(r)
        return r;


    }

}`;
    }
}
//# sourceMappingURL=export-type-script.js.map