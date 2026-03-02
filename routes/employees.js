const express = require('express');
const router = express.Router();
const { auth } = require('../middleware/auth')
const { all, addEmployee, removeEmployee, editEmployee, getEmployee } = require('../controllers/employees')

// api/employees
router.get('/', auth, all)

// api/employees/:id
router.get('/:id', auth, getEmployee)

// api/employees/add
router.post('/add', auth, addEmployee)

// api/employees/remove
router.post('/remove/:id', auth, removeEmployee)

// api/employees/edit
router.put('/edit/:id', auth, editEmployee)

module.exports = router