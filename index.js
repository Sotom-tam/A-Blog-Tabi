import express from "express"
import bodyParser from "body-parser"
const app=express()
const port=3000;
app.use(express.urlencoded({extended:"true"}))
app.use(express.static("public"))

app.get("/",(req,res)=>{
    res.render("index.ejs")
})


app.get("/createNewEntry",(req,res)=>{
    res.render("newEntry.ejs")
})

app.listen(port,()=>{
    console.log("Listening at Port 3000")
})