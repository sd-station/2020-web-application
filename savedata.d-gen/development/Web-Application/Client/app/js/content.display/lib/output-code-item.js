export class OutputCodeItem {
    constructor() {
        this.element = document.createElement("pre");
        this.element.className = "output-code";
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
//# sourceMappingURL=output-code-item.js.map