
var totalNum = 0

for (let i = 2; i < process.argv.length; i++) {
    totalNum = totalNum + +process.argv[i]
}

// for (let i = 1; i <= 100; i++) {
//     console.log('Number' + +i + 'I WILL NOT WRITE ON THE DESK')
// }

console.log(totalNum)