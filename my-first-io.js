const fs = require('fs')
//console.log(process.argv[2])
let result = ''
result = process.argv[2]
var buf = fs.readFileSync(result).toString()

const str = buf.toString()
console.log(str.split('\n').length - 1)