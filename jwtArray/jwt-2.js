const jwt = require('jsonwebtoken');
const secretKey = 'rahasia';

function verifyJWTToken(token) {
    try {
        const decoded = jwt.verify(token, secretKey);
        if (!decoded.namaLengkap ||!decoded.alamatRumah) {
            throw new Error('Token tidak berisi informasi penting');
        }
        return decoded;
    } catch (error) {
        throw new Error('Token tidak valid: ' + error.message);
    }
}

const tokensToVerify = [
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1hTGVuZ2thcCI6IkpvaG4gRG9lIiwiYWxhbWF0UnVtYWgiOiJKbC4gQW1hbiBOby4gMTIzIiwibm9tb3JLb250YWsiOiIwODEyMzQ1Njc4OTAiLCJpYXQiOjE3MTQ3MjE3NTYsImV4cCI6MTcxNDgwODE1Nn0.Y0LMw7Osgr_C4roKs94kE1hBGmaVhq790R4mOxQhDbc',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1hTGVuZ2thcCI6IkphbmUgU21pdGgiLCJhbGFtYXRSdW1haCI6IkpsLiBEYW1haSBOby4gNDU2Iiwibm9tb3JLb250YWsiOiIwODEyMzQ1Njc4OTEiLCJpYXQiOjE3MTQ3MjE3NTYsImV4cCI6MTcxNDgwODE1Nn0.Bkgpcy3R09FS9FTC9mI3pSpMt5fKnUHY8_q_E6hoqC0',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1hTGVuZ2thcCI6IkFsaWNlIEpvaG5zb24iLCJhbGFtYXRSdW1haCI6IkpsLiBCYWhhZ2lhIE5vLiA3ODkiLCJub21vcktvbnRhayI6IjA4MTIzNDU2Nzg5MiIsImlhdCI6MTcxNDcyMTc1NiwiZXhwIjoxNzE0ODA4MTU2fQ.O86u5Wr5eA5tdn5XktRPe6be4zXZ9h15An8vgqX-oS0',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1hTGVuZ2thcCI6IkJvYiBCcm93biIsImFsYW1hdFJ1bWFoIjoiSmwuIFNlamFodGVyYSBOby4gMTAxIiwibm9tb3JLb250YWsiOiIwODEyMzQ1Njc4OTMiLCJpYXQiOjE3MTQ3MjE3NTYsImV4cCI6MTcxNDgwODE1Nn0.rb-FtiNFmuxcP_WGA5nX4Hzj37IiqCmtC40aNe-2rW4',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1hTGVuZ2thcCI6IkNoYXJsaWUgRGF2aXMiLCJhbGFtYXRSdW1haCI6IkpsLiBLYXlhIE5vLiAyMDIiLCJub21vcktvbnRhayI6IjA4MTIzNDU2Nzg5NCIsImlhdCI6MTcxNDcyMTc1NiwiZXhwIjoxNzE0ODA4MTU2fQ.OSiMfeev5M477zbtjKo_qh2bTQhfe_SxndA25uDHD7E'
];

tokensToVerify.forEach((token) => {
    try {
        const decodedPayload = verifyJWTToken(token);
        console.log("Token JWT valid. Informasi penting:", decodedPayload);
    } catch (error) {
        console.error("Gagal memverifikasi token:", error.message)
    }
});