const express = require('express')
const { setUpRedis } = require('./redis-utils')
const router = require('./router')

setUpRedis()
const app = express()
app.use(express.json())
app.use(router)

app.listen(4000,()=>console.log("started server on 4000"))
