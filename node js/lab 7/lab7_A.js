// 1. Create a hello world webapp using “http” core module in NodeJS. (A)

const { error } = require('console');
const http = require('http')

const server = http.createServer((req,res)=>{    
    res.statusCode(200)
    res.end("it's home pageee.......");
})

server.listen(3002,(error)=>{
    if (error) {
        console.log(error);
    }
    else{
        console.log("server is live");
    }
})

