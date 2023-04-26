const bcrypt = require('bcrypt')
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const jwt = require('jsonwebtoken')

const create = async (req, res) => {
    bcrypt.genSalt(10, function (err, salt) {
        if (err == null) {
            bcrypt.hash(req.body.senha, salt, async function (errCrypto, hash) {
                if (errCrypto == null) {
                    req.body.senha = hash

                    const usuario = await prisma.usuario.createMany({
                        data: req.body
                    })

                    res.status(201).json(usuario).end()
                } else {
                    res.status(500).json(errCrypto).end()
                }
            });
        } else {
            res.status(500).json(err).end()
        }
    })
}
const login = async (req, res) => {
    const usuario = await prisma.usuario.findFirstOrThrow({
        where: {
            email: req.body.email
        }
    }).then((value) => { return (value) })
        .catch((err) => { return { "erro": "Usuário Incorreto", "validacao": false } })

    if (usuario.erro == null) {
        bcrypt.compare(req.body.senha, usuario.senha).then((value) => {
            if (value) {
                let data = { "user_id": usuario.id, "user_name": usuario.user_name }
                jwt.sign(data, process.env.KEY, req.body.check ? {} : { expiresIn: '30m' }, function (err2, token) {
                    if (err2 == null) {

                        res.status(200).json({ "user_id": usuario.id,  "token": token, "user_name": usuario.user_name, "validacao": true }).end()
                    } else {
                        res.status(500).json(err2).end()
                    }

                })
            } else {
                res.status(404).json({ "erro": "Senha incorreta", "validacao": false }).end()
            }
        })
    } else {
        res.status(404).json(usuario).end()
    }


}

const update = async (req, res) => {
    bcrypt.genSalt(10, function (err, salt) {
        if (err == null) {
            bcrypt.hash(req.body.senha, salt, async function (errCrypto, hash) {
                if (errCrypto == null) {
                    req.body.senha = hash

                    const usuario = await prisma.usuario.update({
                        where: { 
                            id_User: Number(req.params.id_User)
                        },
                        data: req.body
                    });
                    res.status(201).json(usuario).end();
                } else {
                    res.status(500).json(errCrypto).end()
                }
            });
        } else {
            res.status(500).json(err).end()
        }
    })
}

const remove = async (req, res) => {
    const usuario = await prisma.usuario.delete({
        where: {
            id_User: Number(req.params.id_User)
        }
    })
    res.status(200).json({ msg: "Usuário Deletado!" }).end()
}



module.exports = {
    login,
    create,
    update,
    remove
}