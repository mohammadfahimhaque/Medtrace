import type {MedTraceReader,MedTraceWriter} from './types';
// Fail closed until P1 supplies the deployed IDL and confirms accounts/status transitions.
const missing=()=>{throw Error('P1’s deployed IDL and program ID are required. Use mock mode until integration is configured.')};
export function createOnchainReader():MedTraceReader{return {getPack:async()=>missing(),listPacks:async()=>missing(),getVerdict:async()=>missing()}}
export function createOnchainWriter():MedTraceWriter{return {mintPack:async()=>missing(),transferCustody:async()=>missing(),dispense:async()=>missing()}}
