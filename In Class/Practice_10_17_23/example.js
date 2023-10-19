const fs = require("fs");
content = 'Hello, Node.js!';
fs.writeFile('input.txt', content,'utf-8',(err)=>{
    if (err){
        console.error('Error writing to the file:',err);
        return;
    }
    console.log('File is saved');
});

// const data = fs.readFileSync('input.txt');
// console.log(data.toString());
// console.log("Program Ended");

 fs.readFile('input.txt',functoin(err,data){
    if (err) return console.error(err)
    console.log(data.toString())
 });