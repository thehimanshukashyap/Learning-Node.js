var http = require('http');
var fs = require('fs');

http.createServer(function(req,res){
    // const text = fs.readFileSync('./content/big.txt', 'utf8');
    // res.end(text);
    const fileStream = fs.createReadStream('./content/big.txt','utf8');

    fileStream.on('open', function(chunk){
        // pipe passess the data from the file to the response in chunks
        fileStream.pipe(res); // pipe the file to the response
    });
    fileStream.on('error',function(err){
        res.end(err);
        console.log(err);
    });
}).listen(5000);