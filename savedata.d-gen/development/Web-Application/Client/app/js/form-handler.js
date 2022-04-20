import { SetupWindow } from "./api/active/data.api.js";
import { InputParameterReader } from "./document-editor/parameters/input.parameter.reader.js";
import { InputDocumentReader } from "./document-editor/document/input.document.reader.js";
SetupWindow();
var frmSetup = new InputDocumentReader();
//!! TEST
setTimeout(() => {
    LoadApplication();
}, 2000);
function LoadApplication() {
    var TaskContinue = false;
    TaskContinue = new InputParameterReader().StartReading();
    if (TaskContinue)
        frmSetup.StartExport();
}
document.querySelector("#frm-form-handler-btn-export")
    .addEventListener("click", event => {
    event.preventDefault();
    LoadApplication();
});
//# sourceMappingURL=form-handler.js.map