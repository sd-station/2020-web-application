"use strict";
//>> Handle Switch Buttons
document.querySelectorAll(".switch-button")
    .forEach(h => {
    h.addEventListener("click", _ => {
        h.classList.toggle("active");
        var target = document.querySelector(h.getAttribute("data-switch"));
        if (h.classList.contains("active"))
            target.classList.remove("hide");
        else
            target.classList.add("hide");
    });
});
//>> Prism Test
//@ts-ignore
Prism.languages['mymarkdown'] = Prism.languages.extend('markdown', {
    // CSS doesn't have a 'color' token, so this token will be appended
    'field-color': /^\ +(form|input|textarea|select)\ /,
    'container-color': /^\ +(main|footer|header|section|div)\ /,
    'tag-color': /^\ +\w+\ /,
    'id-color': /\#((\w)|(\-))+/,
    'class-color': /\.((\w)|(\-))+/,
    'equal-color': {
        greedy: true,
        pattern: /(((\w)|(\-))+\=((\w)|(\-))+)|(((\w)|(\-))+\=\".+\")/,
        inside: {
            "eq-key-word": /(\w|\-)+/
        }
    },
});
//>> Handle Previous Data
//> Define
var selection = document.querySelector("#frm-form-handler-select-way");
var textarea = document.querySelector("#frm-form-handler-txt-input");
var textareaAdditianl = document.querySelector("#frm-Additional-Information-txt-input");
//> Selection And Keys
var lastselection = localStorage.getItem("local-state");
if (lastselection)
    selection.value = lastselection;
var lastadditional = localStorage.getItem("local-additional");
if (lastadditional)
    textareaAdditianl.value = lastadditional;
selection.addEventListener("change", _ => {
    localStorage.setItem("local-state", selection.value);
});
textareaAdditianl.addEventListener("change", _ => {
    localStorage.setItem("local-additional", textareaAdditianl.value);
});
function SetContent(LastEdit) {
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
var LastEdit = localStorage.getItem("local-save");
if (LastEdit) {
    console.log("LOCAL DATA LOCADING");
    SetContent(LastEdit);
}
if (textarea.textContent?.trim().length == 0) {
    let mdsample = [`Form Handler`,
        `.form-cover .gray-theme .large-mode .subject-editor .border-box`,
        `    form #frm-form-handler method=post`,
        `        .form-content`,
        `            select #select-way Mode  `,
        `                option value=normal Normal`,
        `                option value=sql-syntax Sql Syntax`,
        `                option value=csharp-class Csharp Class`,
        `            label .block-mode .dark-theme Name`,
        `                textarea #txt-input`,
        `        .action-box`,
        `            button #btn-export .icon-btn Export`,
        `            + data-icon="icon-export" `,
        `            button .icon-btn .btn-action Save Section Data`,
        `            + data-icon="icon-disk"`].join("\n");
    SetContent(mdsample);
}
textarea.addEventListener("input", _ => {
    localStorage.setItem("local-save", textarea.innerText);
});
//# sourceMappingURL=script.js.map