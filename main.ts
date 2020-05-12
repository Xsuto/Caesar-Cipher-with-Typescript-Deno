import encrypt from "./encrypt.ts";
const stringToEncrypt = Deno.args.join("");
console.log(encrypt(stringToEncrypt, 17));
