const fs = require('fs');

const rs = fs.createReadStream('./docs/a.txt');

const ws = fs.createWriteStream('./docs/b.txt');

rs.on('data', (chunk) => {
    ws.write(chunk);
});

