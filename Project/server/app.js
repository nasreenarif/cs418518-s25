// console.log("Hello World!");

import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import session from 'express-session';
import dashboard from './routes/dashboard.js';
import user from './routes/user.js';
const app=express();
const port=8080;

const myLogger=function (req,res,next) {
    console.log("Logged");
    next();
}


app.listen(port,()=>{
    console.log(`Server is listening at port ${port}`);
});

app.use(cors({
    origin:process.env.CROSS_ORIGIN, // *
    allowedHeaders:['Content-Type'], // optional
    credentials:true
}))

app.use(session({
    secret:'secret123',
    saveUninitialized:true,
    resave:false,
    cookie:{
        secure:false,
        httpOnly:true,
        maxAge:3600000,
        sameSite:'lax' //This allow cookies for different oririgin
    }
}))

app.use(myLogger);
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    // res.send("Hello World!");
    res.json({'message':'Get API Response!'})
})

app.use('/user',user);
app.use('/dashboard',dashboard);

app.get('/:id',(req,res)=>{
    // res.send("Hello World!");
    res.json({'message':'Get API Response!'+ req.params.id})
})

app.put('/user',(req,res)=>{
    // res.send("Hello World!");
    res.json({'message':'PUT API Response!'})
})


export default app;

