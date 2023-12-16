function logs(req, res, next) {
  console.log(`${req.url} ${new Date()} `);
  next();
}


module.exports=logs