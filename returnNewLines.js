const fs = require('fs')

module.exports = function (file, callback) {
    var buf = fs.readFile(file, 'utf8', function (err, count) {
        if (err) {
            return callback(err)
        }

        // count = count(function (file) {
        //     return file.split('\n').length - 1

        // })

        callback(null, file)
    })
}

