export class NameFinder {
    constructor() {
        this.ModuleName = `${window.ReqParameters["project.title"]}-api`;
        this.IItem = `I` + window.ReqParameters["project.title"].replace(/\-/g, "_");
        this.IStoreItem = `IStore` + window.ReqParameters["project.title"].replace(/\-/g, "_");
    }
}
//# sourceMappingURL=name-finder.js.map