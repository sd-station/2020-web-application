
export class UrlParser {
    private Item : ICReq ={} as ICReq;


    public get idsupported(): boolean {
        if (this.Item.ID)
            return (this.Item.ID != "0")

        return false;
    }

    public get id(): string {
        return this.Item.ID;
    }
    public get Action(): string {
        return this.Item.Action;
    }

    public get Controller(): string {
        return this.Item.Controller;
    }


    constructor(urlstring: string, method: string = "GET") {
        this.Assign(urlstring, method)
    }
    Assign(urlstring: string, method: string = "GET"): void {
        if (urlstring.startsWith("/")) urlstring = urlstring.substring(1);

        var urls = urlstring.toLowerCase().split("/");

        urls.forEach((p, i) => {

            switch (i) {
                

                case 0:
                    if (p.length == 0) this.Item.Controller = "home";
                    this.Item.Controller = p;
                    return;
                case 1:
                    if (p.length == 0) this.Item.Action = "index";
                    this.Item.Action = p;
                    return;
                case 2:
                    if (p.length == 0) this.Item.ID = "0";
                    this.Item.ID = p;
                    return;

                default:

                    break;
            }


        });

        if (method == "POST") this.Item.Method = webrequest.POST;
        if (method == "GET") this.Item.Method = webrequest.GET;


    }

}

export interface ICReq {
    Controller: string;
    Action: string;
    ID: string;
    Method: webrequest;
}

export enum webrequest {
    GET, POST
}