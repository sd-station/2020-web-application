export class OutputCodeItem {
    constructor() {
        this.element = document.createElement("pre");
        this.element.className = "output-code";
        this.element.addEventListener("click", _ => {
            selectText(this.element);
        });
    }
    set Content(content) {
        this.element.innerHTML = content;
    }
    set Container(Container) {
        if (Container == null)
            return;
        Container.appendChild(this.element);
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
//# sourceMappingURL=output-code-item.js.map