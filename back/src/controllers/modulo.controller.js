const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const create = async (req, res) => {
    const modulo = await prisma.modulo.createMany({
        data: req.body
    })

    res.status(201).json(modulo).end()
}

const read = async (req, res) => {
    const modulo = await prisma.modulo.findMany()

    res.status(200).json(modulo).end()
}

const update = async (req, res) => {
    const modulo = await prisma.modulo.update({
        where: {
            id_Modulo: Number(req.params.id_Modulo)
        },
        data: req.body
    })

    res.status(200).json(modulo).end()
}

const remove = async (req, res) => {
    const modulo = await prisma.modulo.delete({
        where: {
            id_Modulo: Number(req.params.id_Modulo)
        }
    })
    res.status(200).json(modulo).end()
}

module.exports = {
    create,
    read,
    update,
    remove
}