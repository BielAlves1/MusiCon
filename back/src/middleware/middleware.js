const jwt = require("jsonwebtoken")

const validaAccess = (req, res, next) => {
    const token = req.headers.authorization

    jwt.verify(token, process.env.KEY, (err, data) => {
        if (err != null) res.status(404).json(err).end()
        console.log(data)
        if(data["uid"] != null){
            next()
        }
        else{
            res.status(401).end()
        }
    })
}

module.exports = {
    validaAcesso
}
