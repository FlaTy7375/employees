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
        const { id } = req.params

        const employee = await prisma.employee.findUnique({
            where: {
                id
            }
        })

        res.status(200).json(employee)
    } catch(err) {
        console.error('Get employee error:', err);
        res.status(500).json({ message: "Не удалось получить сотрудника", error: err.message })
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
        const { id } = req.params;

        await prisma.employee.delete({
            where: {
                id
            }
        });

        res.status(200).json({ message: "Сотрудник удален!" })
    } catch(err) {
        res.status(400).json({ message: "Не удалось удалить сотрудника.", error: err.message } )
    }

}

const editEmployee = async function(req, res) {
    try {
        const data = req.body
        const { id } = req.params

        await prisma.employee.update({
            where: {
                id
            },
            data
        });

        res.status(200).json({ message: "Сотрудник отредактирован!" })
    } catch(err) {
        res.status(400).json({ message: "Что-то пошло не так."} )
    }

}

module.exports = { all, getEmployee, addEmployee, removeEmployee, editEmployee }