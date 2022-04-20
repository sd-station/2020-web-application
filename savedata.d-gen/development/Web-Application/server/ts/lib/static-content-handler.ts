import { existsSync, readFile } from "fs";
import { IncomingMessage, ServerResponse } from "http";
import { GetMimeType } from "./mimetype";
import { Result } from "./result";

export class StaticContentHandler {
    Req: IncomingMessage;
    Res: ServerResponse;

    SendFile(url: string) {
  
        if(this.Res.writableEnded) return;

        readFile(url, (err: NodeJS.ErrnoException | null, data: Buffer) => {

            //Error Parsing
            if (err) {

                if (existsSync(url + ".js")) {
                    new Result(this.Res).RedirectResult(this.Req.url  + ".js");
                    return;
                }

                this.Res.writeHead(404, { "Content-Type": "text/plain" });
                this.Res.write(err + "\n");
                this.Res.end();
                return;

            }

            //File Parsing
            //  this.Res.setHeader('Cache-Control', 'max-age=3600');
            this.Res.writeHead(200, { 'Content-Type': GetMimeType(url) });
            this.Res.end(data);
            return;

        });
    }



    constructor(req: IncomingMessage, res: ServerResponse) {
        this.Req = req;
        this.Res = res;
    }
}