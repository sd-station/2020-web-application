export class PrismHighlighter {
    HighlightTypescript(val) {
        //@ts-ignore
        return Prism.highlight(val, Prism.languages.typescript, 'typescript');
    }
    HighlightHtml(val) {
        //@ts-ignore
        return Prism.highlight(val, Prism.languages.markup, 'html');
    }
    HighlightJavascript(val) {
        //@ts-ignore
        return Prism.highlight(val, Prism.languages.javascript, 'javascript');
    }
}
//# sourceMappingURL=prism-Highlighter.js.map