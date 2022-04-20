"use strict";
// import { existsSync, readFileSync, writeFileSync } from "fs";
// import { ServerResponse } from "http";
// import { join } from "path";
// import { Result } from "../lib/result";
// import { HTTPStatus } from "../local/http-status";
// import { ServerEnv } from "../server";
// export interface Isite_setting {
//     sitename: string;
//     language: string;
//     components: string;
//     homelayout: string;
//     outputdirectory: string;
// }
// export interface ILocalStore {
//     irn: number;
//     rtm: number;
//     utm?: number;
// }
// /** USE: Store Data And Return Answer */
// export interface IStoresite_setting extends Isite_setting, ILocalStore {
// }
// class LocalController {
//     FileName = "slide-tasks.json";
//     FullPath!: string;
//     Data = [] as ILocalStore[];
//     res!: ServerResponse;
//     GetNewRowNumber(): number {
//         return 1 + (this.Data.length > 0 ? this.Data[this.Data.length - 1].irn : 0);
//     }
//     LoadData(FullPath: string) {
//         this.FullPath = FullPath.replace(/\//g, "\\");
//         if (existsSync(FullPath)) this.Data = JSON.parse(readFileSync(FullPath).toString());
//     }
//     SaveData() {
//         if (!existsSync(this.FullPath)) {
//             new Directory().MakeExist(this.FullPath);
//         }
//         writeFileSync(this.FullPath, JSON.stringify(this.Data));
//     }
// }
// export class SlideTaskController extends LocalController {
//     Data: IStoresite_setting[] = [];
//     Get(url: string) {
//         var path = join(ServerEnv.data, ...url.split("/").filter(i => i.length > 0), this.FileName);
//         if (existsSync(path)) new Result(this.res).StringResult(readFileSync(path).toString());
//         else new Result(this.res).StringResult("[]");
//     }
//     Create(data: ISendData) {
//         var decodetext = Buffer.from(data.data, 'base64').toString();
//         var Sended = JSON.parse(decodetext) as Isite_setting;
//         this.LoadData(join(ServerEnv.data, data.path, this.FileName));
//         var nr = {} as IStoresite_setting;
//         //> System Assignment 
//         nr.irn = this.GetNewRowNumber();
//         nr.rtm = new Date().getTime();
//         //> User Assignment 
//         nr.sitename = Sended.sitename;
//         nr.language = Sended.language;
//         nr.components = Sended.components;
//         nr.homelayout = Sended.homelayout;
//         nr.outputdirectory = Sended.outputdirectory;
//         this.Data.push(nr);
//         this.SaveData();
//         new Result(this.res).StringResult("ok");
//     }
//     Edit(id: number, data: ISendData) {
//         var decodetext = Buffer.from(data.data, 'base64').toString();
//         var Sended = JSON.parse(decodetext) as IStoresite_setting;
//         this.LoadData(join(ServerEnv.data, data.path, this.FileName));
//         var nr = this.Data.find(h => h.irn == id);
//         if (!nr) return false;
//         //> System Assignment 
//         nr.utm = new Date().getTime();
//         //> User Assignment 
//         nr.sitename = Sended.sitename;
//         nr.language = Sended.language;
//         nr.components = Sended.components;
//         nr.homelayout = Sended.homelayout;
//         nr.outputdirectory = Sended.outputdirectory;
//         this.SaveData();
//         return true;
//     }
//     OnPost(command: string, data: ISendData) {
//         if (command.startsWith("create")) this.Create(data);
//         if (command.startsWith("edit")) {
//             var mvc = data.request.split("/").filter(u => u.trim().length > 0);
//             if (mvc.length < 3) { new Result(this.res).Status(HTTPStatus.BAD_REQUEST); return; }
//             if (this.Edit(parseInt(mvc[2]), data))
//                 new Result(this.res).StringResult("ok");
//             else
//                 new Result(this.res).Status(HTTPStatus.BAD_REQUEST);
//         }
//     }
//     OnGet(command: string,) {
//         this.Get(command);
//     }
// }
//# sourceMappingURL=test-controller.js.map