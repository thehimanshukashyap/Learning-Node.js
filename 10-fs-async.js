const {readFile,writeFile, readFileSync} = require('fs'); // This initializes two variables with same values
readFile('./content/first.txt','utf8', (err,result) => {
    if(err) throw err;
    const first = result;
    readFile('./content/second.txt','utf8', (err,result) => {
        if(err) throw err;
        const second = result;
        writeFile('./content/result-async.txt', first + second, (err) => {
            if(err) throw err;
            console.log('File written');
        });
    });
})