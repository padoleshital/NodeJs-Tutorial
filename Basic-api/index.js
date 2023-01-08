const http = require('http');
// basic server code  using arraow function
http.createServer((req,resp)=>{
    resp.write("First response in basic server");
    resp.end()
}).listen(5000);
