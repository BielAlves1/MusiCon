const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const create = async (req, res) => {
    const comentario = await prisma.comentario.createMany({
        data: req.body
    })

    res.status(201).json(comentario).end()
}

const read = async (req, res) => {
    const comentario = await prisma.comentario.findMany()

    res.status(200).json(comentario).end()
}

const update = async (req, res) => {
    const comentario = await prisma.comentario.update({
        where: {
            id_Coment: Number(req.params.id_Coment)
        },
        data: req.body
    })

    res.status(200).json(comentario).end()
}

const remove = async (req, res) => {
    const comentario = await prisma.comentario.delete({
        where: {
            id_Coment: Number(req.params.id_Coment)
        }
    })
    res.status(200).json(comentario).end()
}

module.exports = {
    create,
    read,
    update,
    remove
}