const express = require('express')
const mongoose = require('mongoose');
const router = require('./router')
const app = express()
app.use(express.json())
app.use(router)
app.listen(4000,()=>console.log("started server on 4000"))
// app.get('/login',(req,res)=>{
//     console.log('req,res',req,res)
//     res.send('<h1>helloworld!</h1>')
// });

// app.post('/login', (req, res) => {
//     // const { id, password } = req.body
//     console.log('attemptlogin with ', req.body, req.query)  
//     res.send('working')
// })
