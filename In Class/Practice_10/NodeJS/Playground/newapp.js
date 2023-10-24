const fs = require('fs');

const dataBuffer = fs.readFileSync('data.json');
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);
console.log(data.name, data.city)
data.name = "marisela";
data.city ="terre haute";
const updateDataJSON = JSON.stringify(data)
fs.writeFileSync('data.json', updateDataJSON)
// console.log(data.name, data.city)

