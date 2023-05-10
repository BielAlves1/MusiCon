const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const create = async (req, res) => {
    const perfil = await prisma.perfil.createMany({
        data: req.body
    })

    res.status(201).json(perfil).end()
}

const read = async (req, res) => {
    const perfil = await prisma.perfil.findMany()

    res.status(200).json(perfil).end()
}

const update = async (req, res) => {
    const perfil = await prisma.perfil.update({
        where: {
            id: Number(req.body.id_User)
        },
        data: req.body
    })

    res.status(200).json(perfil).end()
}

const remove = async (req, res) => {
    const perfil = await prisma.perfil.delete({
        where: {
            id: Number(req.body.id_User)
        }
    })
    res.status(200).json(perfil).end()
}

module.exports = {
    create,
    read,
    update,
    remove
}