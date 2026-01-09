const express = require('express')
const router = express.Router()
const book = require('../models/book')
const { default: mongoose } = require('mongoose')


router.get('/all',async(req,res)=>{
    try {
        const data = await book.find()
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
        const {bookname,pages,author,price} = req.body
        const data = await book.create({bookname,pages,author,price})
        res.send(data);
    } catch (err) {
        console.log(err);
    }
})


router.delete('/remove/:id',async(req,res)=>{
    try {
        const data = await book.findByIdAndDelete()
        if(!data){
            return res.status(404).send("Not Found!!!")
        }
        res.send(data)
    } catch (err) {
        console.log(err);
    }
})

module.exports=router
