import { IFieldFile } from "../../lib/i-field-file.js";
import { PrismHighlighter } from "../../theme/prism-Highlighter.js";
import { CsharpDataAnalyzer } from "../../content.reader/c-sharp/data-analyzer/c-sharp-data-analyzer.js";
import { HtmlDataAnalyzer } from "../../content.reader/html/data-analyzer/html-data-analyzer.js";
import { DisplayHtmlRaw } from "../../display-data/html/html-raw.js";
import { ExportForHtmlRaw } from "../../content.writer/html/export-for-html-raw.js";
import { JsonDataDisplay } from "../../content.reader/json/display/json-data-display.js";
import { MarkDownDataAnalyzer } from "../../content.reader/markdown/data-analyzer/mark-down-data-analyzer.js";
import { display_typescript_interface } from "../../display-data/ts-client/ts-client.display.js";
import { TypeScriptDataAnalyzer } from "../../content.reader/typescript/data-analyzer/typescript-data-analyzer.js";

import { ServerDataDisplay } from "../../content.reader/typescript/local-server/display/server-data.display.js";
import { TSServerLocal_ListProvider } from "../../content.writer/ts-server/local-list/ts-server-local-list.provider.js";
import { TSIndex } from "../../content.reader/typescript/ts-index.js";
import { RawFormProvider } from "../../content.writer/ts-client/rawform.provider.js";
import { CodeBlock } from "../../display-data/lib/code-block.js";

export class InputDocumentReader {
  /** GENERATE EDATA */
  StartReading() {
    //>> Find Mode
    this.mode = this.cmbWaySelector.value;
    //## Do Some Correction
    if (this.txtFormInput.innerText.trim().startsWith("<")) {
      this.mode = "html-content";
    }

    //>> Read Code Lines
    const CodeLines = this.txtFormInput.innerText.split("\n").filter((o) =>
      o.length > 0
    );

    //## MARK DOWN MODE
    if (this.mode == "markdown-text") {
      window.EData = new MarkDownDataAnalyzer().GetFromMD(CodeLines).Edata;
    }

    if (this.mode == "csharp-class") {
      window.EData = new CsharpDataAnalyzer().GetFromCSharp(CodeLines).Edata;
    }

    if (this.mode == "html-content") {
      var convertor = new HtmlDataAnalyzer();
      convertor.GetFromHtml(this.txtFormInput.innerText);
      window.EData = convertor.Edata;
    }

    if (this.mode == "typescript-content") {
      //>> Analyzing Data
      var TSS = new TypeScriptDataAnalyzer();
      TSS.GetData(this.txtFormInput.innerText);
      window.EData = TSS.Edata;
    }

    console.log(window.EData);
  }

  txtFormInput: HTMLPreElement;
  btnPreview!: HTMLButtonElement;
  btnSaveData!: HTMLButtonElement;
  form: HTMLFormElement;
  mode: string;

  EData = new IFieldFile();
  cmbWaySelector: HTMLSelectElement;
  constructor() {
    this.mode = "normal";

    this.form = document.querySelector("#frm-form-handler") as HTMLFormElement;
    this.txtFormInput = document.querySelector(
      "#frm-form-handler-txt-input",
    ) as HTMLPreElement;
    this.cmbWaySelector = document.querySelector(
      "#frm-form-handler-select-way",
    ) as HTMLSelectElement;

    this.form.addEventListener("click", (event) => {
      event.preventDefault();
    });
  }

  StartExport() {
    console.log("Export Starting ...");
    this.mode = this.cmbWaySelector.value;
    console.log(this.mode);
    var ReportBox = document.querySelector(".report-box") as HTMLElement;
    var PreviewBox = document.querySelector(
      ".preview-box",
    ) as HTMLIFrameElement;
    var PreviewBoxBody = PreviewBox.contentWindow?.document.body as HTMLElement;

    [ReportBox, PreviewBoxBody].forEach((bx) => {
      if (
        bx.hasAttribute("data-function") &&
        bx.getAttribute("data-function") == "clear"
      ) {
        bx.innerHTML = "";
      }
    });

    var linesR = this.txtFormInput.innerText.split("\n").filter((o) =>
      o.length > 0
    );

    console.log(this.mode);
    //>> Converting To Ifield
    if (this.txtFormInput.innerText.trim().startsWith("<")) {
      this.mode = "html-content";
    }

    //## MARK DOWN MODE
    if (this.mode == "markdown-text") {
      this.EData = new MarkDownDataAnalyzer().GetFromMD(linesR).Edata;

      var htmlData = new ExportForHtmlRaw(this.EData).ExportForHtml();
      new DisplayHtmlRaw().show(htmlData);
      var tsinfo = new display_typescript_interface().show(this.EData);

      new JsonDataDisplay().DisplayJson(this.EData);
      var Sdp = new TSServerLocal_ListProvider();
      Sdp.ITS = this.EData;

      var container = document.querySelector(
        "#localstore-server-api",
      ) as HTMLElement;
      container.innerHTML = "";
      container.appendChild(
        new CodeBlock(Sdp.RenderApi(), "typescript").element,
      );

      new ServerDataDisplay().DisplayServer(Sdp.render());

      var m = new RawFormProvider();
      m.formname = tsinfo.formname;
      m.rawtext = htmlData;
      this.HtmlFormProvider(m.GetProvider());
    }
    if (this.mode == "csharp-class") {
      this.EData = new CsharpDataAnalyzer().GetFromCSharp(linesR).Edata;
      let rawtext = new ExportForHtmlRaw(this.EData).ExportForHtml();
      new DisplayHtmlRaw().show(rawtext);
      new display_typescript_interface().show(this.EData);
    }

    if (this.mode == "html-content") {
      var rawtext = this.txtFormInput.innerText.split("\n").map((p) =>
        p.trimStart()
      ).join("\n");
      rawtext = new DisplayHtmlRaw().show(rawtext);

      var convertor = new HtmlDataAnalyzer();
      convertor.GetFromHtml(this.txtFormInput.innerText);
      this.EData = convertor.Edata;

      var tsinfo = new display_typescript_interface().show(this.EData);

      var m = new RawFormProvider();
      m.formname = tsinfo.formname;
      m.rawtext = rawtext;

      this.HtmlFormProvider(m.GetProvider());
    }

    if (this.mode == "typescript-content") {
      new TSIndex().Analyze(this.txtFormInput.innerText);
    }

    //formatter.formatHTML(formatter.unformatHTML(preview))
  }

  HtmlFormProvider(txt: string) {
    var HtmlFRM = document.querySelector(
      "#export-ts-form-provider",
    ) as HTMLElement;
    var Fprovider = document.createElement("pre");
    Fprovider.className = "output-code";

    Fprovider.innerHTML = new PrismHighlighter().HighlightTypescript(txt);
    HtmlFRM.appendChild(Fprovider);
  }
}
