// 2. Create a webapp with 5 pages like about, contact etc.. using “http” core module in NodeJS. 
// (B)  

const http = require('http')

const server = http.createServer((req,res)=>{    
    
    if (req.url === '/') {
        res.end("it's home pageee.......");
        return;
    }
    else if(req.url === '/about'){
        res.end("it's about page.......");
    }
    else if(req.url === '/contact'){
        res.end("Contact us.......");
    }
    else if(req.url === '/greeting'){
        res.end("Jay mataji");
    }
    else if(req.url === '/name'){
        res.end("I'm Harshrajsinh Gohil");
    }
})

server.listen(4444,(error)=>{
    if (error) {
        console.log(error);
    }
    else{
        console.log("server is live");
    }
})