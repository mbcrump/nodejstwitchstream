const fs = require('fs')
const path = require('path')

let folderPath = ''
let ext = ''

folderPath = process.argv[2]
ext = '.' + process.argv[3]

fs.readdir(folderPath, function (err, data) {

    data.forEach(function (file) {
        if (path.extname(file) === ext) {
            console.log(file);
        }
    })
});
