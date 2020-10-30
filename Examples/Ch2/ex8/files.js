const fs = require('fs');

fs.readFile('./demo.txt',function(err,data) {
    if(err) {
        throw Error(err);
    }
    console.log(data); // write the buffer (binary data)
    console.log(data.toString());
});

console.log("\n End of the reading operation");

