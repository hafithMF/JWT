const jwt = require('jsonwebtoken');
const secretKey = 'smktibazma';

function creteToken(id, name, clases, address, hobby) {
    const data = { id, name, clases, address, hobby };
    return jwt.sign(data, secretKey);
}

function verify(token) {
    try {
    const decoded = jwt.verify(token, secretKey);
    return decoded;
} catch (err) {
        return null;
}
}

const siswa = {
    id: 1,
    name: "jamaluddin",
    clases: "XI",
    address: "Tanggerang City",
    hobby: ["Coding Only", "Desain Only"]
}

// Membuat token siswa
const token = creteToken(
    siswa.id,
    siswa.name,
    siswa.clases,
    siswa.address,
    siswa.hobby
)
console.log('token', token)

// verifikasi token siswa
const decodedSiswa = verify(token)
console.log('decodedSiswa:', decodedSiswa)