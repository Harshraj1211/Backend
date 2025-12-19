// Lab 08: Create express server with basic routing. 
// 1. Create a hello world webapp using ExpressJS. (A) 
// 2. Create a webapp with 5 pages like about, contact etc.. using ExpressJS. (B) 
// 3. Create a webapp in NodeJS which reads ƒles like about.txt, contact.txt and display it using 
// express (C ) 
const express = require("express");

const appExpress = express();

const fs = require('fs');


appExpress.get('/',(req,res)=>{
    res.send("<h1>Hello world</h1>");    
})

appExpress.get('/name',(req,res)=>{
    res.send("<h1>I am Harshrajsinh gohil</h1>")
})

appExpress.get('/greeting',(req,res)=>{
    fs.readFile('./greeting.txt',(err,data)=>{
        if (err) {
            res.end(err);
        }
        else{
            res.end(data);   
        }
    })
})

appExpress.get('/about',(req,res)=>{
    res.send("<h1>It is <u>about</u> page...</h1>")
})

appExpress.get('/contact',(req,res)=>{
    res.send("<h1>It is <u>contact</u> page...</h1>")
})

appExpress.listen(3000,(err)=>{
    if (err) {
        console.log(err);
    }
    else{
        console.log("server is live on 3000 port.......");
        
    }
})
