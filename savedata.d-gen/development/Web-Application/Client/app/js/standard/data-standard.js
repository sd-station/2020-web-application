export class DataStandard {
    constructor() {
        /** Input And Other Elements maybe Start With Same Prefix */
        this.FormNameSpace = "";
    }
    MakeName(HI) {
        if (HI.id.length == 0)
            return "UnNamed";
        var inpg = HI.id;
        if (HI.tag == "form")
            this.FormNameSpace = inpg;
        if (HI.tag == "input" && HI.id.startsWith(this.FormNameSpace)) {
            inpg = inpg.substring(this.FormNameSpace.length);
            if (inpg.startsWith("-"))
                inpg = inpg.substring(1);
        }
        return inpg.split("-").map(h => {
            if (h.length > 1)
                return h[0].toUpperCase() + h.substring(1);
            return h.toUpperCase();
        }).join("");
    }
    FixAllData() {
        window.EData.items.filter(k => ["input", "textarea", "select"].includes(k.html.tag)).forEach(row => {
            if (row.name.length == 0)
                row.name = this.MakeName(row.html).toLowerCase();
        });
    }
}
//# sourceMappingURL=data-standard.js.map