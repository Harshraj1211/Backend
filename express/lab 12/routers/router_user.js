const express = require('express')
const router = express.Router()
const  user = require('../models/user')
const { default: mongoose } = require('mongoose')

router.get('/all',async(req,res)=>{
    try {
        const data = await user.find()
        res.send(data)
    } catch (err) {
        console.log(err);
    }
})

router.get('/:id',async(res,req)=>{
    try {
        const data = await user.findById(req.param.id)
        res.send(data)
    } catch (err) {
        console.log(err);
    }
})

router.post('/add',async(req,res)=>{
    try {
        const {username,email,password,userId} = req.body
        const data = await librarian.create({username,email,password,userId})
        res.send(data);
    } catch (err) {
        console.log(err);
    }
})


router.delete('/remove/:id',async(req,res)=>{
    try {
        const data = await user.findByIdAndDelete()
        if(!data){
            return res.status(404).send("Not Found!!!")
        }
        res.send(data)
    } catch (err) {
        console.log(err);
    }
})

module.exports=router
