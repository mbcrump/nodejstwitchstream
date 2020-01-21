//const mymodule = require('./mymodule.js')
const myNewLinemodule = require('./returnNewLines.js')

//const directory = process.argv[2]
const file = process.argv[2]
//const ext = process.argv[3]

// mymodule(directory, ext, function (err, list) {
//     if (err) {
//         return console.error('An error occured. Please see the exception below' + err)
//     }

//     list.forEach(function (file) {
//         console.log(file)
//     });

// })

myNewLinemodule(file, function (err, number) {
    if (err) {
        return console.error('An error occured. Please see the exception below' + err)
    }

    // console.log(number)
})

//mymodule()
myNewLinemodule()

