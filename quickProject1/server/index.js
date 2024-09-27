const express = require("express")
const app = express();

app.get('/', (req, res)=>{
    res.send("A Quick Project in REST API => API Rate Limiter")
})

const nodePort = 3001
app.listen(nodePort, (err)=>{
    if(!err){
        console.log("Node local server started at Port: 3001")
    }else{
        console.log("Some error while starting the Node local server!!!")
    }
})