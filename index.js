const express = require('express');
const app = express();

let pagals =  [ {id: 1, name:"Bhaloo"}];

app.get('/', (req,res)=> {
    res.send("Welcome to pagalon ka adda!\
              visit /help to know more");
})
app.get('/help', (req,res)=> {
    const help = "Use one of following end point \
                  help - for this screen \
                  api - for list of available apis";
    res.send(help);
})

app.get('/api', (req,res)=> {
    const help = "Use one of following end point \
                  /api/pagal - for all adda member";
    res.send(help);
})


app.get('/api/pagal/all', (req,res)=> {    
    res.send(pagals);
})


// Read port from command
const port = process.env.PAGAL_PORT||2107

// Start server 
app.listen(port, () => console.log(`pagalon ka adda open @ http://localhost:${port}/!`))

