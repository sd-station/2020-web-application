//> frm-site-setting.handler.ts
export class FormHandlerBase {
    constructor() {
        this.config = { method: "GET", url: "/api/v1/" };
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
            request: "slide/edit/" + slide,
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
        const formDataJsonString = JSON.stringify(this.SendData);
        const fetchOptions = {
            method: this.Request.method,
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
//# sourceMappingURL=form-class-check.js.map