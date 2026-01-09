const express = require('express')
const router = express.Router()
const librarian = require('../models/librarian')
const { default: mongoose } = require('mongoose')


router.get('/all',async(req,res)=>{
    try {
        const data = await librarian.find()
        res.send(data)
    } catch (err) {
        console.log(err);
    }
})

router.get('/:id',async(res,req)=>{
    try {
        const data = await book.findById(req.param.id)
        res.send(data)
    } catch (err) {
        console.log(err);
    }
})

router.post('/add',async(req,res)=>{
    try {
        const {librarianname,email,password,librarianId} = req.body
        const data = await librarian.create({librarianname,email,password,librarianId})
        res.send(data);
    } catch (err) {
        console.log(err);
    }
})


router.delete('/remove/:id',async(req,res)=>{
    try {
        const data = await librarian.findByIdAndDelete()
        if(!data){
            return res.status(404).send("Not Found!!!")
        }
        res.send(data)
    } catch (err) {
        console.log(err);
    }
})

module.exports=router
