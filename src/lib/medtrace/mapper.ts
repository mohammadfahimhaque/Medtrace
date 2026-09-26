import type {Pack,Status} from './types';
type Key={toBase58():string};type Num={toString():string};
export function toPack(raw:{serial:string;batch:string;expiry:Num;manufacturer:Key;holder:Key;status:Record<string,unknown>;dispensedAt:Num|null},address:Key):Pack{
const map:Record<string,Status>={manufactured:'Manufactured',intransit:'InTransit',atpharmacy:'AtPharmacy',dispensed:'Dispensed'};const status=map[Object.keys(raw.status)[0]?.toLowerCase()];if(!status)throw Error('Unknown pack status');let d=Number(raw.dispensedAt?.toString()??0);if(d>1e12)d=Math.floor(d/1000);return {serial:raw.serial,batch:raw.batch,expiry:Number(raw.expiry.toString()),manufacturer:raw.manufacturer.toBase58(),holder:raw.holder.toBase58(),status,dispensedAt:d>0?d:null,address:address.toBase58()}}
