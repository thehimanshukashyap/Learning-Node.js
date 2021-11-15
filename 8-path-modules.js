const path = require('path')

console.log(path.sep)
console.log(path.delimiter)
console.log(path.dirname(__filename))
console.log(path.extname(__filename))
console.log(path.parse(__filename))

const filePath = path.join('/content','subfolder','text.txt')
console.log(filePath)
console.log(path.basename(filePath))

const absolutePath = path.resolve(__dirname,'subfolder','text.txt')
console.log(absolutePath)