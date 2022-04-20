import { CHtmlInfo } from "./i-html-info.js";

export class IFieldRow {
    name: string = "";
    type: string = "string";
    html: CHtmlInfo;
    space: number = 0;
    parent: number = 0;
    id: number = -1;
    mode: "normal" | "field" | "" = "";


    constructor() {
        this.html = new CHtmlInfo;
    }

    row!: number;
    define!: string;
}