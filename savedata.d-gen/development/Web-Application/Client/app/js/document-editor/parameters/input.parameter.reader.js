export class InputParameterReader {
    StartReading() {
        var txtAdd = document.querySelector("#frm-Additional-Information-txt-input");
        txtAdd.value.split("\n").forEach(l => {
            if (l.trim().length == 0)
                return;
            if (l.trim().indexOf("=") > 0 && l.trim().indexOf(":") < 0)
                l.replace("=", ":");
            if (l.trim().indexOf(":") < 0)
                return;
            if (l.split(":")[1].trim().length < 0)
                return;
            var key = l.split(":")[0].trim();
            var val = l.split(":")[1].trim();
            window.ReqParameters[key] = val;
        });
        Object.keys(window.ReqParameters).forEach(key => {
            if (txtAdd.value.indexOf(key) < 0)
                txtAdd.value += String.fromCharCode(13) + key + ":";
        });
        return true;
    }
}
//# sourceMappingURL=input.parameter.reader.js.map