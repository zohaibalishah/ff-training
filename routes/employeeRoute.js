const express = require('express')
const router = express.Router();
const employeeController=require("../controller/employeeController")


// default req,req, next function passto  builtin in Employees
router.post("/login",employeeController.Employees)
router.post("/employees-detail",employeeController.EmployeeDetail)




module.exports = router;
