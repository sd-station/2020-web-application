/** USE: Recieve Data From Client For Creating */
declare module "site-setting-api" {
    export interface Isite_setting{
        sitename:string;
        language:string;
        components:string;
        homelayout:string;
        outputdirectory:string;
    }
 
    /** USE: Store Data And Return Answer */
    export interface IStoresite_setting extends Isite_setting{
        irn:number;
        rtm:number;
        utm?:number;
    }
 }