const jwt = require('jsonwebtoken');
const secretKey = 'smktibazma';

function creteToken(id, name, clases, address, hobby) {
    const data = { id, name, clases, address, hobby };
    return jwt.sign(data, secretKey);
}

const arrSiswa = [
    {
        id: 1,
        name: "Ahmad Fauzi",
        clases: "XI",
        address: "Lampung Barat",
        hobby: "Futsal"
    },
    {
        id: 2,
        name: "Rdd",
        clases: "XII",
        address: "Sumatera Selatan",
        hobby: "Coding"
    },
    {
        id: 3,
        name: "Muim",
        clases: "X",
        address: "Sumatera Barat",
        hobby: "Main Bola"
    }
    
]
const arrTokens = []

// Membuat perulangan arr siswa

arrSiswa.forEach(siswa => {
    const token = creteToken(
        siswa.id,
        siswa.name,
        siswa.clases,
        siswa.address,
        siswa.hobby
    )
    arrTokens.push(token);
})

// Lakukan perulangan arrTokens
arrTokens.forEach((token, index) => {
    console.log(`Siswa dengan id ${index + 1}: menggunakan token: ${token} \n` )
})
