import {mockReader} from './mock';import {createOnchainReader} from './onchain';
export const serverReader=()=>['onchain','http'].includes(process.env.NEXT_PUBLIC_DATA_SOURCE??'mock')?createOnchainReader():mockReader;
export const json=(data:unknown,status=200)=>Response.json(data,{status,headers:{'Cache-Control':'no-store'}});
export const fail=(e:unknown)=>json({error:{code:'REQUEST_FAILED',message:e instanceof Error?e.message:'Network unavailable'}},400);
