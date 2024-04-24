const http = require("http")
const fs = require("fs")


const myServer = http.createServer((req, res)=> {
console.log("New req received");
// res.end("Hello I created my first ever web server")
const log= Date.now() + req.url + "New request received ";
console.log("log", log)
fs.appendFile("test.txt", log , (err, re) => {
    // res.end(JSON.stringify({
    //     data: 'Hello World!',
    //   }));
    switch(req.url) {
      case "/": res.end("Home Page"); break;
      case "/about": res.end("About Page");break;
      default: res.end("404 Not Found!"); 
    }
    })
})



myServer.listen(8000, ()=> console.log("Server Started") )