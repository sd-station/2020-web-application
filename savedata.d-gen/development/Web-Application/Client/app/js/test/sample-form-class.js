export class Formhandler {
    constructor() {
        //>> Initialize Component
        this.frmFrmEdit = document.querySelector("#frm-edit");
        this.txtSubjectId = document.querySelector("#frm-edit-subject-id");
        this.txtSubjectTitle = document.querySelector("#frm-edit-subject-title");
        //>> Send Data
        this.frmFrmEdit.addEventListener("submit", handleFormSubmit);
    }
    fill(passitm) {
        //>> Fill Data
        this.txtSubjectId.value = passitm.subjectid;
        this.txtSubjectTitle.value = passitm.subjecttitle;
    }
    save() {
        let frmdta = {};
        //>> Save Data
        frmdta.subjectid = this.txtSubjectId.value;
        frmdta.subjecttitle = this.txtSubjectTitle.value;
        return frmdta;
    }
    checkvalidation() {
    }
}
//# sourceMappingURL=sample-form-class.js.map