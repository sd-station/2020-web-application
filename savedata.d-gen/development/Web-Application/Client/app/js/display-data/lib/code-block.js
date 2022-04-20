import { PrismHighlighter } from "../../theme/prism-Highlighter";
export class CodeBlock {
    constructor(content, mode) {
        this.element = document.createElement("pre");
        this.element.className = "output-code";
        if (mode == "html")
            this.element.innerHTML = new PrismHighlighter().HighlightHtml(content);
        if (mode == "javascript")
            this.element.innerHTML = new PrismHighlighter().HighlightJavascript(content);
        if (mode == "typescript")
            this.element.innerHTML = new PrismHighlighter().HighlightTypescript(content);
        this.element.addEventListener("click", _ => {
            selectText(this.element);
        });
    }
}
function selectText(node) {
    if (node.hasAttribute("data-state"))
        return;
    node.setAttribute("data-state", "selected");
    //@ts-expect-error
    if (document.body.createTextRange) {
        //@ts-expect-error
        const range = document.body.createTextRange();
        range.moveToElementText(node);
        range.select();
        return;
    }
    if (window.getSelection) {
        var check2 = window.getSelection();
        if (check2) {
            const selection = check2;
            const range = document.createRange();
            range.selectNodeContents(node);
            selection.removeAllRanges();
            selection.addRange(range);
            return;
        }
    }
    console.warn("Could not select text in node: Unsupported browser.");
}
//# sourceMappingURL=code-block.js.map