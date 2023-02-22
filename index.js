const express = require("express")
app = express()

app.get("/",function(req,res){
    res.send("hi")
})

app.listen(3000,()=>{
    console.log("Server started on port 3000")
})