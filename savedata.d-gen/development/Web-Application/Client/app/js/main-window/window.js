import { CommandRunner } from "../command/index.js";
import { NavigationBar } from "./navigation-bar.js";
class uiclass {
    get mainframe() {
        return document.querySelector("#main-article");
    }
}
export class MainWindow {
    constructor() {
        window.command = (str) => new CommandRunner().Run(str);
    }
    Initialize_Component() {
        new NavigationBar().Initialize_Component();
        window.ui = new uiclass();
    }
}
//# sourceMappingURL=window.js.map