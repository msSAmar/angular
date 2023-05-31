export class Service {
    id?:number;
    name?: string;
    description: string="";
    images:Array<String> = [""];
    priceRange:{low:number,high:number}={low:20,high:1000};
    avgServiceTime?:number;


}
