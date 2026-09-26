import {PublicKey} from '@solana/web3.js';
import {Buffer} from 'buffer';
export const normalizeSerial=(s:string)=>s.trim().toUpperCase();
export function packPda(s:string,id:PublicKey){s=normalizeSerial(s);if(Buffer.byteLength(s)>32)throw Error('Serial exceeds 32 bytes');return PublicKey.findProgramAddressSync([Buffer.from('pack'),Buffer.from(s)],id)[0]}
