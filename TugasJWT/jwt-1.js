const jwt = require('jsonwebtoken');
const secretKey = 'rahasia';

function createJWTToken(namaLengkap, alamatRumah, nomorKontak) {
    const payload = {
        namaLengkap: namaLengkap,
        alamatRumah: alamatRumah,
        nomorKontak: nomorKontak,
    };
    const token = jwt.sign(payload, secretKey, { expiresIn: "24h" });
    return token;
}
const namaLengkap = "John Doe";
const alamatRumah = "Jl. Aman No. 123";
const nomorKontak = "081234567890";
const token = createJWTToken(namaLengkap, alamatRumah, nomorKontak,);
console.log("Token JWT yang dibuat:", token);