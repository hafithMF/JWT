const jwt = require('jsonwebtoken');
const secretKey = 'smktibazma';
const payload = { userId: 1 , username: "Hafith", kelas: "XI" }

const generateToken = jwt.sign(payload, secretKey);
console.log(generateToken);