export class PrismHighlighter {



    HighlightTypescript(val:string) :string {
        //@ts-ignore
        return Prism.highlight(val, Prism.languages.typescript, 'typescript')
    }
    HighlightHtml(val:string) :string {
        //@ts-ignore
        return Prism.highlight(val, Prism.languages.markup, 'html')
    }
    HighlightJavascript(val:string) :string {
        //@ts-ignore
        return Prism.highlight(val, Prism.languages.javascript, 'javascript')
    }
}