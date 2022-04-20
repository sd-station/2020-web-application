import { createServer, IncomingMessage, ServerResponse } from "http";
import { UrlPath } from "./lib/url-standard";
import { EnvReader } from "./lib/env-reader";
import { StaticContentHandler } from "./lib/static-content-handler";
import { Result } from "./lib/result";
import { HTTPStatus } from "./local/http-status";
import { existsSync, readFileSync } from "fs";


export var ServerEnv = EnvReader();
createServer(function (req: IncomingMessage, res: ServerResponse) {

  

    var url: string = UrlPath(decodeURIComponent(req.url as string));

    if (url.startsWith("/ts/") || url.startsWith("/less/"))  {
        url = "../../" + url; 
    }

    // Customize Url Proccesing
    if (url.endsWith("/")) url += "index.html";

    if(url.endsWith(".html"))
     url =  `/html${url}` ;
    //>> Last Try
    new StaticContentHandler(req, res).SendFile(ServerEnv.dir + url);

}).listen(process.env.PORT || ServerEnv.port);
