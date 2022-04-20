import { PrismHighlighter } from "../../theme/prism-Highlighter.js";
export class TextBlock {
    constructor(arg0) {
        this.Element = document.createElement("pre");
        this.Element.className = "output-code";
        this.Element.innerHTML = new PrismHighlighter().HighlightJavascript(arg0);
    }
}
//# sourceMappingURL=TextBlock.js.map