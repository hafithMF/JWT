const jwt = require('jsonwebtoken');
const secretKey = 'rahasia';

function verifyJadwalKegiatanToken(token) {
    try {
        const decoded = jwt.verify(token, secretKey);
        if (!decoded.waktuShalat || !decoded.waktuMakan || !decoded.waktuBermain) {
            throw new Error('Token tidak berisi informasi jadwal kegiatan yang lengkap');
        }
        return decoded;
    } catch (error) {
        throw new Error('Token tidak valid: ' + error.message);
    }
}
const tokenToVerify = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ3YWt0dVNoYWxhdCI6IjA2OjAwIiwid2FrdHVNYWthbiI6IjEyOjMwIiwid2FrdHVCZXJtYWluIjoiMTU6MDAiLCJpYXQiOjE3MTQ2Mzg2MDEsImV4cCI6MTcxNDgxMTQwMX0.Y2XcemjhXowKsE2LOFv2Dj7i-fHPGDBKcPahzSdYk30'; 
try {
    const decodedPayload = verifyJadwalKegiatanToken(tokenToVerify);
    console.log("Token JWT jadwal kegiatan valid. Jadwal kegiatan:", decodedPayload);
} catch (error) {
    console.error("Gagal memverifikasi token:", error.message);
}
