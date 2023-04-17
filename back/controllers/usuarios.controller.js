const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const test = async (req, res) => {
    res.status(200).json("API online, aguardando requisições").end();
}

const create = async (req, res) => {
    const usuarios = await prisma.usuarios.create({
        data: req.body
    })
    res.status(201).end();
}

const readAll = async (req, res) => {
    const usuarios = await prisma.usuarios.findMany({
    })
    res.json(usuarios).end();
}

const read = async (req, res) => {
    const usuarios = await prisma.usuarios.findUnique({
        where: {
            id: Number(req.params.id)
        }
    })
    res.json(usuarios).end();
}

const login = async (req, res) => {
    const usuarios = await prisma.usuarios.findMany({
        where: {
            AND: [
                { email: req.body.email },
                { senha: req.body.senha }
            ]
        }
    })
    if (usuarios.length > 0)
        res.status(202).json(usuarios).end();
    else
        res.status(404).end();
}

const update = async (req, res) => {
    const usuarios = await prisma.usuarios.update({
        where: {
            id: Number(req.params.id)
        },
        data: req.body
    })
    res.status(202).json(usuarios).end();
}

const del = async (req, res) => {
    const usuarios = await prisma.usuarios.delete({
        where: {
            id: Number(req.params.id)
        }
    })
    res.status(204).end();
}

module.exports = {
    test,
    create,
    readAll,
    read,
    login,
    update,
    del
}