export function GetMimeType(url:string){
    if (url.endsWith(".txt")) return "text/plain";
    if (url.endsWith(".css")) return "text/css";
    if (url.endsWith(".js")) return "text/javascript";
    if (url.endsWith(".svg")) return "image/svg+xml";
    if (url.endsWith(".html")) return "text/html";
    if (url.endsWith(".less")) return "text/less";
    if (url.endsWith(".html")) return "text/html";
    if (url.endsWith(".ico")) return "image/x-icon";
    return "text/plain";
}