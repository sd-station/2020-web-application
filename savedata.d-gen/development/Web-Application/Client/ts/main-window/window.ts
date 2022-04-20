import { CommandRunner } from "../command/index.js"
import { NavigationBar } from "./navigation-bar.js"


declare global {

    interface Window {
        ui: uiclass
        command: (command: string) => void;
    }
}

class uiclass {
   

    
    public get mainframe() : HTMLElement {
        return document.querySelector("#main-article") as HTMLElement;
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

