const jwt = require('jsonwebtoken');
const secretKey = 'rahasia';

function verifyJWTToken(token) {
    try {
        const decoded = jwt.verify(token, secretKey);
        if (!decoded.namaLengkap || !decoded.alamatRumah) {
            throw new Error('Token tidak berisi informasi penting');
        }
        return decoded;
    } catch (error) {
        throw new Error('Token tidak valid: ' + error.message);
    }
}
const tokenToVerify = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1hTGVuZ2thcCI6IkpvaG4gRG9lIiwiYWxhbWF0UnVtYWgiOiJKbC4gQW1hbiBOby4gMTIzIiwibm9tb3JLb250YWsiOiIwODEyMzQ1Njc4OTAiLCJpYXQiOjE3MTQ2MzgyMzIsImV4cCI6MTcxNDcyNDYzMn0.s-bQt-zCFnXA2AGwx1oV9I8fAQHaIhnPqNy65PmtP-k'; 
try {
    const decodedPayload = verifyJWTToken(tokenToVerify);
    console.log("Token JWT valid. Informasi penting:", decodedPayload);
} catch (error) {
    console.error("Gagal memverifikasi token:", error.message);
}
