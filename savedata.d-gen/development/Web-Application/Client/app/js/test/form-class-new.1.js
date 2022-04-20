export class FormhandlerBase {
    constructor() {
        this.config = { method: "get", url: "/slide" };
        //>> Initialize Component
        this.frmFrmSiteSetting = document.querySelector("#frm-site-setting");
        this.txtSiteName = document.querySelector("#site-name");
        this.txtLanguage = document.querySelector("#language");
        this.txtComponents = document.querySelector("#components");
        this.txtHomeLayout = document.querySelector("#home-layout");
        this.txtOutputDirectory = document.querySelector("#output-directory");
        //>> Send Data
        this.frmFrmSiteSetting.addEventListener("submit", event => {
            event.preventDefault();
            this.submit();
        });
    }
    get ServerSendItem() {
        return {
            path: "10/10/10",
            config: "slide/edit/",
            token: "0",
            data: btoa(unescape(encodeURIComponent(JSON.stringify(this.formitem)))),
        };
    }
    ;
    set formitem(passitm) {
        //>> Fill Data
        this.txtSiteName.value = passitm.sitename;
        this.txtLanguage.value = passitm.language;
        this.txtComponents.value = passitm.components;
        this.txtHomeLayout.value = passitm.homelayout;
        this.txtOutputDirectory.value = passitm.outputdirectory;
    }
    get formitem() {
        let frmdta = {};
        //>> Save Data
        //>> Save Data
        frmdta.sitename = this.txtSiteName.value;
        frmdta.language = this.txtLanguage.value;
        frmdta.components = this.txtComponents.value;
        frmdta.homelayout = this.txtHomeLayout.value;
        frmdta.outputdirectory = this.txtOutputDirectory.value;
        return frmdta;
    }
    checkvalidation() {
        return true;
    }
    async submit() {
        if (!this.checkvalidation()) {
            console.error("Validation Rule Error");
            return;
        }
        let url = this.config.url;
        const formDataJsonString = JSON.stringify(this.ServerSendItem);
        const fetchOptions = {
            method: this.config.method,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: formDataJsonString,
        };
        const response = await fetch(url, fetchOptions);
        if (!response.ok) {
            const errorMessage = await response.text();
            throw new Error(errorMessage);
        }
        var r = await response.text();
        console.log(r);
        return r;
    }
}
export class Formhandler extends FormhandlerBase {
    constructor() {
        super();
    }
    checkvalidation() {
        return false;
    }
}
var frm = new Formhandler();
frm.formitem;
frm.formitem = frm.formitem;
frm.config.url = "";
frm.config.method;
//# sourceMappingURL=form-class-new.1.js.map