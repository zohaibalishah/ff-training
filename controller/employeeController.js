


function Employees(req, res) {
    res.json({ message: 'login' });
  }
  
  function EmployeeDetail(req, res) {
    res.json({ message: 'SignUp' });
  }
  
  module.exports = { Employees, EmployeeDetail };
  