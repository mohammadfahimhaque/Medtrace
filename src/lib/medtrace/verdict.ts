import type {Pack,VerdictResult} from './types';
export const FRESH_DISPENSE_SECONDS=600;
export function computeVerdict(pack:Pack|null,now:number,c:{pharmacy?:string}={}):Omit<VerdictResult,'checkedAt'>{
if(!pack)return {verdict:'UNKNOWN',reason:'verdict.notRegistered',pack};
if(pack.status==='Dispensed'){const age=now-(pack.dispensedAt??0);const fresh=pack.dispensedAt!==null&&age>=0&&age<=600;return {verdict:fresh?'GENUINE':'ALREADY_DISPENSED',reason:fresh?'verdict.dispensedJustNow':'verdict.codeAlreadyUsed',pack}}
if(c.pharmacy&&pack.holder!==c.pharmacy)return {verdict:'OTHER_PHARMACY',reason:'verdict.registeredElsewhere',pack};
return {verdict:'GENUINE',reason:pack.status==='AtPharmacy'?'verdict.readyAtPharmacy':'verdict.inSupplyChain',pack};}
