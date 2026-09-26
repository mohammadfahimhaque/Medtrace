export type Role='manufacturer'|'distributor'|'pharmacy';
export const SOURCE=process.env.NEXT_PUBLIC_DATA_SOURCE??'mock';
// Public demo identifiers only. Replace with P1's funded role wallet addresses.
export const W={manufacturer:'11111111111111111111111111111111',distributor:'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',pharmacy:'So11111111111111111111111111111111111111112',other:'SysvarRent111111111111111111111111111111111'};
export const names:Record<string,string>={[W.manufacturer]:'Square Pharmaceuticals',[W.distributor]:'Dhaka Distribution',[W.pharmacy]:'MedPlus Pharmacy',[W.other]:'Sylhet Pharmacy'};
export const short=(s:string)=>s.slice(0,4)+'…'+s.slice(-4);
