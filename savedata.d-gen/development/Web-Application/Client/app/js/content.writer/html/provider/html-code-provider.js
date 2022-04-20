export class HtmlCodeProvider {
    constructor(EData) {
        this.EData = EData;
    }
    GetHtmlData(parent) {
        let content = "";
        var parentid = parent?.id ?? 0;
        this.EData.items.filter(itm => itm.parent == parentid).forEach(SubElement => {
            content += this.ToHtml(SubElement, parent?.html.tag ?? "") + "\n";
        });
        return content;
    }
    /**
     * Convert To Html Content
     * @param El
     */
    ToHtml(El, parenttag = "") {
        let Parameters = [];
        // Parameters.push(`data-identify="I${El.id}-P${El.parent}-S${El.space}"`)
        if (El.html.id.length > 0) {
            Parameters.push(`id="${El.html.id}"`);
        }
        if (El.html.class.length > 0) {
            Parameters.push(`class="${El.html.class.join(" ")}"`);
        }
        if (Object.keys(El.html.Attr).length > 0) {
            Object.keys(El.html.Attr).forEach(k => {
                Parameters.push(`${k}="${El.html.Attr[k]}"`);
            });
        }
        let Attr = Parameters.join(" ");
        let content = "";
        if (this.EData.items.filter(itm => itm.parent == El.id).length > 0)
            content = this.GetHtmlData(El);
        if (El.html.tag == "div") {
            return `<div ${Attr}>${content}</div>`;
        }
        if (El.html.tag == "form") {
            return `<form ${Attr}><legend>${El.html.content}</legend>${content}</form>`;
        }
        if (El.html.tag == "label-input") {
            return `<div ${Attr}><label>
        <span>${El.html.content.trim()}:</span>
        <input id="${El.html.id}"  class="${El.html.class.join(" ")}" />
        </label></div>`;
        }
        //>> SELECT 
        if (El.html.tag == "select") {
            return `<div ${Attr}><label>
        <span>${El.html.content.trim()}:</span>
        <select id="${El.html.id}" class="${El.html.class.join(" ")}">
        ${content}
        </select>
        </label></div>`;
        }
        if (El.html.tag == "textarea" && parenttag != "label") {
            return `<div ${Attr}><label>
        <span>${El.html.content.trim()}:</span>
        <textarea id="${El.html.id}" class="${El.html.class.join(" ")}">
        ${""}
        </textarea>
        </label></div>`;
        }
        var SingleTags = ["option", "textarea",];
        var res = "";
        SingleTags.forEach(STAG => {
            if (El.html.tag == STAG)
                res = `<${STAG} ${Attr}>${El.html.content}</${STAG}>`;
        });
        if (res.length > 0)
            return res;
        var ContainerTag = ["div", "button", "section", "h1", "h2", "h3", "h4", "h5", "h6", "p", "span", "em"];
        var res = "";
        ContainerTag.forEach(STAG => {
            if (El.html.tag == STAG)
                res = `<${STAG} ${Attr}>${El.html.content}${content}</${STAG}>`;
        });
        if (res.length > 0)
            return res;
        var SingleTag = ["input", "img"];
        var res = "";
        SingleTag.forEach(STAG => {
            if (El.html.tag == STAG)
                res = `<${STAG} ${Attr} ${El.html.content}${content}>`;
        });
        if (res.length > 0)
            return res;
        if (El.html.tag == "label")
            return `<label ${Attr}><span>${El.html.content}</span>${content}</label>`;
        if (El.html.tag == "link") {
            let innercontent = El.html.content;
            let linkcontent = "";
            if (innercontent.indexOf("(") > 0) {
                linkcontent = innercontent.substring(innercontent.lastIndexOf("(") + 1);
                if (linkcontent.indexOf(")") > 0)
                    linkcontent = linkcontent.substring(0, linkcontent.lastIndexOf(")"));
                innercontent = innercontent.substring(0, innercontent.lastIndexOf("("));
            }
            return `
            <div>
                <a href="${linkcontent}">${innercontent}</a>
            </div>
            `;
        }
        return `<${El.html.tag} [Default-Mode:${El.html.tag}] ${Attr}>${El.html.content}</${El.html.tag}>`;
    }
}
//# sourceMappingURL=html-code-provider.js.map