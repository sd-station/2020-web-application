
import { DataStandard } from "../../standard/data-standard.js";
import { IFieldFile } from "../../lib/i-field-file.js";
import { CHtmlInfo } from "../../lib/i-html-info.js";
import { FormHandlerProvider } from "./form-handler.provider.js";
import { FormUsageProvider } from "./form-usage.provider.js";
   
export class TypeScriptForClient {


    keepinmind = "";
   
    HandlerText!: string;
    UsageText: any;
  
   

    TagName(name: string) {
        if (name == "input") return "HTMLInputElement";
        if (name == "form") return "HTMLFormElement";
        if (name == "textarea") return "HTMLTextAreaElement";
        if (name == "select") return "HTMLSelectElement";
        return name;
    }

    formname = "FrmName";
    GetTypescript(Data: IFieldFile) {


        var formID = "frm-name";
        var DataContent = ["//>> Define"] as string[];

        var DIF = ["//>> Define"] as string[];
        var constructor = ["    //>> Initialize Component"] as string[];
        var constructorA = ["    //>> Send Data"] as string[];
        var LoadDataRows = ["    //>> Fill Data"] as string[];
        var FillDataRows = ["    //>> Save Data"] as string[];

        Data.items.filter(k => k.html.tag == "form").forEach(row => {
            formID = row.html.id;
            this.formname = new DataStandard().MakeName(row.html);
            let tsname = `frm${this.formname}`;
            let tstype = `${this.TagName(row.html.tag)}`;
            DIF.push(`    ${tsname}:${tstype};`)
            constructor.push(`    this.${tsname} = document.querySelector("#${row.html.id}") as ${tstype};`)
            constructorA.push(`
        this.${tsname}.addEventListener("submit", event => {
            event.preventDefault();
            this.submit();
        });
`)
        })
        Data.items.filter(k => ["input", "textarea", "select"].includes(k.html.tag)).forEach(row => {

            if (row.name.length == 0) row.name = new DataStandard().MakeName(row.html).toLowerCase();

            let tsname = `txt${new DataStandard().MakeName(row.html)}`;
            let tstype = `${this.TagName(row.html.tag)}`;

            DataContent.push(`    ${row.name}:${row.type};`)

            DIF.push(`    ${tsname}:${tstype};`)
            constructor.push(`    this.${tsname} = document.querySelector("#${row.html.id}") as ${tstype};`)


            LoadDataRows.push(`    this.${tsname}.value = passitm.${row.name} `)
            FillDataRows.push(`    itm.${row.name} = this.${tsname}.value `)





        });

       


        const handler =  new FormHandlerProvider();
        handler.formID = formID;
        handler.formname = this.formname;
        handler.DIF = DIF;
        handler.InitText = constructor;
        handler.constructorA = constructorA;
        handler.LoadDataRows = LoadDataRows;
        handler.FillDataRows = FillDataRows;
        this.HandlerText = handler.GetProvider();


        const Usage =  new FormUsageProvider();
        this.UsageText = Usage.GetProvider();

    }
}