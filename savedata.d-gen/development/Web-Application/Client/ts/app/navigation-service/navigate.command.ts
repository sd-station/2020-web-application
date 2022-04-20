import { HelpPage } from "../../pages/help/help.page.js"
import { InputPage } from "../../document-editor/input.page.js"
import { HtmlPage } from "../../content.writer/html/html.page.js"
import { JsonPage } from "../../content.writer/json/json.page.js"
import { TSServerPage } from "../../content.writer/ts-server/ts.server.page.js"
import { TSClientPage } from "../../content.writer/ts-client/ts.client.page.js"
import { NavLibraryPage } from "../../pages/library/help.page.js"

export class NavigatorCommand {
    Navigate(part: string) {

        if (part == "input") {
            new InputPage().Initialize_Component();
            return;
        }
        if (part == "help") {
            new HelpPage().Initialize_Component();
            return;
        }
        if (part == "library") {
            new NavLibraryPage().Initialize_Component();
            return;
        }
        if (part == "server-local-table-item") {
            new TSServerPage().Initialize_Component("table-item");
            return;
        }
        if (part == "server-local-single-item") {
            new TSServerPage().Initialize_Component("single-item");
            return;
        }
        
        if (part == "json") {
            new JsonPage().Initialize_Component();
            return;
        }
        if (part == "html") {
            new HtmlPage().Initialize_Component();
            return;
        }
        if (part == "typescript") {
            new TSClientPage().Initialize_Component();
            return;
        }
        console.error("Can Not Find : " + part);
    }

}
