import { ServerResponse } from "http";
import { IStatusResponse } from "../local/http-status";

export { ResponseResult as Result };
class ResponseResult {
    Res: ServerResponse;
    constructor(res: ServerResponse) {
        this.Res = res;
    }

    DevelopmentMode(){
        if (__dirname.indexOf("\\dist") > 0) {
            this.Res.setHeader("Access-Control-Allow-Origin", "*")
            this.Res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS")
            this.Res.setHeader("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With")
        }
    }

    RedirectResult(newlink: string) {
        if(this.Res.writableEnded) return;
        this.Res.statusCode = 302;
        this.Res.setHeader('Location', newlink)
        this.Res.end();
        return;
    }


    StringResult(arg: string | object) {
        if(this.Res.writableEnded) return;
        
        if (typeof arg != "string") {
            arg = JSON.stringify(arg, null, " ");
        }

        this.Res.setHeader('Content-Type', "text/plain")
        this.Res.end(arg);
        
        return;
    }
    
    Origin(): ResponseResult {
        this.Res.setHeader("Access-Control-Allow-Origin", "*")
        return this;
    }
    Status(code: IStatusResponse): ResponseResult {
        this.Res.statusCode = code.status;
        this.Res.statusMessage = code.msg
        return this;
    }
}

