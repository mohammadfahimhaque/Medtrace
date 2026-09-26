export type Status='Manufactured'|'InTransit'|'AtPharmacy'|'Dispensed';
export type Verdict='GENUINE'|'OTHER_PHARMACY'|'ALREADY_DISPENSED'|'UNKNOWN';
export interface Pack {serial:string;batch:string;expiry:number;manufacturer:string;holder:string;status:Status;dispensedAt:number|null;address:string}
export interface VerdictResult {verdict:Verdict;reason:string;pack:Pack|null;checkedAt:number}
export interface TxResult {signature:string;explorerUrl:string}
export interface MintInput {serial:string;batch:string;expiry:number}
export type Filter={holder?:string;status?:Status};
export interface MedTraceReader {getPack(s:string):Promise<Pack|null>;listPacks(f?:Filter):Promise<Pack[]>;getVerdict(s:string,c?:{pharmacy?:string}):Promise<VerdictResult>}
export interface MedTraceWriter {mintPack(i:MintInput):Promise<TxResult>;transferCustody(s:string,h:string):Promise<TxResult>;dispense(s:string):Promise<TxResult>}
export type MedTraceClient=MedTraceReader&MedTraceWriter;
