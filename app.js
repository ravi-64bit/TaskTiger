const express=require("express");
const bodyParser = require("body-parser")

const app=express();

var tasks=[];

app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));


app.get("/",(req, res)=>{
    let date=new Date();
    let day=date.toLocaleDateString("en-IN",{weekday:'long',month:'long',day:'numeric'});
    
    res.render('index',{dayTod:day, tasks:tasks});
});

app.post("/",(req,res)=>{
    newTask = req.body.newTask;
    tasks.push(newTask);
    res.redirect("/");
});


//add rickroll route with a beautiful video

app.get("/rick",(req,res)=>{
    let name="raj";
    res.render('rick',{name:name});
});

app.listen(3000,()=>{
    console.log("server is running on port 3000 ");
});