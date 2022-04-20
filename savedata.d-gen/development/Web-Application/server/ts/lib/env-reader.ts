import { existsSync, readFileSync } from "fs";
interface ENumerable {
    [x: string]: string | number
}
interface IConfigData extends ENumerable {
    dir: string,
    port: number,
    runtime: number,
    data:string,
}
export function EnvReader() {
    var c: IConfigData = {
        dir: ".",
        port: 8182,
        runtime: new Date().getTime(),
        data:"../data"
    }
    if (existsSync("server.json")) {
        var lc = JSON.parse(readFileSync("server.json").toString());

        var ckeys = Object.keys(c);
        Object.keys(lc).forEach(lckey => {
            if (ckeys.indexOf(lckey) >= 0) c[lckey] = lc[lckey]
        })

    }

    return c as IConfigData;
}