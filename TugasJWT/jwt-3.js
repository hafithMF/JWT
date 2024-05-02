const jwt = require('jsonwebtoken');
const secretKey = 'rahasia';

function createJadwalKegiatanToken(waktuShalat, waktuMakan, waktuBermain) {
    const payload = {
        waktuShalat: waktuShalat,
        waktuMakan: waktuMakan,
        waktuBermain: waktuBermain,
    };
    const token = jwt.sign(payload, secretKey, { expiresIn: "48h" }); 
    return token;
}
const waktuShalat = "06:00"; 
const waktuMakan = "12:30"; 
const waktuBermain = "15:00"; 
const jadwalKegiatanToken = createJadwalKegiatanToken(waktuShalat, waktuMakan, waktuBermain);
console.log("Token JWT jadwal kegiatan:", jadwalKegiatanToken);
