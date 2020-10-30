const fs = require('fs');

fs.readFile('./docs/a.txt', (err,data) => {
    if(err) {
        throw Error(err);
    }

    fs.writeFile('./docs/c.txt',data,() => {
        console.log("Write operation done");
    });
});

