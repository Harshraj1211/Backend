const express = require("express")
const appExpress = express();

appExpress.get('/',(req,res)=>{
    res.send(req.query);
})

appExpress.post("/register",(req,res)=>{
    const {name,email,age} = req.body
    res.send(`Name : ${name} , Email : ${email} , Age : ${age}`);
})

appExpress.get('/user/:name',(req,res)=>{
    res.send(req.params.name);
})

appExpress.listen(3001,()=>{
    console.log("Server is live on 3001 port...");
})

