// Use the official WASM compiler on Windows where application control blocks SWC's native binary.
const {spawn}=require('node:child_process');
const path=require('node:path');
const env={...process.env};
if(process.platform==='win32')env.NEXT_TEST_WASM_DIR=path.dirname(require.resolve('@next/swc-wasm-nodejs'));
const child=spawn(process.execPath,[require.resolve('next/dist/bin/next'),...process.argv.slice(2)],{stdio:'inherit',env});
child.on('exit',code=>process.exit(code??1));
