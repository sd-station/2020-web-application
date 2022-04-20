import { SetupWindow } from "./api/active/data.api.js";
import { MainWindow } from "./main-window/window.js";
import { Colorizer } from "./theme/Colorizer.js";
//>> Window Active Data 
SetupWindow();
new Colorizer().Setup();
new MainWindow().Initialize_Component();
setTimeout(() => {
    var texteditor = document.querySelector("#frm-form-handler-txt-input");
    texteditor.addEventListener("input", event => {
        console.log(event);
    });
    texteditor.addEventListener("keydown", event => {
        console.log(event.key);
        if (event.ctrlKey && event.key == "s") {
            event.preventDefault();
            window.command("document/save");
        }
    });
}, 2000);
//# sourceMappingURL=index.js.map