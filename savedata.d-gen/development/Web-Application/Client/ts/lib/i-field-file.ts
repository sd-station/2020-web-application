import { IFieldRow } from "./i-field-data.js";

export class IFieldFile {
    name : string = "";
    items: IFieldRow[];
     constructor() {
        this.items = [] as IFieldRow[];
    }
}
