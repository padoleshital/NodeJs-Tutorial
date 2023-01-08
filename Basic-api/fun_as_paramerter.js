//function as parameter
const http = require('http');

function datecontrol(req, resp)
{
    resp.write("Hello, server created using function as parameter");
    resp.end();
}
http.createServer(datecontrol).listen(5000)