import { setuid } from "process";
import { IFieldFile } from "../../lib/i-field-file";

declare global {
  interface Window {
    ReqParameters: ReqParametersClass;
    EData: IFieldFile;
    Actions: ActionCollection;
  }
}





export class ReqParametersClass {
  [x: string]: string;
  "project.title": string = "";
  "server.controller.name": string = "";
  "server.localsave.filename": string = "";


}

export class ActionClass {
  InvokeList: { [x: string]: () => void } = {};
  Invoke() {
      Object.values(this.InvokeList).forEach(FN => FN());
  }

}

export class ActionCollection {
  OnDocumentChange: ActionClass = new ActionClass();

  constructor() {

  }

}

export function SetupWindow() {

  window.ReqParameters = new ReqParametersClass();
  window.EData = new IFieldFile();
  window.Actions = new ActionCollection();
}