import { InputPage } from "../document-editor/input.page.js";
import { NavigatorCommand } from "../app/navigation-service/navigate.command.js";
export class CommandRunner {
    async Run(url) {
        if (url.startsWith("document/save")) {
            new InputPage().StartExtraction();
            window.Actions.OnDocumentChange.Invoke();
            return;
        }
        //>> MAIN NAV
        if (url.startsWith("navigate")) {
            var part = url.split("/")[1];
            new NavigatorCommand().Navigate(part);
        } //end main nav
    }
}
//# sourceMappingURL=index.js.map