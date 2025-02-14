const express=require("express");
const bodyParser = require("body-parser")

const app=express();

var tasks=[];
var worktasks=[];

app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));


// get and post routes of root route

app.get("/",(req, res)=>{
    let date=new Date();
    let day=date.toLocaleDateString("en-IN",{weekday:'long',month:'long',day:'numeric'});
    
    res.render('index',{dayTod:day, tasks:tasks});
});

app.post("/",(req,res)=>{
    if(req.body.formButton === 'work tasks'){
        worktasks.push(req.body.newTask);
        res.redirect("/work");
    }
    else{
        tasks.push(req.body.newTask);
        res.redirect("/");
    }
});

//work route
app.get("/work",(req,res)=>{
    res.render('index',{dayTod:"work tasks",tasks:worktasks})
});


//add rickroll route with a beautiful video

app.get("/rick",(req,res)=>{
    let name="raj";
    res.render('rick',{name:name});
});

// add error route
app.use((req, res, next) => {
    res.status(404).render('404');
});

app.listen(process.env.PORT || 3000,()=>{
    console.log("server is running on port 3000 ");
});