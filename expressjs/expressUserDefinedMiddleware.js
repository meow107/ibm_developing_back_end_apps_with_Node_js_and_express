const express = require('express');
const app = new express();

// Middleware to check for a specific password in query parameters
app.use(function(req, res,next) {
    // Check if the password querry parater matches the expected
    if(req.query.password !== "pwd123") {
        // Send an error response if the password does not match
        return res.status(403).send("This user cannot login")
    }
    // Log the current time
    console.log('Time:',Date.now());
    // Call the next middleware function
    next();
    
});

// Define a route for the /home path
app.get("/home", (req,res) => {
    // Send a "Hello World!" message as a response
    return res.send("Hello world!");
});

app.get("/",(req,res)=>{
    res.send("Request received at "+req.timeReceived+" is a success!")
})

app.listen(3333, () => {
    console.log(`Listening at http://localhost:3333`)
})

