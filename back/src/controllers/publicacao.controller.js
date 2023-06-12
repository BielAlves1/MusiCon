const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const create = async (req, res) => {
    const publicacao = await prisma.publicacao.createMany({
        data: req.body
    })

    res.status(201).json(publicacao).end()
}

const read = async (req, res) => {
    const publicacao = await prisma.publicacao.findMany()

    res.status(200).json(publicacao).end()
}

const update = async (req, res) => {
    const publicacao = await prisma.publicacao.update({
        where: {
            id_Pub: Number(req.params.id_Pub)
        },
        data: req.body
    })

    res.status(200).json(publicacao).end()
}

const remove = async (req, res) => {
    const publicacao = await prisma.publicacao.delete({
        where: {
            id_Pub: Number(req.params.id_Pub)
        }
    })
    res.status(200).json(publicacao).end()
}

module.exports = {
    create,
    read,
    update,
    remove
}