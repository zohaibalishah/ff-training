const fs = require('fs');
const { promisify } = require('util');

// fs.readFileSync
// fs.readFile
// fs.writeFileSync
// fs.watchFile

// fs.appendFileSync
// fs.appendFile

// fs.rename
// fs.renameSync

// fs.unlink
// fs.mkdir
// fs.rmdir
// fs.readdir

// fs.writeFileSync("file.txt","write this in file eiurywieuyriuyweruy")
// console.log('done')

const writeFIle = promisify(fs.writeFile);
// const readFile = promisify(fs.readFile);
// const appendFile = promisify(fs.appendFile);
// const renamFIle = promisify(fs.rename);




writeFIle('log.txt', `${new Date()}`)
  .then(() => console.log('done3'))
  .catch((error) => console.log('error', error));



// readFile('./file.txt', 'utf-8')
//   .then((ressult) => {
//     console.log(ressult);
//   })
//   .catch((error) => console.log('error', error));


//   appendFile('file3.text', 'next data')
//   .then(() => console.log('done3'))
//   .catch((error) => console.log('error', error));


  
//   appendFile('file.txt', ' next zohaib')
// .then(() => console.log('done3'))
// .catch((error) => console.log('error', error));



// renamFIle("file.text","zohaib.txt")
// .then(res=>console.log(res))
// .catch(error=>console.log(error))


// fs.mkdir("routes1",(error,result)=>{
//     console.log(result)
// })

// fs.rmdirSync("routes2")


// if(fs.existsSync("routes")){
//     console.log('yes')
// }else{
//     fs.mkdir("routes",(error,result)=>{
//         console.log(result)
//     })
// }


// fs.unlinkSync("file.txt")
