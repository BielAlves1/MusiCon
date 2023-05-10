const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const create = async (req, res) => {
    const resposta = await prisma.resposta.createMany({
        data: req.body
    })

    res.status(201).json(resposta).end()
}

const read = async (req, res) => {
    const resposta = await prisma.resposta.findMany()

    res.status(200).json(resposta).end()
}

const update = async (req, res) => {
    const resposta = await prisma.resposta.update({
        where: {
            id: Number(req.body.id_Resp)
        },
        data: req.body
    })

    res.status(200).json(resposta).end()
}

const remove = async (req, res) => {
    const resposta = await prisma.resposta.delete({
        where: {
            id: Number(req.body.id_Resp)
        }
    })
    res.status(200).json(resposta).end()
}

module.exports = {
    create,
    read,
    update,
    remove
}