import { HtmlFormat } from "../../content.reader/html/format/html-format.js";
import { CodeBlock } from "../lib/code-block.js";
export class DisplayHtmlRaw {
    /**
     * Display Html In Iframe And Code View
     * @param preview
     */
    show(preview) {
        document.querySelector("#html-preview").classList.remove("hide");
        var formatter = new HtmlFormat();
        var ReportBox = document.querySelector(".report-box");
        var PreviewBox = document.querySelector(".preview-box");
        if (PreviewBox.hasAttribute("data-loaded")) {
            var PreviewBoxBody = PreviewBox.contentWindow?.document.body;
            ReportBox.innerHTML = "";
            PreviewBoxBody.innerHTML = preview;
            ReportBox.appendChild(new CodeBlock(preview, "html").element);
            setTimeout(() => {
                if (PreviewBoxBody.clientHeight < 1000) {
                    PreviewBox.style.height = PreviewBoxBody.clientHeight + 30 + "px";
                }
                else
                    PreviewBox.style.height = "";
            }, 300);
        }
        else {
            setTimeout(() => {
                this.show(preview);
            }, 100);
        }
        return formatter.format(preview);
    }
}
//# sourceMappingURL=html-raw.js.map