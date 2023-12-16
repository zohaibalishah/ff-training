const app = require('express')();
const AuthRoute = require('./routes/authRoute');
const EmployeeRoute = require('./routes/employeeRoute');
const Logs = require('./middleware/log');

app.use(Logs);
// // for linking/adding library or files /packages


app.use("/api/site",AuthRoute);
app.use("/ap/",authication, EmployeeRoute);


app.listen(3000, () => {
  console.log('server is runing');
});
