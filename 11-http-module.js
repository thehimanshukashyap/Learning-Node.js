const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end('This is home page');
    }else if(req.url === '/about'){
        res.end('This is about page');
    }else{
        // res.end('404 not found');
        res.end("<h1>Oops!!</h1><br/><p>The page you are looking for does not exit</p><br/><a href='/'>Go back</a>");
    }
});

server.listen(3000);