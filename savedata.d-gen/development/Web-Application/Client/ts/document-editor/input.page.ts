import { ComponentLoader } from "../main-window/ComponentLoader.js";
import { InputParameterReader   } from "./parameters/input.parameter.reader.js"
import { InputDocumentReader as CodeInputReader } from "./document/input.document.reader.js"

export class InputPage {
    async Initialize_Component() {
        let mainarticle = document.querySelector("#side-article") as HTMLElement;
        mainarticle.innerHTML = "";
        await new ComponentLoader(`workspace-input`).AsContentFor(mainarticle);

        this.LoadSession();

        (document.querySelector("#frm-form-handler-btn-save") as HTMLButtonElement)
            .addEventListener("click", event => {
                event.preventDefault();
                this.StartExtraction();
                window.Actions.OnDocumentChange.Invoke();
            })
    }

    //** Load Previous Session */
    LoadSession() {



        //>> Handle Previous Data
        //> Define
        var selection = document.querySelector("#frm-form-handler-select-way") as HTMLSelectElement;
        var textarea = document.querySelector("#frm-form-handler-txt-input") as HTMLPreElement;
        var textareaAdditianl = document.querySelector("#frm-Additional-Information-txt-input") as HTMLTextAreaElement;

        //> Selection And Keys
        var lastselection = localStorage.getItem("local-state")
        if (lastselection) selection.value = lastselection;

        var lastadditional = localStorage.getItem("local-additional")
        if (lastadditional) textareaAdditianl.value = lastadditional;


        selection.addEventListener("change", _ => {
            localStorage.setItem("local-state", selection.value);
        })

        textareaAdditianl.addEventListener("change", _ => {
            localStorage.setItem("local-additional", textareaAdditianl.value);
        })


        function SetContent(LastEdit: string) {
            if (selection.value == "markdown-text") {
                //@ts-ignore
                textarea.innerHTML = LastEdit.split("\n").map(ty => Prism.highlight(ty, Prism.languages.mymarkdown, 'markdown')).join("\n");

                return;
            }
            if (selection.value == "html-content") {
                //@ts-ignore
                textarea.innerHTML = Prism.highlight(LastEdit, Prism.languages.markup, 'html');
                return;
            }
            if (selection.value == "typescript-content") {
                //@ts-ignore
                textarea.innerHTML = Prism.highlight(LastEdit, Prism.languages.typescript, 'typescript');
                return;
            }
            textarea.innerHTML = LastEdit;
            ;
        }

        //> Pre Text
        var LastEdit = localStorage.getItem("local-save")
        if (LastEdit) {
            console.log("LOCAL DATA LOCADING");
            SetContent(LastEdit)
        }



        if (textarea.textContent?.trim().length == 0) {
            let mdsample =
                [ 
                    `.form-cover .gray-theme .large-mode .subject-editor .border-box`,
                    `    form #frm-form-handler method=post Form Title`,
                    `        .form-content`,
                    `            select #select-way Mode  `,
                    `                option value=value-1 Option One `,
                    `                option value=value-2 Option Two`,
                    `                option value=value-3 Option Three`,
                    `            label .dark-theme Inline Input`,
                    `                input #txt-input`,
                    `            label .block-mode .dark-theme Block Input`,
                    `                textarea #txt-input`,
                    `        .action-box`,
                    `            button .icon-btn Default Button`,
                    `            + data-icon="icon-export" `,
                    `            button .icon-btn .btn-action Action Button`,
                    `            + data-icon="icon-disk"`].join("\n");


            SetContent(mdsample)


        }

        textarea.addEventListener("input", _ => {
            localStorage.setItem("local-save", textarea.innerText as string);


        })
    }

    StartExtraction() {

        var ParamReader = new InputParameterReader()
        ParamReader.StartReading();

        var CodeReader = new CodeInputReader();
        CodeReader.StartReading();

        // if (ParamReader) CodeReader.StartExport();
    }

    constructor() {

    }
}
