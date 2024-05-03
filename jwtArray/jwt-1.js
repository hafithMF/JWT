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

const users = [
    { namaLengkap: "John Doe", alamatRumah: "Jl. Aman No. 123", nomorKontak: "081234567890" },
    { namaLengkap: "Jane Smith", alamatRumah: "Jl. Damai No. 456", nomorKontak: "081234567891" },
    { namaLengkap: "Alice Johnson", alamatRumah: "Jl. Bahagia No. 789", nomorKontak: "081234567892" },
    { namaLengkap: "Bob Brown", alamatRumah: "Jl. Sejahtera No. 101", nomorKontak: "081234567893" },
    { namaLengkap: "Charlie Davis", alamatRumah: "Jl. Kaya No. 202", nomorKontak: "081234567894" }
];

users.forEach(user => {
    const token = createJWTToken(user.namaLengkap, user.alamatRumah, user.nomorKontak);
    console.log(`Token JWT yang dibuat untuk ${user.namaLengkap}: \n `, token );
});
