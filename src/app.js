const express = require("express");
const app = express();
require("./db/connection");
const User = require("./models/message")
const path = require('path');
const port = process.env.PORT || 3000 ;
const hbs = require("hbs");

//path directory
const staticPath = path.join(__dirname,"../public");
const viewsPath = path.join(__dirname,"../templates/views");
const partialPath = path.join(__dirname,"../templates/partials");


//middleware
app.use("/css",express.static(path.join(__dirname,"../node_modules/bootstrap/dist/css")));
app.use("/js",express.static(path.join(__dirname,"../node_modules/bootstrap/dist/js")));
app.use("/jq",express.static(path.join(__dirname,"../node_modules/jquery/dist")));

app.use(express.urlencoded({extended:false}))
app.use(express.static(staticPath));
app.set("view engine","hbs");
app.set("views",viewsPath);
hbs.registerPartials(partialPath);


//ROUTES
app.get('/',(req,res)=>{
    res.render("index")
})

app.post('/contact',async(req,res)=>{
    try{
        // res.send(req.body)
        const userData = new User(req.body);
        await userData.save()
        res.status(201).render("index");
    } catch(error){
        res.status(500).send(error);
    }
})

app.get('/demo',(req,res)=>{
    res.render("demo")
})
app.get('/*' , (req, res) => {
    res.render('error')
})


app.listen(port,()=>{
    console.log(`server is running at port ${port}`)
})