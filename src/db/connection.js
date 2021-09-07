const mongoose = require('mongoose');
require('dotenv').config()
const URL = process.env.CLOUD_URL;
mongoose.connect(URL, {
 useNewUrlParser: true,
 useCreateIndex: true,
 useUnifiedTopology:true
}).then(()=>{
    console.log("db connected")
}).catch((error)=>{
    console.log(error)
})