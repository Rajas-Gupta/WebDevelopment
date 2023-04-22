const path = require('path');
const express = require('express');
const app = express();
const PORT = 3333;

app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended: true}));

let tasks = [];

app.post('/addtask',(req,res)=>{
    tasks.push(req.body.task);
    // res.send("Recieved add task request");
    res.redirect('/gettask');
})

app.get('/gettask',(req,res)=>{
    res.send(tasks);
})

app.listen(PORT,()=>{
    console.log(`http://localhost:`+PORT);
});