const http =require("http");
const fs = require("fs")
const url = require("url")

const myServer = http.createServer((req ,res) =>{
    const log = `${Date.now()}: ${req.url}New Req Recieved\n`;
    const myUrl = url.parse(req.url ,true)
    console.log(myUrl)
    fs.appendFile("log.txt", log ,(err , data) =>{
        switch (myUrl.pathname){
            case "/":
                res.end("HomePage");
                break;

            case "/about":
                const username = myUrl.query.pathname
                res.end("i am vedant upadhye");
                break;
            default:
                res.end("404 not found")
        }
    })
   
});

myServer.listen(8000 , ()=> console.log("server started"))