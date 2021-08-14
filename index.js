
const express = require('express')
const app = express();
const port = 8011;
const fs=require('fs')

app.use(express.json());


 var d = new Date();
 var timeStamp =""+d.getTime()+"";
 var fileName="./"+d.getDate()+"-"+d.getHours()+".txt";


 app.get('/',function(req,res){
    res.json("Home Page")
})
app.get('/createFile', function (req, res) {
    fs.writeFile(fileName,timeStamp,function(err){
             if(err) throw err;   
               res.json("File created")
           })
           
  
})

app.get('/getTextFiles',function(req,res){
    var files = fs.readdirSync("./");
const path = require('path');
const names = [];
for(var i in files) {
   if(path.extname(files[i]) === ".txt") {
       names.push(files[i])
   }
}
res.json(names)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
  });




