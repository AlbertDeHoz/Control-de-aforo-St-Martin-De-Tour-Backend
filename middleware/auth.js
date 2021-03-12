const router = require('express').Router()
const {decodeAdmin} = require('../services/token')

module.exports = {
    verify: (req, res, next) => {
        if (!req.headers.token){
            res.json({res:'no hay token'})
        }
        else{
            const token = req.headers.token
            decodedToken = decodeAdmin(token)
            if (!decodedToken){
                res.status(406).json({res:'token inválido'})
            }else{
                if (decodedToken.role === 'Administrador'){
                    next()
                }
                else{
                    res.status(403).json({user:'Not Authorized'})
                }
            }
        }
    }
}
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYW5naWVBbG9uc28iLCJyb2xlIjoiQWRtaW5pc3RyYWRvciIsImlhdCI6MTYxNDQ2NTg0NCwiZXhwIjoxNjE0NDY5NDQ0fQ.aOyrNtHJv7z3QoY06f4KYXWd8hJh3VLHOBUFOhOcL_w