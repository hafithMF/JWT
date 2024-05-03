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
const tokenToVerify = [
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ3YWt0dVNoYWxhdCI6IjA2OjAwIiwid2FrdHVNYWthbiI6IjEyOjMwIiwid2FrdHVCZXJtYWluIjoiMTU6MDAiLCJpYXQiOjE3MTQ3MjIwODcsImV4cCI6MTcxNDg5NDg4N30.TeJ8pE7nRUzli5ETtxUqZdtQiamcIAcSz3W9cdzd3A0',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ3YWt0dVNoYWxhdCI6IjA3OjAwIiwid2FrdHVNYWthbiI6IjEzOjMwIiwid2FrdHVCZXJtYWluIjoiMTY6MDAiLCJpYXQiOjE3MTQ3MjIwODcsImV4cCI6MTcxNDg5NDg4N30.S1Dn_s9huAbwt51cR_AKBAMzhoWRqSWujk-yWYRv6x0',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ3YWt0dVNoYWxhdCI6IjA4OjAwIiwid2FrdHVNYWthbiI6IjE0OjMwIiwid2FrdHVCZXJtYWluIjoiMTc6MDAiLCJpYXQiOjE3MTQ3MjIwODcsImV4cCI6MTcxNDg5NDg4N30.upCa0OH3OMOVC-YruiarIM17AiLM025cH7mOgwcgSOs',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ3YWt0dVNoYWxhdCI6IjA5OjAwIiwid2FrdHVNYWthbiI6IjE1OjMwIiwid2FrdHVCZXJtYWluIjoiMTg6MDAiLCJpYXQiOjE3MTQ3MjIwODcsImV4cCI6MTcxNDg5NDg4N30.1chfrQZhbCk8S96Wtx6n44aHu7W0UF98bg5MgyfzKX8',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ3YWt0dVNoYWxhdCI6IjEwOjAwIiwid2FrdHVNYWthbiI6IjE2OjMwIiwid2FrdHVCZXJtYWluIjoiMTk6MDAiLCJpYXQiOjE3MTQ3MjIwODcsImV4cCI6MTcxNDg5NDg4N30.wsI_SIKmFHbRtbRcGdkHcIoBK291xeUCF3AT0yuywXg'
] 
try {
    const decodedPayload = verifyJadwalKegiatanToken(tokenToVerify);
    console.log("Token JWT jadwal kegiatan valid. Jadwal kegiatan:", decodedPayload);
} catch (error) {
    console.error("Gagal memverifikasi token:", error.message);
}