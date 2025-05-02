const http = require('http');

const server = http.createServer((req,res)=>{
     res.write("welcome to  My Server");
     res.end();
});

/* server.listen('3000'); */

/* more suitable type for me  */

server.listen(3000, '127.0.0.1', ()=>{
    console.log("server running on http://127.0.0.1:3000");
});