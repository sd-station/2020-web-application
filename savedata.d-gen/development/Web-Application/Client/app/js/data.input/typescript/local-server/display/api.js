import { TextBlock } from "../../../../lib/TextBlock.js";
export class ServerStoreLocal {
    constructor() {
        this.container = document.querySelector("#localstore-server-api");
    }
    show(display) {
        this.container.innerHTML = "";
        this.container.appendChild(new TextBlock(display).Element);
    }
}
//# sourceMappingURL=api.js.map