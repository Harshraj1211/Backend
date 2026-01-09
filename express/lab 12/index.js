const express = require('express')
const mongoose = require('mongoose')
const app = express()
const dotenv = require('dotenv') 

dotenv.config();

app.use(express.json())

console.log(process.env.server);


mongoose.connect(process.env.server).then(()=>{
    console.log("DB Connected")
}).catch((err)=>{
    console.log({err})
})

const bookRout = require('./routers/router_book')
const librarianRout = require('./routers/router_librarian')
const userRout = require('./routers/router_user')



app.use('/book',bookRout)
app.use('/librarian',librarianRout)
app.use('/user',userRout)


app.listen(3000,()=>{
    console.log("Server is live on port @3000");
})
