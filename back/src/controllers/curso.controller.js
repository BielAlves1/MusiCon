const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const create = async (req, res) => {
    const curso = await prisma.curso.createMany({
        data: req.body
    })

    res.status(201).json(curso).end()
}

const read = async (req, res) => {
    const curso = await prisma.curso.findMany()

    res.status(200).json(curso).end()
}

const update = async (req, res) => {
    const curso = await prisma.curso.update({
        where: {
            id: Number(req.body.id_Curso)
        },
        data: req.body
    })

    res.status(200).json(curso).end()
}

const remove = async (req, res) => {
    const curso = await prisma.curso.delete({
        where: {
            id: Number(req.body.id_Curso)
        }
    })
    res.status(200).json(curso).end()
}

module.exports = {
    create,
    read,
    update,
    remove
}