const jwt = require('jsonwebtoken');
const secretKey = 'smktibazma';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJuYW1lIjoiSGFmaXRoIiwia2VsYXMiOiJYSSIsImlhdCI6MTcxNDYzMzA4NX0.HHPqaFcLluN8y9PKpf6BF3vlNizGI2MGFHy89j9GS3k'

jwt.verify(token, secretKey, (err, decoded) => { 
    if (err) {
        console.log.eror(err)
    } else {
        console.log('Token is valid');
        delete decoded.iat;
        console.log(decoded);
    }
})