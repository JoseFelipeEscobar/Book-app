const express = require('express');


//initialitation
const app=express()

//settings 
app.set('port',process.env.PORT || 3000)

//middlewares
// app

//Routes

//Statics files

//starting the server
app.listen(app.get('port'),()=>{
    console.log(`Server on port ${app.get('port')}`);
})