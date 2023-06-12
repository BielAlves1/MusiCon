const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const create = async (req, res) => {
    var info = req.body
    info.data_Nascimento = new Date(req.body.data_Nascimento);

    const perfil = await prisma.perfil.createMany({
        data: info
    })

    res.status(201).json(perfil).end()
}

const read = async (req, res) => {
    const perfil = await prisma.perfil.findMany()

    res.status(200).json(perfil).end()
}

const update = async (req, res) => {
    var info = req.body
    info.data_Nascimento = new Date(req.body.data_Nascimento);

    const perfil = await prisma.perfil.update({
        where: {
            id_User: Number(req.params.id_User)
        },
        data: info
    })

    res.status(200).json(perfil).end()
}

const remove = async (req, res) => {
    const perfil = await prisma.perfil.delete({
        where: {
            id_User: Number(req.params.id_User)
        }
    })
    res.status(200).json({ msg: "Perfil Deletado!" }).end()
}

module.exports = {
    create,
    read,
    update,
    remove
}