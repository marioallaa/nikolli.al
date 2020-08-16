var connect = require('connect');
var serveStatic = require('serve-static');
const { exec } = require("child_process");

var port = 8080;

connect()
    .use(serveStatic(__dirname))
    .listen(port, () => {
        exec("ip addr show", (error, stdout, stderr) => {
            console.log(`* Static Server Running..
>> \t Local IP:  http://${stdout.split("inet ")[2].split("/24 brd")[0]}:${port}`);
        });
    });