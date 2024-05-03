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

const data = [
    { waktuShalat: "06:00", waktuMakan: "12:30", waktuBermain: "15:00" },
    { waktuShalat: "07:00", waktuMakan: "13:30", waktuBermain: "16:00" },
    { waktuShalat: "08:00", waktuMakan: "14:30", waktuBermain: "17:00" },
    { waktuShalat: "09:00", waktuMakan: "15:30", waktuBermain: "18:00" },
    { waktuShalat: "10:00", waktuMakan: "16:30", waktuBermain: "19:00" }
];

data.forEach((datum) => {
    const jadwalKegiatanToken = createJadwalKegiatanToken(datum.waktuShalat, datum.waktuMakan, datum.waktuBermain);
    console.log("Token JWT jadwal kegiatan:", jadwalKegiatanToken);
});