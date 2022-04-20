import { CommandRunner } from "../command/index.js";
import { ComponentLoader } from "./ComponentLoader.js";
export class NavigationBar {
    constructor() {
    }
    async Initialize_Component() {
        //>> LoadComponent component.nav 
        await new ComponentLoader("nav").AsContentFor(document.querySelector("nav#main-nav"));
        //>> Handle Switch Buttons
        document.querySelectorAll(".switch-button")
            .forEach(h => {
            h.addEventListener("click", async (_) => {
                if (h.classList.contains("active"))
                    return;
                document.querySelectorAll(".switch-button.active").forEach(itm => {
                    itm.classList.remove("active");
                });
                h.classList.add("active");
                this.OnNavEvent();
            });
        });
        this.OnNavEvent();
        new CommandRunner().Run("navigate/input");
    }
    OnNavEvent() {
        var h = document.querySelectorAll(".switch-button.active");
        if (h.length == 0)
            return;
        var target = h[0].getAttribute("data-tab");
        new CommandRunner().Run(target);
    }
}
//# sourceMappingURL=navigation-bar.js.map