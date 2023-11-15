const express = require('express');
const app = express();
const port = 3000;  

app.use(express.json()); 

const route = require('./routes/route');
app.use(route);


app.listen(port, ()=>{
    console.log(`Server is running in ${port}..`);
});
  
  module.exports = app