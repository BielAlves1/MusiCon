const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const create = async (req, res) => {
    const aula = await prisma.aula.createMany({
        data: req.body
    })

    res.status(201).json(aula).end()
}

const read = async (req, res) => {
    const aula = await prisma.aula.findMany()

    res.status(200).json(aula).end()
}

const update = async (req, res) => {
    const aula = await prisma.aula.update({
        where: {
            id_Aula: Number(req.params.id_Aula)
        },
        data: req.body
    })

    res.status(200).json(aula).end()
}

const remove = async (req, res) => {
    const aula = await prisma.aula.delete({
        where: {
            id_Aula: Number(req.params.id_Aula)
        }
    })
    res.status(200).json(aula).end()
}

module.exports = {
    create,
    read,
    update,
    remove
}