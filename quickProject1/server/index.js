const express = require("express")
const app = express();


const mongoose = require("mongoose")
mongoose.connect('mongodb://localhost:27017/rateLimiter').then(()=>{
    console.log("MongoDB connected!")
}).catch(err=>{
    console.log("Error while connecting the monodb", err)
})


const RateLimit = require('./models/RateLimit'); // this is a mongoose model
const rateLimiter = async (req, res, next) => {
    const userId = req.query.userId;

    // Check if userId is provided
    if (!userId) {
        return res.status(400).json({ message: 'userId is required' });
    }

    const timeWindow = 60 * 1000; // 1 min in milliseconds
    const maxRequest = 5;

    let user = await RateLimit.findOne({ userId });
    if (!user) { // If user doesn't exist, create a new record
        user = new RateLimit({
            userId,
            requestCount: 1,
            firstRequest: Date.now()
        });
    } else {
        const timeSinceFirstRequest = Date.now() - user.firstRequest;

        if (timeSinceFirstRequest < timeWindow) {
            if (user.requestCount >= maxRequest) {
                return res.status(429).json({
                    message: 'Too many requests. Try again later'
                });
            }
            user.requestCount++;
        } else {
            // Resetting the count after the time window has passed
            user.requestCount = 1;
            user.firstRequest = Date.now();
        }
    }
    await user.save();
    next();
}

app.get('/api/resource',rateLimiter, (req, res)=>{
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