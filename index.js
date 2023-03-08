const express = require('express');
const app = express();

let pagals =  [ {id: 1, name:"Bhaloo"}];

// show welcome banner
app.get('/', (req,res)=> {
    res.send("Welcome to pagalon ka adda!\
              visit /help to know more");
})

// return general help
app.get('/help', (req,res)=> {
    const help = "Use one of following end point \
                  help - for this screen \
                  api - for list of available apis";
    res.send(help);
})

// return help for api endpoint
app.get('/api', (req,res)=> {
    const help = "Use one of following end point \
                  /api/pagal - for all adda member";
    res.send(help);
})

// return information about only one pagal
app.get('/api/pagal/:id', (req,res)=> {
    const idToLook = parseInt(req.params.id);
    const pagal = pagals.find(p => p.id == idToLook);
    if (pagal) {
        return res.send(pagal)
    } else {
        return res.status(404).send('No pagal with this id found')
    }
    res.send(help);
})

// return information about all pagals
app.get('/api/pagal/all', (req,res)=> {    
    res.send(pagals);
})


// Read port from command
const port = process.env.PAGAL_PORT||2107

// Start server 
app.listen(port, () => console.log(`pagalon ka adda open @ http://localhost:${port}/!`))

