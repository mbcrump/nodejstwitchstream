const fs = require('fs')
let result = ''
result = process.argv[2]
var buf = fs.readFile(process.argv[2], 'utf8', (err, data) => {
    if (err) throw err;
    // console.log(data);

    const str = data.split('\n').length - 1
    console.log(str)
});
