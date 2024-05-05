require("dotenv").config()
const http=require('http')
const express=require('express')
const app=express()

const PORT=process.env.PORT || 5000
const myserver=http.createServer(app)

app.get('/',(req,res)=>{
    res.send("<h1 align='center'>Server is Working</h1>")
})

myserver.listen(PORT,(err)=>{
    console.log(`Server is started ${PORT}`)
})