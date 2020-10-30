const fs = require('fs');

fs.writeFile('./docs/b.txt',"This is output",function() {
    console.log("Write opeation done");
});