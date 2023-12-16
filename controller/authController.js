const jwt=require("../helper/jwt")

async function Login(req, res) {
  const result=await  jwt.generateToken({id:12798312,name:'zohaib'})
  res.json({ message: 'login',result });
}

function SignUp(req, res) {
  res.json({ message: 'SignUp' });
}

module.exports = { Login, SignUp };
