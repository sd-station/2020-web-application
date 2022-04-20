import { IFieldRow } from "../../../lib/i-field-data.js";
import { IFieldFile } from "../../../lib/i-field-file.js";
String.prototype.TextAfter = function (code) {
    if (code == null || code.length == 0 || this.indexOf(code) < 0)
        return this;
    return this.substring(this.indexOf(code) + code.length);
};
export class MarkDownDataAnalyzer {
    constructor() {
        this.Edata = new IFieldFile();
    }
    GetFromMD(linesR) {
        linesR.forEach((lnraw, i) => {
            let ln = lnraw;
            while (ln.indexOf("&nbsp;") >= 0)
                ln = ln.replaceAll("&nbsp;", " ");
            //>> Handle Plus Content
            if (ln.trim().startsWith("+ ")) {
                this.Edata.items[this.Edata.items.length - 1].html.content += " " + this.ExtractData(this.Edata.items[this.Edata.items.length - 1], ln.TextAfter("+"));
                return;
            }
            //## Templacte Item
            var tempItem = new IFieldRow();
            tempItem.space = Math.round((ln.length - ln.trimStart().length) / 4);
            tempItem.id = this.Edata.items.length + 1;
            //> Set Parent
            if (tempItem.space > 0) {
                var possibleparents = this.Edata.items.filter(t => t.space == tempItem.space - 1);
                if (possibleparents.length > 0)
                    tempItem.parent = possibleparents[possibleparents.length - 1].id;
            }
            if (ln.trim().startsWith(".")) {
                tempItem.html.tag = "div";
                this.Edata.items.push(tempItem);
                tempItem.html.content = this.ExtractData(tempItem, ln);
                return;
            }
            let inputtag = ["select", "textarea", "input",];
            let normaltags = [
                //>> Input Data
                ...inputtag,
                //>> Graphic
                "canvas", "img",
                "button", "label", "form",
                "option",
                "link",
                "h1", "h2", "h3", "h4", "h5", "h6",
                "section", "aside", "main",
                "div", "p", "span", "em",
            ];
            normaltags.forEach(ckey => {
                if (ln.trim().startsWith(ckey)) {
                    tempItem.mode = "normal";
                    if (inputtag.indexOf(ckey) >= 0)
                        tempItem.mode = "field";
                    tempItem.html.tag = ckey;
                    this.Edata.items.push(tempItem);
                    tempItem.html.content = this.ExtractData(tempItem, ln.TextAfter(ckey));
                    return;
                }
            });
            if (tempItem.html.tag.length > 0)
                return;
            if (ln.trim().startsWith("input")) {
                tempItem.html.tag = "input";
                var words = ln.substring(ln.indexOf("input") + "input".length).trim().split(" ").filter(p => p.length > 0);
                words.forEach(w => {
                    switch (w) {
                        case ":number":
                            tempItem.type = "int";
                            tempItem.html.tag = "int";
                            return;
                        case ":text":
                            tempItem.type = "string";
                            tempItem.html.tag = "text";
                            return;
                        case ":email":
                            tempItem.type = "string";
                            tempItem.html.tag = "email";
                            return;
                    }
                    tempItem.name += " " + w;
                });
                if (tempItem.html.id.length == 0)
                    tempItem.html.id = tempItem.name.trim().toLowerCase().replace(/\ /g, "-");
                if (this.Edata.name.length > 0)
                    tempItem.html.id = this.Edata.name.toLowerCase().replace(/\ /g, "-") + "-" + tempItem.html.id;
                this.Edata.items.push(tempItem);
                tempItem.html.content = this.ExtractData(tempItem, ln.TextAfter("input"));
            } //end if
        });
        return this;
    }
    ExtractData(lnc, arg1) {
        var ops = arg1.split(" ");
        var unhandled = [];
        let Activekey = "";
        let ActiveAttachment = false;
        ops.forEach(u => {
            if (ActiveAttachment) {
                lnc.html.Attr[Activekey] += " " + u.substring(0, u.length - 1);
                if (u.endsWith("\""))
                    ActiveAttachment = false;
                return;
            }
            if (u.startsWith("#") && u.length > 1) {
                lnc.html.id = u.substring(1);
                return;
            }
            if (u.startsWith(".") && u.length > 1) {
                lnc.html.class.push(u.substring(1));
                return;
            }
            if (u.indexOf("=") > 0) {
                let paramkey = u.split("=")[0].trim();
                let paramvalue = u.split("=")[1].trim();
                if (paramvalue.startsWith("\"")) {
                    paramvalue = paramvalue.substring(1);
                    if (paramvalue.endsWith("\""))
                        paramvalue = paramvalue.substring(0, paramvalue.length - 1);
                    else {
                        Activekey = paramkey;
                        ActiveAttachment = true;
                    }
                }
                lnc.html.Attr[paramkey] = paramvalue.trim();
                return;
            }
            unhandled.push(u);
        });
        return unhandled.join(" ");
    }
}
//# sourceMappingURL=mark-down-data-analyzer.js.map