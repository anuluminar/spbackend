
const{config}=require('dotenv');
//import dotenv

require('dotenv').config()

//import express
const express =require('express')


require('./DB/connections')
//import cors
const router=require('./Routes/router')
const cors =require('cors')

//create server

const sPServer =express()

//use/inject corse to spserver

sPServer.use(cors())

//use middleware to convert json to js object
sPServer.use(express.json())


sPServer.use(router)
//define PORT

const PORT =5000;

//run the server

sPServer.listen(PORT,()=>{
    console.log("server is UP and RUNNING in port 5000");
})

sPServer.get('/',(req,res)=>{
    res.send("student portal server running successfully")
})