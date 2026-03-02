const { prisma } = require("../prisma/prisma-client");

const all = async function(req, res) {
    try {
        const employees = await prisma.employee.findMany()
        res.status(200).json(employees)
    } catch(err) {
        res.status(400).json({ message: "Не удалось получить сотрудников!" })
    }
}

const getEmployee = async function(req, res) {
    try {

    } catch(err) {
        res.status(500).json({ message: "Что-то пошло не так."} )
    }
}

const addEmployee = async function(req, res) {
    try {
        const data = req.body;

        if (!data.firstName || !data.lastName || !data.adress || !data.age) {
            return res.status(400).json({ message: "Все поля обязательны!" })
        }

        const employee = await prisma.employee.create({
            data: {
                ...data,
                userId: req.user.id
            }
        })

        return res.status(201).json(employee)
    } catch(err) {
        res.status(500).json({ message: "Что-то пошло не так."} )
    }

}

const removeEmployee = async function(req, res) {
    try {

    } catch(err) {
        res.status(400).json({ message: "Что-то пошло не так."} )
    }

}

const editEmployee = async function(req, res) {
    try {

    } catch(err) {
        res.status(400).json({ message: "Что-то пошло не так."} )
    }

}

module.exports = { all, getEmployee, addEmployee, removeEmployee, editEmployee }