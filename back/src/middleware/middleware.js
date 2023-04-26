const jwt = require('jsonwebtoken')
require('dotenv').config()

const verificaAccess = (req, res) => {
    const token = req.headers.authorization

    jwt.verify(token, process.env.KEY, (err, data) => {
        if (err != null) res.status(401).json({...err, "validar": false}).end()
        else{
            if(data["userid"] == req.body.id){
                res.status(200).json({"validar": true, "user_name": data["user_name"]}).end()
            }
            else{
                res.status(401).json({"validar": false}).end()
            }
        }
        
    })
}

module.exports = {
    verificaAccess
}